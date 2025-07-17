import React, { useEffect, useState, useRef } from 'react';
import { Waves, Ship, Anchor, Microscope, Globe } from 'lucide-react';

const timelineData = [
  {
    id: 5,
    date: "1492",
    title: "Columbus Crosses the Atlantic",
    description: "Christopher Columbus crosses the Atlantic, opening the Americas to European exploration and changing world history.",
    icon: <Ship className="w-5 h-5" />,
    category: "Age of Exploration",
    era: "🚢 Age of Exploration (1500–1800)"
  },
  {
    id: 6,
    date: "1519–1522",
    title: "First Circumnavigation",
    description: "Magellan-Elcano Expedition completes the first circumnavigation of the Earth, proving the world's spherical nature.",
    icon: <Globe className="w-5 h-5" />,
    category: "Age of Exploration",
    era: "🚢 Age of Exploration (1500–1800)"
  },
  {
    id: 9,
    date: "1872–1876",
    title: "HMS Challenger Expedition",
    description: "First true oceanographic expedition, establishing oceanography as a science and mapping ocean depths.",
    icon: <Anchor className="w-5 h-5" />,
    category: "Scientific Age",
    era: "⚓ Scientific and Industrial Age (1800–1900)"
  },
  {
    id: 10,
    date: "1893–1896",
    title: "Nansen's Arctic Studies",
    description: "Fridtjof Nansen's Fram expedition studies Arctic Ocean currents and ice, advancing polar oceanography.",
    icon: <Waves className="w-5 h-5" />,
    category: "Scientific Age",
    era: "⚓ Scientific and Industrial Age (1800–1900)"
  },
  {
    id: 11,
    date: "1912",
    title: "Titanic Disaster",
    description: "Sinking of the Titanic highlights dangers of icebergs and poor maritime safety, leading to improved regulations.",
    icon: <Ship className="w-5 h-5" />,
    category: "Modern Era",
    era: "🔬 Modern Oceanography and Tech Era (1900–1950)"
  },
  {
    id: 14,
    date: "1943",
    title: "Aqua-Lung Invention",
    description: "Aqua-Lung (scuba) co-invented by Jacques Cousteau and Émile Gagnan, enabling underwater exploration.",
    icon: <Waves className="w-5 h-5" />,
    category: "Modern Era",
    era: "🔬 Modern Oceanography and Tech Era (1900–1950)"
  },
  {
    id: 16,
    date: "1970",
    title: "First Earth Day",
    description: "First Earth Day brings ocean conservation into public discourse, raising environmental awareness.",
    icon: <Globe className="w-5 h-5" />,
    category: "Deep Sea Era",
    era: "🌐 Deep Sea & Environmental Awareness (1950–2000)"
  },
  {
    id: 17,
    date: "1972",
    title: "MARPOL Convention",
    description: "MARPOL (Marine Pollution Convention) signed to control sea pollution and protect marine environments.",
    icon: <Waves className="w-5 h-5" />,
    category: "Deep Sea Era",
    era: "🌐 Deep Sea & Environmental Awareness (1950–2000)"
  },
  {
    id: 18,
    date: "1982",
    title: "UNCLOS Established",
    description: "UNCLOS (UN Convention on the Law of the Sea) established maritime zones and seabed rights internationally.",
    icon: <Globe className="w-5 h-5" />,
    category: "Deep Sea Era",
    era: "🌐 Deep Sea & Environmental Awareness (1950–2000)"
  },
  {
    id: 19,
    date: "1997",
    title: "The Bloop Detected",
    description: "NOAA detects mysterious deep-sea sound called 'The Bloop', sparking scientific curiosity about ocean mysteries.",
    icon: <Microscope className="w-5 h-5" />,
    category: "Deep Sea Era",
    era: "🌐 Deep Sea & Environmental Awareness (1950–2000)"
  },
  {
    id: 20,
    date: "2000s",
    title: "Advanced Ocean Technology",
    description: "Widespread use of satellites, ROVs, and AUVs for ocean mapping and exploration revolutionizes marine science.",
    icon: <Globe className="w-5 h-5" />,
    category: "21st Century",
    era: "🌍 21st Century – Technology, Climate, and Conservation (2000–Present)"
  },
  {
    id: 21,
    date: "2012",
    title: "Cameron's Solo Dive",
    description: "James Cameron dives solo to the Mariana Trench in Deepsea Challenger, advancing deep-sea exploration technology.",
    icon: <Anchor className="w-5 h-5" />,
    category: "21st Century",
    era: "🌍 21st Century – Technology, Climate, and Conservation (2000–Present)"
  },
  {
    id: 22,
    date: "2016",
    title: "Ocean Cleanup Project",
    description: "Ocean Cleanup project begins efforts to remove plastic from the Great Pacific Garbage Patch, addressing pollution.",
    icon: <Waves className="w-5 h-5" />,
    category: "21st Century",
    era: "🌍 21st Century – Technology, Climate, and Conservation (2000–Present)"
  },
  
  {
    id: 24,
    date: "2020",
    title: "Seabed 2030 Project",
    description: "Seabed 2030 Project aims to map the entire ocean floor by 2030, advancing our understanding of Earth's oceans.",
    icon: <Globe className="w-5 h-5" />,
    category: "21st Century",
    era: "🌍 21st Century – Technology, Climate, and Conservation (2000–Present)"
  }
];

function TimelineItemComponent({ item, index, isVisible }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-full md:w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
        <div className={`
          bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8
          transform transition-all duration-700 ease-out shadow-xl hover:shadow-2xl
          hover:shadow-cyan-500/10 hover:border-cyan-400/30
          ${isVisible
            ? 'translate-y-0 opacity-100'
            : `${isEven ? 'translate-x-8' : '-translate-x-8'} translate-y-8 opacity-0`
          }
        `}>
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full border border-cyan-400/30 mr-4">
              <div className="text-cyan-400">{item.icon}</div>
            </div>
            <div>
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wide">{item.category}</span>
              <p className="text-slate-300 text-sm font-medium">{item.date}</p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
          <p className="text-slate-300 leading-relaxed">{item.description}</p>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className={`
          w-6 h-6 rounded-full border-4 border-cyan-400 bg-slate-900
          transform transition-all duration-500 ease-out
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}>
          <div className="w-full h-full rounded-full bg-cyan-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default function Timelines() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const itemId = parseInt(entry.target.getAttribute('data-id') || '0');
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, itemId]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const groupedTimeline = timelineData.reduce((acc, item) => {
    if (!acc[item.era]) acc[item.era] = [];
    acc[item.era].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-x-hidden">
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className="relative z-10 text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Ocean <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Exploration</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Journey through humanity's quest to understand and explore Earth's vast oceans...
        </p>
      </header>

      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent h-full"></div>

        {Object.entries(groupedTimeline).map(([era, items]) => (
          <div key={era} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 inline-block">
                {era}
              </h2>
            </div>

            {items.map((item) => {
              const globalIndex = timelineData.findIndex(t => t.id === item.id);
              return (
                <div
                  key={item.id}
                  ref={(el) => itemRefs.current[globalIndex] = el}
                  data-id={item.id}
                >
                  <TimelineItemComponent
                    item={item}
                    index={globalIndex}
                    isVisible={visibleItems.has(item.id)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}