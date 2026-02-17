'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  accent: 'terracotta' | 'gold' | 'earthy-green';
  image: string;
};

const team: TeamMember[] = [
  {
    name: 'Founder',
    role: 'Founder & Vision Lead',
    location: 'New Delhi, India',
    email: 'founder@tribalwelfaresociety.org',
    phone: '+91 98765 43210',
    accent: 'terracotta',
    image: 'https://images.unsplash.com/photo-1614283233556-f35b0c801efb?q=80&w=800&auto=format&fit=crop&facepad=3',
  },
  {
    name: 'Secretary',
    role: 'Secretary (Operations & Programs)',
    location: 'North East India',
    email: 'secretary@tribalwelfaresociety.org',
    phone: '+91 98765 43211',
    accent: 'gold',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop&facepad=3',
  },
  {
    name: 'Program Coordinator',
    role: 'Program Coordinator (Field)',
    location: 'Assam, India',
    email: 'programs@tribalwelfaresociety.org',
    phone: '+91 98765 43212',
    accent: 'earthy-green',
    image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=800&auto=format&fit=crop&facepad=3',
  },
];

const accentToClasses: Record<TeamMember['accent'], { ring: string; dot: string }> = {
  terracotta: { ring: 'ring-terracotta/30', dot: 'bg-terracotta' },
  gold: { ring: 'ring-gold/30', dot: 'bg-gold' },
  'earthy-green': { ring: 'ring-earthy-green/30', dot: 'bg-earthy-green' },
};

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="py-24 md:py-32 lg:py-40 bg-[#F5F5F0] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-earthy-green font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Leadership
          </span>
          <h2 className="serif text-4xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 mb-5">
            Meet the Team
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-base md:text-lg font-light leading-relaxed">
            Three decades of service is powered by committed leadership and hands-on field coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((m, idx) => {
            const a = accentToClasses[m.accent];
            return (
              <motion.div
                key={m.email}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`relative rounded-3xl border border-stone-200/70 dark:border-stone-700/70 bg-white/70 dark:bg-stone-800/60 shadow-sm hover:shadow-2xl transition-all duration-300 p-8 md:p-10 overflow-hidden`}
              >
                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-40 dark:opacity-30"
                     style={{
                       background:
                         m.accent === 'terracotta'
                           ? 'rgba(210,105,30,0.22)'
                           : m.accent === 'gold'
                             ? 'rgba(212,175,55,0.20)'
                             : 'rgba(85,107,47,0.18)',
                     }}
                />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full ring-2 ring-offset-2 ring-offset-[#F5F5F0] dark:ring-offset-stone-900 flex-shrink-0 overflow-hidden"
                      style={{ boxShadow: '0 18px 45px rgba(0,0,0,0.18)' }}
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`w-10 h-10 rounded-2xl ring-1 ${a.ring} bg-white dark:bg-stone-900 flex items-center justify-center`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${a.dot}`} />
                    </div>
                  </div>

                  <h3 className="serif text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {m.name}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 font-medium mb-5">
                    {m.role}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-stone-600 dark:text-stone-300">
                      <MapPin className="w-4 h-4 text-terracotta" />
                      <span>{m.location}</span>
                    </div>
                    <a
                      href={`mailto:${m.email}`}
                      className="flex items-center gap-3 text-stone-700 dark:text-stone-200 hover:text-terracotta transition-colors"
                    >
                      <Mail className="w-4 h-4 text-terracotta" />
                      <span>{m.email}</span>
                    </a>
                    <a
                      href={`tel:${m.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-3 text-stone-700 dark:text-stone-200 hover:text-terracotta transition-colors"
                    >
                      <Phone className="w-4 h-4 text-terracotta" />
                      <span>{m.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

