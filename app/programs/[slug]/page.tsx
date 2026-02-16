import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const programs = {
  'relief-rehabilitation': {
    title: 'Relief & Rehabilitation',
    description: 'Immediate response to displacement. We provide medical assistance, temporary camping, and essential relief for communities affected by natural and social calamities.',
    longDescription: 'Our Relief & Rehabilitation program stands as the first line of defense for tribal communities facing displacement. Since 1993, we have responded to countless emergencies, providing immediate shelter, medical aid, and essential supplies. But our commitment goes beyond temporary relief—we work to rebuild communities sustainably, ensuring that those affected by calamities can regain their footing and dignity.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { label: 'Communities Served', value: '150+' },
      { label: 'Families Helped', value: '10,000+' },
      { label: 'Emergency Responses', value: '500+' },
    ],
    services: [
      'Immediate medical assistance and health camps',
      'Temporary shelter and relief camps',
      'Food and essential supplies distribution',
      'Post-disaster rehabilitation programs',
      'Community rebuilding initiatives',
      'Psychosocial support services',
    ],
    color: 'terracotta',
  },
  'vocational-empowerment': {
    title: 'Vocational Empowerment',
    description: 'Revitalizing heritage. Our production centers train tribal women in traditional weaving and handloom crafts, turning ancient skills into sustainable livelihoods.',
    longDescription: 'The Vocational Empowerment program preserves cultural heritage while creating economic opportunities. Through our Handloom & Production Centers, we train tribal women in traditional crafts, modern business skills, and market access. This program has empowered over 200 artisan families, creating sustainable livelihoods that honor tradition while securing futures.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { label: 'Artisan Families', value: '200+' },
      { label: 'Products Created', value: '10,000+' },
      { label: 'Training Programs', value: '150+' },
    ],
    services: [
      'Traditional weaving and handloom training',
      'Modern business and entrepreneurship skills',
      'Market access and product promotion',
      'Quality control and design development',
      'Financial literacy programs',
      'Cooperative formation support',
    ],
    color: 'earthy-green',
  },
  'legal-advocacy': {
    title: 'Social & Legal Justice',
    description: 'Protecting the vulnerable. We provide comprehensive legal education and aid, ensuring that the underprivileged are aware of and empowered by their constitutional rights.',
    longDescription: 'Our Legal Advocacy program ensures that tribal communities understand and can exercise their constitutional rights. Through legal literacy camps, direct legal aid, and advocacy, we help families reclaim land rights, access government schemes, and fight against exploitation. This program has won over 500 legal cases, securing rights and dignity for countless families.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
    stats: [
      { label: 'Legal Cases Won', value: '500+' },
      { label: 'Legal Camps Conducted', value: '200+' },
      { label: 'Families Helped', value: '5,000+' },
    ],
    services: [
      'Legal literacy and awareness camps',
      'Direct legal aid and representation',
      'Land rights advocacy',
      'Constitutional rights education',
      'Documentation assistance',
      'Community paralegal training',
    ],
    color: 'gold',
  },
  'holistic-development': {
    title: 'Holistic Development',
    description: 'Unlimited growth. From primary education to specialized training, we operate without boundaries to ensure the socio-economic upliftment of every life we touch.',
    longDescription: 'Holistic Development encompasses our comprehensive approach to community upliftment. From early childhood education to adult literacy, from health initiatives to environmental programs, we address all aspects of community well-being. This integrated approach ensures sustainable, long-term transformation that touches every aspect of life.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    stats: [
      { label: 'Students Educated', value: '5,000+' },
      { label: 'Health Camps', value: '300+' },
      { label: 'Communities Reached', value: '25+' },
    ],
    services: [
      'Early childhood and primary education',
      'Adult literacy programs',
      'Health and nutrition initiatives',
      'Environmental conservation programs',
      'Youth leadership development',
      'Community infrastructure support',
    ],
    color: 'stone-600',
  },
};

export async function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs[slug as keyof typeof programs];
  
  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs[slug as keyof typeof programs];

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] dark:bg-stone-900">
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover grayscale-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="serif text-5xl md:text-7xl text-white font-bold">
            {program.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 leading-relaxed mb-12">
            {program.longDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {program.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 text-center"
              >
                <div className={`serif text-4xl font-bold text-${program.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-stone-600 dark:text-stone-400 text-sm font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 bg-white dark:bg-stone-800 rounded-xl p-4 border border-stone-200 dark:border-stone-700"
                >
                  <div className={`w-2 h-2 rounded-full bg-${program.color} mt-2 flex-shrink-0`} />
                  <span className="text-stone-900 dark:text-stone-100">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-100 to-white dark:from-stone-800 dark:to-stone-900 rounded-3xl p-8 md:p-12 border border-stone-200 dark:border-stone-700 text-center">
            <h3 className="serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4">
              Get Involved
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto">
              Want to support this program or learn how you can contribute? Reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-xl font-bold uppercase tracking-wider hover:bg-stone-800 dark:hover:bg-stone-200 transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/#support"
                className="px-8 py-4 bg-transparent border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 rounded-xl font-bold uppercase tracking-wider hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
