'use client';
import React from "react";

export default function OceanPage() {
  return (
    <main className="relative w-full h-screen text-white font-sans overflow-hidden">
      {/* Background ocean image */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] rotate-180"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-[#061427] to-transparent z-0" />
      <div>
        <p className="text-6xl poppins-bold">DEEP SEA</p>
        <p className="text- text-6xl poppins-bold">EXPLORATION</p>
      </div>
    </main>
  );
}
