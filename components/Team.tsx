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
    name: 'Maria Mangte',
    role: 'Founder',
    location: 'Headquarters',
    email: 'mariamangte9@gmail.com',
    phone: '+91 70054 79217',
    accent: 'terracotta',
    image: '/images/team/founder.jpeg',
  },
  {
    name: 'Jenny Mangte',
    role: 'Secretary',
    location: 'New Delhi',
    email: 'abts@yahoo.co.in',
    phone: '+91 98102 30957',
    accent: 'gold',
    image: '/images/team/secretary-new delhi.jpeg',
  },
  {
    name: 'Downor R Marak',
    role: 'Secretary',
    location: 'Meghalaya',
    email: 'downor7575916424@gmail.com',
    phone: '+91 6901313297',
    accent: 'earthy-green',
    image: '/images/team/secretary-meghalaya.jpeg',
  },
  {
    name: 'Tony Singsit',
    role: 'Secretary',
    location: 'Nagaland',
    email: 'neoprane505@gmail.com',
    phone: '+91 6289793284',
    accent: 'terracotta',
    image: '/images/team/secretary-nagaland.jpeg',
  },
  {
    name: 'Chongpineng',
    role: 'Program Coordinator',
    location: 'Nagaland',
    email: 'pipychongloi1999@gmail.com',
    phone: '+91 8419054943',
    accent: 'earthy-green',
    image: '/images/team/program-codinator-nagaland.jpeg',
  },
];

const accentToClasses: Record<TeamMember['accent'], { ring: string; dot: string; bgGlow: string }> = {
  terracotta: { ring: 'ring-terracotta/30', dot: 'bg-terracotta', bgGlow: 'rgba(210,105,30,0.15)' },
  gold: { ring: 'ring-gold/30', dot: 'bg-gold', bgGlow: 'rgba(212,175,55,0.15)' },
  'earthy-green': { ring: 'ring-earthy-green/30', dot: 'bg-earthy-green', bgGlow: 'rgba(85,107,47,0.15)' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {team.map((m, idx) => {
            const a = accentToClasses[m.accent];
            return (
              <motion.div
                key={m.email}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative rounded-3xl border border-stone-200/70 dark:border-stone-700/70 bg-white/70 dark:bg-stone-800/60 shadow-sm hover:shadow-2xl transition-all duration-300 p-8 md:p-10 overflow-hidden"
              >
                <div
                  className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-60 dark:opacity-40"
                  style={{ background: a.bgGlow }}
                />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0 overflow-hidden shadow-xl ring-4 ring-offset-2 ring-offset-[#F5F5F0] dark:ring-offset-stone-900"
                      style={{ borderColor: 'transparent', boxShadow: '0 18px 45px rgba(0,0,0,0.18)' }}
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={96}
                        height={96}
                        sizes="(max-width: 768px) 96px, 96px"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className={`w-10 h-10 rounded-2xl ring-1 ${a.ring} bg-white dark:bg-stone-900 flex items-center justify-center`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${a.dot}`} />
                    </div>
                  </div>

                  <h3 className="serif text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {m.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-5">
                    <p className="text-stone-600 dark:text-stone-300 font-semibold text-sm uppercase tracking-widest">
                      {m.role}
                    </p>
                    <span className="text-stone-300 dark:text-stone-600">•</span>
                    <span className="text-terracotta text-sm font-medium">{m.location}</span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <a
                      href={`mailto:${m.email}`}
                      className="flex items-center gap-3 text-stone-700 dark:text-stone-200 hover:text-terracotta transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-terracotta flex-shrink-0" />
                      <span>{m.email}</span>
                    </a>
                    <a
                      href={`tel:${m.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-3 text-stone-700 dark:text-stone-200 hover:text-terracotta transition-colors"
                    >
                      <Phone className="w-4 h-4 text-terracotta flex-shrink-0" />
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
