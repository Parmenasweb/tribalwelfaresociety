import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: '2025 Annual Impact Report | Tribal Welfare Society',
    description: 'Our 2025 Annual Impact Report: 3,200+ families reached, 14 legal camps conducted, 480 artisans trained across five northeastern states.',
    openGraph: {
        title: '2025 Annual Impact Report | Tribal Welfare Society',
        url: 'https://www.tribalwelfaresociety.org/updates/annual-impact-report-2025',
        images: [{ url: '/images/gallery/impact/impact-1.png' }],
    },
};

export default function AnnualReportPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-stone-950 pt-24 pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                <div className="flex items-center gap-4 mb-10">
                    <Link href="/updates" className="flex items-center gap-2 text-stone-500 hover:text-terracotta transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> All Updates
                    </Link>
                    <span className="text-stone-200 dark:text-stone-700">|</span>
                    <Link href="/" className="flex items-center gap-2 text-stone-500 hover:text-terracotta transition-colors text-sm font-medium">
                        Home
                    </Link>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-gold/10 text-stone-700 dark:text-stone-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Transparency</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Calendar className="w-3 h-3" /> January 28, 2026</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Tag className="w-3 h-3" /> 8 min read</span>
                </div>

                <h1 className="serif text-3xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 mb-8 leading-tight">
                    2025 Annual Impact Report: 30+ Years, Still Counting
                </h1>

                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
                    <Image src="/images/gallery/impact/impact-1.png" alt="Impact 2025" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" priority />
                </div>

                <article className="prose prose-stone dark:prose-invert max-w-none prose-lg">
                    <p className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed mb-6">
                        Every year, Tribal Welfare Society publishes its Annual Impact Report as a commitment to our donors, partners, and the communities we serve. This is not a marketing document — it is a full accounting of where resources went, what they achieved, and where we fell short.
                    </p>

                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        2025 was a year of both milestones and challenges. On the positive side, we reached our highest-ever number of beneficiary families, successfully concluded our largest legal advocacy cases, and opened two new vocational training centers. On the difficult side, flash floods in June and November tested our relief infrastructure and stretched our field teams to their limits.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                        {[
                            { value: '3,200+', label: 'Families Reached' },
                            { value: '14', label: 'Legal Literacy Camps' },
                            { value: '480', label: 'Artisans Trained' },
                            { value: '5', label: 'States Covered' },
                        ].map(s => (
                            <div key={s.label} className="text-center p-6 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                                <div className="serif text-3xl md:text-4xl font-bold text-terracotta">{s.value}</div>
                                <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-2 font-bold">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10">
                        <Image src="/images/gallery/impact/impact-5.png" alt="Field operations" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
                    </div>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">Financial Transparency</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        Total receipts for FY 2024–25 were ₹1.84 crore. Of this, <strong>78.3% was directly deployed to program activities</strong>, 12.1% to field operations and logistics, 5.8% to administration, and 3.8% to fundraising. This ratio reflects our ongoing commitment to keeping overhead lean while maximizing ground-level impact.
                    </p>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        All accounts have been audited by Gupta & Nair Associates, Chartered Accountants, New Delhi. The full audited financial statement is available to registered donors upon request via email.
                    </p>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">Looking Ahead: 2026 Priorities</h2>
                    <ul className="list-disc list-inside text-stone-600 dark:text-stone-300 space-y-2 mb-6">
                        <li>Expand vocational training enrollment capacity by 40% through two new centers</li>
                        <li>Launch digital artisan marketplace in Q2 2026</li>
                        <li>File 12 new land rights cases using the Manipur precedent</li>
                        <li>Establish a pre-positioned disaster relief stockpile in Guwahati</li>
                        <li>Complete ISO 9001 quality management certification for all programs</li>
                    </ul>

                    <blockquote className="border-l-4 border-terracotta pl-6 italic text-stone-700 dark:text-stone-300 text-xl my-10">
                        &ldquo;Every number in this report represents a real person. We don&apos;t count beneficiaries — we know names, stories, and futures. And that accountability is what keeps us honest.&rdquo;
                        <cite className="block mt-3 text-sm font-bold not-italic text-terracotta">— Maria Mangte, Founder, Tribal Welfare Society</cite>
                    </blockquote>
                </article>

                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-stone-200 dark:border-stone-700">
                    {['Annual Report', 'Transparency', 'Impact', 'Finance'].map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                </div>

                <div className="mt-12 flex gap-4">
                    <Link href="/updates" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-full font-bold text-sm hover:border-terracotta hover:text-terracotta transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Updates
                    </Link>
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white rounded-full font-bold text-sm hover:bg-terracotta/90 transition-colors">
                        Back to Home
                    </Link>
                </div>

            </div>
        </main>
    );
}
