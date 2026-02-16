import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Security practices and policies of Tribal Welfare Society.',
};

export default function SecurityPage() {
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
          Security
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-12">
          Our commitment to protecting your data
        </p>

        <div className="prose prose-stone dark:prose-invert max-w-none space-y-8 text-stone-600 dark:text-stone-300">
          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Website Security
            </h2>
            <p>
              Tribal Welfare Society uses industry-standard security measures to protect our website and your information. Our site is served over HTTPS to ensure encrypted communication between your browser and our servers.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Donation Security
            </h2>
            <p>
              We do not store credit card or banking details on our servers. All payment processing is handled through secure, PCI-compliant third-party payment gateways. When you donate via UPI or other methods, your financial data is processed directly by the payment provider.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Organisational Security
            </h2>
            <p>
              Access to donor and beneficiary data within our organisation is restricted to authorised personnel only. We conduct regular reviews of our security practices to ensure we meet the highest standards of data protection.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Report a Concern
            </h2>
            <p>
              If you believe you have identified a security vulnerability, please contact us at{' '}
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
