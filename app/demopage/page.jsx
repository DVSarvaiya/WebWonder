"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Page = () => {
  const navigationItems = [
    { name: "Deep Sea Creatures", href: "/creatures", icon: "🐠", description: "Discover amazing deep sea life" },
    { name: "Virtual Dive", href: "/dive", icon: "🤿", description: "360° underwater experience" },
    { name: "Ocean Quiz", href: "/quiz", icon: "🧠", description: "Test your ocean knowledge" },
    { name: "Technology", href: "/technology", icon: "🔬", description: "Explore ocean tech" },
    { name: "Ocean Zones", href: "/ab", icon: "🌊", description: "Journey through ocean depths" },
  ];

  return (
    <Layout showBubbles={true} showFooter={false}>
      <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-white font-sans">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2] brightness-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[-1]" />

        {/* Main Content */}
        <div className="z-20 text-center px-4 mb-12">
          <motion.h1 
            className="text-[3rem] md:text-[6rem] lg:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-blue-300 leading-none mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            EXPLORE
          </motion.h1>
          
          <motion.h1 
            className="text-[3rem] md:text-[6rem] lg:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-blue-300 leading-none mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            OCEAN
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-2xl lg:text-3xl font-semibold italic text-cyan-300 drop-shadow-sm mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Vast, Mysterious, and Alive
          </motion.h2>
        </div>

        {/* Navigation Cards */}
        <motion.div 
          className="w-full max-w-6xl flex justify-center flex-wrap gap-4 px-4 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {navigationItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
            >
              <Link href={item.href}>
                <div className="relative group px-6 py-4 text-white backdrop-blur-lg bg-white/10 border border-cyan-400/30 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-cyan-500/20 hover:border-cyan-400/60 min-w-[200px]">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-3xl mb-2">{item.icon}</span>
                    <span className="text-lg font-semibold mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-cyan-200 transition-colors duration-300">
                      {item.description}
                    </span>
                  </div>
                  
                  {/* Hover Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                    <div className="absolute inset-0 animate-ping rounded-2xl bg-cyan-400/10 blur-xl"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-sky-400/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur-md"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-cyan-300 text-sm mb-2">Start your ocean adventure</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Page;
