import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
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
  title: 'TWS | Tribal Welfare Society',
  description: 'Empowering the displaced and underprivileged since 1993. Restoring human dignity through craftsmanship and justice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} ${inter.variable}`}>
        <div className="grain"></div>
        <div className="paper-overlay"></div>
        {children}
      </body>
    </html>
  );
}
