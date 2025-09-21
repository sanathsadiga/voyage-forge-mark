import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogListingContent from './BlogListingContent';

export const metadata: Metadata = {
  title: 'Travel Industry Blog - Voyage Forge | AI-Powered Travel Insights & Tips',
  description: 'Discover the latest travel industry insights, AI technology trends, digital marketing strategies, and business growth tips. Expert advice for travel professionals and entrepreneurs.',
  keywords: [
    'travel blog',
    'travel industry insights',
    'AI travel technology',
    'travel marketing strategies',
    'tourism industry trends',
    'travel business tips',
    'digital marketing travel',
    'travel technology blog',
    'voyage forge blog',
    'travel industry news',
    'tourism marketing',
    'travel SEO tips',
    'travel business growth',
    'sustainable travel trends',
    'travel automation'
  ],
  openGraph: {
    title: 'Travel Industry Blog - Voyage Forge',
    description: 'Expert insights on travel technology, AI-powered marketing, and industry trends to help your travel business grow.',
    images: [
      {
        url: '/api/og?title=Travel%20Industry%20Blog&description=Expert%20insights%20and%20strategies%20for%20travel%20professionals',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge Travel Blog',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Voyage Forge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Industry Blog - Voyage Forge',
    description: 'Expert insights on travel technology, AI marketing, and industry trends for travel professionals.',
    creator: '@voyageforge',
  },
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
  alternates: {
    canonical: 'https://voyageforge.com/blog',
    types: {
      'application/rss+xml': [
        {
          url: '/blog/rss.xml',
          title: 'Voyage Forge Travel Blog RSS Feed',
        },
      ],
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Voyage Forge Travel Blog',
  description: 'Expert insights on travel technology, AI-powered marketing, and industry trends for travel professionals.',
  url: 'https://voyageforge.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Voyage Forge',
    logo: {
      '@type': 'ImageObject',
      url: 'https://voyageforge.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://voyageforge.com/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950">
        <Header />
        <main className="pt-20">
          <BlogListingContent />
        </main>
        <Footer />
      </div>
    </>
  );
}