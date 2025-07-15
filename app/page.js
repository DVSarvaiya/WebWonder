'use client'
import Image from 'next/image'
//import { motion } from 'framer-motion'
import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'
import TextPressure from '@/components/TextPressure'
import Orb from '@/components/Orb'
import Aurora from '@/components/Aurora'

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-[#000000] text-white overflow-hidden font-sans">
      

<div style={{ width: '100%', height: '1800px', position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>

<div style={{position: 'absolute', height: '600px',width:"100%"}} className='flex flex-col top-110 items-center'>
  <h1 className='text-2xl italic'>Explore The Mysteries Of </h1>
  <h1 className='text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500'>
    OCEAN
  </h1>
  
  
</div>
      
     

      {/* Navigation
      <div className="absolute top-10 right-40 z-20 flex space-x-6 text-sm uppercase tracking-widest font-medium">
        <a href="#" className='hover:text-blue-300'>Home</a>
        <a href="#" className='hover:text-blue-300'>Creatures</a>
        <a href="#" className='hover:text-blue-300'>Explore</a>
        <a href="#" className='hover:text-blue-300'>Technologies</a>
        <a href="#" className='hover:text-blue-300'>About Us</a>
      </div> */}

      {/* Title Section */}
      {/* <div className="absolute top-[20%] left-[18%] z-20">
        <h2 className="text-cyan-400 text-3xl font-bold mb-2">VOYAGE INTO THE BLUE</h2>
        <div className="flex items-center space-x-2">
          <h1 className="text-[11rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
            OCEAN
          </h1>
          
        </div>
        <p className="text-cyan-300 italic text-md max-w-[500px] mt-4">
          From bioluminescent wonders to sunken mysteries, deep ocean exploration unveils secrets of Earth's final frontier...
        </p>
        <p className="text-cyan-400 italic text-xl mt-2">Exploring the Deep ~</p>
      </div> */}

     

      
    </main>
  )
}
