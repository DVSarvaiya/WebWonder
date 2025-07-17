'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Layout from '@/components/Layout'

const technologies = [
  {
    title: "Autonomous Underwater Vehicles (AUVs)",
    image: "/images/auv.jpg",
    description: "Self-navigating robots that can explore the deepest parts of the ocean without human intervention.",
    features: ["Deep sea exploration", "Scientific data collection", "Underwater mapping", "Environmental monitoring"],
    icon: "🤖",
  },
  {
    title: "Remotely Operated Vehicles (ROVs)",
    image: "/images/rov.jpg",
    description: "Tethered underwater robots controlled by operators on the surface, perfect for precise deep-sea operations.",
    features: ["Real-time video feed", "Precise manipulation", "Sample collection", "Deep-sea repairs"],
    icon: "🔧",
  },
  {
    title: "Submersibles",
    image: "/images/submersible.jpg",
    description: "Manned or unmanned vessels designed to operate underwater for extended periods.",
    features: ["Human exploration", "Scientific research", "Deep-sea tourism", "Marine archaeology"],
    icon: "🚁",
  },
  {
    title: "Sonar Technology",
    image: "/images/sonar.jpg",
    description: "Sound-based navigation and detection systems that map the ocean floor and locate objects.",
    features: ["Seafloor mapping", "Object detection", "Fish finding", "Navigation assistance"],
    icon: "📡",
  },
  {
    title: "Underwater Cameras",
    image: "/images/camera.jpg",
    description: "Specialized cameras designed to capture high-quality images and videos in extreme underwater conditions.",
    features: ["4K underwater recording", "Pressure resistance", "Low-light performance", "Marine life documentation"],
    icon: "📸",
  },
  {
    title: "Pressure Suits",
    image: "/images/pressure-suit.jpg",
    description: "Advanced protective equipment that allows humans to survive in high-pressure deep-sea environments.",
    features: ["Pressure protection", "Life support systems", "Mobility enhancement", "Emergency safety"],
    icon: "👨‍🚀",
  },
];

const solutions = [
  {
    title: "Plastic Pollution",
    problem: "Millions of tons dumped yearly, harming wildlife.",
    solution: "Ocean cleanup systems, plastic-eating bacteria, biodegradable alternatives.",
    icon: "🧴",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Ocean Acidification",
    problem: "CO₂ lowers pH, damaging corals & shellfish.",
    solution: "Carbon capture technology, artificial reefs, pH monitoring systems.",
    icon: "🌡️",
    color: "from-yellow-500 to-red-500"
  },
  {
    title: "Overfishing",
    problem: "Excess fishing disrupts balance and food webs.",
    solution: "Smart fishing nets, satellite monitoring, sustainable aquaculture.",
    icon: "🐟",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Climate Change",
    problem: "Warming seas, rising levels, stronger storms.",
    solution: "Renewable ocean energy, carbon sequestration, climate modeling.",
    icon: "🌪️",
    color: "from-green-500 to-blue-500"
  },
];

export default function TechnologyPage() {
  return (
    <Layout>
      <div className="min-h-screen pt-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ocean Technology
          </motion.h1>
          <motion.p 
            className="text-xl text-cyan-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the cutting-edge technologies that enable us to explore, understand, and protect our oceans. 
            From autonomous underwater vehicles to advanced sonar systems, these innovations are revolutionizing marine science.
          </motion.p>
        </div>

        {/* Technologies Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Exploration Technologies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{tech.icon}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-cyan-400 font-semibold">Key Features:</h4>
                    <ul className="space-y-1">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                          <span className="text-cyan-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Technology Solutions for Ocean Challenges
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center text-2xl`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Problem:</h4>
                    <p className="text-gray-300">{solution.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Tech Solution:</h4>
                    <p className="text-gray-300">{solution.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-cyan-300 text-lg mb-8">
            Experience these technologies in action or learn more about marine life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/dive'}
            >
              Virtual Dive Experience
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/creatures'}
            >
              Discover Creatures
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
