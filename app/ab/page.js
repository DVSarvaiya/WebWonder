'use client'

import React, { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/sections/Section0';
import AbyssopelagicZone from '@/components/sections/Section4';
import BathypelagicZone from '@/components/sections/Section3';
import MesopelagicZone from '@/components/sections/Section2';
import EpipelagicZone from '@/components/sections/Section1';
import HadopelagicZone from '@/components/sections/Section5';
import DepthMeter from '@/components/DepthMeter';
import Layout from '@/components/Layout';

export default function OceanJourney() {
  const containerRef = useRef(null);
  const [currentZone, setCurrentZone] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      setScrollProgress(progress);

      // Determine current zone based on scroll progress
      const zones = 6;
      const zoneIndex = Math.floor(progress * zones);
      setCurrentZone(Math.min(zoneIndex, zones - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout showBubbles={false}>
      <div ref={containerRef} className="relative">
        {/* Depth Meter */}
        <DepthMeter currentZone={currentZone} scrollProgress={scrollProgress} />

        {/* Ocean Zones */}
        <HeroSection />
        <EpipelagicZone />
        <MesopelagicZone />
        <BathypelagicZone />
        <AbyssopelagicZone />
        <HadopelagicZone />
      </div>
    </Layout>
  );
}
