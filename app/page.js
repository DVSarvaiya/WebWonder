'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'
import AboutSection from '@/components/UnseenWorld'

export default function Home() {
  return (
    <>
      <main className="relative w-full min-h-screen overflow-hidden font-sans text-white flex flex-col items-center justify-center">
        
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-75"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]" />

        {/* 🌐 Top Navigation */}
        <div className="w-full flex justify-center gap-6 pt-8 z-20">
          {[
            { name: "Creatures", href: "/creatures" },
            { name: "Explore 3D", href: "#" },
            { name: "Donate", href: "#" },
            { name: "Abyssal Odyssey", href: "/ab" }
          ].map((item, idx) => (
            <Link key={idx} href={item.href}>
              <div className="relative group px-6 py-3 text-white text-lg md:text-xl lg:text-2xl font-semibold backdrop-blur-md bg-white/5 border border-blue-400/50 rounded-full cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20">
                <span className="z-10 relative group-hover:text-cyan-300 transition-colors duration-300">
                  {item.name}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/20 blur-md"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-400/20 to-blue-700/30 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full blur-sm"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* 🏷️ Title Section */}
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
        </div>

        {/* 🌊 Ocean Sections */}
        <div className="w-full min-h-screen bg-gradient-to-b from-[#000408] via-[#000408] to-[#0a1528] flex items-center justify-center px-4 py-16 flex-col">
          <div>
            <h1 className="text-white text-4xl font-bold mb-8">Our Oceans</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
            {[
              {
                name: "Pacific Ocean",
                desc: "Largest and deepest ocean on Earth, rich with biodiversity.",
                image: "/images/pacific.webp",
              },
              {
                name: "Atlantic Ocean",
                desc: "Second-largest ocean, crucial for global currents and trade.",
                image: "/images/atlantic.webp",
              },
              {
                name: "Indian Ocean",
                desc: "Warmest ocean, vital for monsoons and marine ecosystems.",
                image: "/images/indian.webp",
              },
              {
                name: "Southern Ocean",
                desc: "Encircles Antarctica, playing a key role in climate regulation.",
                image: "/images/southern.jpg",
              },
              {
                name: "Arctic Ocean",
                desc: "Smallest and shallowest, home to unique polar life.",
                image: "/images/arctic.avif",
              },
            ].map((ocean, idx) => (
              <div
                key={idx}
                className="bg-white/5 text-white border border-blue-400/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:scale-105 transform transition duration-300 group opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={ocean.image}
                    alt={ocean.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 backdrop-blur-md">
                  <h3 className="text-2xl font-bold text-blue-300 group-hover:text-cyan-300 transition">
                    {ocean.name}
                  </h3>
                  <p className="mt-3 text-blue-100 text-sm leading-relaxed">{ocean.desc}</p>
                  <button className="mt-5 px-4 py-2 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full text-sm font-semibold text-white hover:from-blue-600 hover:to-cyan-400 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✨ Effects and Additional Sections */}
        <Bubbles />
        <FishScene />
        
      </main>
    </>
  )
}
