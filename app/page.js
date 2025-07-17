'use client'
import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'
import AboutSection from '@/components/UnseenWorld'
import Footer from '@/components/Footer'
import Timelines from '@/components/Timelines'
import NavBar from '@/components/Navbar'
import Aurora from '@/components/Aurora'
import Orb from '@/components/Orb'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Page load animation
    setTimeout(() => setIsLoaded(true), 100)

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove)
    };
  }, []);

  return (
    <main className="relative w-full h-screen bg-gradient-to-b from-[#000428] via-[#004e92] to-[#000000] text-white font-sans overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Aurora />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-1/4 w-32 h-32 z-5 opacity-60">
        <Orb hue={180} hoverIntensity={0.3} />
      </div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 z-5 opacity-40">
        <Orb hue={200} hoverIntensity={0.4} />
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 z-5 opacity-50">
        <Orb hue={220} hoverIntensity={0.2} />
      </div>

      {/* Bioluminescent Particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bioluminescent-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Interactive cursor glow */}
      <div 
        className="absolute pointer-events-none z-10 w-32 h-32 rounded-full opacity-20 blur-xl transition-all duration-300"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, rgba(0,255,255,0.1) 50%, transparent 100%)'
        }}
      />

      {/* Navigation */}
      <NavBar />

      {/* Enhanced Title Section */}
      <div className={`absolute top-[25%] left-[8%] z-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-cyan-400 text-3xl italic mb-2 poppins-regular animate-pulse">
          Voyage into the Blue
        </h2>
        
        <div className="flex items-center space-x-2 mb-4">
          <h1 className="text-[11rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x drop-shadow-2xl">
            O
          </h1>
          <h1 className="text-[11rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-400 animate-gradient-x drop-shadow-2xl">
            CEAN
          </h1>
        </div>
        
        <p className="poppins-regular text-cyan-300 italic text-lg max-w-[500px] mt-4 leading-relaxed drop-shadow-lg">
          From bioluminescent wonders to sunken mysteries, deep ocean exploration unveils secrets of Earth's final frontier...
        </p>
        
        <p className="text-cyan-400 italic text-xl mt-2 animate-pulse">
          Exploring the Deep
        </p>

        {/* Call to Action Button */}
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-lg text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50 hover:shadow-2xl border border-cyan-400/30">
          <span className="flex items-center space-x-2">
            <span>Dive Deeper</span>
            <span className="text-xl">🌊</span>
          </span>
        </button>
      </div>

      {/* Depth Indicator */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-1 h-32 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full opacity-60"></div>
          <span className="text-cyan-400 text-sm font-medium rotate-90 origin-center">SURFACE</span>
        </div>
      </div>

      {/* Sonar Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
        <div className="sonar-wave wave-1"></div>
        <div className="sonar-wave wave-2"></div>
        <div className="sonar-wave wave-3"></div>
      </div>

      {/* Enhanced Bubbles */}
      <Bubbles />
      
      {/* 3D Fish Scene */}
      <FishScene />
      
      {/* Content Sections */}
      <AboutSection />
      <Timelines />
      <Footer />
    </main>
  )
}
