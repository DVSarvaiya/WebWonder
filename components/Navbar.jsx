'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Home, Heart, Search, Cpu, User, FishIcon, Brain, Waves } from 'lucide-react'

const pages = [
  { name: 'Home', icon: <Home size={20} />, path: '/' },
  { name: 'Creatures', icon: <FishIcon size={20} />, path: '/creatures' },
  { name: 'Dive', icon: <Waves size={20} />, path: '/dive' },
  { name: 'Technology', icon: <Cpu size={20} />, path: '/technology' },
  { name: 'Quiz', icon: <Brain size={20} />, path: '/quiz' },
  { name: 'About', icon: <User size={20} />, path: '/ab' }
]

const gradientClasses = [
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-violet-600',
  'from-pink-500 to-rose-600',
  'from-orange-500 to-amber-600'
]

export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  
  const getActiveIndex = () => {
    const index = pages.findIndex(page => page.path === pathname)
    return index !== -1 ? index : 0
  }

  const handleNavigation = (path, index) => {
    router.push(path)
  }

  const activeIndex = getActiveIndex()

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex space-x-2 bg-black/20 px-4 py-3 rounded-full backdrop-blur-md shadow-2xl border border-cyan-500/30">
        {pages.map((page, index) => (
          <button
            key={page.name}
            onClick={() => handleNavigation(page.path, index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
              activeIndex === index
                ? `bg-gradient-to-r ${gradientClasses[index]} text-white shadow-lg`
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {page.icon}
            {activeIndex === index && (
              <span className="text-sm font-semibold tracking-wide">{page.name}</span>
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
