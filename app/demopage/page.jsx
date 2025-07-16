"use client";
import React from "react";
import Link from "next/link";
import Orb from "@/components/Orb";

const Page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center text-white font-sans">
      {/* Background video */}
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
    

      {/* Navigation Links */}
      <div className="w-full flex justify-center flex-wrap gap-6 pt-12 z-20 px-4">
        {[
          { name: "Creatures", href: "/creatures" },
          { name: "Explore 3D", href: "#" },
          { name: "Donate", href: "#" },
          { name: "Abyssal Odyssey", href: "/ab" },
        ].map((item, idx) => (
          <Link key={idx} href={item.href}>
            <div className="relative group px-6 py-3 text-white text-lg md:text-xl lg:text-2xl font-semibold backdrop-blur-lg bg-white/5 border border-cyan-400/50 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-cyan-500/20">
              <span className="z-10 relative group-hover:text-cyan-300 transition-colors duration-300">
                {item.name}
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20 blur-xl"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-sky-400/20 to-blue-600/30 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full blur-md"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Title Section */}
      <div className="z-20 text-center px-4 pb-12">
        <h1 className="text-[3rem] mt-20 md:text-[6rem] lg:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-blue-300 leading-none">
            EXPLORE
        </h1>
        
        <h1 className="text-[3rem] md:text-[6rem] lg:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-blue-300 leading-none">
          OCEAN
        </h1>
        <h2 className="text-lg md:text-4xl font-semibold italic text-cyan-300 drop-shadow-sm">
          Vast and Alive
        </h2>
      </div>
    </div>
  );
};

export default Page;
