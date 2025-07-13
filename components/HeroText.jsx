'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function HeroText() {
  useEffect(() => {
    gsap.fromTo('.hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 1.2 })
  }, [])

  return (
    <div className="absolute top-1/3 left-10 z-20 max-w-xl hero-text">
      <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Explore the Unseen Depths</h2>
      <p className="text-lg text-slate-300 mb-6">
        Dive into the abyss with real-time 3D ocean creatures and discover life in the darkness.
      </p>
      <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-xl shadow-lg text-white font-medium">
        Start Exploring
      </button>
    </div>
  )
}
