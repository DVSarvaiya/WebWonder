'use client'
import FishScene from '@/components/FishScene'
import AboutSection from '@/components/UnseenWorld'
import Timelines from '@/components/Timelines'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="relative w-full min-h-screen">
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
        
        <FishScene />
        <AboutSection />
        <Timelines />
      </div>
    </Layout>
  )
}
