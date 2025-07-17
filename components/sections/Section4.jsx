import React, { useState } from 'react';
import SunlightZoneCard from './ZoneCard';

export default function AbyssopelagicZone() {
  const [rovPosition, setRovPosition] = useState({ x: 50, y: 50 });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hydrothermal vents */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-900/20 to-transparent z-10">
        <div className="absolute bottom-0 left-1/4 w-4 h-24 bg-orange-400/30 rounded-t-full animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-6 h-32 bg-red-400/30 rounded-t-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-3 h-20 bg-orange-400/30 rounded-t-full animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
        <h2 className="text-5xl font-bold mb-4">Abyssopelagic Zone</h2>
        <p className="text-xl text-gray-300">The Abyssal Zone • 4000–6000m</p>
      </div>

      {/* Dumbo Octopus */}
      <div className="absolute left-1/4 top-1/3 animate-sea-pig z-10">
        <div className="w-12 h-16 bg-pink-400/30 rounded-full relative">
          <div className="absolute -left-2 top-2 w-4 h-8 bg-pink-400/30 rounded-full"></div>
          <div className="absolute -right-2 top-2 w-4 h-8 bg-pink-400/30 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-pink-400/30 rounded-b-full"></div>
        </div>
      </div>

      {/* Sea Pigs */}
      <div className="absolute z-10 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sea-pig"
            style={{
              left: `${10 + i * 15}%`,
              bottom: `${5 + (i % 2) * 3}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div className="w-8 h-4 bg-gray-400/40 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Seafloor debris */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800/40 to-transparent z-10">
        <div className="absolute bottom-2 left-1/4 w-3 h-3 bg-gray-600/60 rounded"></div>
        <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-gray-600/60 rounded"></div>
        <div className="absolute bottom-3 right-1/3 w-4 h-2 bg-gray-600/60 rounded"></div>
      </div>

      {/* Info Card */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-gray-400/20">
          <h3 className="text-2xl font-bold mb-2">Alien Landscape</h3>
          <SunlightZoneCard
            title="Abyssal Zone"
            description="Near-freezing waters cover vast abyssal plains. Life is sparse but specially adapted to extreme conditions."
            temperature="1–4°C"
            lightLevel="0%"
            pressure="400–600 atm"
            depthRange="4000–6000m"
            creatures={['Sea Cucumber', 'Xenophyophores', 'Dumbo Octopus', 'Abyssal Fish']}
          />
        </div>
      </div>
    </section>
  );
}
