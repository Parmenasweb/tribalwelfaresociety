import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Calendar, Shield, Users, Heart, BookOpen, Scale, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | Tribal Welfare Society',
    description: 'Learn about Tribal Welfare Society — a registered NGO founded in 1993, dedicated to empowering displaced tribal communities across Northeast India through vocational training, legal advocacy, education, and relief operations.',
    keywords: [
        'tribal welfare society',
        'tribal welfare society about',
        'ngo about page',
        'tribal welfare society history',
        'northeast india ngo',
        'tribal empowerment ngo',
        'women empowerment ngo india',
    ],
    openGraph: {
        title: 'About Tribal Welfare Society | Founded 1993',
        description: 'From a small relief effort in New Delhi to a multi-state NGO impact machine — discover who we are, what drives us, and how we have served tribal communities for over 30 years.',
        url: 'https://www.tribalwelfaresociety.org/about',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
};

const teamMembers = [
    {
        name: 'Maria Mangte',
        role: 'Founder',
        image: '/images/team/founder.jpeg',
        email: 'mariamangte9@gmail.com',
        phone: '+91 70054 79217',
    },
    {
        name: 'Tony Singsit',
        role: 'Secretary',
        image: '/images/team/secretary.jpeg',
        email: 'neoprane505@gmail.com',
        phone: '+91 6289793284',
    },
    {
        name: 'Chongpineng',
        role: 'Program Coordinator',
        image: '/images/team/program-codinator-nagaland.jpeg',
        email: 'pipychongloi1999@gmail.com',
        phone: '+91 8419054943',
    },
];

