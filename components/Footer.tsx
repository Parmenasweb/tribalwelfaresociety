import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/tribalwelfaresociety',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tribalwelfaresociety',
    icon: Instagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tribalwelfaresoc',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/tribal-welfare-society',
    icon: Linkedin,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@tribalwelfaresociety',
    icon: Youtube,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-24 md:py-32 lg:py-40 bg-[#121212] dark:bg-stone-950 border-t border-stone-900 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 lg:gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="serif text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#D2691E] to-[#D4AF37] rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm">T</span>
              </div>
              Tribal Welfare Society
            </div>
            <p className="text-stone-400 dark:text-stone-300 max-w-sm font-light leading-relaxed text-base md:text-lg">
              Empowering communities since 1993. A registered non-profit society dedicated to the holistic survival of tribal heritage and dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-stone-700 dark:border-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:text-white hover:border-terracotta dark:hover:border-terracotta transition-all duration-300 hover:scale-105"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Coordinates</h4>
            <ul className="space-y-6 text-stone-400 dark:text-stone-300 text-sm font-light">
              <li className="flex flex-col gap-1">
                <span className="text-stone-300 dark:text-stone-200 font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Delhi Office
                </span>
                Coordinating Center, New Delhi
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-stone-300 dark:text-stone-200 font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Field HQ
                </span>
                Handloom Center, NE India
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-stone-300 dark:text-stone-200 font-bold flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  Digital
                </span>
                <a
                  href="mailto:info@tribalwelfaresociety.org"
                  className="hover:text-terracotta transition-colors"
                >
                  info@tribalwelfaresociety.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Impact</h4>
            <ul className="space-y-6 text-stone-400 dark:text-stone-300 text-sm font-light">
              <li>
                <Link href="/tax-docs" className="hover:text-stone-200 dark:hover:text-stone-100 transition-colors">
                  Annual Reports 2024
                </Link>
              </li>
              <li>
                <Link href="/tax-docs" className="hover:text-stone-200 dark:hover:text-stone-100 transition-colors">
                  80(G) Certification
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="hover:text-stone-200 dark:hover:text-stone-100 transition-colors">
                  Artisan Registry
                </Link>
              </li>
              <li>
                <Link href="/programs/legal-advocacy" className="hover:text-stone-200 dark:hover:text-stone-100 transition-colors">
                  Legal Successes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-900/50 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-500 dark:text-stone-400 text-[9px] uppercase tracking-[0.4em] font-medium">
              © 2024 Tribal Welfare Society. Editorial Digital Portal.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-10">
              <Link
                href="/privacy"
                className="text-stone-500 dark:text-stone-400 text-[9px] uppercase tracking-[0.4em] hover:text-stone-300 dark:hover:text-stone-200 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/security"
                className="text-stone-500 dark:text-stone-400 text-[9px] uppercase tracking-[0.4em] hover:text-stone-300 dark:hover:text-stone-200 transition-colors"
              >
                Security
              </Link>
              <Link
                href="/tax-docs"
                className="text-stone-500 dark:text-stone-400 text-[9px] uppercase tracking-[0.4em] hover:text-stone-300 dark:hover:text-stone-200 transition-colors"
              >
                Tax Docs
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-900/30 text-center">
            <a
              href="https://www.cookednotcoded.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-500 hover:text-stone-400 dark:hover:text-stone-400 text-[9px] uppercase tracking-[0.3em] font-medium transition-colors"
            >
              Developed and managed by
              <span className="text-terracotta font-bold">cookednotcoded</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
