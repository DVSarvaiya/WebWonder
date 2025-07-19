'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Video360Viewer from '@/components/Video360Viewer';

// Dive stops data
const diveStops = [
  {
    id: 1,
    title: 'Kelp Forest Wonderland',
    description: 'Glide through emerald towers, where every leaf hides a new discovery.',
    videoSrc: '/360video.mp4',
    img: '/earth.png',
    duration: '25 min',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    accent: '#10b981',
  },
  {
    id: 2,
    title: 'The Wreck Awakens',
    description: 'Unravel the secrets of the deep as your lights reveal an ancient ship.',
    videoSrc: 'https://example.com/360-wreck.mp4',
    img: '/wreck-bg.jpg',
    duration: '35 min',
    gradient: 'from-violet-400 via-purple-500 to-indigo-600',
    accent: '#8b5cf6',
  },
  {
    id: 3,
    title: 'Dolphin Playground',
    description: 'Join the dance of dolphins in crystal-clear waters, a symphony of marine joy.',
    videoSrc: '/360video.mp4',
    img: '/dolphins-bg.jpg',
    duration: '30 min',
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    accent: '#3b82f6',
  },
  {
    id: 4,
    title: 'Coral Reef Metropolis',
    description: 'Dive into bustling underwater cities alive with color and hidden wonders.',
    videoSrc: 'https://example.com/360-coral-reef.mp4',
    img: '/coral-bg.jpg',
    duration: '40 min',
    gradient: 'from-rose-400 via-pink-500 to-purple-600',
    accent: '#ec4899',
  },
];

export default function DivingPage() {
  const [selectedDive, setSelectedDive] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const viewerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const scaleProgress = useTransform(scrollY, [0, 100], [1, 1.05]);

  const handleClose = () => {
    viewerRef.current?.pauseVideo();
    setSelectedDive(null);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Ocean Background */}
      <motion.div 
        className="fixed inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/50 to-purple-950/30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-2000" />
        
        {/* Animated mesh gradient */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-4"
          style={{ scale: scaleProgress }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-9xl font-black mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-blue-500 to-purple-600 leading-none">
                  OCEAN
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-pink-500 to-orange-500 leading-none">
                  XPLORE
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                Dive into breathtaking underwater worlds through immersive 360° experiences
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1"
              >
                <div className="w-1 h-3 bg-cyan-500 rounded-full mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Dive Experiences */}
        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-xl text-gray-400">
                Each dive is a unique journey into the unknown
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid gap-8 md:gap-12">
              {diveStops.map((stop, idx) => (
                <motion.article
                  key={stop.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  onMouseEnter={() => setHoveredCard(stop.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative group ${idx % 2 === 0 ? 'md:pr-32' : 'md:pl-32'}`}
                >
                  <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background with parallax */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: hoveredCard === stop.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stop.gradient} opacity-20`} />
                      <img 
                        src={stop.img} 
                        alt=""
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                      />
                    </motion.div>

                    {/* Glass card */}
                    <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 p-10 md:p-16">
                      <div className="max-w-2xl">
                        {/* Number */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="inline-block mb-6"
                        >
                          <span className={`text-8xl font-black bg-gradient-to-r ${stop.gradient} bg-clip-text text-transparent opacity-20`}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </motion.div>

                        {/* Content */}
                        <h3 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${stop.gradient} bg-clip-text text-transparent`}>
                          {stop.title}
                        </h3>
                        
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                          {stop.description}
                        </p>

                        <div className="flex items-center gap-6 mb-8">
                          <span className="flex items-center gap-2 text-gray-500">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {stop.duration}
                          </span>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedDive(stop)}
                          className="relative group/btn overflow-hidden px-8 py-4 rounded-full"
                          style={{ background: stop.accent }}
                          >
                            <span className="relative z-10 flex items-center gap-3 font-semibold text-white">
                              Dive In
                              <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                            <motion.div
                              className="absolute inset-0 bg-white/20"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.button>
                        </div>
  
                        {/* Side accent */}
                        <motion.div
                          className={`absolute top-1/2 ${idx % 2 === 0 ? 'right-0' : 'left-0'} w-1 bg-gradient-to-b ${stop.gradient}`}
                          initial={{ height: 0 }}
                          whileInView={{ height: '50%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          style={{ transform: 'translateY(-50%)' }}
                        />
                      </div>
                    </motion.div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </div>
  
        {/* 360° Video Modal */}
        <AnimatePresence>
          {selectedDive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ backdropFilter: 'blur(0px)' }}
                animate={{ backdropFilter: 'blur(20px)' }}
                exit={{ backdropFilter: 'blur(0px)' }}
                className="absolute inset-0 bg-black/80"
                onClick={handleClose}
              />
  
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-7xl h-[85vh]"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
  
                {/* Video Container */}
                <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden ring-1 ring-white/10">
                  {/* Header */}
                  <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent z-10">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${selectedDive.gradient} bg-clip-text text-transparent`}>
                      {selectedDive.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{selectedDive.duration} • 360° Experience</p>
                  </div>
  
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
            </motion.div>
          )}
        </AnimatePresence>
  
        {/* Minimal CSS for essential animations */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          
          .animate-pulse {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .delay-1000 {
            animation-delay: 1s;
          }
          
          .delay-2000 {
            animation-delay: 2s;
          }
  
          /* Smooth scroll */
          html {
            scroll-behavior: smooth;
          }
  
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
  
          ::-webkit-scrollbar-track {
            background: #000;
          }
  
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
            border-radius: 4px;
          }
        `}</style>
      </div>
    );
  }