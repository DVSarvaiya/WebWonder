'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const clients = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Marine Scientist",
    company: "National Ocean Research Institute",
    testimonial: "OceanTech's deep-sea analytics platform has revolutionized our research capabilities. The precision and depth of data analysis is unmatched in the industry.",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    name: "Michael Rodriguez",
    title: "Director of Operations",
    company: "Global Marine Solutions",
    testimonial: "Their ROV technology has enabled us to explore previously inaccessible depths. The reliability and innovation consistently exceed our expectations.",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    name: "Prof. Elena Kowalski",
    title: "Lead Oceanographer",
    company: "Arctic Research Foundation",
    testimonial: "The conservation technology solutions have been instrumental in our environmental protection initiatives. Truly cutting-edge work.",
    rating: 5,
    image: "/api/placeholder/60/60"
  }
]

const partnerLogos = [
  { name: "NOAA", logo: "🌊" },
  { name: "UNESCO", logo: "🏛️" },
  { name: "WWF", logo: "🐼" },
  { name: "National Geographic", logo: "🌍" },
  { name: "Scripps Institution", logo: "🔬" },
  { name: "Woods Hole", logo: "⚓" }
]

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % clients.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % clients.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + clients.length) % clients.length)
  }

  return (
    <section className="relative py-20 px-8 lg:px-16 bg-gradient-to-b from-slate-900/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Partner Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-400 mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center w-20 h-20 bg-slate-800/30 rounded-lg border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from the researchers, scientists, and organizations who trust our technology
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-800/20 rounded-2xl p-8 md:p-12 border border-cyan-500/20 backdrop-blur-sm">
            <div className="flex items-start mb-6">
              <Quote className="w-8 h-8 text-cyan-400 mr-4 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-xl text-gray-200 leading-relaxed mb-6">
                  "{clients[currentTestimonial].testimonial}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < clients[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {clients[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{clients[currentTestimonial].name}</h4>
                    <p className="text-gray-400">{clients[currentTestimonial].title}</p>
                    <p className="text-cyan-400 text-sm">{clients[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {clients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Ocean Operations?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations worldwide who trust OceanTech for their marine exploration and research needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Schedule a Demo
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400/50 hover:border-cyan-400 rounded-lg font-semibold text-cyan-300 hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}