'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const ContactMap: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      // NOTE: Ensure you add your actual access key here before deployment.
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", formData.phone || "Not provided");
      formDataToSubmit.append("message", formData.message);
      formDataToSubmit.append("subject", "New Contact Form Submission - Tribal Welfare Society");

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit
      });

      const data = await res.json();

      if (data.success) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error("Web3Forms error:", data.message);
        setFormState('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormState('error');
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Registered Office',
      details: ['Plot 1, West Kidwai Nagar', 'New Delhi'],
      color: 'text-terracotta',
      bg: 'bg-terracotta/10 dark:bg-terracotta/20',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Regional Office',
      details: ['102 Neehal Enclave, Opp. Pratiksha Hospital', 'VIP Road, Guwahati, Kamrup Metropolitan 781036'],
      color: 'text-earthy-green',
      bg: 'bg-earthy-green/10 dark:bg-earthy-green/20',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      details: ['+91 9707331175', '+91 9864841089'],
      color: 'text-gold',
      bg: 'bg-gold/10 dark:bg-gold/20',
      phoneLinks: true,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      details: ['tribalwelfare1994@gmail.com'],
      color: 'text-stone-600 dark:text-stone-300',
      bg: 'bg-stone-100 dark:bg-stone-700/40',
      emailLink: true,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Office Hours',
      details: ['Monday – Friday: 9:00 AM – 5:00 PM'],
      color: 'text-terracotta',
      bg: 'bg-terracotta/10 dark:bg-terracotta/20',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-[#F5F5F0] dark:from-stone-900 dark:to-stone-800 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Get in Touch</span>
          <h2 className="serif text-5xl md:text-8xl text-stone-900 dark:text-stone-100 mb-6">
            Connect With Us
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-lg md:text-xl font-light">
            Have questions? Want to get involved? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white dark:bg-stone-800 rounded-2xl p-5 md:p-6 border border-stone-200 dark:border-stone-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${info.bg} flex items-center justify-center ${info.color} mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) =>
                    info.phoneLinks ? (
                      <a key={i} href={`tel:${detail.replace(/\s+/g, '')}`} className="block text-stone-600 dark:text-stone-300 text-sm hover:text-terracotta transition-colors mb-1">
                        {detail}
                      </a>
                    ) : info.emailLink ? (
                      <a key={i} href={`mailto:${detail}`} className="block text-stone-600 dark:text-stone-300 text-sm hover:text-terracotta transition-colors break-all">
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-stone-600 dark:text-stone-300 text-sm mb-1 leading-relaxed">
                        {detail}
                      </p>
                    )
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map — Regional Office, Guwahati */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6!2d91.7761!3d26.1445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5910e7b6f249%3A0x9e3f3c2fbf14db1d!2sVIP%20Rd%2C%20Guwahati%2C%20Assam%20781005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
                title="Tribal Welfare Society — Regional Office, Guwahati"
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
            <h3 className="serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              Send us a Message
            </h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm mb-8">
              We&apos;ll respond to your message at <span className="text-terracotta font-semibold">tribalwelfare1994@gmail.com</span>
            </p>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 gap-4 text-center"
              >
                <CheckCircle className="w-16 h-16 text-earthy-green" />
                <h4 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100">Message Sent!</h4>
                <p className="text-stone-500 dark:text-stone-400 max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-4 px-6 py-2 rounded-full border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 text-sm hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all placeholder:text-stone-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all placeholder:text-stone-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider">
                    Phone Number <span className="text-stone-400 font-normal normal-case tracking-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all placeholder:text-stone-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all resize-none placeholder:text-stone-400"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl text-white relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-terracotta via-gold to-earthy-green opacity-95" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-700">
              <a
                href="https://wa.me/919707331175"
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
