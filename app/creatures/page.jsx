'use client'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

// Ocean aurora background
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-0 w-[140vw] h-[110vh] -translate-x-1/2"
        initial={{ opacity: 0.85 }}
        animate={{
          opacity: [0.5, 0.75, 0.68, 0.55, 0.75],
          filter: [
            'blur(34px) hue-rotate(0deg)',
            'blur(60px) hue-rotate(20deg)',
            'blur(60px) hue-rotate(-12deg)',
            'blur(44px) hue-rotate(18deg)',
            'blur(34px) hue-rotate(0deg)'
          ]
        }}
        transition={{ repeat: Infinity, duration: 13, ease: "easeInOut" }}
        style={{
          background: 'radial-gradient(ellipse at 50% 13%, #5eead4bb, #0ea5e9 62%, #0c1a2e 100%)'
        }}
      />
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/15 shadow-md"
          style={{
            width: `${18 + Math.random() * 24}px`,
            height: `${18 + Math.random() * 24}px`,
            left: `${Math.random() * 100}vw`,
            bottom: `-${Math.random() * 80}px`
          }}
          initial={{ y: 0, opacity: 0.16 + Math.random() * 0.51 }}
          animate={{ y: -1250 - Math.random() * 650, opacity: 0 }}
          transition={{
            duration: 12 + Math.random() * 9,
            repeat: Infinity,
            delay: i * 0.73
          }}
        />
      ))}
    </div>
  )
}

// Card animation variants — no filter/blur on hover now
const floatVariants = {
  idle: {
    y: [0, -12, 0, 14, 0],
    transition: {
      y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" }
    },
    scale: 1,
    boxShadow: "0 12px 40px 0 rgba(24,97,122,0.17), 0 1px 4px 0 rgba(44,137,170,0.08)"
  },
  hover: {
    y: -26,
    scale: 1.07,
    boxShadow: "0 44px 92px 0 rgba(44,137,170,0.29), 0 20px 50px 0 rgba(74,217,235,0.21)",
    transition: {
      type: "spring",
      stiffness: 144,
      damping: 16
    }
  }
}

function FloatingWaterCard({ creature }) {
  const controls = useAnimation();
  useEffect(() => { controls.start("idle"); }, [controls]);
  return (
    <motion.div
      className="group relative w-full max-w-xs md:max-w-md flex flex-col items-center bg-gradient-to-br from-sky-900/85 to-cyan-700/90
      rounded-3xl shadow-2xl py-10 px-3 md:py-12 md:px-10 my-4 md:my-12 overflow-hidden border-2 border-cyan-300/50 
      hover:border-cyan-100/70 transition-all duration-300"
      variants={floatVariants}
      initial="idle"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("idle")}
      style={{ backgroundClip: 'padding-box' }}
    >
      {/* Water shine overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl"
        animate={{
          background: [
            "radial-gradient(ellipse at 35% 65%, rgba(209,250,250,0.17) 0, transparent 88%)",
            "radial-gradient(ellipse at 74% 32%, rgba(190,245,255,0.15) 0, transparent 92%)",
            "radial-gradient(ellipse at 24% 79%, rgba(190,245,255,0.09) 0, transparent 90%)"
          ]
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ zIndex: 1 }}
      />
      {/* Image with NO blur/brightness filter on hover */}
      <motion.div
        className="relative w-full h-44 md:h-52 flex-shrink-0 mb-6 mx-auto overflow-hidden rounded-2xl z-10 shadow-lg"
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.22, ease: [0.43, 0.18, 0.24, 0.98] }
        }}
        whileTap={{
          scale: 0.98
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <Image
          src={creature.img}
          alt={creature.name}
          fill
          className="object-cover"
          sizes="(max-width: 700px) 100vw, 340px"
          style={{ transition: 'transform 0.28s' }}
        />
      </motion.div>
      <div className="flex-1 z-10 text-left">
        <h2 className="text-3xl md:text-4xl font-black mb-2 capitalize tracking-wide drop-shadow-xl
          bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-200 text-transparent bg-clip-text
        ">
          {creature.name}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed font-medium px-2 py-2 rounded
          text-cyan-100 drop-shadow
          bg-gradient-to-r from-cyan-900/20 via-cyan-100/10 to-blue-400/10">
          {creature.desc}
        </p>
      </div>
    </motion.div>
  )
}

const creatures = [
  {
    name: "Anglerfish",
    desc: "Anglerfish are elusive predators of the deep sea, instantly recognized by their luminescent lure dangling from the forehead. This adaptation attracts prey in pitch darkness. Females are much larger than males, who often fuse to them in a bizarre parasitic partnership. They thrive in immense pressure and utter dark, showcasing nature's most extreme forms.",
    img: "/fishimages/angulerfish.png"
  },
  {
    name: "Giant Squid",
    desc: "The Giant Squid is legendary, rarely seen alive, and can surpass 12 meters in length. It has the largest eyes in the animal kingdom—helping it spot faint light in the abyss. With long tentacles armed with suckers, it's a powerful, mysterious predator that has inspired centuries of sea monster tales.",
    img: "/fishimages/giantsquid.png"
  },
  {
    name: "Goblin Shark",
    desc: "Goblin Sharks—often called \"living fossils\"—have a flat snout and extendable jaws filled with nail-like teeth. This odd shark thrives in deep waters, hunting prey with both speed and a unique jaw mechanism that thrusts forward with lightning quickness.",
    img: "/fishimages/goblinshark.png"
  },
  {
    name: "Vampire Squid",
    desc: "Despite its name, the Vampire Squid is a gentle, small cephalopod living in the ocean's oxygen-poor depths. Its cloak-like webbing and glowing blue-red eyes create a mystical appearance. Rather than hunting, it feeds on drifting marine detritus.",
    img: "/fishimages/vampiresquid.png"
  },
  {
    name: "Dumbo Octopus",
    desc: "The Dumbo Octopus uses its ear-like fins to gracefully glide above the seafloor, often deeper than any other octopus. Its gentle, whimsical appearance belies a resilient creature perfectly adapted to the crushing pressure and cold of the abyss.",
    img: "/fishimages/dumbooctopus.png"
  }
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#061221] via-blue-950 to-[#030917] text-white font-sans overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen px-0">
        <motion.h1
          className="w-full text-center text-transparent bg-gradient-to-r from-cyan-200 via-blue-400 to-fuchsia-200 bg-clip-text text-4xl md:text-6xl lg:text-7xl font-black tracking-tight py-8 md:py-16 mb-2 drop-shadow-2xl animate-gradient-x"
          initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block animate-gradient-text">DEEP SEA CREATURES</span>
        </motion.h1>
        <div
          className={`
            w-full
            flex
            flex-row
            flex-wrap
            gap-8
            px-4 md:px-8 pb-20 mt-4
            justify-center
            items-stretch
            scroll-smooth
            scrollbar-thin scrollbar-thumb-cyan-700 scrollbar-track-transparent
          `}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {creatures.map((c) => (
            <FloatingWaterCard key={c.name} creature={c} />
          ))}
        </div>
      </div>
      {/* Gradient animation for headline (optional, delete if not needed) */}
      <style jsx global>{`
        .animate-gradient-x {
          background-size: 300% 300%;
          animation: gradxmove 8s ease-in-out infinite;
        }
        @keyframes gradxmove {
          0% { background-position: 0% 55%; }
          45% { background-position: 100% 50%; }
          55% { background-position: 100% 50%; }
          100% { background-position: 0% 55%; }
        }
        .animate-gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </main>
  )
}
