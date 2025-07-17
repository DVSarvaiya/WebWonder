import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm py-12 px-6 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                <span className="text-xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold text-white">Ocean Depths</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Exploring the mysteries of our oceans, one discovery at a time. Join us in uncovering the wonders beneath the waves.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/creatures" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Sea Creatures</Link></li>
              <li><Link href="/dive" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Virtual Dive</Link></li>
              <li><Link href="/ab" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Ocean Zones</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/technology" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Technology</Link></li>
              <li><Link href="/quiz" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Ocean Quiz</Link></li>
              <li><Link href="/demopage" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Demo</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Research</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Ocean Depths. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;