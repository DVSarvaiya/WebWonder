import React from 'react';
import { Github, Twitter, Instagram, Facebook, Mail, Phone, MapPin, FishIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900/50 to-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FishIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">OceanTech</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Leading the future of marine exploration through innovative technology, sustainable solutions, and cutting-edge research. Transforming how we understand and protect our oceans.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>contact@oceantech.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Deep-Sea Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">ROV Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Conservation Tech</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Marine Monitoring</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Data Visualization</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Leadership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">News & Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Investor Relations</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-8">
              Get the latest insights on ocean technology, research breakthroughs, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              &copy; 2024 OceanTech Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;