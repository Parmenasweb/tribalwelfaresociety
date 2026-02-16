'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactMap: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Delhi Office',
      details: ['Coordinating Center', 'New Delhi, India'],
      color: 'text-terracotta',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Field Headquarters',
      details: ['Handloom Center', 'North East India'],
      color: 'text-earthy-green',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 11 2345 6789', '+91 98765 43210'],
      color: 'text-gold',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@tribalwelfaresociety.org', 'support@tribalwelfaresociety.org'],
      color: 'text-stone-600 dark:text-stone-400',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 4 PM'],
      color: 'text-terracotta',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-[#F5F5F0] dark:from-stone-900 dark:to-stone-800 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Get in Touch</span>
          <h2 className="serif text-5xl md:text-8xl text-[#121212] dark:text-stone-100 mb-6">
            Connect With Us
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-lg md:text-xl font-light">
            Have questions? Want to get involved? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${info.color} mb-4`}>{info.icon}</div>
                  <h3 className="serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-stone-600 dark:text-stone-300 text-sm md:text-base mb-1"
                    >
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-3xl p-8 md:p-12 border border-stone-200 dark:border-stone-700 shadow-xl"
          >
            <h3 className="serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-xl font-bold uppercase tracking-wider hover:bg-stone-800 dark:hover:bg-stone-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-700">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-earthy-green hover:text-earthy-green/80 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Chat with us on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
