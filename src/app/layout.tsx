import "./global.css";
import type { ReactNode } from "react"; // import type
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL('https://voyage-forge.com'),
  title: {
    default: 'Voyage Forge - AI-Powered Travel Content Creation Platform',
    template: '%s | Voyage Forge'
  },
  description: 'AI-powered travel content creation platform for tour operators, travel agencies, and travel guides. Create compelling travel content that converts.',
  keywords: [
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Voyage Forge",
              description: "AI-powered travel content creation platform for tour operators, travel agencies, and travel guides",
              url: "https://voyage-forge.com",
              logo: "https://voyage-forge.com/vo%20(2).png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English"
              },
              sameAs: [
                "https://twitter.com/voyageforge",
                "https://linkedin.com/company/voyageforge"
              ],
              offers: {
                "@type": "Offer",
                description: "AI-powered travel content creation platform",
                category: "SaaS Software"
              },
              applicationCategory: "Travel Technology",
              operatingSystem: "Web-based",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "2500"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
