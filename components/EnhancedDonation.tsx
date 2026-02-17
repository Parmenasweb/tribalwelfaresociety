'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calculator, Shield, CheckCircle } from 'lucide-react';

const donationTiers = [
  { amount: 500, impact: 'Supports one artisan for a month', label: 'Supporter' },
  { amount: 1000, impact: 'Funds vocational training for one person', label: 'Champion' },
  { amount: 2500, impact: 'Provides legal aid for a family', label: 'Advocate' },
  { amount: 5000, impact: 'Sponsors a community program', label: 'Patron' },
];

const EnhancedDonation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const calculateImpact = (amount: number) => {
    return {
      artisans: Math.floor(amount / 500),
      trainings: Math.floor(amount / 1000),
      legalCases: Math.floor(amount / 2500),
      communities: Math.floor(amount / 5000),
    };
  };

  const displayAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);
  const impact = calculateImpact(displayAmount);

  return (
    <section id="support" className="py-24 md:py-32 lg:py-40 bg-[#F5F5F0] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Support Our Mission</span>
          <h2 className="serif text-5xl md:text-8xl text-[#121212] dark:text-stone-100 mb-6">
            Fuel the Mission
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-lg md:text-xl font-light">
            Your contribution is more than a donation—it is a direct investment in human dignity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Donation Tiers */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-6">
                Choose Your Impact Level
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {donationTiers.map((tier) => (
                  <motion.button
                    key={tier.amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount('');
                    }}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedAmount === tier.amount
                        ? 'border-terracotta bg-terracotta/10 dark:bg-terracotta/20'
                        : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-terracotta/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="serif text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                        ₹{tier.amount}
                      </div>
                      <div className="text-xs md:text-sm text-stone-600 dark:text-stone-300 font-bold uppercase tracking-wider">
                        {tier.label}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="relative">
                <label className="block text-sm font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 dark:text-stone-300 font-bold">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
                  />
                </div>
              </div>

              {/* Recurring Donation */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => setIsRecurring(!isRecurring)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                    isRecurring ? 'bg-terracotta' : 'bg-stone-300 dark:bg-stone-600'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                      isRecurring ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
                <span className="text-stone-900 dark:text-stone-100 font-medium">
                  Make this a monthly recurring donation
                </span>
              </div>
            </div>

            {/* Impact Calculator */}
            {displayAmount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-terracotta/10 to-gold/10 dark:from-terracotta/20 dark:to-gold/20 rounded-3xl p-8 border border-terracotta/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-terracotta" />
                  <h4 className="serif text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100">
                    Your Impact
                  </h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {impact.artisans > 0 && (
                    <div className="text-center">
                      <div className="serif text-3xl font-bold text-terracotta">{impact.artisans}</div>
                      <div className="text-xs text-stone-600 dark:text-stone-300 mt-1">Artisan{impact.artisans > 1 ? 's' : ''}</div>
                    </div>
                  )}
                  {impact.trainings > 0 && (
                    <div className="text-center">
                      <div className="serif text-3xl font-bold text-earthy-green">{impact.trainings}</div>
                      <div className="text-xs text-stone-600 dark:text-stone-300 mt-1">Training{impact.trainings > 1 ? 's' : ''}</div>
                    </div>
                  )}
                  {impact.legalCases > 0 && (
                    <div className="text-center">
                      <div className="serif text-3xl font-bold text-gold">{impact.legalCases}</div>
                      <div className="text-xs text-stone-600 dark:text-stone-300 mt-1">Legal Case{impact.legalCases > 1 ? 's' : ''}</div>
                    </div>
                  )}
                  {impact.communities > 0 && (
                    <div className="text-center">
                      <div className="serif text-3xl font-bold text-stone-600 dark:text-stone-300">{impact.communities}</div>
                      <div className="text-xs text-stone-600 dark:text-stone-300 mt-1">Communit{impact.communities > 1 ? 'ies' : 'y'}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* QR Code & Payment Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-10 bg-gradient-to-tr from-gold/10 via-terracotta/5 to-earthy-green/10 rounded-[3rem] md:rounded-[4rem] blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative glass-card rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
                <div className="mb-8 p-6 bg-white/80 dark:bg-stone-800/80 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-white/50 dark:border-stone-700/50 relative overflow-hidden group/qr">
                  <div className="absolute inset-0 bg-stone-50 dark:bg-stone-700 opacity-0 group-hover/qr:opacity-10 transition-opacity"></div>
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-white dark:bg-stone-900 flex items-center justify-center p-4 relative z-10 rounded-2xl">
                    <Image 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TribalWelfareSociety_UPI_PORTAL_SUPPORT&bgcolor=ffffff&color=121212" 
                      alt="Donation QR Code" 
                      width={256}
                      height={256}
                      className="w-full h-full grayscale group-hover/qr:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-gold to-earthy-green"></div>
                </div>
                
                <h3 className="serif text-2xl md:text-3xl mb-4 text-stone-900 dark:text-stone-100 font-bold">Quick Donate</h3>
                <p className="text-stone-500 dark:text-stone-300 text-xs md:text-sm mb-8 max-w-xs leading-relaxed">
                  Scan the QR code to contribute instantly via UPI
                </p>
              </div>
            </motion.div>

            {/* Benefits */}
            <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700">
              <h4 className="serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-terracotta" />
                Donation Benefits
              </h4>
              <ul className="space-y-3">
                {[
                  '100% Tax Exempt (80G)',
                  'Digital Receipt',
                  'Transparent Reporting',
                  'Impact Updates',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-stone-600 dark:text-stone-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-earthy-green flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Financial Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-stone-800 rounded-3xl p-8 md:p-12 border border-stone-200 dark:border-stone-700"
        >
          <h4 className="serif text-3xl text-stone-900 dark:text-stone-100 mb-8">Financial Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Organization', value: 'Tribal Welfare Society (Regd.)' },
              { label: 'Bank', value: 'State Bank of India' },
              { label: 'Account Number', value: '0000 1234 5678 90' },
              { label: 'IFSC Code', value: 'SBIN0001122' },
            ].map((item) => (
              <div key={item.label} className="group">
                <p className="text-stone-400 dark:text-stone-500 uppercase text-[9px] tracking-[0.3em] font-bold mb-2 group-hover:text-terracotta transition-colors">
                  {item.label}
                </p>
                <p className="text-stone-900 dark:text-stone-100 font-bold text-lg sans-alt">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedDonation;
