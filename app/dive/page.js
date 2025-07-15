'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Home() {
  const mountRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const cameraState = useRef({
    phi: Math.PI / 2,
    theta: 0,
    velocityPhi: 0,
    velocityTheta: 0,
    keyState: { ArrowLeft: false, ArrowRight: false, ArrowUp: false, ArrowDown: false },
  });

  useEffect(() => {
    // Video setup
    const video = document.createElement('video');
    video.src = '/new360.mp4';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');
    video.load();

    // Store video reference for mute/unmute functionality
    videoRef.current = video;

    const tryPlay = () => {
      video.play().catch(() => {});
      window.removeEventListener('click', tryPlay);
    };
    window.addEventListener('click', tryPlay);

    // Three.js setup with optimized settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false,
      precision: 'highp'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Optimized sphere geometry
    const geometry = new THREE.SphereGeometry(1000, 64, 32);
    geometry.scale(-1, 1, 1);

    // Video texture with better filtering
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    texture.generateMipmaps = false;

    const material = new THREE.MeshBasicMaterial({ 
      map: texture,
      side: THREE.FrontSide
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize handler
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    // Smooth arrow key controls
    function handleKeyDown(e) {
      if (e.key in cameraState.current.keyState) {
        cameraState.current.keyState[e.key] = true;
      }
    }
    function handleKeyUp(e) {
      if (e.key in cameraState.current.keyState) {
        cameraState.current.keyState[e.key] = false;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Animation loop with separate speeds for horizontal and vertical movement
    function animate() {
      requestAnimationFrame(animate);
      const state = cameraState.current;
      
      // Separate speed controls
      const horizontalSpeed = 0.009; // Left/Right speed (unchanged)
      const verticalSpeed = 0.018;   // Up/Down speed (2x faster)
      const damping = 0.84;

      // Horizontal movement (Left/Right) - using original speed
      if (state.keyState.ArrowLeft) state.velocityTheta -= horizontalSpeed;
      if (state.keyState.ArrowRight) state.velocityTheta += horizontalSpeed;
      
      // Vertical movement (Up/Down) - using faster speed
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
      renderer.render(scene, camera);
    }
    animate();

    video.addEventListener('canplay', () => {
      video.play().catch(() => {});
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('click', tryPlay);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, []);

  // Handle mute/unmute functionality
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Subtle vignette for immersion */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-radial from-transparent via-transparent to-black/20" />
      
      {/* Main title */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-2xl">
          Welcome to My 360° Experience
        </h1>
      </div>

      {/* Mute/Unmute Button */}
      <div className="absolute top-6 right-6 z-30">
        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-200 border border-white/20 hover:border-white/40"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            // Muted icon (speaker with X)
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" 
              />
            </svg>
          ) : (
            // Unmuted icon (speaker with sound waves)
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
              />
            </svg>
          )}
        </button>
      </div>

      {/* Optional: Instructions for users */}
      <div className="absolute bottom-12 left-6 z-30">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-white text-sm">
            Use arrow keys to navigate • Click unmute for audio
          </p>
        </div>
      </div>
    </div>
  );
}

