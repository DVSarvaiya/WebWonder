'use client';

import React, { useEffect, useState } from 'react';
import {
  Waves,
  Sun,
  Moon,
  Eye,
  Anchor,
  MapPin,
  ChevronDown,
  Gauge
} from 'lucide-react';

export default function HeroSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    function generateParticles(count) {
      return Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        bottom: Math.random() * 100,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
      }));
    }

    setParticles(generateParticles(20));
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-b from-sky-400 to-blue-700 text-white overflow-hidden">
      {/* Left Navigation Panel */}
      <div className="absolute top-6 left-6 z-50 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col space-y-3">
        {[
          { name: 'Surface', icon: <Waves size={16} />, depth: '0m' },
          { name: 'Sunlight', icon: <Sun size={16} />, depth: '200m' },
          { name: 'Twilight', icon: <Moon size={16} />, depth: '1000m' },
          { name: 'Midnight', icon: <Eye size={16} />, depth: '4000m' },
          { name: 'Abyss', icon: <Anchor size={16} />, depth: '6000m' },
          { name: 'Trench', icon: <MapPin size={16} />, depth: '11000m' }
        ].map((zone, i) => (
          <div
            key={zone.name}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
              i === 0
                ? 'bg-cyan-400/30 text-cyan-300 shadow-lg shadow-cyan-400/20'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {zone.icon}
            <div>
              <div className="text-sm font-medium">{zone.name}</div>
              <div className="text-xs opacity-70">{zone.depth}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Depth Meter */}
      <div className="fixed top-6 right-6 z-50 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10">
        <div className="flex items-center space-x-3 text-white">
          <Gauge size={20} className="text-cyan-400" />
          <div>
            <div className="text-sm font-medium">Depth: 0m</div>
            <div className="text-xs opacity-70">Pressure: 0 atm</div>
          </div>
        </div>
        <div className="mt-3 w-32 h-2 bg-black/30 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 w-0"></div>
        </div>
      </div>

      {/* Title + Subtitle */}
      <div className="flex flex-col items-center justify-center h-full text-center z-10 relative px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white/90">Abyssal Odyssey</h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Begin your descent into Earth's final frontier
        </p>

        {/* Stats */}
        <div className="mt-8 flex space-x-4">
          <div className="px-5 py-2 bg-white/10 text-white/90 rounded-full border border-white/20 text-sm">
            95% unexplored
          </div>
          <div className="px-5 py-2 bg-white/10 text-white/90 rounded-full border border-white/20 text-sm">
            2 million species
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 flex flex-col items-center text-sm text-white/80">
          <span>Dive deeper</span>
          <ChevronDown className="animate-bounce mt-1" />
        </div>
      </div>

      {/* Bubbles / Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float-up"
            style={{
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
