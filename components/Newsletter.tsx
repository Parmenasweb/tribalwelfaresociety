'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Calendar } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    console.log('Subscribed:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const updates = [
    {
      date: 'Feb 15, 2026',
      title: 'New Handloom Center Opens in Assam',
      category: 'Program Update',
      excerpt: 'Our latest vocational training center has opened, providing opportunities for 50+ artisan families.',
    },
    {
      date: 'Feb 10, 2026',
      title: 'Legal Victory: 25 Families Reclaim Land Rights',
      category: 'Impact Story',
      excerpt: 'Through our legal advocacy program, 25 families successfully reclaimed their ancestral lands.',
    },
    {
      date: 'Feb 5, 2026',
      title: 'Annual Report 2025 Released',
      category: 'Transparency',
      excerpt: 'View our comprehensive annual report showcasing impact, finances, and future plans.',
    },
  ];

  return (
    <section id="updates" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
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

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-earthy-green/10 dark:bg-earthy-green/20 border border-earthy-green/30 rounded-xl p-6 text-center"
              >
                <CheckCircle className="w-12 h-12 text-earthy-green mx-auto mb-4" />
                <p className="text-earthy-green font-bold text-lg">Thank you for subscribing!</p>
                <p className="text-stone-600 dark:text-stone-300 text-sm mt-2">
                  Check your email to confirm your subscription.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 rounded-xl border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-xl font-bold uppercase tracking-wider hover:bg-stone-800 dark:hover:bg-stone-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe Now
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
                  className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
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
                </motion.div>
              ))}
            </div>
            <motion.a
              href="#"
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
