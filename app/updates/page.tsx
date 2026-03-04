import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight, Home } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Updates | Tribal Welfare Society',
    description: 'Latest news, impact stories, and program updates from Tribal Welfare Society — an NGO empowering tribal communities across Northeast India since 1993.',
    openGraph: {
        title: 'Updates | Tribal Welfare Society',
        description: 'Real stories of real impact from the field. Stay up to date with our programs, legal victories, and community initiatives.',
        url: 'https://www.tribalwelfaresociety.org/updates',
        images: [{ url: '/images/favicons/web-app-manifest-512x512.png', width: 512, height: 512 }],
    },
};

type Category = 'Impact Story' | 'Program Update' | 'Transparency' | 'Relief Operation' | 'Youth Development';

interface BlogPost {
    slug: string;
    date: string;
    category: Category;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
    tags: string[];
}

const CATEGORY_COLORS: Record<Category, string> = {
    'Impact Story': 'bg-terracotta/10 text-terracotta',
    'Program Update': 'bg-earthy-green/10 text-earthy-green',
    'Transparency': 'bg-gold/10 text-stone-700 dark:text-stone-300',
    'Relief Operation': 'bg-blue-50 text-blue-600',
    'Youth Development': 'bg-purple-50 text-purple-600',
};

const posts: BlogPost[] = [
    {
        slug: 'new-handloom-center-assam',
        date: 'March 1, 2026',
        category: 'Program Update',
        title: 'Expanding Our Reach: New Handloom Center Opens in Rural Assam',
        excerpt: 'Tribal Welfare Society announces the opening of our newest vocational training center in rural Assam. Equipped with modern looms and guided by master weavers, the center will provide modern machinery and hands-on business mentorship for 50+ artisan families.',
        image: '/images/gallery/vocation/vocation-0.png',
        readTime: '4 min read',
        tags: ['Vocational Training', 'Assam', 'Artisans'],
    },
    {
        slug: 'legal-victory-land-rights',
        date: 'February 15, 2026',
        category: 'Impact Story',
        title: 'Legal Victory: 25 Families Successfully Reclaim Ancestral Land Rights',
        excerpt: 'After 18 months of sustained legal advocacy, documentation support, and constitutional literacy workshops, 25 displaced tribal families in Churachandpur, Manipur, have successfully reclaimed their ancestral land rights.',
        image: '/images/gallery/advocacy/advocacy-1.png',
        readTime: '6 min read',
        tags: ['Legal Advocacy', 'Manipur', 'Land Rights'],
    },
    {
        slug: 'annual-impact-report-2025',
        date: 'January 28, 2026',
        category: 'Transparency',
        title: '2025 Annual Impact Report: 30+ Years, Still Counting',
        excerpt: 'Our 2025 Annual Impact Report is now publicly available. This year, we reached 3,200+ families across five northeastern states, conducted 14 legal literacy camps, and trained 480 artisans.',
        image: '/images/gallery/impact/impact-1.png',
        readTime: '8 min read',
        tags: ['Annual Report', 'Transparency', 'Impact'],
    },
    {
        slug: 'emergency-flood-relief-northeast',
        date: 'January 10, 2026',
        category: 'Relief Operation',
        title: 'Emergency Response: Flood Relief Operations Across Northeast India',
        excerpt: 'Within 48 hours of flood warnings, TWS mobilized relief teams across affected districts of Assam and Manipur. Over 500 individuals received emergency food kits, medical supplies, and temporary shelter support.',
        image: '/images/gallery/impact/impact-3.png',
        readTime: '5 min read',
        tags: ['Relief', 'Floods', 'Emergency'],
    },
    {
        slug: 'holistic-scholarship-winners-2025',
        date: 'December 15, 2025',
        category: 'Youth Development',
        title: '120 Young Scholars Awarded the TWS Holistic Education Scholarship',
        excerpt: 'Congratulations to our 2025–26 scholarship cohort — 120 exceptional young minds from underprivileged tribal households now pursuing higher education across India with full TWS support.',
        image: '/images/gallery/education/education-0.png',
        readTime: '4 min read',
        tags: ['Scholarships', 'Education', 'Youth'],
    },
];

export default function UpdatesPage() {
    const featured = posts[0];
    const rest = posts.slice(1);

    return (
        <main className="min-h-screen bg-[#F5F5F0] dark:bg-stone-950 pt-24 pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                {/* Back to Home */}
                <div className="mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-terracotta transition-colors text-sm font-medium">
                        <Home className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

                {/* Page Header */}
                <div className="text-center mb-20">
                    <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Field Dispatch</span>
                    <h1 className="serif text-5xl md:text-7xl text-stone-900 dark:text-stone-100 mb-5">
                        Latest Updates
                    </h1>
                    <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-lg font-light">
                        Real stories from the field. Program milestones, legal victories, and transparent reporting — no filters.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="mb-16">
                    <Link href={`/updates/${featured.slug}`} className="group block bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200 dark:border-stone-700">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-72 lg:h-auto min-h-[320px]">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${CATEGORY_COLORS[featured.category]}`}>
                                        {featured.category}
                                    </span>
                                    <span className="text-stone-400 dark:text-stone-500 text-xs">{featured.date}</span>
                                </div>
                                <h2 className="serif text-2xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 group-hover:text-terracotta transition-colors leading-snug">
                                    {featured.title}
                                </h2>
                                <p className="text-stone-600 dark:text-stone-300 text-base font-light leading-relaxed mb-6 line-clamp-3">
                                    {featured.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-terracotta font-bold text-sm group-hover:gap-4 transition-all">
                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Other Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {rest.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/updates/${post.slug}`}
                            className="group block bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 hover:shadow-xl transition-all duration-400"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}>
                                        {post.category}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-stone-400 dark:text-stone-500 text-[10px] mb-3">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                                    <span className="flex items-center gap-1.5"><Tag className="w-3 h-3" />{post.readTime}</span>
                                </div>
                                <h3 className="serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-3 group-hover:text-terracotta transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-stone-600 dark:text-stone-300 text-sm font-light leading-relaxed line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center gap-1.5 text-terracotta font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    Read Article <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Back to Home — bottom */}
                <div className="text-center mt-16">
                    <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-terracotta/90 transition-colors shadow-lg">
                        <Home className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

            </div>
        </main>
    );
}
