'use client';
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Settings } from 'lucide-react';
import './section0.css';

export default function HeroSection() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState([]);
  const [currentLayer, setCurrentLayer] = useState(0);
  const animationRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const oceanLayers = [
    {
      name: 'Sunlight Zone',
      depth: '0-200m',
      creatures: ['🐬', '🐠', '🐢'],
    },
    {
      name: 'Twilight Zone',
      depth: '200-1000m',
      creatures: ['🐙', '🦑', '🐟'],
    },
    {
      name: 'Midnight Zone',
      depth: '1000-4000m',
      creatures: ['👁️', '🐡', '🦀'],
    },
    {
      name: 'Abyssal Zone',
      depth: '4000-6000m',
      creatures: ['🦑', '🐙', '🐟'],
    },
    {
      name: 'Hadopelagic Zone',
      depth: '6000-11000m',
      creatures: ['🐙', '🦑', '🐟'],
    },
  ];

  useEffect(() => {
    // Generate bubbles only once on mount
    const generatedBubbles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }));
    setBubbles(generatedBubbles);
  }, []);

  useEffect(() => {
    // Cursor tracking
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Rotation animation loop
    const animate = () => {
      setRotation((prev) => (prev + 0.5) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const handleLayerChange = (index) => {
    setCurrentLayer(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-300 via-blue-500 to-blue-700">
      {/* Animated Waves (custom CSS expected) */}
      <div className="absolute inset-0">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Floating Bubbles */}
      <div className="bubble-container absolute inset-0 z-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: bubble.left,
              animationDelay: bubble.animationDelay,
              animationDuration: bubble.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Optional: Cursor-following light */}
      <div
        className="pointer-events-none absolute w-64 h-64 rounded-full bg-white opacity-10 blur-3xl z-0 transition-transform duration-100"
        style={{
          transform: `translate(${cursor.x - 128}px, ${cursor.y - 128}px)`,
        }}
      />

      {/* Light Rays */}
      <div className="absolute inset-0 opacity-20">
        <div className="light-ray ray1"></div>
        <div className="light-ray ray2"></div>
        <div className="light-ray ray3"></div>
      </div>

      {/* Main Title */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Abyssal
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Odyssey
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Begin your descent into Earth's final frontier
        </p>

        {/* Feature stats */}
        <div className="flex justify-center space-x-4 mb-12">
          <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-sm font-medium">95% unexplored</span>
          </div>
          <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-sm font-medium">2 million species</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Dive deeper</span>
          <ChevronDown size={24} />
        </div>
      </div>

      
    </section>
  );
}
