import React, { useState, useMemo,useEffect } from 'react';
import { Info } from 'lucide-react';

export default function EpipelagicZone() {
    const [bubbles, setBubbles] = useState([]);
    
        // Precomputed bubbles to avoid hydration mismatch
        useEffect(() => {
            const generatedBubbles = Array.from({ length: 30 }).map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
            }));
            setBubbles(generatedBubbles);
        }, []);
    const [activeCreature, setActiveCreature] = useState(null);

    const creatures = [
        {
            id: 'clownfish',
            name: 'Clownfish',
            fact: 'Clownfish are immune to sea anemone stings and live in a symbiotic relationship.',
            position: { top: '60%', left: '20%' }
        },
        {
            id: 'turtle',
            name: 'Sea Turtle',
            fact: 'Sea turtles can live over 100 years and navigate using magnetic fields.',
            position: { top: '40%', left: '70%' }
        },
        {
            id: 'shark',
            name: 'Reef Shark',
            fact: 'Reef sharks are essential for maintaining healthy coral reef ecosystems.',
            position: { top: '30%', left: '50%' }
        }
    ];

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-700 via-teal-600 to-cyan-700">
            {/* Coral reef background */}
            <div className="absolute inset-0 opacity-60">
                <div className="coral-reef"></div>
            </div>

            {/* Floating particles */}
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

            {/* Zone header */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
                <h2 className="text-5xl font-bold mb-4">Epipelagic Zone</h2>
                <p className="text-xl text-cyan-200">The Sunlight Zone • 0-200m</p>
            </div>

            {/* Interactive creatures */}
            {creatures.map((creature) => (
                <div
                    key={creature.id}
                    className="absolute cursor-pointer transform hover:scale-110 transition-transform duration-300"
                    style={creature.position}
                    onMouseEnter={() => setActiveCreature(creature.id)}
                    onMouseLeave={() => setActiveCreature(null)}
                >
                    <div className={`creature-${creature.id} relative`}>
                        <div className="w-12 h-12 bg-orange-400 rounded-full animate-pulse"></div>

                        {activeCreature === creature.id && (
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-black/80 backdrop-blur-md rounded-lg border border-cyan-400/30 text-white">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Info size={16} className="text-cyan-400" />
                                    <h3 className="font-bold text-cyan-300">{creature.name}</h3>
                                </div>
                                <p className="text-sm text-gray-300">{creature.fact}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* School of fish */}
            <div className="absolute fish-school">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="fish-small"
                        style={{
                            animationDelay: `${i * 0.2}s`,
                            transform: `translateX(${i * 20}px)`
                        }}
                    />
                ))}
            </div>

            {/* Zone info */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white">
                <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <h3 className="text-2xl font-bold mb-2">Rich Marine Life</h3>
                    <p className="text-cyan-200">90% of marine life lives in this zone</p>
                </div>
            </div>
        </section>
    );
};