const programs = [
    { icon: <Scale className="w-6 h-6" />, title: 'Legal Advocacy', description: 'Constitutional rights education and legal representation for displaced tribal families.', color: 'text-terracotta', bg: 'bg-terracotta/10' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Holistic Education', description: 'Scholarships and mentorship programs ensuring every tribal child gets quality education.', color: 'text-earthy-green', bg: 'bg-earthy-green/10' },
    { icon: <Heart className="w-6 h-6" />, title: 'Relief & Rehabilitation', description: 'Rapid response to displacement crises: shelter, food, medical aid, and psychosocial support.', color: 'text-gold', bg: 'bg-gold/10' },
    { icon: <Users className="w-6 h-6" />, title: 'Vocational Empowerment', description: 'Handloom and craft training centers that transform traditional skills into sustainable businesses.', color: 'text-blue-600', bg: 'bg-blue-50' },
];

const values = [
    { title: 'Dignity', description: 'Every person is inherently worthy. We restore dignity through opportunity, not charity.' },
    { title: 'Transparency', description: 'Full public accountability for every rupee collected and every life touched.' },
    { title: 'Community', description: 'Real change is only possible when communities lead their own transformation.' },
    { title: 'Justice', description: 'We will advocate, loudly and persistently, for what tribal communities are constitutionally owed.' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-stone-950 pt-20">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#F5F5F0] via-white to-[#F5F5F0] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 py-28 md:py-36 overflow-hidden border-b border-stone-200 dark:border-stone-700/50">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-earthy-green/5 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
                    <div className="max-w-3xl">
                        <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Story</span>
                        <h1 className="serif text-5xl md:text-7xl xl:text-8xl text-stone-900 dark:text-stone-100 mb-6 leading-tight">
                            Transforming Displacement<br />
                            <span className="text-terracotta">into Dignity.</span>
                        </h1>
                        <p className="text-stone-600 dark:text-stone-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                            For over 30 years, Tribal Welfare Society has walked alongside the most marginalized communities of Northeast India — displaced, underserved, and underrepresented — turning shared pain into collective strength.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link href="#mission" className="px-6 py-3 bg-terracotta text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-terracotta/90 transition-colors">
                                Our Mission
                            </Link>
                            <Link href="#team" className="px-6 py-3 border-2 border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-full font-bold text-sm uppercase tracking-wider hover:border-terracotta transition-colors">
                                Meet the Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="border-b border-stone-200 dark:border-stone-700/50 bg-white dark:bg-stone-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone-200 dark:divide-stone-700">
                        {[
                            { icon: <Calendar className="w-5 h-5" />, value: 'Since 1993', label: 'Registered NGO' },
                            { icon: <Users className="w-5 h-5" />, value: '50,000+', label: 'Lives Impacted' },
                            { icon: <MapPin className="w-5 h-5" />, value: '5 States', label: 'Northeast India' },
                            { icon: <Shield className="w-5 h-5" />, value: '80G', label: 'Tax Exempt Status' },
                        ].map((stat) => (
                            <div key={stat.label} className="px-8 py-10 text-center flex flex-col items-center gap-3">
                                <div className="text-terracotta">{stat.icon}</div>
                                <div className="serif text-3xl font-bold text-stone-900 dark:text-stone-100">{stat.value}</div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" className="py-24 md:py-32 bg-[#F5F5F0] dark:bg-stone-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-earthy-green font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Purpose</span>
                            <h2 className="serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 mb-8 leading-tight">
                                Mission &amp; Vision
                            </h2>
                            <div className="space-y-8">
                                <div className="border-l-2 border-terracotta pl-6">
                                    <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider text-sm">Our Mission</h3>
                                    <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                                        To uplift displaced and marginalized tribal communities through legal empowerment, vocational skill development, quality education access, and rapid relief assistance — restoring dignity and enabling self-sufficiency.
                                    </p>
                                </div>
                                <div className="border-l-2 border-earthy-green pl-6">
                                    <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wider text-sm">Our Vision</h3>
                                    <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                                        A Northeast India where every tribal community is economically self-sufficient, legally protected, and fully recognized as equal contributors to India&apos;s cultural and social fabric.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                                <Image
                                    src="/images/gallery/impact/impact-2.png"
                                    alt="Community Empowerment"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-24 md:py-32 bg-white dark:bg-stone-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our History</span>
                    <h2 className="serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 mb-10">
                        A Legacy Born from Crisis
                    </h2>
                    <div className="text-stone-600 dark:text-stone-300 text-lg font-light leading-relaxed space-y-6 text-left md:text-center">
                        <p>
                            In 1993, amidst widespread ethnic unrest and displacement crises in Northeast India, Tribal Welfare Society was founded in New Delhi by a group of deeply committed individuals who refused to look away. What began as informal relief distributions from a small office has since grown into a multi-state organization touching tens of thousands of lives.
                        </p>
                        <p>
                            In 2001, we established our Regional Office in Guwahati, Assam — positioning us at the heart of Northeast India&apos;s complex social landscape. From this base, we extend our arms into Manipur, Nagaland, Mizoram, and Meghalaya, responding with speed and sensitivity wherever we are needed most.
                        </p>
                        <p>
                            Over three decades, we have fought for land rights in courtrooms, woven new livelihoods in artisan workshops, lit classrooms in remote villages, and packed relief trucks at midnight. Every action is guided by one unshakeable belief: that displaced people are not problems to be managed — they are communities to be honored.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 md:py-32 bg-[#F5F5F0] dark:bg-stone-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Principles</span>
                        <h2 className="serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val) => (
                            <div key={val.title} className="bg-white dark:bg-stone-900 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 hover:shadow-lg transition-shadow">
                                <h3 className="serif text-2xl text-terracotta mb-3">{val.title}</h3>
                                <p className="text-stone-600 dark:text-stone-300 text-sm font-light leading-relaxed">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section className="py-24 md:py-32 bg-white dark:bg-stone-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-earthy-green font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">What We Do</span>
                        <h2 className="serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100">Our Core Programs</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {programs.map((prog) => (
                            <div key={prog.title} className="flex gap-6 p-8 rounded-2xl border border-stone-200 dark:border-stone-700 bg-[#F5F5F0] dark:bg-stone-950 hover:shadow-lg transition-shadow">
                                <div className={`w-12 h-12 rounded-xl ${prog.bg} ${prog.color} flex items-center justify-center flex-shrink-0`}>
                                    {prog.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 dark:text-stone-100 text-lg mb-2">{prog.title}</h3>
                                    <p className="text-stone-600 dark:text-stone-300 text-sm font-light leading-relaxed">{prog.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/#programs" className="inline-flex items-center gap-2 text-terracotta font-bold hover:gap-4 transition-all">
                            Explore All Programs <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-24 md:py-32 bg-[#F5F5F0] dark:bg-stone-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Leadership</span>
                        <h2 className="serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100">The People Behind the Mission</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200 dark:border-stone-700 text-center group">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="serif text-2xl text-stone-900 dark:text-stone-100 mb-1">{member.name}</h3>
                                    <p className="text-terracotta font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                                    <div className="space-y-2 text-sm text-stone-600 dark:text-stone-300">
                                        <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 hover:text-terracotta transition-colors">
                                            <Mail className="w-3.5 h-3.5 flex-shrink-0" /><span className="truncate">{member.email}</span>
                                        </a>
                                        <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 hover:text-terracotta transition-colors">
                                            <Phone className="w-3.5 h-3.5 flex-shrink-0" />{member.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-24 bg-stone-900 dark:bg-stone-950 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Get Involved</span>
                    <h2 className="serif text-4xl md:text-6xl mb-6">Be Part of the Change</h2>
                    <p className="text-stone-300 font-light text-lg mb-10 leading-relaxed">
                        Whether you want to donate, volunteer, partner, or simply stay informed — we welcome you. Every act of solidarity matters.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/#support" className="px-8 py-4 bg-terracotta text-white rounded-full font-bold uppercase tracking-wider hover:bg-terracotta/90 transition-colors">
                            Donate Now
                        </Link>
                        <Link href="/#contact" className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold uppercase tracking-wider hover:border-white transition-colors">
                            Contact Us
                        </Link>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-white/5 rounded-2xl p-6">
                            <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">Registered Office</p>
                            <p className="text-white font-medium">Plot 1, West Kidwai Nagar, New Delhi</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">Regional Office</p>
                            <p className="text-white font-medium">102 Neehal Enclave, VIP Road, Guwahati, Assam 781036</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">Email</p>
                            <a href="mailto:tribalwelfare1994@gmail.com" className="text-terracotta font-medium hover:underline">tribalwelfare1994@gmail.com</a>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">Phone</p>
                            <div className="flex flex-col gap-1">
                                <a href="tel:+919707331175" className="text-white font-medium hover:text-terracotta">+91 9707331175</a>
                                <a href="tel:+919864841089" className="text-white font-medium hover:text-terracotta">+91 9864841089</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
