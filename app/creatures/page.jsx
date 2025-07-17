'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const creatures = [
  {
    id: 1,
    name: 'Anglerfish',
    scientificName: 'Lophiiformes',
    depth: '200-2000m',
    description: 'Known for their bioluminescent lure, these deep-sea predators use light to attract prey in the darkness.',
    image: '/fishimages/anglerfish.jpg',
    facts: [
      'Can unhinge their jaws to swallow prey twice their size',
      'Some species have males that permanently fuse to females',
      'Their light is produced by symbiotic bacteria'
    ]
  },
  {
    id: 2,
    name: 'Giant Squid',
    scientificName: 'Architeuthis dux',
    depth: '300-1000m',
    description: 'The largest invertebrate on Earth, these mysterious creatures have captured human imagination for centuries.',
    image: '/fishimages/giant-squid.jpg',
    facts: [
      'Can grow up to 43 feet long',
      'Has the largest eyes in the animal kingdom',
      'Battles with sperm whales in the deep ocean'
    ]
  },
  {
    id: 3,
    name: 'Vampire Squid',
    scientificName: 'Vampyrotuthis infernalis',
    depth: '600-900m',
    description: 'Despite its name, this creature feeds on marine snow and organic debris, not blood.',
    image: '/fishimages/vampire-squid.jpg',
    facts: [
      'Can turn itself inside out when threatened',
      'Lives in oxygen minimum zones',
      'Has bioluminescent photophores'
    ]
  },
  {
    id: 4,
    name: 'Blobfish',
    scientificName: 'Psychrolutes marcidus',
    depth: '600-1200m',
    description: 'Famous for its gelatinous appearance when brought to surface, it looks normal at depth.',
    image: '/fishimages/blobfish.jpg',
    facts: [
      'Its body is mostly gelatinous mass',
      'Lacks muscles and swims by opening its mouth',
      'Voted "world\'s ugliest animal" in 2013'
    ]
  },
  {
    id: 5,
    name: 'Gulper Eel',
    scientificName: 'Eurypharynx pelecanoides',
    depth: '500-3000m',
    description: 'Can unhinge its massive jaw to swallow prey much larger than itself.',
    image: '/fishimages/gulper-eel.jpg',
    facts: [
      'Can open its mouth wide enough to swallow large fish',
      'Has a bioluminescent organ at the tip of its tail',
      'Can grow up to 6 feet long'
    ]
  },
  {
    id: 6,
    name: 'Dumbo Octopus',
    scientificName: 'Grimpoteuthis',
    depth: '3000-4000m',
    description: 'The deepest-living octopus, named for its ear-like fins that resemble Disney\'s Dumbo.',
    image: '/fishimages/dumbo-octopus.jpg',
    facts: [
      'Lives at the deepest depths of any octopus',
      'Uses its ear-like fins to propel through water',
      'Can change color and texture instantly'
    ]
  }
];

export default function CreaturesPage() {
  return (
    <Layout showBubbles={false}>
      <div className="min-h-screen pt-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Deep Sea Creatures
          </motion.h1>
          <motion.p 
            className="text-xl text-cyan-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the fascinating creatures that call the deep ocean home. From bioluminescent predators to gentle giants, 
            explore the amazing adaptations that allow life to thrive in Earth's most extreme environments.
          </motion.p>
        </div>

        {/* Creatures Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {creatures.map((creature, index) => (
            <motion.div
              key={creature.id}
              className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={creature.image}
                  alt={creature.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-fish.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{creature.name}</h3>
                  <p className="text-cyan-300 text-sm italic">{creature.scientificName}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    Depth: {creature.depth}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {creature.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-cyan-400 font-semibold">Amazing Facts:</h4>
                  <ul className="space-y-1">
                    {creature.facts.map((fact, factIndex) => (
                      <li key={factIndex} className="text-sm text-gray-400 flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Want to Learn More?</h2>
          <p className="text-cyan-300 text-lg mb-8">
            Explore our interactive dive experience or test your knowledge with our ocean quiz!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/dive'}
            >
              Experience Deep Dive
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/quiz'}
            >
              Take Ocean Quiz
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
