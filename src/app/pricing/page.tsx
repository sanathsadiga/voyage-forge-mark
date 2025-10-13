import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';
import PricingPageContent from './PricingPageContent';

export const metadata: Metadata = {
  title: 'Free Travel Platform | Pricing Plans | Voyage Forge',
  description: 'Start FREE! Complete travel website builder with AI content creation. Free plan available + premium plans from $29/month. Build your travel site for free today!',
  keywords: [
    'free travel platform',
    'free travel website pricing',
    'free travel site builder',
    'free AI travel tools',
    'free travel agency software',
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
    title: 'Free Travel Platform & Pricing | Voyage Forge',
    description: 'Start FREE! Complete travel website builder with AI content creation. Free plan available + premium plans from $29/month.',
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
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://voyage-forge.com/#software',
      name: 'Voyage Forge - Free Travel Website Builder',
      description: 'Free AI-powered travel content creation and management platform for travel businesses',
      url: 'https://voyage-forge.com',
      image: 'https://voyage-forge.com/vo%20(2).png',
      applicationCategory: 'TravelApplication',
      operatingSystem: 'Web-based',
      brand: {
        '@type': 'Brand',
        name: 'Voyage Forge'
      },
      offers: [
        {
          '@type': 'Offer',
          '@id': 'https://voyage-forge.com/pricing#free-plan',
          name: 'Free Plan',
          description: 'Free travel website builder with AI content generation - Perfect for individual creators',
          price: '0',
          priceCurrency: 'USD',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
          url: 'https://voyage-forge.com/pricing',
          image: 'https://voyage-forge.com/vo%20(2).png',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Voyage Forge Free Plan'
          },
          seller: {
            '@type': 'Organization',
            name: 'Voyage Forge',
            url: 'https://voyage-forge.com'
          }
        },
        {
          '@type': 'Offer',
          '@id': 'https://voyage-forge.com/pricing#plus-plan',
          name: 'Plus Plan',
          description: 'Professional travel content creation with advanced features - Perfect for small agencies',
          price: '29',
          priceCurrency: 'USD',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
          url: 'https://voyage-forge.com/pricing',
          image: 'https://voyage-forge.com/vo%20(2).png',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Voyage Forge Plus Plan'
          },
          seller: {
            '@type': 'Organization',
            name: 'Voyage Forge',
            url: 'https://voyage-forge.com'
          }
        },
        {
          '@type': 'Offer',
          '@id': 'https://voyage-forge.com/pricing#plus-booking-plan',
          name: 'Plus + Booking Engine',
          description: 'Complete travel platform with integrated booking system - Ideal for growing businesses',
          price: '79',
          priceCurrency: 'USD',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
          url: 'https://voyage-forge.com/pricing',
          image: 'https://voyage-forge.com/vo%20(2).png',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Voyage Forge Plus + Booking Engine'
          },
          seller: {
            '@type': 'Organization',
            name: 'Voyage Forge',
            url: 'https://voyage-forge.com'
          }
        },
        {
          '@type': 'Offer',
          '@id': 'https://voyage-forge.com/pricing#pro-plan',
          name: 'Pro Plan',
          description: 'Enterprise solution for established travel companies with unlimited features',
          price: '149',
          priceCurrency: 'USD',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
          url: 'https://voyage-forge.com/pricing',
          image: 'https://voyage-forge.com/vo%20(2).png',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Voyage Forge Pro Plan'
          },
          seller: {
            '@type': 'Organization',
            name: 'Voyage Forge',
            url: 'https://voyage-forge.com'
          }
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1'
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          },
          author: {
            '@type': 'Person',
            name: 'Sarah Mitchell'
          },
          reviewBody: 'Voyage Forge transformed our content strategy. We\'re creating 10x more engaging content in half the time.',
          itemReviewed: {
            '@type': 'SoftwareApplication',
            name: 'Voyage Forge',
            url: 'https://voyage-forge.com'
          }
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          },
          author: {
            '@type': 'Person', 
            name: 'Carlos Rodriguez'
          },
          reviewBody: 'The booking system integration is seamless. Our conversion rates increased by 40% since implementing Voyage Forge.',
          itemReviewed: {
            '@type': 'SoftwareApplication',
            name: 'Voyage Forge',
            url: 'https://voyage-forge.com'
          }
        }
      ]
    }
  ]
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
      {/* Enhanced background orbs and effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-4 -top-8 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -right-8 top-1/3 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />
      <Header />
      
      <SEOEnhancer 
        pageType="pricing"
        focusKeyword="free travel platform pricing"
        keywords={[
          'free travel website cost',
          'free travel site plans',
          'travel website builder free plan'
        ]}
      />
      
      <PricingPageContent />
      <Footer />
    </div>
  );
}