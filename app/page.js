'use client'
import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'
import AboutSection from '@/components/UnseenWorld'
import Footer from '@/components/Footer'
import Timelines from '@/components/Timelines'
import NavBar from '@/components/Navbar'
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function Home() {
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

    return () => {
      // Clean up on unmount
      lenis.destroy();
    };
  }, []);
  return (
    <main className="relative w-full h-screen bg-[#000000] text-white font-sans">


      {/* Background bubbles or animations could go here */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Optional: Add bubble animations or a canvas with particles */}
      </div>

      {/* Border Frame */}
      <div className="fixed top-5 bottom-5 left-5 right-5 border-2 border-cyan-500 z-10 rounded-4xl pointer-events-none"></div>


      {/* Navigation */}
      <NavBar />


      {/* Title Section */}
      <div className="absolute top-[25%] left-[8%] z-20">
        <h2 className="text-cyan-400 text-3xl italic mb-2 poppins-regular">Voyage into the Blue</h2>
        <div className="flex items-center space-x-2">
          <h1 className="text-[11rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
            O
          </h1>
          <h1 className="text-[11rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
            CEAN
          </h1>
        </div>
        <p className="poppins-regular text-cyan-300 italic text-md max-w-[500px] mt-4">
          From bioluminescent wonders to sunken mysteries, deep ocean exploration unveils secrets of Earth's final frontier...
        </p>
        <p className="text-cyan-400 italic text-xl mt-2">Exploring the Deep </p>
      </div>

      <Bubbles />
      <FishScene />
      <AboutSection />
      <Timelines />
      <Footer />
    </main>
  )
}
