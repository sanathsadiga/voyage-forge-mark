import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FeatureCardsSection from "./components/FeatureCardsSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SEOEnhancer from "./components/SEOEnhancer";
import type { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Free Travel Website Builder | AI Travel Platform | Voyage Forge",
  description:
    "Get your FREE travel website with AI content creation! Best free travel site builder for tour operators, travel agencies & guides. Free plan available - no credit card needed. Create travel content, manage bookings & grow your business.",
  keywords: [
    "free travel website",
    "free travel site builder",
    "free travel platform",
    "free AI travel tools",
    "free travel content creator",
    "free travel website builder",
    "free tour operator software",
    "free travel agency platform",
    "free travel marketing tools",
    "free travel SEO tools",
    "free travel booking system",
    "free travel CRM",
    "travel content creation pricing",
    "AI travel content plans",
    "travel website builder cost",
    "itinerary generator pricing",
    "travel booking widgets plans",
    "tour operator marketing pricing",
    "travel agency tools cost",
    "destination marketing pricing",
    "travel SEO optimization plans",
    "automated travel content pricing",
    "travel content management cost",
    "booking engine pricing",
    "travel business software plans",
    "travel plugin integrations",
    "visitor tracking travel sites",
    "travel industry testimonials",
    "tour operator reviews",
  ],
  authors: [{ name: "Voyage Forge" }],
  creator: "Voyage Forge",
  publisher: "Voyage Forge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://voyage-forge.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Travel Website Builder | AI Platform | Voyage Forge",
    description:
      "Start FREE! Complete travel platform with AI content creation, CRM, SEO tools & analytics. Trusted by 500+ companies. Free plan available - upgrade anytime.",
    url: "https://voyage-forge.com",
    siteName: "Voyage Forge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free Travel Website Builder - Voyage Forge AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Travel Website Builder | Start Your Travel Business FREE",
    description:
      "Complete FREE travel platform with AI content creation, CRM & SEO tools. Trusted by 500+ companies. Start building your travel site today!",
    images: ["/twitter-image.jpg"],
    creator: "@voyageforge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      <Header />
      
      <SEOEnhancer 
        pageType="homepage"
        focusKeyword="free travel website"
        keywords={[
          'free travel website builder',
          'create travel website free',
          'free tour operator platform',
          'free travel agency software'
        ]}
      />

      <main className="relative z-10">
  <section className="relative min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-8 pt-24">
          {/* Enhanced background orbs and effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-12 -top-6 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute right-6 bottom-6 w-[32rem] h-80 bg-gradient-to-l from-purple-500/8 to-indigo-600/8 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-cyan-400/4 to-blue-500/4 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,237,74,0.08),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.06),transparent_50%)]" />

            {/* Floating particles */}
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-ping"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
            <HeroSection />
            <FeaturesSection />
          </div>
        </section>

        {/* What is Voyage Forge — visible short block for OAuth verification */}
        <section aria-label="What is Voyage Forge" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/6">
            <h3 className="text-2xl text-white font-semibold">What is Voyage Forge</h3>
            {/* Enhanced description box */}
            <div className="mt-3">
              <div className="p-4 rounded-lg bg-white/3 border-l-4 border-amber-400">
                <p className="text-lg text-gray-100 leading-relaxed">
                  <span className="font-semibold text-amber-200">Voyage Forge</span> is an all-in-one platform for tour operators and travel agencies. We provide a <span className="font-medium text-amber-200">website builder</span> with a <span className="font-medium text-amber-200">built-in CRM</span>, <span className="font-medium text-amber-200">AI-powered content writing</span>, <span className="font-medium text-amber-200">automated SEO</span>, <span className="font-medium text-amber-200">booking widgets</span>, and analytics - everything you need to publish faster, measure performance, and convert more bookings without the technical headache.
                </p>
                <p className="mt-3 text-sm text-gray-300 flex flex-wrap gap-3">
                  <span className="inline-block bg-white/5 px-3 py-1 rounded-md text-xs">AI Content</span>
                  <span className="inline-block bg-white/5 px-3 py-1 rounded-md text-xs">SEO Automation</span>
                  <span className="inline-block bg-white/5 px-3 py-1 rounded-md text-xs">Booking Widgets</span>
                  <span className="inline-block bg-white/5 px-3 py-1 rounded-md text-xs">Built-in CRM</span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Privacy policy • <a href="/privacy-policy" className="underline">privacy policy</a> • Contact: <a href="mailto:founder@voyage-forge.com" className="underline">founder@voyage-forge.com</a>
            </p>
          </div>
        </section>

        {/* Feature Cards Section */}
        <FeatureCardsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>
      
      <Footer />
      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h2>Travel Content Creation Features</h2>
        <ul>
          <li>
            AI-powered itinerary generator for personalized travel experiences
          </li>
          <li>SEO-optimized travel blog content creation</li>
          <li>Booking widget integration for tour operators</li>
          <li>One-click publishing to WordPress and other platforms</li>
          <li>Travel destination marketing automation</li>
          <li>Review management and display widgets</li>
          <li>Interactive map integration for travel websites</li>
          <li>Keyword optimization for travel businesses</li>
        </ul>

        <h2>Perfect for Travel Industry Professionals</h2>
        <ul>
          <li>Tour operators seeking automated content creation</li>
          <li>Travel agencies looking to improve their digital marketing</li>
          <li>Travel guides wanting professional marketing materials</li>
          <li>Hotels needing engaging destination content</li>
          <li>Travel bloggers requiring SEO-optimized content</li>
          <li>Destination marketing organizations</li>
        </ul>

        <h2>Pricing Plans for Every Travel Business Size</h2>
        <ul>
          <li>Plus Plan - $29/month for individual content creators</li>
          <li>
            Plus + Booking Engine - $79/month with integrated booking system
          </li>
          <li>Pro Plan - $149/month complete solution for large agencies</li>
          <li>All plans include 14-day free trial</li>
          <li>No setup fees or hidden costs</li>
          <li>Cancel anytime with money-back guarantee</li>
        </ul>

        <h2>Complete Travel Business Software Features</h2>
        <ul>
          <li>AI content writer for automated travel blog creation</li>
          <li>CRM system for customer inquiry management and lead nurturing</li>
          <li>
            Advanced SEO tools with keyword optimization and schema markup
          </li>
          <li>Plugin ecosystem including form integration and analytics</li>
          <li>Real-time visitor analytics and traffic source tracking</li>
          <li>Geographic visitor analysis and behavior insights</li>
          <li>Cookie consent management and GDPR compliance tools</li>
          <li>Payment gateway integrations for booking systems</li>
        </ul>
        
        <h2>Customer Testimonials and Reviews</h2>
        <ul>
          <li>Thailand Tours - Complete satisfaction with early access features</li>
          <li>Himalayan Tours Planner - User-friendly platform for non-technical users</li>
          <li>500+ travel businesses trust Voyage Forge platform</li>
          <li>4.9/5 average customer rating and satisfaction</li>
          <li>100% money-back guarantee for all plans</li>
          <li>Verified customer reviews from tour operators worldwide</li>
        </ul>
      </div>

      {/* Comprehensive Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "@id": "https://voyage-forge.com/#software",
                "name": "Voyage Forge",
                "description": "Free AI-powered travel website builder and content creation platform for tour operators, travel agencies, and travel guides",
                "url": "https://voyage-forge.com",
                "image": "https://voyage-forge.com/vo%20(2).png",
                "applicationCategory": "TravelApplication",
                "operatingSystem": "Web-based",
                "offers": [
                  {
                    "@type": "Offer",
                    "@id": "https://voyage-forge.com/#free-plan",
                    "name": "Free Plan",
                    "description": "Free travel website builder with AI content generation",
                    "price": "0",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "Voyage Forge Free Plan"
                    },
                    "image": "https://voyage-forge.com/vo%20(2).png"
                  },
                  {
                    "@type": "Offer",
                    "@id": "https://voyage-forge.com/#plus-plan",
                    "name": "Plus Plan",
                    "description": "Professional travel content creation with advanced features",
                    "price": "29",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "Voyage Forge Plus Plan"
                    },
                    "image": "https://voyage-forge.com/vo%20(2).png"
                  },
                  {
                    "@type": "Offer",
                    "@id": "https://voyage-forge.com/#plus-booking-plan",
                    "name": "Plus + Booking Engine",
                    "description": "Complete travel platform with integrated booking system",
                    "price": "79",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "Voyage Forge Plus + Booking Engine"
                    },
                    "image": "https://voyage-forge.com/vo%20(2).png"
                  },
                  {
                    "@type": "Offer",
                    "@id": "https://voyage-forge.com/#pro-plan",
                    "name": "Pro Plan",
                    "description": "Enterprise travel platform with unlimited features",
                    "price": "149",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "Voyage Forge Pro Plan"
                    },
                    "image": "https://voyage-forge.com/vo%20(2).png"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "500",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "review": [
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Sarah Mitchell"
                    },
                    "reviewBody": "Voyage Forge transformed our content strategy. We're creating 10x more engaging content in half the time.",
                    "itemReviewed": {
                      "@type": "SoftwareApplication",
                      "name": "Voyage Forge",
                      "url": "https://voyage-forge.com"
                    }
                  },
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Carlos Rodriguez"
                    },
                    "reviewBody": "The booking system integration is seamless. Our conversion rates increased by 40% since implementing Voyage Forge.",
                    "itemReviewed": {
                      "@type": "SoftwareApplication",
                      "name": "Voyage Forge",
                      "url": "https://voyage-forge.com"
                    }
                  },
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Emily Chen"
                    },
                    "reviewBody": "Best investment we've made for our travel business. The AI content quality is incredible and saves us hours daily.",
                    "itemReviewed": {
                      "@type": "SoftwareApplication",
                      "name": "Voyage Forge",
                      "url": "https://voyage-forge.com"
                    }
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://voyage-forge.com/#organization",
                "name": "Voyage Forge",
                "url": "https://voyage-forge.com",
                "logo": "https://voyage-forge.com/vo%20(2).png",
                "description": "Free travel website builder with AI-powered content creation platform for tour operators, travel agencies, and travel guides",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "founder@voyage-forge.com",
                  "availableLanguage": "English"
                },
                "sameAs": [
                  "https://twitter.com/voyageforge",
                  "https://linkedin.com/company/voyageforge"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://voyage-forge.com/#website",
                "url": "https://voyage-forge.com",
                "name": "Voyage Forge - Free Travel Website Builder",
                "description": "Create your free travel website with AI content generation, booking system, CRM, and SEO tools",
                "publisher": {
                  "@id": "https://voyage-forge.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://voyage-forge.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://voyage-forge.com/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://voyage-forge.com"
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  );
}
