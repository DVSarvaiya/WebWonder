'use client';
import React from 'react';
import { Waves, Sun, Moon, Eye, Anchor, MapPin } from 'lucide-react'; // Ensure these are imported

const Navigation = ({ currentZone }) => {
  const zones = [
    { name: 'Surface', icon: Waves, depth: '0m' },
    { name: 'Sunlight', icon: Sun, depth: '200m' },
    { name: 'Twilight', icon: Moon, depth: '1000m' },
    { name: 'Midnight', icon: Eye, depth: '4000m' },
    { name: 'Abyss', icon: Anchor, depth: '6000m' },
    { name: 'Trench', icon: MapPin, depth: '11000m' },
  ];

  const scrollToZone = (zoneIndex) => {
    const zoneHeight = window.innerHeight;
    window.scrollTo({
      top: zoneIndex * zoneHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed top-6 left-6 z-50 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10">
      <div className="flex flex-col space-y-3">
        {zones.map((zone, index) => {
          const IconComponent = zone.icon;
          const isActive = currentZone === index;
          
          return (
            <button
              key={zone.name}
              onClick={() => scrollToZone(index)}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'bg-cyan-400/30 text-cyan-300 shadow-lg shadow-cyan-400/20' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <IconComponent size={16} />
              <div className="text-left">
                <div className="text-sm font-medium">{zone.name}</div>
                <div className="text-xs opacity-70">{zone.depth}</div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation