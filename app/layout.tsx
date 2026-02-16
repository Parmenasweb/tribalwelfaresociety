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
  metadataBase: new URL('https://tribalwelfaresociety.org'),
  title: {
    default: 'Tribal Welfare Society | Empowering Communities Since 1993',
    template: '%s | Tribal Welfare Society',
  },
  description: 'Empowering the displaced and underprivileged since 1993. Restoring human dignity through craftsmanship and justice.',
  keywords: ['tribal welfare', 'NGO India', 'community empowerment', 'legal advocacy', 'vocational training', 'tribal rights'],
  authors: [{ name: 'Tribal Welfare Society' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tribalwelfaresociety.org',
    siteName: 'Tribal Welfare Society',
    title: 'Tribal Welfare Society | Empowering Communities Since 1993',
    description: 'Empowering the displaced and underprivileged since 1993. Restoring human dignity through craftsmanship and justice.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tribal Welfare Society',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tribal Welfare Society | Empowering Communities Since 1993',
    description: 'Empowering the displaced and underprivileged since 1993.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
          <div className="grain"></div>
          <div className="paper-overlay"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
