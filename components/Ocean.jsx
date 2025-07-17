'use client'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'
import AboutSection from '@/components/UnseenWorld'
import Footer from '@/components/Footer'
import Timelines from '@/components/Timelines'

export default function Ocean() {
  return (
    <main className="relative w-full h-screen bg-[#000000] text-white font-sans overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-8 pt-32">
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
        <FishScene/>
      </section>
    </main>
  )
}
