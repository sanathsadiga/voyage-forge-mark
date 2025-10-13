import "./global.css";
import type { ReactNode } from "react"; // import type
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalytics from './components/GoogleAnalytics'
import TawkChat from './components/TawkChat'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://voyage-forge.com'),
  title: {
    default: 'Free Travel Website Builder | Voyage Forge - AI Travel Platform',
    template: '%s | Voyage Forge - Free Travel Site Builder'
  },
  description: 'Create your FREE travel website with AI content creation! Best free travel site builder for tour operators, agencies & guides. Start building your free travel platform today.',
  keywords: [
    'free travel website',
    'free travel site builder', 
    'free travel platform',
    'free AI travel tools',
    'free travel website builder',
    'free tour operator software',
    'free travel agency platform',
    'AI travel content',
    'travel platform',
    'travel technology',
    'content creation',
    'travel marketing',
    'tourism automation',
    'travel SEO',
    'AI writing tools',
    'travel business software',
    'voyage forge'
  ],
  authors: [{ name: 'Voyage Forge Team' }],
  creator: 'Voyage Forge',
  publisher: 'Voyage Forge',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voyage-forge.com',
    siteName: 'Voyage Forge',
    title: 'Voyage Forge - AI-Powered Travel Content Creation Platform',
    description: 'AI-powered travel content creation platform for tour operators, travel agencies, and travel guides. Create compelling travel content that converts.',
    images: [
      {
        url: '/api/og?title=Voyage%20Forge&description=AI-Powered%20Travel%20Platform',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge - AI-Powered Travel Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@voyageforge',
    creator: '@voyageforge',
    title: 'Voyage Forge - AI-Powered Travel Content Creation Platform',
    description: 'AI-powered travel content creation platform for tour operators, travel agencies, and travel guides.',
    images: ['/api/og?title=Voyage%20Forge&description=AI-Powered%20Travel%20Platform'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    'facebook-domain-verification': 'qot6amtjy78u01esdzmxndt8a4ok1n',
  },
  alternates: {
    canonical: 'https://voyage-forge.com',
    types: {
      'application/rss+xml': [
        {
          url: '/blog/rss.xml',
          title: 'Voyage Forge Blog RSS Feed',
        },
      ],
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0F172A',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch and Preconnect for Performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//vitals.vercel-analytics.com" />
        <link rel="dns-prefetch" href="//speed-insights.vercel.app" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />

        {/* Global Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Voyage Forge",
              description: "Free travel website builder with AI-powered content creation platform for tour operators, travel agencies, and travel guides",
              url: "https://voyage-forge.com",
              logo: "https://voyage-forge.com/vo%20(2).png",
              image: "https://voyage-forge.com/vo%20(2).png",
              favicon: "https://voyage-forge.com/favicon.ico",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "founder@voyage-forge.com",
                availableLanguage: "English"
              },
              sameAs: [
                "https://twitter.com/voyageforge",
                "https://linkedin.com/company/voyageforge"
              ],
              applicationCategory: "Travel Technology",
              operatingSystem: "Web-based"
            })
          }}
        />
        
        {/* Additional favicon meta tags for better search engine recognition */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        {children}

  <GoogleAnalytics />
  <TawkChat />

  <Analytics />
  <SpeedInsights />
      </body>
    </html>
  );
}
