import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FeatureCardsSection from "./components/FeatureCardsSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import type { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Voyage Forge - AI Travel Platform | Trusted by 500+ Travel Businesses",
  description:
    "Complete travel business platform with AI content writer, CRM inquiry handling, advanced SEO tools, plugin integrations, and comprehensive analytics. Trusted by tour operators worldwide with 4.9/5 rating.",
  keywords: [
    "travel content creation pricing",
    "AI travel content plans",
    "travel CRM software",
    "travel SEO tools",
    "travel analytics platform",
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
  metadataBase: new URL("https://voyageforge.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Voyage Forge - Trusted AI Travel Platform | 500+ Businesses",
    description:
      "AI content creation, CRM, SEO tools, analytics & plugins for travel businesses. Trusted by 500+ companies with 4.9/5 rating. Plans starting at $29/mo.",
    url: "https://voyageforge.com",
    siteName: "Voyage Forge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Voyage Forge - Trusted Complete AI Travel Business Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voyage Forge - Trusted AI Travel Platform | 4.9/5 Rating",
    description:
      "AI content creation, CRM, SEO tools & analytics for travel businesses. Trusted by 500+ companies with 4.9/5 rating.",
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
    <>
      <Header />

      <main className="relative min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 px-4 sm:px-8 pt-24 pb-20 overflow-hidden">
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
      </main>

      {/* Feature Cards Section */}
      <FeatureCardsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      <Footer />
    </>
  );
}
