'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function DivePage() {
  const mountRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
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

    video.addEventListener('loadeddata', () => {
      setIsLoading(false);
    });

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
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create sphere geometry for 360 video
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert to view from inside

    // Create video texture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    const material = new THREE.MeshBasicMaterial({ map: videoTexture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Controls
    const handleKeyDown = (event) => {
      cameraState.current.keyState[event.code] = true;
    };

    const handleKeyUp = (event) => {
      cameraState.current.keyState[event.code] = false;
    };

    const handleMouseMove = (event) => {
      if (event.buttons === 1) {
        const deltaX = event.movementX * 0.002;
        const deltaY = event.movementY * 0.002;
        cameraState.current.theta -= deltaX;
        cameraState.current.phi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraState.current.phi + deltaY));
      }
    };

    const handleWheel = (event) => {
      camera.fov = Math.max(10, Math.min(100, camera.fov + event.deltaY * 0.05));
      camera.updateProjectionMatrix();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Keyboard controls
      if (cameraState.current.keyState.ArrowLeft) cameraState.current.velocityTheta += 0.002;
      if (cameraState.current.keyState.ArrowRight) cameraState.current.velocityTheta -= 0.002;
      if (cameraState.current.keyState.ArrowUp) cameraState.current.velocityPhi -= 0.002;
      if (cameraState.current.keyState.ArrowDown) cameraState.current.velocityPhi += 0.002;

      // Apply velocities
      cameraState.current.theta += cameraState.current.velocityTheta;
      cameraState.current.phi += cameraState.current.velocityPhi;

      // Damping
      cameraState.current.velocityTheta *= 0.95;
      cameraState.current.velocityPhi *= 0.95;

      // Constraints
      cameraState.current.phi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraState.current.phi));

      // Update camera position
      const x = Math.sin(cameraState.current.phi) * Math.cos(cameraState.current.theta);
      const y = Math.cos(cameraState.current.phi);
      const z = Math.sin(cameraState.current.phi) * Math.sin(cameraState.current.theta);
      camera.lookAt(x, y, z);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', tryPlay);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      videoTexture.dispose();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <Layout showBubbles={false} showFooter={false}>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Loading Screen */}
        {isLoading && (
          <motion.div 
            className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566]"
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-white mb-2">Preparing Your Dive</h2>
              <p className="text-cyan-300">Loading immersive 360° ocean experience...</p>
            </div>
          </motion.div>
        )}

        {/* Header */}
        <motion.div 
          className="absolute top-6 left-6 z-40 bg-black/20 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-white mb-1">Deep Ocean Dive</h1>
          <p className="text-cyan-300 text-sm">360° Immersive Experience</p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="absolute bottom-6 left-6 z-40 bg-black/20 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <button
              onClick={toggleMute}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              {isMuted ? '🔇 Unmute' : '🔊 Mute'}
            </button>
          </div>
          <div className="text-white text-sm space-y-1">
            <p>🖱️ Click & drag to look around</p>
            <p>⌨️ Arrow keys to navigate</p>
            <p>🖱️ Scroll to zoom</p>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div 
          className="absolute bottom-6 right-6 z-40 bg-black/20 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center">
            <p className="text-cyan-300 text-sm mb-2">Explore More</p>
            <div className="flex gap-2">
              <button
                onClick={() => window.location.href = '/creatures'}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
              >
                Creatures
              </button>
              <button
                onClick={() => window.location.href = '/quiz'}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Quiz
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3D Canvas */}
        <div ref={mountRef} className="absolute inset-0 z-10" />
      </div>
    </Layout>
  );
}

