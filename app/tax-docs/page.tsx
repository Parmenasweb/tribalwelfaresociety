import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Documentation',
  description: '80(G) certification and tax-related documentation for Tribal Welfare Society donations.',
};

export default function TaxDocsPage() {
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
          Tax Documentation
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-12">
          80(G) certified · Tax-deductible donations
        </p>

        <div className="prose prose-stone dark:prose-invert max-w-none space-y-8 text-stone-600 dark:text-stone-300">
          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              80(G) Certification
            </h2>
            <p>
              Tribal Welfare Society is registered under Section 80(G) of the Income Tax Act, 1961. Donations made to our organisation are eligible for tax deduction under this section. Donors can claim 50% of the donation amount as a deduction from their taxable income, subject to the limits prescribed under the Act.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Receipts & Acknowledgments
            </h2>
            <p>
              Upon receipt of your donation, we issue a formal acknowledgment and receipt that includes our 80(G) registration details. This document can be used when filing your income tax return. Please ensure you provide your full name, address, and PAN at the time of donation to receive a valid tax receipt.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Annual Reports
            </h2>
            <p>
              Our annual reports, including audited financial statements, are available upon request. These documents provide transparency into how donations are utilised across our relief, vocational, legal, and holistic development programs.
            </p>
          </section>

          <section className="border border-stone-200 dark:border-stone-700 rounded-2xl p-8 bg-white dark:bg-stone-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <h3 className="serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Request Documentation
                </h3>
                <p className="mb-4">
                  For copies of our 80(G) certificate, annual report, or donation receipts, please contact us.
                </p>
                <a
                  href="mailto:info@tribalwelfaresociety.org"
                  className="inline-flex items-center text-terracotta font-medium hover:underline"
                >
                  info@tribalwelfaresociety.org
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
