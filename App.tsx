import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurRoots from './components/OurRoots';
import LegacyTimeline from './components/Timeline';
import BentoGrid from './components/BentoGrid';
import LivePulse from './components/LivePulse';
import ContributionHub from './components/DonationHub';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-stone-200 selection:text-stone-900">
      <Header />
      <main>
        {/* Dark Hero */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* Light Sections Start */}
        <section id="roots" className="py-32 bg-[#F5F5F0]">
          <div className="container mx-auto px-6">
            <OurRoots />
          </div>
        </section>

        <section id="legacy" className="py-32 bg-[#F5F5F0] border-t border-stone-200/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">30 Years of Dignity</span>
              <h2 className="serif text-5xl md:text-8xl text-[#121212]">Our Journey</h2>
            </div>
            <LegacyTimeline />
          </div>
        </section>

        <section id="programs" className="py-32 bg-[#F5F5F0] border-t border-stone-200/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-earthy-green font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Our Objectives</span>
                <h2 className="serif text-5xl md:text-7xl text-[#121212]">Core Pillars</h2>
              </div>
              <p className="max-w-md text-stone-600 text-lg leading-relaxed italic">
                A multi-faceted approach to tribal upliftment, ensuring legal protection and economic self-sufficiency.
              </p>
            </div>
            <BentoGrid />
          </div>
        </section>

        <section id="live" className="py-32 bg-[#F5F5F0] border-t border-stone-200/50">
          <div className="container mx-auto px-6">
            <LivePulse />
          </div>
        </section>

        <section id="support" className="py-32 bg-[#F5F5F0] border-t border-stone-200/50">
          <div className="container mx-auto px-6">
            <ContributionHub />
          </div>
        </section>
        {/* Light Sections End */}
      </main>
      
      {/* Dark Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;