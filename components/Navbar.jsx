'use client'
import { useState } from 'react'
import { Home, Heart, Search, Cpu, User, FishIcon, Menu, X } from 'lucide-react'

const pages = [
  { name: 'Home', icon: <Home size={18} />, path: '#home' },
  { name: 'Solutions', icon: <Cpu size={18} />, path: '#solutions' },
  { name: 'Technology', icon: <Search size={18} />, path: '#technology' },
  { name: 'Research', icon: <FishIcon size={18} />, path: '#research' },
  { name: 'About', icon: <User size={18} />, path: '#about' }
]

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <FishIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">OceanTech</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {pages.map((page, index) => (
                  <button
                    key={page.name}
                    onClick={() => setActiveIndex(index)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeIndex === index
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {page.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-medium transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/20 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {pages.map((page, index) => (
                <button
                  key={page.name}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 ${
                    activeIndex === index
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-3">{page.icon}</span>
                  {page.name}
                </button>
              ))}
              <div className="pt-4 pb-2">
                <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-medium transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}
