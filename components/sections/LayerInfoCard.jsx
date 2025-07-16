import React from 'react';

const LayerInfoCard = ({ name, depth, zoom, rotation }) => {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 bg-gray-800/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 transition-transform duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
    >
      <h3 className="text-lg font-bold text-white mb-4">Current Layer</h3>
      <div className="space-y-3 text-sm">
        <div>
          <span className="text-cyan-400 font-semibold">Name:</span>
          <span className="text-white ml-2">{name}</span>
        </div>
        <div>
          <span className="text-cyan-400 font-semibold">Depth:</span>
          <span className="text-white ml-2">{depth}</span>
        </div>
        <div>
          <span className="text-cyan-400 font-semibold">Zoom:</span>
          <span className="text-white ml-2">{(zoom * 100).toFixed(0)}%</span>
        </div>
        <div>
          <span className="text-cyan-400 font-semibold">Rotation:</span>
          <span className="text-white ml-2">{rotation.toFixed(0)}°</span>
        </div>
      </div>
    </div>
  );
};

export default LayerInfoCard;
