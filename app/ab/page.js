'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Fish, Waves, Eye, Zap, Anchor, MapPin } from 'lucide-react';
import HeroSection from '@/components/sections/Section0';
import AbyssopelagicZone from '@/components/sections/Section4';
import BathypelagicZone from '@/components/sections/Section3';
import MesopelagicZone from '@/components/sections/Section2';
import EpipelagicZone from '@/components/sections/Section1';
import HadopelagicZone from '@/components/sections/Section5';
import DepthMeter from '@/components/DepthMeter';
import Navigation from '@/components/Navigation';

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
    <div ref={containerRef} className="relative">
      <Navigation currentZone={currentZone} />
      <DepthMeter progress={scrollProgress} />
      
      <HeroSection />
      <EpipelagicZone />
      <MesopelagicZone />
      <BathypelagicZone />
      <AbyssopelagicZone />
      <HadopelagicZone />
    </div>
  );
};
