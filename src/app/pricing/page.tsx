import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingPageContent from './PricingPageContent';

export const metadata: Metadata = {
  title: 'Pricing Plans - Voyage Forge | AI-Powered Travel Platform Pricing',
  description: 'Choose the perfect AI-powered travel platform plan for your business. From $29/month with 14-day free trial. Compare features, pricing, and find the right solution for your travel agency.',
  keywords: [
    'voyage forge pricing',
    'travel platform pricing',
    'AI content creation pricing',
    'travel agency software pricing',
    'travel booking system pricing',
    'CRM for travel business',
    'travel marketing automation pricing',
    'ai travel tools cost',
    'travel business software plans',
    'voyage forge plans',
    'travel agency subscription',
    'ai writing tool for travel',
    'travel content automation pricing',
    'tour operator software pricing',
    'travel technology pricing'
  ],
  openGraph: {
    title: 'Pricing Plans - Voyage Forge | AI-Powered Travel Platform',
    description: 'Choose the perfect AI-powered travel platform plan for your business. From $29/month with 14-day free trial. Compare features and find your ideal solution.',
    images: [
      {
        url: '/api/og?title=Pricing%20Plans%20-%20Voyage%20Forge&description=Start%20from%20%2429%2Fmonth%20with%2014-day%20free%20trial',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge Pricing Plans',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Voyage Forge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans - Voyage Forge',
    description: 'AI-powered travel platform plans starting from $29/month. 14-day free trial, no credit card required.',
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
    canonical: '/pricing',
  },
  category: 'Business Software',
  classification: 'Travel Technology Platform',
  other: {
    'price-range': '$29-$149 per month',
    'free-trial': '14 days',
    'payment-methods': 'Credit Card, PayPal',
    'refund-policy': '30-day money-back guarantee',
  },
};

// JSON-LD structured data for pricing
const pricingStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Voyage Forge AI Travel Platform',
  description: 'AI-powered content creation and management platform for travel businesses',
  brand: {
    '@type': 'Brand',
    name: 'Voyage Forge'
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Plan',
      description: 'Perfect for small travel agencies',
      price: '29',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      url: '/pricing',
      seller: {
        '@type': 'Organization',
        name: 'Voyage Forge'
      }
    },
    {
      '@type': 'Offer',
      name: 'Professional Plan',
      description: 'Ideal for growing travel businesses',
      price: '79',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      url: '/pricing',
      seller: {
        '@type': 'Organization',
        name: 'Voyage Forge'
      }
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Plan',
      description: 'Complete solution for established travel companies',
      price: '149',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      url: '/pricing',
      seller: {
        '@type': 'Organization',
        name: 'Voyage Forge'
      }
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '247'
  }
};

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />
      <Header />
      <PricingPageContent />
      <Footer />
    </>
  );
}