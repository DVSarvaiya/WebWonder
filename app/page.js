"use client";
import Image from "next/image";
import Orb from "@/components/Orb";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-screen overflow-hidden font-sans text-white flex flex-col items-center justify-center">

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

        {/* 🧿 Orb with Inner Text */}
        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] mt-10 z-20 flex items-center justify-center text-center">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          <div className="absolute px-4">
            <h1 className="text-sm md:text-xl italic mb-2">
              Explore The Heartbeat Of Our Planet
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
              OCEAN
            </h1>
            <h1 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 italic mt-1">
              VAST AND ALIVE
            </h1>
          </div>
        </div>
      </main>

      {/* 🌊 Ocean Sections */}
      <div className="w-full min-h-screen bg-gradient-to-b from-[#021d3f] via-[#053067] to-[#0a1528] flex items-center justify-center px-4 py-16 flex-col">
        
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

      <style jsx>{`
        .clip-wave1 {
          clip-path: polygon(0 40%, 20% 60%, 40% 35%, 60% 65%, 80% 40%, 100% 60%, 100% 100%, 0 100%);
        }
        .clip-wave2 {
          clip-path: polygon(0 30%, 15% 55%, 35% 30%, 55% 60%, 75% 35%, 100% 50%, 100% 100%, 0 100%);
        }
        .clip-wave3 {
          clip-path: polygon(0 20%, 10% 45%, 30% 20%, 50% 50%, 70% 25%, 90% 40%, 100% 20%, 100% 100%, 0 100%);
        }
        @keyframes waveSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
        @keyframes waveSlowReverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(20%); }
        }
        .animate-waveSlow {
          animation: waveSlow 8s linear infinite;
        }
        .animate-waveSlowReverse {
          animation: waveSlowReverse 10s linear infinite;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </>
  );
}
