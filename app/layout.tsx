import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import '../styles/gradients.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yuvastambh - The Pillar of Youth | Empowering Communities',
  description: 'Yuvastambh empowers youth across India through education, livelihood, and advocacy programs. Join us in transforming futures and building sustainable communities.',
  keywords: ['NGO', 'youth empowerment', 'education', 'livelihood', 'India', 'social impact', 'community development'],
  authors: [{ name: 'Yuvastambh' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://yuvastambh.org',
    title: 'Yuvastambh - The Pillar of Youth',
    description: 'Empowering youth to build sustainable communities across India.',
    siteName: 'Yuvastambh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvastambh - The Pillar of Youth',
    description: 'Empowering youth to build sustainable communities across India.',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
