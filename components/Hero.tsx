
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
      if (!heroRef.current) return;
      // Calculate progress based on window scroll relative to viewport height
      // Progress 0 is top of page, 1 is one full viewport scrolled
      const progress = window.scrollY / window.innerHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use progress to calculate parallax values
  // We cap the progress for scaling so it doesn't zoom infinitely, 
  // but allow translation to continue smoothly.
  const cappedProgress = Math.min(Math.max(scrollProgress, 0), 2);
  
  // Parallax: Image moves slower than the scroll. 
  // We use percentage-based translation for better responsiveness across screen sizes.
  const parallaxY = scrollProgress * 20; // Moves 20% of the viewport height relative to scroll
  const parallaxScale = 1.1 + (cappedProgress * 0.1); // Starts at 1.1, zooms slightly

  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
          alt="Traditional Weaving"
          loading="lazy"
          className="absolute inset-0 w-full h-[140%] object-cover grayscale opacity-40 will-change-transform"
          style={{
            // translate3d for GPU acceleration. top: -20% gives us 20% buffer above and below.
            transform: `translate3d(0, ${parallaxY}%, 0) scale(${parallaxScale})`,
            top: '-20%', 
            transition: 'transform 0.1s cubic-bezier(0.1, 0, 0.3, 1)',
          }}
        />
        {/* Hero Image Caption */}
        <div className="absolute bottom-24 right-8 z-20 hidden md:block">
          <div className="bg-black/80 backdrop-blur-md px-4 py-2 border-l-2 border-stone-100">
            <p className="serif text-white text-sm italic tracking-wide">
              Legacy of Craft: Traditional Weaving, North East India
            </p>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 z-10"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08) 0%, transparent 80%)`
        }}
      />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="overflow-hidden mb-8">
          <h1 className="serif text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.9] tracking-tighter opacity-90 animate-fade-in-up">
            Towards a <br /> Better Goal.
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="max-w-2xl mx-auto text-stone-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            Since 1993, restoring dignity and providing relief to the displaced and underprivileged of North East India.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="#legacy"
              className="group relative px-12 py-5 bg-transparent border border-stone-700 overflow-hidden rounded-sm transition-all duration-500 hover:border-stone-100"
            >
              <span className="relative z-10 text-stone-100 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-black transition-colors duration-500">
                Explore Our Impact
              </span>
              <div className="absolute inset-0 bg-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </a>
            
            <a 
              href="#support"
              className="group text-stone-100 text-[10px] font-black uppercase tracking-[0.3em] border-b border-stone-800 pb-2 hover:border-stone-100 transition-all duration-500"
            >
              Contribute Now
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30 animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-stone-400 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-20"></div>
    </div>
  );
};

export default Hero;
