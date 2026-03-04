import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Legal Victory: 25 Families Reclaim Ancestral Land Rights | Tribal Welfare Society',
    description: 'After 18 months of sustained legal advocacy, 25 displaced tribal families in Churachandpur, Manipur, have successfully reclaimed their ancestral land rights.',
    openGraph: {
        title: 'Legal Victory: 25 Families Reclaim Land Rights | TWS',
        url: 'https://www.tribalwelfaresociety.org/updates/legal-victory-land-rights',
        images: [{ url: '/images/gallery/advocacy/advocacy-1.png' }],
    },
};

export default function LegalVictoryPage() {
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
                    <span className="bg-terracotta/10 text-terracotta text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Impact Story</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Calendar className="w-3 h-3" /> February 15, 2026</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Tag className="w-3 h-3" /> 6 min read</span>
                </div>

                <h1 className="serif text-3xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 mb-8 leading-tight">
                    Legal Victory: 25 Families Successfully Reclaim Ancestral Land Rights
                </h1>

                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
                    <Image src="/images/gallery/advocacy/advocacy-1.png" alt="Legal Advocacy" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" priority />
                </div>

                <article className="prose prose-stone dark:prose-invert max-w-none prose-lg">
                    <p className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed mb-6">
                        In a landmark outcome that reaffirms the power of sustained legal advocacy, 25 displaced tribal families from Churachandpur district, Manipur, have officially and legally reclaimed their ancestral land — after an 18-month battle fought alongside Tribal Welfare Society&apos;s legal team.
                    </p>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10">
                        <Image src="/images/gallery/advocacy/advocacy-4.png" alt="Community meeting" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
                    </div>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">Background: The Displacement Crisis</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        The affected families — primarily from the Hmar and Zo Thadou communities — were forcibly displaced from their ancestral hill tracts during inter-ethnic unrest in 2022. Without land titles or formal documentation (a common vulnerability in tribal communities unfamiliar with bureaucratic land registration systems), they lost access to properties that had been home to their families for generations.
                    </p>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        By 2024, when TWS field coordinators first encountered these families in a relief camp on the outskirts of Churachandpur, many had already exhausted their savings and were facing renewed eviction threats. Critically, none had received any formal legal counsel.
                    </p>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">The Legal Strategy</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        Our legal team — in partnership with two constitutional lawyers from Imphal — immediately initiated a three-pronged approach:
                    </p>
                    <ol className="list-decimal list-inside text-stone-600 dark:text-stone-300 space-y-2 mb-6">
                        <li><strong>Documentation Recovery:</strong> Worked with village elders and district archives to surface oral histories, tax receipts, and pre-independence settlement records as evidence of ancestral occupation.</li>
                        <li><strong>Administrative Advocacy:</strong> Filed formal grievances with the District Collector, State Revenue Board, and the Manipur Hill Areas Committee, with constitutional backing.</li>
                        <li><strong>Community Legal Literacy:</strong> Conducted eight dedicated sessions with all 25 families so they fully understood their rights, the proceedings, and what to expect at each stage.</li>
                    </ol>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10">
                        <Image src="/images/gallery/advocacy/advocacy-7.png" alt="Legal camp" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
                    </div>

                    <blockquote className="border-l-4 border-terracotta pl-6 italic text-stone-700 dark:text-stone-300 text-xl my-10">
                        &ldquo;Before TWS came, everyone told us to give up. That this was too difficult. That small people cannot win against those with connections. But they never gave up on us. Now my children will inherit what belongs to them.&rdquo;
                        <cite className="block mt-3 text-sm font-bold not-italic text-terracotta">— Lalnunmawi Hmar, Lead Petitioner Family</cite>
                    </blockquote>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">The Ruling & What It Means</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        On February 10, 2026, the Manipur Revenue Tribunal ruled in favour of all 25 petitioner families, directing immediate restitution of land and compensation for two years of wrongful displacement. The ruling explicitly cited constitutional protections under the Fifth and Sixth Schedules of the Indian Constitution.
                    </p>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        More than the individual victory, this case sets a powerful legal precedent — and TWS is already preparing to use this ruling as a template for 12 similar pending cases across Manipur and Nagaland.
                    </p>
                </article>

                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-stone-200 dark:border-stone-700">
                    {['Legal Advocacy', 'Manipur', 'Land Rights', 'Impact Story'].map(tag => (
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
