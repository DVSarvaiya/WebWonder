'use client';
import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

// Forward ref to allow parent to call methods like pauseVideo
const Video360Viewer = forwardRef(function Video360Viewer(props, ref) {
  const {
    videoSrc,
    width = '100vw',
    height = '100vh',
    initialMuted = true,
    title = '',
    showInstructions = true,
  } = props;

  const mountRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [currentTime, setCurrentTime] = useState(0); // For slider
  const [duration, setDuration] = useState(0); // For slider
  const [isPlaying, setIsPlaying] = useState(false); // For play/pause

  // Store if the scene mesh is ready
  const meshReady = useRef(false);
  const cameraState = useRef({
    phi: Math.PI / 2,
    theta: 0,
    velocityPhi: 0,
    velocityTheta: 0,
    keyState: { ArrowLeft: false, ArrowRight: false, ArrowUp: false, ArrowDown: false },
  });

  // Expose pause method to parent via ref (pauses and resets to 0)
  useImperativeHandle(ref, () => ({
    pauseVideo: () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false); // Sync state
      }
    },
  }));

  useEffect(() => {
    if (!mountRef.current) return;
    // Create video and load it
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = initialMuted;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');
    video.preload = 'auto';
    video.load();
    videoRef.current = video;

    // Basic Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 5000);
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, precision: 'highp' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Enforce clear color and initial visibility
    renderer.setClearColor(0x000000, 1);
    mountRef.current.appendChild(renderer.domElement);
    // Explicitly style the canvas to ensure it's visible and fills the container
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '0';

    let geometry = null, material = null, texture = null, mesh = null;

    // --- Handle Sizing ---
    const updateSize = () => {
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      if (w === 0 || h === 0) return; // Prevent zero-size errors
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(mountRef.current);

    // --- Build mesh only when video has enough data ---
    const onLoadedData = () => {
      if (meshReady.current) return;
      texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;
      texture.generateMipmaps = false;

      geometry = new THREE.SphereGeometry(1000, 60, 40);
      geometry.scale(-1, 1, 1); // Invert to be inside

      material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshReady.current = true; // Flag ready
      // Force an initial render to ensure visibility
      renderer.render(scene, camera);
    };
    video.addEventListener('loadeddata', onLoadedData);

    // --- Slider event listeners ---
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // --- Play/Pause event listeners ---
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // --- Keyboard controls ---
    function handleKeyDown(e) {
      if (e.key in cameraState.current.keyState) cameraState.current.keyState[e.key] = true;
    }
    function handleKeyUp(e) {
      if (e.key in cameraState.current.keyState) cameraState.current.keyState[e.key] = false;
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // --- Animation loop ---
    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!meshReady.current) return; // Wait until mesh is built
      const state = cameraState.current;
      // Camera controls
      const horizontalSpeed = 0.009;
      const verticalSpeed = 0.018;
      const damping = 0.84;

      if (state.keyState.ArrowLeft) state.velocityTheta -= horizontalSpeed;
      if (state.keyState.ArrowRight) state.velocityTheta += horizontalSpeed;
      if (state.keyState.ArrowUp) state.velocityPhi = Math.max(state.velocityPhi - verticalSpeed, -verticalSpeed * 2);
      if (state.keyState.ArrowDown) state.velocityPhi = Math.min(state.velocityPhi + verticalSpeed, verticalSpeed * 2);

      state.velocityTheta *= damping;
      state.velocityPhi *= damping;
      state.theta += state.velocityTheta;
      state.phi += state.velocityPhi;
      state.phi = Math.max(0.4, Math.min(Math.PI - 0.4, state.phi));

      const x = Math.sin(state.phi) * Math.cos(state.theta);
      const y = Math.cos(state.phi);
      const z = Math.sin(state.phi) * Math.sin(state.theta);

      camera.lookAt(x, y, z);

      if (texture && video.readyState >= video.HAVE_CURRENT_DATA) {
        texture.needsUpdate = true;
        renderer.render(scene, camera);
      }
    }
    // Start animation only after loadedmetadata
    video.addEventListener('loadedmetadata', () => {
      if (!animationFrameId) animate();
    });

    // --- Video playback logic (autoplay on user click) ---
    let hasUserInteracted = false;
    const tryPlay = () => {
      if (!hasUserInteracted) {
        hasUserInteracted = true;
        video.play().catch(() => {});
      }
      window.removeEventListener('click', tryPlay);
    };
    window.addEventListener('click', tryPlay);

    video.addEventListener('canplaythrough', () => {
      if (hasUserInteracted) {
        video.play().catch(() => {});
      }
    });

    // --- Cleanup (Strengthened: Fully stop and remove video) ---
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.src = ''; // Remove source to stop any buffering/playback
        videoRef.current.load(); // Force reload to clear state
        videoRef.current.remove(); // Remove from DOM
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        videoRef.current.removeEventListener('play', handlePlay);
        videoRef.current.removeEventListener('pause', handlePause);
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('click', tryPlay);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (texture) texture.dispose();
      if (mesh) scene.remove(mesh);
    };
    // eslint-disable-next-line
  }, [videoSrc, initialMuted]);

  // Mute/unmute handling
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Play/pause toggle handler
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {}); // Handle potential autoplay issues
      }
      setIsPlaying(!isPlaying); // Optimistically update state (synced via events)
    }
  };

  // Slider change handler
  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="relative w-full h-full" ref={mountRef} style={{ width, height }}>
      {/* Overlay elements (title, controls) */}
      {/* <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-radial from-transparent via-transparent to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-2xl">
          {title}
        </h1>
      </div> */}
      {showInstructions && (
        <div className="absolute top-6 right-6 z-30 pointer-events-none">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <p className="text-white text-sm">
              Use arrow keys to navigate
            </p>
          </div>
        </div>
      )}
      {/* Bottom controls container (Updated: Holds buttons and slider) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 z-30 flex items-center space-x-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="flex items-center justify-center w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-200 border border-white/20 hover:border-white/40"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          tabIndex={0}
        >
          {isPlaying ? (
            // Pause icon
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            // Play icon
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-200 border border-white/20 hover:border-white/40"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          tabIndex={0}
        >
          {isMuted ? (
            // Muted (crossed) icon
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            // Unmuted (wave) icon
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
        {/* Slider (Flexes to fill remaining space) */}
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSliderChange}
          className="flex-grow h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, white ${ (currentTime / duration) * 100 }%, transparent ${ (currentTime / duration) * 100 }%)`,
          }}
          aria-label="Video seek slider"
        />
      </div>
    </div>
  );
});

export default Video360Viewer;
