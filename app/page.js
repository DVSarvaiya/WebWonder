'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'
import AboutSection from '@/components/UnseenWorld'
import Footer from '@/components/Footer'
import Timelines from '@/components/Timelines'
import NavBar from '@/components/Navbar'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Bubbles />
      </div>

      {/* Foreground layers */}
      <div className="relative z-10">
        <NavBar />

        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-3xl">
            <h2 className="text-cyan-400 text-2xl md:text-3xl italic mb-4 poppins-regular">
              Voyage into the Blue
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <h1 className="text-[6rem] md:text-[10rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                O
              </h1>
              <h1 className="text-[6rem] md:text-[10rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                CEAN
              </h1>
            </div>
            <p className="poppins-regular text-cyan-300 italic text-base md:text-lg max-w-xl mx-auto mt-6">
              From bioluminescent wonders to sunken mysteries, deep ocean exploration unveils secrets of Earth's final frontier...
            </p>
            <p className="text-cyan-400 italic text-xl mt-4">Exploring the Deep</p>
          </div>
        </section>

        <AboutSection />
        <Timelines />
        <Footer />
      </div>
    </main>
  )
}
