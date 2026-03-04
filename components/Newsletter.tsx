'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, CheckCircle, Calendar, Loader2, AlertCircle, ArrowRight } from 'lucide-react';

type SubState = 'idle' | 'loading' | 'success' | 'error';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subState, setSubState] = useState<SubState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubState('loading');

    try {
      // NOTE: Ensure you add your actual access key here before deployment.
      const formData = new FormData();
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
      formData.append("email", email);
      formData.append("subject", "New Newsletter Subscriber — Tribal Welfare Society");

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        setSubState('success');
        setEmail('');
      } else {
        console.error("Web3Forms error:", data.message);
        setSubState('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubState('error');
    }
  };

  const updates = [
    {
      slug: 'new-handloom-center-assam',
      date: 'March 1, 2026',
      title: 'Expanding Our Reach: New Handloom Center in Assam',
      category: 'Program Update',
      excerpt: 'We are thrilled to announce the opening of our newest vocational training center, providing modern machinery and opportunities for 50+ artisan families in rural Assam.',
    },
    {
      slug: 'legal-victory-land-rights',
      date: 'February 15, 2026',
      title: 'Legal Victory: 25 Families Reclaim Ancestral Land Rights',
      category: 'Impact Story',
      excerpt: 'Through our intense legal advocacy programs and literacy camps, we successfully helped 25 displaced families understand their constitutional rights and reclaim their ancestral lands.',
    },
    {
      slug: 'annual-impact-report-2025',
      date: 'January 28, 2026',
      title: '2025 Annual Impact Report Released',
      category: 'Transparency',
      excerpt: 'View our comprehensive annual report detailing our financial transparency, milestones achieved across four states, and our strategic goals for the upcoming decade.',
    },
    {
      slug: 'emergency-flood-relief-northeast',
      date: 'January 10, 2026',
      title: 'Emergency Relief Dispatched to Flood-Affected Regions',
      category: 'Relief Operation',
      excerpt: 'Our volunteer teams immediately responded to the recent floods in the northeast, setting up temporary camps and distributing crucial medical aid and food supplies to over 500 individuals.',
    },
    {
      slug: 'holistic-scholarship-winners-2025',
      date: 'December 15, 2025',
      title: 'Holistic Education Scholarship Winners Announced',
      category: 'Youth Development',
      excerpt: 'Congratulations to the 120 bright young minds who were awarded the TWS Holistic Education Scholarship this year. We are proud to support your journey to higher education.',
    },
  ];

  return (
    <section id="updates" className="py-24 md:py-32 lg:py-40 bg-white/70 dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Updates</span>
          <h2 className="serif text-4xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 mb-5">
            Stay Connected
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-base md:text-lg font-light leading-relaxed">
            Subscribe for program updates, field stories, and transparent reporting—delivered with respect for your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 rounded-3xl p-8 md:p-12 border border-stone-200 dark:border-stone-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-terracotta" />
              <h3 className="serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                Stay Updated
              </h3>
            </div>
            <p className="text-stone-600 dark:text-stone-300 mb-8 text-lg">
              Subscribe to our newsletter and receive updates on our programs, impact stories, and ways to get involved.
            </p>

            {subState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-earthy-green/10 dark:bg-earthy-green/20 border border-earthy-green/30 rounded-xl p-6 text-center"
              >
                <CheckCircle className="w-12 h-12 text-earthy-green mx-auto mb-4" />
                <p className="text-earthy-green font-bold text-lg">Thank you for subscribing!</p>
                <p className="text-stone-600 dark:text-stone-300 text-sm mt-2">
                  You&apos;ll receive updates from Tribal Welfare Society in your inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {subState === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again later.
                  </div>
                )}
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 rounded-xl border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all text-lg placeholder:text-stone-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subState === 'loading'}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl text-white relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-terracotta via-gold to-earthy-green opacity-95" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {subState === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Subscribing...</>
                    ) : 'Subscribe'}
                  </span>
                </button>
                <p className="text-xs text-stone-500 dark:text-stone-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </motion.div>

          {/* Recent Updates */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-gold" />
              <h3 className="serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                Recent Updates
              </h3>
            </div>
            <div className="space-y-6">
              {updates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/updates/${update.slug}`}
                    className="block bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 hover:shadow-xl hover:border-terracotta/40 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                        {update.category}
                      </span>
                      <span className="text-xs text-stone-500 dark:text-stone-500">
                        {update.date}
                      </span>
                    </div>
                    <h4 className="serif text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-terracotta transition-colors">
                      {update.title}
                    </h4>
                    <p className="text-stone-600 dark:text-stone-300 text-sm md:text-base">
                      {update.excerpt}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-terracotta text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="/updates"
              className="inline-flex items-center gap-2 mt-8 text-stone-900 dark:text-stone-100 font-bold hover:text-terracotta transition-colors"
            >
              View All Updates
              <span>→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
