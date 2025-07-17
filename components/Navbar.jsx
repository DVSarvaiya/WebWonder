'use client'
import { useState } from 'react'
import { Home, Heart, Search, Cpu, User } from 'lucide-react'

const pages = [
  { name: 'Home', icon: <Home size={20} />, path: '#home' },
  { name: 'Creatures', icon: <Heart size={20} />, path: '#creatures' },
  { name: 'Explore', icon: <Search size={20} />, path: '#explore' },
  { name: 'Technologies', icon: <Cpu size={20} />, path: '#tech' },
  { name: 'About Us', icon: <User size={20} />, path: '#about' }
]

const gradientClasses = [
  'from-purple-600 to-indigo-600',
  'from-pink-600 to-purple-700',
  'from-amber-600 to-yellow-800',
  'from-cyan-600 to-blue-800',
  'from-teal-500 to-blue-700'
]

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav className="fixed top-7.5 right-7.5 z-50">
      <div className="flex space-x-4 bg-black/10 px-5 py-3 rounded-full backdrop-blur-md shadow-2xl border border-cyan-500">
        {pages.map((page, index) => (
          <button
            key={page.name}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? `bg-gradient-to-r ${gradientClasses[index]} text-white`
                : 'text-white/50'
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
