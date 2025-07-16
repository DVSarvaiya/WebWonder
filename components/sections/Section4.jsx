import React, { useState } from 'react';
import { Flashlight, Camera, Anchor } from 'lucide-react';
import SunlightZoneCard from './ZoneCard';

export default function AbyssopelagicZone() {
  const [rovPosition, setRovPosition] = useState({ x: 50, y: 50 });
  const [flashlightOn, setFlashlightOn] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setRovPosition({ x, y });
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      {/* Hydrothermal vents */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-900/20 to-transparent">
        <div className="absolute bottom-0 left-1/4 w-4 h-24 bg-orange-400/30 rounded-t-full animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-6 h-32 bg-red-400/30 rounded-t-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-3 h-20 bg-orange-400/30 rounded-t-full animate-pulse"></div>
      </div>

      {/* Zone header */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
        <h2 className="text-5xl font-bold mb-4">Abyssopelagic Zone</h2>
        <p className="text-xl text-gray-300">The Abyssal Zone • 4000-6000m</p>
      </div>

      {/* ROV */}
      <div
        className="absolute transition-all duration-500 z-20"
        style={{
          left: `${rovPosition.x}%`,
          top: `${rovPosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="rov-body relative">
          <div className="w-20 h-12 bg-yellow-600 rounded-lg shadow-lg">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-yellow-500 rounded-t-full"></div>
            <div className="absolute left-2 top-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute right-2 top-2 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button
              onClick={() => setFlashlightOn(!flashlightOn)}
              className={`p-2 rounded-full transition-colors duration-200 ${flashlightOn ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
                }`}
            >
              <Flashlight size={16} />
            </button>
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-200">
              <Camera size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ROV flashlight beam */}
      {flashlightOn && (
        <div
          className="absolute flashlight-beam"
          style={{
            left: `${rovPosition.x}%`,
            top: `${rovPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}

      {/* Deep sea creatures */}
      <div className="absolute dumbo-octopus">
        <div className="w-12 h-16 bg-pink-400/30 rounded-full relative">
          <div className="absolute -left-2 top-2 w-4 h-8 bg-pink-400/30 rounded-full"></div>
          <div className="absolute -right-2 top-2 w-4 h-8 bg-pink-400/30 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-pink-400/30 rounded-b-full"></div>
        </div>
      </div>

      {/* Sea pigs */}
      <div className="absolute sea-pigs">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="sea-pig"
            style={{
              left: `${60 + i * 10}%`,
              bottom: '10%',
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div className="w-8 h-4 bg-gray-400/40 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Seafloor debris */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800/40 to-transparent">
        <div className="absolute bottom-2 left-1/4 w-3 h-3 bg-gray-600/60 rounded"></div>
        <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-gray-600/60 rounded"></div>
        <div className="absolute bottom-3 right-1/3 w-4 h-2 bg-gray-600/60 rounded"></div>
      </div>

      {/* Zone info */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-gray-400/20">
          <h3 className="text-2xl font-bold mb-2">Alien Landscape</h3>
          <p className="text-gray-300">Explore with ROV • Move mouse to navigate</p>
        </div>
      </div>

      <SunlightZoneCard
        title="Abyssal Zone"
        description="Near-freezing waters cover vast abyssal plains. Life is sparse but specially adapted to extreme conditions."
        temperature="1–4°C"
        lightLevel="0%"
        pressure="400–600 atm"
        depthRange="4000–6000m"
        creatures={['Sea Cucumber', 'Xenophyophores', 'Dumbo Octopus', 'Abyssal Fish']}
      />

    </section>
  );
};

