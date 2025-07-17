import React, { useState, useEffect } from 'react';
import { Eye, Zap } from 'lucide-react';
import './section0.css'
import SunlightZoneCard from './ZoneCard';

export default function BathypelagicZone() {
    const [activeCreature, setActiveCreature] = useState(null);

    const creatures = [
        {
            id: 'anglerfish',
            name: 'Anglerfish',
            fact: 'Uses a bioluminescent lure to attract prey in the complete darkness.',
            position: { top: '40%', left: '30%' }
        },
        {
            id: 'vampire-squid',
            name: 'Vampire Squid',
            fact: 'Can turn itself inside out and cover itself with protective spines.',
            position: { top: '60%', left: '70%' }
        },
        {
            id: 'gulper-eel',
            name: 'Gulper Eel',
            fact: 'Can unhinge its massive jaw to swallow prey larger than itself.',
            position: { top: '70%', left: '20%' }
        }
    ];

    const [flashes, setFlashes] = useState([]);

    useEffect(() => {
        const generatedFlashes = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
        }));
        setFlashes(generatedFlashes);
    }, []);

    const [eyes, setEyes] = useState([]);
    useEffect(() => {
        const generated = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
        }));
        setEyes(generated);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
            {/* Sparse bioluminescent flashes */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {flashes.map((flash) => (
                    <div
                        key={flash.id}
                        className="deep-glow"
                        style={{
                            left: flash.left,
                            top: flash.top,
                            animationDelay: flash.animationDelay,
                            animationDuration: flash.animationDuration,
                        }}
                    />
                ))}
            </div>
            {/* Zone header */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
                <h2 className="text-5xl font-bold mb-4">Bathypelagic Zone</h2>
                <p className="text-xl text-purple-200">The Midnight Zone • 1000-4000m</p>
            </div>

            {/* Mysterious creatures */}
            {creatures.map((creature) => (
                <div
                    key={creature.id}
                    className="absolute cursor-pointer"
                    style={creature.position}
                    onMouseEnter={() => setActiveCreature(creature.id)}
                    onMouseLeave={() => setActiveCreature(null)}
                >
                    <div className="relative">
                        {/* Creature representation */}
                        <div className={`creature-glow-${creature.id} w-8 h-8 bg-cyan-400/60 rounded-full animate-pulse`}>
                            <Eye size={16} className="text-cyan-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        {/* Creature info popup */}
                        {activeCreature === creature.id && (
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-black/90 backdrop-blur-md rounded-lg border border-cyan-400/30 text-white">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Zap size={16} className="text-cyan-400" />
                                    <h3 className="font-bold text-cyan-300">{creature.name}</h3>
                                </div>
                                <p className="text-sm text-gray-300">{creature.fact}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Floating eyes effect */}
            <div className="absolute floating-eyes pointer-events-none">
                {eyes.map((eye) => (
                    <div
                        key={eye.id}
                        className="floating-eye absolute"
                        style={{
                            left: eye.left,
                            top: eye.top,
                            animationDelay: eye.animationDelay,
                        }}
                    >
                        <div className="w-4 h-4 bg-red-400/40 rounded-full"></div>
                    </div>
                ))}
            </div>
            {/* Mysterious silhouette */}
            <div className="absolute mysterious-silhouette">
                <div className="w-32 h-64 bg-black/60 rounded-full transform -rotate-12 opacity-30"></div>
            </div>

            {/* Zone info */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20">
                    <h3 className="text-2xl font-bold mb-2">Eternal Darkness</h3>
                    <p className="text-purple-200">No sunlight has ever reached this depth</p>
                    <SunlightZoneCard
                        title="Midnight Zone"
                        description="The aphotic zone in perpetual darkness. Bioluminescence becomes crucial for survival in this alien world."
                        temperature="4°C"
                        lightLevel="0%"
                        pressure="100-400 atm"
                        depthRange="1000–4000m"
                        creatures={['Anglerfish', 'Giant Squid', 'Deep-sea Jellyfish', 'Hatchetfish']}
                    />
                </div>
            </div>



        </section>
    );
};

