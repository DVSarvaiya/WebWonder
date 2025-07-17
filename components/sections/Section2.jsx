import React, { useState, useEffect } from 'react';
import { BinaryIcon as Sonar, LineChart as Submarine } from 'lucide-react';
import SunlightZoneCard from './ZoneCard';
export default function MesopelagicZone() {
    const [sonarActive, setSonarActive] = useState(false);

    const triggerSonar = () => {
        setSonarActive(true);
        setTimeout(() => setSonarActive(false), 3000);
    };

    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generated = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
        }));
        setParticles(generated);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyan-700 via-blue-900 to-indigo-900">
            {/* Bioluminescent particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="bioluminescent-particle"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.animationDelay,
                            animationDuration: p.animationDuration
                        }}
                    />
                ))}
            </div>

            {/* Zone header */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
                <h2 className="text-5xl font-bold mb-4">Mesopelagic Zone</h2>
                <p className="text-xl text-blue-200">The Twilight Zone • 200-1000m</p>
            </div>

            {/* Submarine */}
            <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                    {/* Submarine body */}
                    <div className="w-48 h-20 bg-gray-700 rounded-full shadow-lg relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gray-600 rounded-t-full"></div>
                        <div className="absolute left-4 top-6 w-12 h-8 bg-cyan-400/30 rounded-full"></div>
                        <div className="absolute right-4 top-6 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                    </div>

                    {/* Sonar Button */}
                    <button
                        onClick={triggerSonar}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2"
                    >
                        <Sonar size={16} />
                        <span>Sonar Ping</span>
                    </button>

                    {/* Sonar Waves */}
                    {sonarActive && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="sonar-wave wave-1"></div>
                            <div className="sonar-wave wave-2"></div>
                            <div className="sonar-wave wave-3"></div>
                        </div>
                    )}
                </div>
            </div>


            {/* Lanternfish
            <div className="absolute lanternfish-group">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="lanternfish"
                        style={{
                            left: `${(i % 4) * 10}vw`,
                            top: `${Math.floor(i / 4) * 8}vh`,
                            animationDelay: `${i * 0.3}s`
                        }}

                    />
                ))}
            </div> */}

            {/* Jellyfish */}
            <div className="absolute jellyfish-1">
                <div className="w-16 h-20 bg-purple-400/30 rounded-full relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-purple-300/40"></div>
                    <div className="absolute bottom-0 left-1/4 w-1 h-28 bg-purple-300/40"></div>
                    <div className="absolute bottom-0 right-1/4 w-1 h-30 bg-purple-300/40"></div>
                </div>
            </div>

            {/* Zone info */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
                <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <h3 className="text-2xl font-bold mb-2">Bioluminescent Symphony</h3>
                    <p className="text-blue-200">80% of creatures here produce their own light</p>
                    <SunlightZoneCard
                        title="Twilight Zone"
                        description="The dysphotic zone where sunlight fades to darkness. Many creatures migrate daily between this zone and the surface."
                        temperature="5–20°C"
                        lightLevel="1% - 0%"
                        pressure="20–100 atm"
                        depthRange="200–1000m"
                        creatures={['Lanternfish', 'Squid', 'Siphonophores', 'Vampire Squid']}
                    />
                </div>
            </div>



        </section>
    );
};

