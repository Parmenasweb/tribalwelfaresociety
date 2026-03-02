'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const INSTAGRAM_URL = 'https://www.instagram.com/tribalwelfaresociety';

const instagramPosts = [
  {
    image: '/images/socials/socials-0.png',
    caption: 'Standing up for rights — our legal advocacy camps continue to reach remote communities across Northeast India. 🏕️ #TribalWelfare #LegalRights',
    likes: '84',
    comments: '8',
    date: 'few days ago',
  },
  {
    image: '/images/socials/socials-1.png',
    caption: 'The impact of collective action. Seeing communities thrive is why we do what we do. 🌿 #Impact #NGO #NortheastIndia',
    likes: '31',
    comments: '2',
    date: '1 week ago',
  },
  {
    image: '/images/socials/socials-2.png',
    caption: 'Skill is power. Our vocational training sessions are equipping the next generation of artisans. 🧵 #VocationalTraining #Artisans',
    likes: '35',
    comments: '2',
    date: '1 week ago',
  },
  {
    image: '/images/socials/socials-3.png',
    caption: 'Education breaks cycles. Proud to be part of this journey. 📚 #Education #TribalYouth #Empowerment',
    likes: '52',
    comments: '4',
    date: '2 weeks ago',
  },
  {
    image: '/images/socials/socials-4.png',
    caption: 'Traditional craftsmanship meets modern opportunity. Our weavers are creating a sustainable future, one thread at a time. 🎨 #Handloom #Vocation',
    likes: '20',
    comments: '4',
    date: '3 weeks ago',
  },
  {
    image: '/images/socials/socials-5.png',
    caption: 'When communities rally together, change is inevitable. Our advocacy programs are creating lasting impact. 🤝 #Advocacy #Community',
    likes: '89',
    comments: '9',
    date: '1 month ago',
  },
];

const LivePulse: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="text-earthy-green font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            From Our Instagram
          </span>
          <h2 className="serif text-5xl md:text-8xl text-stone-900 dark:text-stone-100 leading-[0.9]">
            Live Records.
          </h2>
          <p className="mt-4 max-w-xl text-stone-600 dark:text-stone-300 text-base md:text-lg font-light leading-relaxed">
            Moments from the field, shared in real time. Follow us for live updates, behind-the-scenes stories, and urgent calls to action.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
        >
          <Instagram className="w-4 h-4" />
          Follow @tribalwelfaresociety
        </a>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {instagramPosts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group break-inside-avoid"
          >
            {/* Instagram Post Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-stone-100 dark:border-stone-700">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] p-[2px] flex-shrink-0">
                <div className="w-full h-full rounded-full bg-white dark:bg-stone-800 flex items-center justify-center">
                  <span className="serif text-[8px] font-bold text-terracotta">TWS</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-stone-900 dark:text-stone-100">tribalwelfaresociety</p>
                <p className="text-[9px] text-stone-400 dark:text-stone-500">{post.date}</p>
              </div>
            </div>

            {/* Post Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={post.image}
                alt={`NGO post ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Post Actions & Caption */}
            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <button className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-xs font-bold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-xs font-bold">{post.comments}</span>
                </button>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed line-clamp-3">
                <span className="font-bold text-stone-900 dark:text-stone-100">tribalwelfaresociety</span>{' '}
                {post.caption}
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-terracotta transition-colors"
              >
                View on Instagram →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Follow CTA Banner */}
      <motion.a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-[#f09433]/10 via-[#e6683c]/10 to-[#dc2743]/10 border border-[#e6683c]/20 hover:border-[#e6683c]/40 transition-all duration-300 group"
      >
        <Instagram className="w-8 h-8 text-[#e6683c]" />
        <div className="text-center sm:text-left">
          <p className="font-bold text-stone-900 dark:text-stone-100 text-base">Follow us on Instagram</p>
          <p className="text-stone-500 dark:text-stone-400 text-sm">@tribalwelfaresociety — Real stories, real impact, in real time.</p>
        </div>
        <span className="ml-auto text-[#e6683c] font-bold text-sm group-hover:translate-x-1 transition-transform">
          Follow →
        </span>
      </motion.a>
    </div>
  );
};

export default LivePulse;