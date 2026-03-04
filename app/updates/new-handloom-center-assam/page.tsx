import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'New Handloom Center Opens in Rural Assam | Tribal Welfare Society',
    description: 'Tribal Welfare Society announces the opening of a new vocational training center in Assam, empowering 50+ artisan families with modern looms and business mentorship.',
    openGraph: {
        title: 'New Handloom Center Opens in Rural Assam | Tribal Welfare Society',
        url: 'https://www.tribalwelfaresociety.org/updates/new-handloom-center-assam',
        images: [{ url: '/images/gallery/vocation/vocation-0.png' }],
    },
};

export default function HandloomCenterPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-stone-950 pt-24 pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                {/* Back navigation */}
                <div className="flex items-center gap-4 mb-10">
                    <Link href="/updates" className="flex items-center gap-2 text-stone-500 hover:text-terracotta transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> All Updates
                    </Link>
                    <span className="text-stone-200 dark:text-stone-700">|</span>
                    <Link href="/" className="flex items-center gap-2 text-stone-500 hover:text-terracotta transition-colors text-sm font-medium">
                        Home
                    </Link>
                </div>

                {/* Category & Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-earthy-green/10 text-earthy-green text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Program Update</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Calendar className="w-3 h-3" /> March 1, 2026</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Tag className="w-3 h-3" /> 4 min read</span>
                </div>

                {/* Title */}
                <h1 className="serif text-3xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 mb-8 leading-tight">
                    Expanding Our Reach: New Handloom Center Opens in Rural Assam
                </h1>

                {/* Hero Image */}
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
                    <Image src="/images/gallery/vocation/vocation-0.png" alt="New Handloom Center" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" priority />
                </div>

                {/* Article Body */}
                <article className="prose prose-stone dark:prose-invert max-w-none prose-lg">
                    <p className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed mb-6">
                        Tribal Welfare Society is proud to announce the inauguration of our newest vocational training center in the Golaghat district of rural Assam. This milestone represents over two years of planning, fundraising, and community consultation — and marks one of the most significant expansions in our organization&apos;s 30-year history.
                    </p>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10">
                        <Image src="/images/gallery/vocation/vocation-1.png" alt="Artisans at work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
                        <p className="absolute bottom-0 left-0 right-0 bg-stone-900/60 text-white text-xs p-3 italic text-center">Artisans in the new center during our soft-launch week, March 2026.</p>
                    </div>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">Why Assam, Why Now?</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        Golaghat district has long been home to displaced tribal communities with exceptionally deep roots in traditional handloom craft — particularly the <em>Mising</em> and <em>Deori</em> communities whose weaving traditions date back centuries. Despite this living heritage, consistent income from craft has remained elusive due to lack of market access, outdated equipment, and absence of formal business training.
                    </p>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        Our field coordinators first identified the opportunity in early 2024, following a community needs assessment. The response from local artisan families was overwhelming — over 80 households expressed immediate interest in enrollment before the center even broke ground.
                    </p>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">What the Center Offers</h2>
                    <ul className="list-disc list-inside text-stone-600 dark:text-stone-300 space-y-2 mb-6">
                        <li><strong>12 Power Looms & 8 Frame Looms</strong> — sourced through our procurement partnership with a Varanasi-based manufacturer</li>
                        <li><strong>6-month Intensive Vocational Course</strong> — covering weaving technique, quality control, and fabric finishing</li>
                        <li><strong>Business & Digital Literacy Modules</strong> — equipping artisans to sell on online marketplaces, manage accounts, and negotiate with buyers</li>
                        <li><strong>Childcare Pod</strong> — enabling mothers of young children to participate without interruption</li>
                        <li><strong>Monthly Stipend</strong> — ₹3,000/month per active trainee for the duration of the first course</li>
                    </ul>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10">
                        <Image src="/images/gallery/training/training-2.png" alt="Training session" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
                    </div>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">Phase 2 Plans</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        Subject to continued donor support, we plan to expand the center with a dedicated dyeing and finishing annexe by Q4 2026, which will allow artisans to produce finished, market-ready goods entirely on-site — further increasing margins and reducing dependence on external processing units.
                    </p>

                    <blockquote className="border-l-4 border-terracotta pl-6 italic text-stone-700 dark:text-stone-300 text-xl my-10">
                        &ldquo;This is not just a building. This is proof that when someone believes in you, you can produce miracles. My grandmother wove these same patterns for herself. Now I weave them for the world.&rdquo;
                        <cite className="block mt-3 text-sm font-bold not-italic text-terracotta">— Rebika Mising, Inaugural Batch Artisan</cite>
                    </blockquote>

                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        The first enrollment batch of 52 artisans officially began their training on March 3, 2026. We invite donors, volunteers, and organizations interested in partnering with us to reach out through our contact page.
                    </p>
                </article>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-stone-200 dark:border-stone-700">
                    {['Vocational Training', 'Assam', 'Artisans', 'Program Update'].map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                </div>

                {/* Back Button */}
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
