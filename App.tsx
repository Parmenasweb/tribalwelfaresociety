
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LegacyTimeline from './components/Timeline';
import BentoGrid from './components/BentoGrid';
import LivePulse from './components/LivePulse';
import ContributionHub from './components/DonationHub';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-stone-700 selection:text-white">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="legacy" className="py-24 bg-[#121212]">
          <div className="container mx-auto px-6">
            <h2 className="serif text-5xl md:text-7xl mb-16 text-center opacity-80">Our Legacy</h2>
            <LegacyTimeline />
          </div>
        </section>

        <section id="programs" className="py-24 bg-[#0d0d0d]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <h2 className="serif text-5xl md:text-7xl">Core Pillars</h2>
              <p className="max-w-md text-stone-400 text-lg">
                For three decades, we have focused on holistic empowerment through sustainable and legal frameworks.
              </p>
            </div>
            <BentoGrid />
          </div>
        </section>

        <section id="live" className="py-24 bg-[#121212]">
          <div className="container mx-auto px-6">
            <LivePulse />
          </div>
        </section>

        <section id="support" className="py-24 bg-[#0d0d0d] border-t border-stone-800/50">
          <div className="container mx-auto px-6">
            <ContributionHub />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
