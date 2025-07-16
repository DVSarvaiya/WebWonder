import React from 'react';
import { Gauge } from 'lucide-react';

const DepthMeter = ({ progress }) => {
  const depth = Math.floor(progress * 11000);
  const pressure = Math.floor(progress * 1100);

  return (
    <div className="fixed top-6 right-6 z-50 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10">
      <div className="flex items-center space-x-3 text-white">
        <Gauge size={20} className="text-cyan-400" />
        <div>
          <div className="text-sm font-medium">Depth: {depth}m</div>
          <div className="text-xs opacity-70">Pressure: {pressure} atm</div>
        </div>
      </div>
      
      <div className="mt-3 w-32 h-2 bg-black/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};

export default DepthMeter