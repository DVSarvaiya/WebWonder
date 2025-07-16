'use client';

import React, { useState,useMemo } from 'react';
import { MapPin, Compass, ArrowUp } from 'lucide-react';

export default function HadopelagicZone() {
  const [discovered, setDiscovered] = useState(false);

  const handleDiscovery = () => {
    setDiscovered(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${8 + Math.random() * 6}s`
    }));
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Sparse phosphorescent particles */}
      {/* <div className="absolute inset-0 pointer-events-none z-10">
      {particles.map((style, i) => (
        <div
          key={i}
          className="phosphorescent-particle"
          style={style}
        />
      ))}
    </div> */}

      
      {/* Zone header */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
        <h2 className="text-5xl font-bold mb-4">Hadopelagic Zone</h2>
        <p className="text-xl text-gray-400">The Trenches • 6000-11000m</p>
      </div>
      
      {/* Mariana Trench floor */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/60 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800/80"></div>
      </div>
      
      {/* Hidden discovery */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
        {!discovered ? (
          <button
            onClick={handleDiscovery}
            className="group relative bg-gray-800/40 hover:bg-gray-700/60 text-white px-8 py-4 rounded-lg transition-all duration-500 border border-gray-600/30"
          >
            <div className="flex items-center space-x-3">
              <Compass size={20} className="text-cyan-400" />
              <span className="text-lg font-medium">Explore the Depths</span>
            </div>
            <div className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        ) : (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30 max-w-2xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MapPin size={24} className="text-cyan-400" />
                <h3 className="text-3xl font-bold text-cyan-300">Discovery</h3>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                You've reached the deepest point accessible to humans. Here, in the crushing darkness, 
                life persists in forms so alien they challenge our understanding of biology itself.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-cyan-400/10 rounded-lg p-3">
                  <div className="font-semibold text-cyan-300">Pressure</div>
                  <div className="text-gray-300">1,100x surface pressure</div>
                </div>
                <div className="bg-cyan-400/10 rounded-lg p-3">
                  <div className="font-semibold text-cyan-300">Temperature</div>
                  <div className="text-gray-300">1-4°C (34-39°F)</div>
                </div>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <ArrowUp size={20} />
              <span className="text-lg font-medium">Return to Surface</span>
            </button>
          </div>
        )}
      </div>
      
      {/* Philosophical ending */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white opacity-60">
        <div className="space-y-8">
          <div className="floating-text">
            <p className="text-2xl font-light italic">
              "We know more about the surface of Mars<br />
              than we do about our own ocean depths"
            </p>
          </div>
          
          <div className="floating-text" style={{ animationDelay: '2s' }}>
            <p className="text-lg text-gray-400">
              95% of the ocean remains unexplored
            </p>
          </div>
          
          <div className="floating-text" style={{ animationDelay: '4s' }}>
            <p className="text-lg text-gray-400">
              What mysteries await in the abyss?
            </p>
          </div>
        </div>
      </div>
      
      {/* Ancient wreck silhouette */}
      <div className="absolute ancient-wreck opacity-20">
        <div className="w-48 h-32 bg-gray-700/30 transform rotate-12 rounded-lg"></div>
        <div className="absolute top-4 left-8 w-16 h-8 bg-gray-700/30 transform -rotate-6 rounded"></div>
      </div>
    </section>
  );
};
