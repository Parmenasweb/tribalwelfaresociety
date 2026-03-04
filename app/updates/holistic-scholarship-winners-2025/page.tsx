import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: '120 Young Scholars Awarded TWS Scholarship | Tribal Welfare Society',
    description: 'Congratulations to our 120 scholarship recipients for 2025-26 — tribal youth from underprivileged households now pursuing higher education across India.',
    openGraph: {
        title: '120 Young Scholars Awarded TWS Scholarship | Tribal Welfare Society',
        url: 'https://www.tribalwelfaresociety.org/updates/holistic-scholarship-winners-2025',
        images: [{ url: '/images/gallery/education/education-0.png' }],
    },
};

export default function ScholarshipPage() {
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
                    <span className="bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Youth Development</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Calendar className="w-3 h-3" /> December 15, 2025</span>
                    <span className="flex items-center gap-1.5 text-stone-400 text-xs"><Tag className="w-3 h-3" /> 4 min read</span>
                </div>

                <h1 className="serif text-3xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 mb-8 leading-tight">
                    120 Young Scholars Awarded the TWS Holistic Education Scholarship
                </h1>

                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
                    <Image src="/images/gallery/education/education-0.png" alt="Scholarship Ceremony" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" priority />
                </div>

                <article className="prose prose-stone dark:prose-invert max-w-none prose-lg">
                    <p className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed mb-6">
                        It is with immense pride that Tribal Welfare Society announces the 2025–26 cohort of the TWS Holistic Education Scholarship — 120 extraordinary young men and women from underprivileged tribal households, who will now pursue undergraduate and postgraduate education at institutions across India, with full financial support from TWS.
                    </p>

                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        The scholarship program, which has been running since 2018, was significantly expanded this year to accommodate growing demand. We received over 740 applications from across five northeastern states — a 40% increase from the previous year — reflecting both rising awareness of the program and the desperate need for educational support in tribal communities.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                        {[
                            { value: '120', label: 'Scholarships Awarded' },
                            { value: '740+', label: 'Applications Received' },
                            { value: '5', label: 'States Represented' },
                            { value: '₹2.4L', label: 'Avg Annual Support' },
                        ].map(s => (
                            <div key={s.label} className="text-center p-6 bg-purple-50 dark:bg-stone-800 rounded-2xl">
                                <div className="serif text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">{s.value}</div>
                                <div className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-2 font-bold">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10">
                        <Image src="/images/gallery/education/education-0.png" alt="Students" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
                    </div>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">What the Scholarship Covers</h2>
                    <ul className="list-disc list-inside text-stone-600 dark:text-stone-300 space-y-2 mb-6">
                        <li><strong>Full Tuition</strong> — paid directly to the institution, no cap</li>
                        <li><strong>Accommodation Allowance</strong> — ₹5,000/month for hostellers, ₹3,000/month for day students</li>
                        <li><strong>Academic Supplies</strong> — one-time grant of ₹10,000 for books, devices, and stationery</li>
                        <li><strong>Mentorship</strong> — each scholar is paired with a TWS alumni mentor in their field of study</li>
                        <li><strong>Emergency Fund Access</strong> — scholars can access a discretionary emergency fund for family crises</li>
                    </ul>

                    <h2 className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-10 mb-4">Selection Criteria</h2>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        Recipients are selected on the basis of academic merit, demonstrated financial need, and a personal statement evaluated by our scholarship committee. We explicitly give equal weight to first-generation learners and to applicants from extremely remote areas where educational access has historically been minimal.
                    </p>

                    <blockquote className="border-l-4 border-purple-500 pl-6 italic text-stone-700 dark:text-stone-300 text-xl my-10">
                        &ldquo;Nobody in my family has ever held a college degree. When I got the letter, my mother cried for an hour. I am going to study engineering. And I am going to come back and build something for our village.&rdquo;
                        <cite className="block mt-3 text-sm font-bold not-italic text-purple-600">— Khamzathang Haokip, 2025–26 Scholar, Nagaland</cite>
                    </blockquote>

                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                        Applications for the 2026–27 cycle will open in September 2026. If you know a deserving candidate, please share our scholarship information page with them or contact our office directly.
                    </p>
                </article>

                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-stone-200 dark:border-stone-700">
                    {['Scholarships', 'Education', 'Youth', 'Northeast India'].map(tag => (
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
