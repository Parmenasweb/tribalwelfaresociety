import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Tribal Welfare Society website and services.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] dark:bg-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-3xl py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-terracotta dark:hover:text-terracotta text-sm font-medium mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="serif text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4">
          Privacy Policy
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-12">
          Last updated: February 2024
        </p>

        <div className="prose prose-stone dark:prose-invert max-w-none space-y-8 text-stone-600 dark:text-stone-300">
          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Information We Collect
            </h2>
            <p>
              Tribal Welfare Society respects your privacy. We collect information you provide directly to us, such as when you subscribe to our newsletter, make a donation, or contact us. This may include your name, email address, postal address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to process donations, send updates about our programs, respond to inquiries, and improve our services. We do not sell, trade, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Contact Us
            </h2>
            <p>
              For questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@tribalwelfaresociety.org" className="text-terracotta hover:underline">
                info@tribalwelfaresociety.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
