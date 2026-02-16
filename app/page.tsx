import Header from '@/components/Header';
import SkipToContent from '@/components/SkipToContent';
import Hero from '@/components/Hero';
import OurRoots from '@/components/OurRoots';
import ImpactStats from '@/components/ImpactStats';
import LegacyTimeline from '@/components/Timeline';
import BentoGrid from '@/components/BentoGrid';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import LivePulse from '@/components/LivePulse';
import EnhancedDonation from '@/components/EnhancedDonation';
import ContactMap from '@/components/ContactMap';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-stone-200 dark:selection:bg-stone-700 selection:text-stone-900 dark:selection:text-stone-100 overflow-x-hidden">
      <SkipToContent />
      <Header />
      <main id="main-content" className="overflow-x-hidden">
        {/* Hero */}
        <section id="hero" className="overflow-x-hidden">
          <Hero />
        </section>
        
        {/* Light Sections Start */}
        <section id="roots" className="py-24 md:py-32 lg:py-40 bg-[#F5F5F0] dark:bg-stone-900 overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <OurRoots />
          </div>
        </section>

        {/* Impact Statistics */}
        <ImpactStats />

        <section id="legacy" className="py-24 md:py-32 lg:py-40 bg-[#F5F5F0] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">30 Years of Dignity</span>
              <h2 className="serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#121212] dark:text-stone-100">Our Journey</h2>
            </div>
            <LegacyTimeline />
          </div>
        </section>

        <section id="programs" className="py-24 md:py-32 lg:py-40 bg-[#F5F5F0] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6 md:gap-8">
              <div className="max-w-xl">
                <span className="text-earthy-green font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Our Objectives</span>
                <h2 className="serif text-4xl md:text-6xl lg:text-7xl text-[#121212] dark:text-stone-100">Core Pillars</h2>
              </div>
              <p className="max-w-md text-stone-600 dark:text-stone-300 text-base md:text-lg leading-relaxed italic">
                A multi-faceted approach to tribal upliftment, ensuring legal protection and economic self-sufficiency.
              </p>
            </div>
            <BentoGrid />
          </div>
        </section>

        {/* New Gallery Section */}
        <Gallery />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter */}
        <Newsletter />

        <section id="live" className="py-24 md:py-32 lg:py-40 bg-[#F5F5F0] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <LivePulse />
          </div>
        </section>

        {/* Enhanced Donation */}
        <EnhancedDonation />

        {/* Contact & Map */}
        <ContactMap />
        {/* Light Sections End */}
      </main>
      
      {/* Dark Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
