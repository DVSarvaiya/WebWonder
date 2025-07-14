'use client'
import Image from 'next/image'
//import { motion } from 'framer-motion'
import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-[#000000] text-white overflow-hidden font-sans">


      {/* Background bubbles or animations could go here */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Optional: Add bubble animations or a canvas with particles */}
      </div>

      {/* Border Frame */}
      <div className="absolute inset-5 border-2 border-cyan-500 z-10 rounded-xl"></div>

      {/* Navigation */}
      <div className="absolute top-10 right-10 z-20 flex space-x-6 text-sm uppercase tracking-widest font-medium">
        <a href="#">Home</a>
        <a href="#">Creatures</a>
        <a href="#">Explore</a>
        <a href="#">Technologies</a>
        <a href="#">About Us</a>
      </div>

      {/* Title Section */}
      <div className="absolute top-[15%] left-[8%] z-20">
        <h2 className="text-cyan-400 text-3xl italic mb-2">Voyage into the Blue</h2>
        <div className="flex items-center space-x-2">
          <h1 className="text-[11rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
            O
          </h1>
          <h1 className="text-[11rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
            CEAN
          </h1>
        </div>
        <p className="text-cyan-300 italic text-md max-w-[500px] mt-4">
          From bioluminescent wonders to sunken mysteries, deep ocean exploration unveils secrets of Earth's final frontier...
        </p>
        <p className="text-cyan-400 italic text-xl mt-2">Exploring the Deep ~</p>
      </div>

      <Bubbles />

      <FishScene />
    </main>
  )
}
