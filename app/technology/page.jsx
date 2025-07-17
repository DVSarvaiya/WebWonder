'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const problems = [
  {
    title: "Plastic Pollution",
    image: "/images/plastic.jpg",
    problem: "Millions of tons dumped yearly, harming wildlife.",
    solution: "Ban single-use plastic, enhance recycling, river intercepts.",
    icon: "🧴",
  },
  {
    title: "Ocean Acidification",
    image: "/images/acid.jpg",
    problem: "CO₂ lowers pH, damaging corals & shellfish.",
    solution: "Cut emissions, restore reefs, protect mangroves.",
    icon: "🌡️",
  },
  {
    title: "Overfishing",
    image: "/images/overfishing.jpg",
    problem: "Excess fishing disrupts balance and food webs.",
    solution: "Sustainable quotas, marine reserves, end illegal fishing.",
    icon: "🐟",
  },
  {
    title: "Climate Change",
    image: "/images/climate.jpg",
    problem: "Warming seas, rising levels, stronger storms.",
    solution: "Expand renewables, protect coastlines, community resilience.",
    icon: "🌪️",
  },
  {
    title: "Chemical Runoff",
    image: "/images/chemical.jpg",
    problem: "Fertilizers & pesticides enter seas causing dead zones.",
    solution: "Eco-friendly farming, buffer zones, regulate industries.",
    icon: "🧪",
  },
  {
    title: "Marine Traffic & Noise",
    image: "/images/noise.jpg",
    problem: "Ship noise disrupts whale & dolphin communication.",
    solution: "Quieter engines, marine traffic zones, sound monitoring.",
    icon: "🚢",
  },
];

export default function OceanProblems() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center px-6 py-20 overflow-x-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #173753 0%, #0f2340 60%, #0a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl w-full text-white relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center drop-shadow-2xl text-cyan-200 mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌊 Ocean Problems & Solutions
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl font-medium text-center text-cyan-300 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Discover the threats to our oceans—and the solutions we can support.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative bg-[rgba(10,30,60,0.85)] border-2 border-[#2a527f] shadow-lg rounded-3xl overflow-hidden text-blue-100 transition-transform duration-300 hover:scale-[1.045] hover:shadow-2xl"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <motion.div
                className="relative h-44 w-full"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031722cc] to-transparent pointer-events-none" />
              </motion.div>
              <div className="p-6 flex flex-col justify-between h-[200px]">
                <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-cyan-100">
                  {item.title}
                </h2>
                <div className="text-blue-300 mb-2">
                  <span className="font-semibold text-cyan-200">Problem: </span> {item.problem}
                </div>
                <div className="text-lime-400">
                  <span className="font-semibold">Solution: </span> {item.solution}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="text-center text-blue-300 text-sm mt-24 mb-5 drop-shadow-xl relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          &copy; 2025 Ocean Guardians | One Earth. One Ocean. 💙
        </motion.footer>
      </div>
    </main>
  )
}
