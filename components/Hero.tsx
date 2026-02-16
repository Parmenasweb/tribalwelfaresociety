import React, { useState, useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / window.innerHeight;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxY = scrollProgress * 30;
  const parallaxScale = 1.1 + (Math.min(scrollProgress, 1.5) * 0.1);

  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
          alt="Traditional Weaving"
          className="absolute inset-0 w-full h-[140%] object-cover grayscale opacity-30 mix-blend-overlay"
          style={{
            transform: `translate3d(0, ${parallaxY}%, 0) scale(${parallaxScale})`,
            top: '-20%', 
            transition: 'transform 0.1s cubic-bezier(0.1, 0, 0.3, 1)',
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(210,105,30,0.1) 0%, transparent 80%)`
        }}
      />

      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Colorful Logo Placeholder */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
           <div className="w-24 h-24 bg-gradient-to-tr from-[#D2691E] via-[#D4AF37] to-[#556B2F] rounded-full p-[2px] shadow-2xl">
              <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center">
                 <span className="serif text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-[#D2691E] via-[#D4AF37] to-[#556B2F]">TWS</span>
              </div>
           </div>
        </div>

        <div className="overflow-hidden mb-8">
          <h1 className="serif text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter text-white/95 animate-fade-in-up">
            Towards a <br /> <span className="text-[#D4AF37]">Better Goal.</span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="max-w-2xl mx-auto text-stone-400 text-lg md:text-2xl font-light leading-relaxed mb-16">
            Empowering the displaced and underprivileged since 1993. Restoring human dignity through craft and justice.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <a 
              href="#legacy"
              className="group relative px-14 py-6 bg-transparent border border-stone-600 rounded-full transition-all duration-500 hover:border-[#D4AF37]"
            >
              <span className="relative z-10 text-stone-100 text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-[#121212] transition-colors duration-500">
                Explore Impact
              </span>
              <div className="absolute inset-0 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </a>
            
            <a 
              href="#support"
              className="group text-[#D2691E] text-[11px] font-bold uppercase tracking-[0.4em] flex items-center gap-3 hover:text-white transition-colors duration-500"
            >
              Contribute
              <div className="w-10 h-[1px] bg-stone-700 group-hover:w-16 group-hover:bg-[#D2691E] transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.6em] text-stone-300 font-medium">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;