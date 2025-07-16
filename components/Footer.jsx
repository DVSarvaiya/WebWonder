import React from 'react';
import { Github, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                <span className="text-xl">🪼</span>
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
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Explore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Conservation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Donate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <blockquote className="text-gray-400 italic text-lg mb-4">
            "The sea, once it casts its spell, holds one in its net of wonder forever."
          </blockquote>
          <cite className="text-cyan-400 font-semibold">— Jacques Cousteau</cite>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2024 Ocean Depths. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;