'use client'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Bubbles from './Bubbles'
import Lenis from 'lenis'

export default function Layout({ children, showBubbles = true, showFooter = true }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white font-sans">
      {/* Unified Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      </div>

      {/* Bubbles Animation */}
      {showBubbles && <Bubbles />}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  )
}