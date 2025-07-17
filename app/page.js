'use client'
import FishScene from '@/components/FishScene'
import Bubbles from '@/components/Bubbles'
import AboutSection from '@/components/UnseenWorld'
import Footer from '@/components/Footer'
import Timelines from '@/components/Timelines'
import NavBar from '@/components/Navbar'
import ClientTestimonials from '@/components/ClientTestimonials'
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    return () => {
      // Clean up on unmount
      lenis.destroy();
    };
  }, []);
  
  return (
    <main className="relative w-full bg-[#000000] text-white font-sans">
      {/* Background bubbles or animations could go here */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Optional: Add bubble animations or a canvas with particles */}
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Left Content */}
        <div className="relative z-20 max-w-2xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-4">
              Leading Ocean Technology Solutions
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300">
              Deep Ocean
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Innovation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
            Pioneering the future of marine exploration through cutting-edge technology, 
            sustainable solutions, and unparalleled expertise in deep-sea research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Explore Solutions
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400/50 hover:border-cyan-400 rounded-lg font-semibold text-cyan-300 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Trusted by 500+ Organizations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>

        {/* Right Content - Keep existing 3D elements */}
        <div className="relative z-10 flex-1 h-full">
          <Bubbles />
          <FishScene />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 px-8 lg:px-16 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Leading the Industry in Ocean Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence drives measurable results across global marine operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2.5M+</div>
              <div className="text-gray-300">Ocean Data Points</div>
              <div className="text-sm text-gray-500 mt-1">Collected Daily</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-300">Countries Served</div>
              <div className="text-sm text-gray-500 mt-1">Global Presence</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
              <div className="text-sm text-gray-500 mt-1">Enterprise Grade</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
              <div className="text-sm text-gray-500 mt-1">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Comprehensive Ocean Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From deep-sea exploration to marine conservation, we provide end-to-end solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-slate-800/20 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Deep-Sea Analytics</h3>
              <p className="text-gray-300 mb-6">Advanced AI-powered analysis of ocean data for research institutions and marine organizations worldwide.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="group p-8 bg-slate-800/20 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">ROV Technology</h3>
              <p className="text-gray-300 mb-6">State-of-the-art remotely operated vehicles for underwater exploration and industrial applications.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="group p-8 bg-slate-800/20 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Conservation Tech</h3>
              <p className="text-gray-300 mb-6">Innovative solutions for marine ecosystem protection and sustainable ocean resource management.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Existing sections with enhanced styling */}
      <div className="relative">
        <AboutSection />
        <Timelines />
        <Footer />
      </div>
    </main>
  )
}
