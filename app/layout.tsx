import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { organizationStructuredData } from './structured-data';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tribalwelfaresociety.org'),
  title: {
    default: 'Tribal Welfare Society | Empowering Communities Since 1993',
    template: '%s | Tribal Welfare Society',
  },
  description: 'Empowering the displaced and underprivileged since 1993. Restoring human dignity through craftsmanship and justice.',
  keywords: [
    // Brand & identity
    'Tribal Welfare Society',
    'tribal welfare society ngo',
    'tribal welfare society india',
    'tribal welfare society northeast india',
    'tribal welfare society guwahati',
    'tribal welfare society new delhi',
    // Category-based
    'best ngo in northeast india',
    'top ngo northeast india',
    'registered ngo india',
    'ngo for tribal communities india',
    'tribal empowerment ngo',
    'ngo assam manipur nagaland',
    // Cause-based
    'ngo for women empowerment india',
    'women led ngo india',
    'ngo for tribal women',
    'ngo for children education',
    'ngo for education india',
    'girl child education ngo',
    'ngo for food donation northeast india',
    'ngo for disaster relief india',
    'ngo for flood relief assam',
    'ngo for displaced communities',
    'ngo for physically challenged india',
    'ngo for blind india',
    'legal aid ngo india',
    'legal advocacy ngo northeast',
    'land rights ngo india',
    'constitutional rights tribal india',
    // Program-specific
    'vocational training ngo india',
    'handloom training ngo northeast',
    'artisan empowerment ngo',
    'scholarship ngo tribal youth',
    'tribal scholarship india',
    // SERP / intent-based
    'donate to ngo india',
    'donate tribal welfare',
    'volunteer ngo northeast india',
    'charitable trust india 80g',
    '80g tax exemption ngo india',
    'relief rehabilitation ngo india',
    'holistic development ngo',
    'community development ngo india',
  ],
  authors: [{ name: 'Tribal Welfare Society' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/favicons/favicon.ico', sizes: 'any' },
      { url: '/images/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicons/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/favicons/apple-touch-icon.png',
    shortcut: '/images/favicons/favicon.ico',
    other: [
      { rel: 'manifest', url: '/images/favicons/site.webmanifest' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.tribalwelfaresociety.org',
    siteName: 'Tribal Welfare Society',
    title: 'Tribal Welfare Society | Empowering Communities Since 1993',
    description: 'Empowering the displaced and underprivileged since 1993. Restoring human dignity through craftsmanship and justice.',
    images: [
      {
        url: '/images/favicons/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Tribal Welfare Society Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tribal Welfare Society | Empowering Communities Since 1993',
    description: 'Empowering the displaced and underprivileged since 1993.',
    images: ['/images/favicons/web-app-manifest-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} ${inter.variable}`}>
        <ThemeProvider>
          <div className="paper-overlay"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
