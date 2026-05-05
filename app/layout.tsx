import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
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
  metadataBase: new URL('https://yuvastambh.org.in'),
  title: 'Yuvastambh - The Pillar of Youth | Empowering Communities',
  description: 'Yuvastambh empowers youth across India through education, livelihood, and advocacy programs. Join us in transforming futures and building sustainable communities.',
  keywords: ['NGO', 'youth empowerment', 'education', 'livelihood', 'India', 'social impact', 'community development'],
  authors: [{ name: 'Yuvastambh' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://yuvastambh.org.in',
    title: 'Yuvastambh - The Pillar of Youth',
    description: 'Empowering youth to build sustainable communities across India.',
    siteName: 'Yuvastambh',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Yuvastambh Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvastambh - The Pillar of Youth',
    description: 'Empowering youth to build sustainable communities across India.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/yuvastambh-logo.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
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
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
