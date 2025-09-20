import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import type { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title: "Voyage Forge - AI-Powered Travel Content Creation Platform | SEO-Optimized Travel Marketing",
  description: "Create stunning, high-converting travel content instantly with Voyage Forge. Generate SEO-optimized itineraries, booking widgets, and travel marketing materials in minutes. Perfect for tour operators, travel agencies, and travel guides.",
  keywords: [
    "travel content creation",
    "AI travel content",
    "SEO travel marketing",
    "travel website builder",
    "itinerary generator",
    "travel booking widgets",
    "tour operator marketing",
    "travel agency tools",
    "destination marketing",
    "travel SEO optimization",
    "automated travel content",
    "travel content management"
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
    title: "Voyage Forge - AI-Powered Travel Content Creation Platform",
    description: "Create stunning, high-converting travel content instantly. Generate SEO-optimized itineraries, booking widgets, and travel marketing materials in minutes.",
    url: "https://voyageforge.com",
    siteName: "Voyage Forge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Voyage Forge - AI Travel Content Creation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voyage Forge - AI-Powered Travel Content Creation Platform",
    description: "Create stunning, high-converting travel content instantly. Generate SEO-optimized itineraries, booking widgets, and travel marketing materials in minutes.",
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
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-ping" style={{animationDelay: '0s'}} />
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <HeroSection />
          <FeaturesSection />
        </div>
      </main>

      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h2>Travel Content Creation Features</h2>
        <ul>
          <li>AI-powered itinerary generator for personalized travel experiences</li>
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
      </div>

      <Footer />
    </>
  );
}
