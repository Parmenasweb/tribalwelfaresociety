'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const faqs = [
  {
    q: 'What is the Tribal Welfare Society’s core mission?',
    a: 'We work to restore human dignity for displaced and underprivileged tribal communities through vocational empowerment, legal advocacy, relief & rehabilitation, and holistic development programs.',
  },
  {
    q: 'How can I support the mission?',
    a: 'You can support by donating, partnering with our programs, volunteering, or helping amplify our work by sharing and following our official social channels for updates.',
  },
  {
    q: 'Are donations tax-deductible?',
    a: 'Yes. Donations are eligible for tax deduction under applicable Indian regulations (including 80(G), where available). Visit the Tax Docs page for details.',
  },
  {
    q: 'Where does my donation go?',
    a: 'Donations support program delivery—training, materials, legal aid, emergency relief, and community development. We prioritise transparency and can provide documentation on request.',
  },
  {
    q: 'Can organisations partner with you?',
    a: 'Absolutely. We collaborate with NGOs, donors, and mission-aligned organisations on projects across the North East and beyond. Reach out via the contact section to start a conversation.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 lg:py-40 bg-white/70 dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Frequently Asked Questions
          </span>
          <h2 className="serif text-4xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 mb-5">
            Answers, Clearly.
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg font-light leading-relaxed">
            Common questions about our programs, transparency, and how you can support the Tribal Welfare Society.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((item, idx) => (
              <Accordion.Item
                key={item.q}
                value={`item-${idx}`}
                className="group rounded-2xl border border-stone-200/70 dark:border-stone-700/70 bg-gradient-to-br from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-5 md:py-6 text-left">
                    <span className="serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="w-5 h-5 text-stone-700 dark:text-stone-200" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 md:px-8 pb-6 md:pb-8 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pt-1 text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                    {item.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

