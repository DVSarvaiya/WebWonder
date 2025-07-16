"use client";
import Image from "next/image";
import Orb from "@/components/Orb";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-screen overflow-hidden font-sans text-white flex flex-col items-center justify-center">
        {/* 🌊 Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#021d3f] via-[#053067] to-[#0a1528] z-[-1]"></div>
          <div className="absolute bottom-0 left-0 w-full h-60 bg-[#062e57] opacity-80 clip-wave1 z-[-1]"></div>
          <div className="absolute bottom-0 left-0 w-full h-60 bg-[#083c75] opacity-50 clip-wave2 animate-waveSlow z-[-1]"></div>
          <div className="absolute bottom-0 left-0 w-full h-52 bg-[#0c4c9c] opacity-30 clip-wave3 animate-waveSlowReverse z-[-1]"></div>
        </div>

        {/* 🌐 Top Navigation */}
        <div className="w-full flex justify-center gap-6 pt-8 z-20">
  {[
    { name: "Creatures", href: "#" },
    { name: "Explore 3D", href: "#" },
    { name: "Donate", href: "#" },
    { name: "Abyssal Odyssey", href: "#" }
  ].map((item, idx) => (
    <Link key={idx} href={item.href}>
      <div className="relative group px-6 py-3 text-white text-lg md:text-xl lg:text-2xl font-semibold backdrop-blur-md bg-white/5 border border-blue-400/50 rounded-full cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20">
        <span className="z-10 relative group-hover:text-cyan-300 transition-colors duration-300">
          {item.name}
        </span>

        {/* Glowing pulse animation */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/20 blur-md"></div>
        </div>

        {/* Gradient glow on hover */}
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

      {/* 🌌 Extra Section */}
      <div className="w-full h-[100vh] bg-gradient-to-b from-[#021d3f] via-[#053067] to-[#0a1528]"></div>

      {/* 🌊 Custom Styles */}
      <style jsx>{`
  .clip-wave1 {
    clip-path: polygon(
      0 40%, 20% 60%, 40% 35%, 60% 65%, 80% 40%, 100% 60%, 
      100% 100%, 0 100%
    );
  }

  .clip-wave2 {
    clip-path: polygon(
      0 30%, 15% 55%, 35% 30%, 55% 60%, 75% 35%, 100% 50%, 
      100% 100%, 0 100%
    );
  }

  .clip-wave3 {
    clip-path: polygon(
      0 20%, 10% 45%, 30% 20%, 50% 50%, 70% 25%, 90% 40%, 
      100% 20%, 100% 100%, 0 100%
    );
  }

  @keyframes waveSlow {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-20%);
    }
  }

  @keyframes waveSlowReverse {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(20%);
    }
  }

  .animate-waveSlow {
    animation: waveSlow 8s linear infinite;
  }

  .animate-waveSlowReverse {
    animation: waveSlowReverse 10s linear infinite;
  }
`}</style>

    </>
  );
}
