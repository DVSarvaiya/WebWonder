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
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
        {pages.map((page, index) => {
          const Icon = page.icon
          const isActive = index === active

          return (
            <button
              key={page.name}
              onClick={() => setActive(index)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${isActive ? `bg-gradient-to-r ${gradients[index]} text-white shadow-md` : 'text-white/70 hover:text-white hover:bg-white/10'}
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{page.name}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
