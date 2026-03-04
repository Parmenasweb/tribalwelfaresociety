import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Emergency Flood Relief Operations | Tribal Welfare Society',
    description: 'Within 48 hours of flood warnings, TWS mobilized relief teams serving 500+ individuals across Assam and Manipur with food, shelter, and medical support.',
    openGraph: {
        title: 'Emergency Flood Relief Operations | TWS',
        url: 'https://www.tribalwelfaresociety.org/updates/emergency-flood-relief-northeast',
        images: [{ url: '/images/gallery/impact/impact-3.png' }],
    },
};

export default function FloodReliefPage() {
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
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Relief Operation</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Calendar className="w-3 h-3" /> January 10, 2026</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Tag className="w-3 h-3" /> 5 min read</span>
                </div>

                <h1 className="serif text-3xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 mb-8 leading-tight">
                    Emergency Response: Flood Relief Operations Across Northeast India
                </h1>

                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
                    <Image src="/images/gallery/impact/impact-3.png" alt="Flood Relief" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" priority />
                </div>

                <article className="prose prose-stone dark:prose-invert max-w-none prose-lg">
                    <p className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed mb-6">
                        When the Brahmaputra and Barak river systems swelled beyond their banks in early January 2026, thousands of families in low-lying tribal settlements were the first to bear the brunt. Tribal Welfare Society&apos;s Rapid Response Unit was activated within 6 hours of the initial flood alert.
                    </p>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">Areas Affected</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        This operation spanned three districts: Morigaon and Kamrup (Assam) and Imphal West (Manipur). These areas were selected based on real-time vulnerability mapping from our field database, which cross-references flood risk zones with locations of known tribal settlements, many of which are not served by formal government relief infrastructure.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10 not-prose">
                        {[
                            { value: '500+', label: 'Individuals Served' },
                            { value: '120', label: 'Food Kit Packages' },
                            { value: '3', label: 'Districts Covered' },
                            { value: '48hrs', label: 'Response Window' },
                            { value: '12', label: 'Medical Consultations' },
                            { value: '30', label: 'Temporary Shelters Set Up' },
                        ].map(s => (
                            <div key={s.label} className="text-center p-5 bg-blue-50 dark:bg-stone-800 rounded-2xl">
                                <div className="serif text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{s.value}</div>
                                <div className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-2 font-bold">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10">
                        <Image src="/images/gallery/impact/impact-6.png" alt="Relief distribution" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
                    </div>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">What We Distributed</h2>
                    <ul className="list-disc list-inside text-stone-600 dark:text-stone-300 space-y-2 mb-6">
                        <li>Emergency food kits including rice, dal, cooking oil, salt, and biscuits — 7-day supply per family</li>
                        <li>Waterproof tarpaulin sheets and rope for makeshift shelter</li>
                        <li>Oral rehydration solution (ORS), basic medicines, and first aid kits</li>
                        <li>Dry clothing bundles sourced through our clothing drive partners</li>
                        <li>Kerosene lanterns and candles for households without power</li>
                    </ul>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">The TWS Rapid Response Model</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        What sets our relief operations apart is the pre-existing trust between our field teams and local communities. When disaster strikes, we don&apos;t need to build relationships from scratch — they already exist. Our field coordinators are often community members themselves, and our distribution lists are updated continually throughout the year.
                    </p>

                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-stone-700 dark:text-stone-300 text-xl my-10">
                        &ldquo;TWS teams were here before the government trucks. They knew exactly where we are, who we are, and what we needed. No forms, no delays. Just help.&rdquo;
                        <cite className="block mt-3 text-sm font-bold not-italic text-blue-600">— Relief Camp Resident, Morigaon, Assam</cite>
                    </blockquote>
                </article>

                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-stone-200 dark:border-stone-700">
                    {['Relief', 'Floods', 'Emergency', 'Assam', 'Manipur'].map(tag => (
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
