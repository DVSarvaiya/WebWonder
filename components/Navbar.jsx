'use client'
import { useState } from 'react'
import { Home, Search, Cpu, User, FishIcon } from 'lucide-react'

const pages = [
  { name: 'Home', icon: Home },
  { name: 'Creatures', icon: FishIcon },
  { name: 'Explore', icon: Search },
  { name: 'Technologies', icon: Cpu },
  { name: 'About Us', icon: User }
]

const gradients = [
  'from-indigo-500 to-blue-500',
  'from-teal-500 to-green-500',
  'from-pink-500 to-red-500',
  'from-yellow-500 to-orange-500',
  'from-purple-500 to-fuchsia-500'
]

export default function NavBar() {
  const [active, setActive] = useState(0)

  return (
    <nav className="fixed top-7.5 left-1/3 z-50">
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
