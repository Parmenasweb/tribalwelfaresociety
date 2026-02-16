
import React, { useState, useEffect, useRef } from 'react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  caption: string;
}

const milestones: Milestone[] = [
  {
    year: '1993',
    title: 'The Foundation',
    description: 'Established in response to the deep suffering of conflict-displaced tribal communities.',
    caption: 'First Relief Camp Mission, 1993'
  },
  {
    year: '2005',
    title: 'Handloom Heritage',
    description: 'Launch of the Traditional Weaving & Production Center to empower women through artisanal skills.',
    caption: 'Artisans at the Weaving Center'
  },
  {
    year: '2015',
    title: 'Legal Advocacy',
    description: 'Initiated legal education programs to protect the rights of the downtrodden and marginalized.',
    caption: 'Constitutional Rights Seminar'
  },
  {
    year: '2026',
    title: 'The Digital Future',
    description: 'Scaling our mission to reach global patrons and expand high-tech vocational training modules.',
    caption: 'Vision: Future Digital Hub'
  }
];

const LegacyTimeline: React.FC = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1);
      setLineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-12">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-stone-800 -translate-x-1/2 hidden md:block"></div>
      
      <div 
        className="absolute left-1/2 top-0 w-[1px] bg-stone-300 -translate-x-1/2 hidden md:block transition-all duration-300 ease-out"
        style={{ height: `${lineHeight}%`, opacity: lineHeight > 0 ? 1 : 0 }}
      ></div>
      
      <div className="space-y-24 md:space-y-48">
        {milestones.map((item, index) => (
          <div key={item.year} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 mb-8 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-[#121212] border border-stone-700 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                <span className="serif text-xl font-bold text-stone-100">{item.year}</span>
              </div>
            </div>

            <div className={`w-full md:w-[45%] text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} group`}>
              <h3 className="serif text-3xl md:text-4xl mb-4 group-hover:text-stone-300 transition-colors duration-500">{item.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed text-lg mb-8">
                {item.description}
              </p>
              
              <div className="relative overflow-hidden rounded-sm bg-stone-900 border border-stone-800 grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src={`https://picsum.photos/seed/${item.year}/800/400?grayscale`} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto opacity-40 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                {/* Milestone Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-left translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                  <div className="bg-white px-3 py-1 inline-block">
                    <p className="serif text-black text-xs font-bold italic">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyTimeline;
