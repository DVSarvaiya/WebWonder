'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Video360Viewer from '@/components/Video360Viewer'; // Import from separate file (adjust path as needed)


// BubblesLayer Component (fixes hydration error by generating randoms client-side)
function BubblesLayer() {
  const [bubbles, setBubbles] = useState([]);


  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setBubbles(generated);
  }, []);


  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute bg-blue-300/20 rounded-full animate-bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}


// Dive stops data
const diveStops = [
  {
    id: 1,
    title: 'Kelp Forest Wonderland',
    description: 'Glide through emerald towers, where every leaf hides a new discovery.',
    videoSrc: '/360video.mp4', // Ensure this is in /public folder
    img: '/earth.png', // Add image to public folder
  },
  {
    id: 2,
    title: 'The Wreck Awakens',
    description: 'Unravel the secrets of the deep as your lights reveal an ancient ship.',
    videoSrc: 'https://example.com/360-wreck.mp4', // Replace with actual URL
    img: '/wreck-bg.jpg', // Add image to public folder
  },
  {
    id: 3,
    title: 'Dolphin Playground',
    description: 'Join the dance of dolphins in crystal-clear waters, a symphony of marine joy.',
    videoSrc: '/360video.mp4', // Replace with actual URL
    img: '/dolphins-bg.jpg', // Add image to public folder
  },
  {
    id: 4,
    title: 'Coral Reef Metropolis',
    description: 'Dive into bustling underwater cities alive with color and hidden wonders.',
    videoSrc: 'https://example.com/360-coral-reef.mp4', // Replace with actual URL
    img: '/coral-bg.jpg', // Add image to public folder
  },
  // Add more dive stops as needed
];


// Main DivingPage Component
export default function DivingPage() {
  const [selectedDive, setSelectedDive] = useState(null);
  const viewerRef = useRef(null); // Ref to access Video360Viewer methods
  const isClosing = useRef(false); // NEW: Prevent race conditions during close

  // Handle close with immediate pause
  const handleClose = () => {
    if (isClosing.current) return; // Prevent multiple calls
    isClosing.current = true;
    if (viewerRef.current) {
      viewerRef.current.pauseVideo(); // Pause immediately
    }
    setSelectedDive(null);
    // Reset flag after animation (match exit duration)
    setTimeout(() => { isClosing.current = false; }, 300);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#091e3a] to-[#1e3765]">
      <BubblesLayer />
      <section className="relative z-10 max-w-5xl mx-auto pt-14 pb-32">
        <header className="mb-16 text-center">
          <motion.h1
            layout
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-700 drop-shadow-lg"
          >
            Dive Into OceanXplore
          </motion.h1>
          <motion.p
            layout
            className="text-lg md:text-2xl text-blue-200/80 mt-4 mx-auto max-w-2xl"
          >
            Explore real underwater worlds in interactive, cinematic 360° video.<br />
            Navigate ocean mysteries, learn marine science, get inspired!
          </motion.p>
        </header>
        {/* Timeline */}
        <div className="flex flex-col gap-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/30 to-blue-700/10 rounded-full -translate-x-1/2 z-0" />
          {diveStops.map((stop, idx) => (
            <motion.article
              key={stop.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative z-10 max-w-2xl mx-auto rounded-3xl shadow-2xl bg-white/5 backdrop-blur-lg border border-[#60aaff33] overflow-hidden ring-2 ring-blue-700/10 ${idx % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
              style={{
                boxShadow: '0 12px 38px 0 #2261c340',
              }}
            >
              <div className="absolute right-4 bottom-4 z-0 opacity-10">
                <img src={stop.img} alt="" className="w-36 h-24 object-cover rounded-xl" />
              </div>
              <div className="relative z-10 p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-50 drop-shadow">{stop.title}</h2>
                <p className="mt-3 text-blue-100/80 text-lg">{stop.description}</p>
                <button
                  className="mt-8 px-6 py-3 font-semibold text-lg bg-gradient-to-tr from-sky-500 to-blue-700 rounded-full shadow-md text-white hover:scale-105 transition"
                  onClick={() => setSelectedDive(stop)}
                >
                  Explore in 360°
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>


      {/* 360° Video Modal */}
      <AnimatePresence>
        {selectedDive && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // NEW: Short duration to smooth any perceived flash
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-8 text-5xl text-white/70 hover:text-white"
            >
              &times;
            </button>
            <div className="w-full max-w-6xl h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl relative">
              <Video360Viewer 
                ref={viewerRef}
                videoSrc={selectedDive.videoSrc} 
                title={selectedDive.title}
                width="100%"
                height="100%"
                initialMuted={true}
                showInstructions={true}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
