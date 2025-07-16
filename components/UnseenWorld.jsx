import React from 'react';
import Bubbles from './Bubbles';

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b h-screen from-black to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          The <span className="text-cyan-400">Unseen World</span> Beneath
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              Beneath the ocean's shimmering surface lies a world more vast and unexplored than space. 
              From coral reefs teeming with color and life, to the pitch-black depths where bioluminescent 
              creatures dance in silence—our oceans are home to over 80% of all life on Earth.
            </p>
            
            <p className="text-lg leading-relaxed">
              Yet, we've only mapped a fraction of the seafloor. With modern technology and deep-sea 
              exploration, we're uncovering mysteries every day—new species, lost ecosystems, even 
              sunken relics from the past.
            </p>
          </div>

          <div className="relative">
            <div className="text-center p-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
              <div className="text-6xl font-bold text-cyan-400 mb-2 animate-pulse">5%</div>
              <div className="text-xl text-white">of the ocean has been explored</div>
            </div>
          </div>
        </div>
      </div>
      <Bubbles/>
    </section>
  );
};

export default AboutSection;