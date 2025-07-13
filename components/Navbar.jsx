export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-30 w-full px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md">
      <h1 className="text-2xl font-bold tracking-wide">🌊 Abyssal Odyssey</h1>
      <ul className="flex gap-6 text-sm font-light">
        <li className="hover:text-cyan-300 cursor-pointer">Explore</li>
        <li className="hover:text-cyan-300 cursor-pointer">About</li>
        <li className="hover:text-cyan-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}
