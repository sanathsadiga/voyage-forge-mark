import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermsConditionsContent from './TermsConditionsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Voyage Forge | Service Agreement & Usage Terms',
  description: 'Complete terms and conditions for Voyage Forge platform. Learn about service usage, user responsibilities, intellectual property rights, service availability, and legal agreements.',
  keywords: [
    'voyage forge terms conditions',
    'service agreement',
    'usage terms',
    'user agreement',
    'travel platform terms',
    'AI content terms',
    'intellectual property',
    'service availability',
    'user responsibilities',
    'platform rules',
    'legal agreement',
    'terms of service'
  ],
  openGraph: {
    title: 'Terms & Conditions - Voyage Forge | Service Agreement & Usage Terms',
    description: 'Complete terms and conditions for Voyage Forge platform. Service usage, responsibilities, and legal agreements.',
    images: [
      {
        url: '/api/og?title=Terms%20%26%20Conditions%20-%20Voyage%20Forge',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge Terms & Conditions',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions - Voyage Forge',
    description: 'Service agreement and usage terms for our AI travel platform.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 relative overflow-hidden">
      {/* Unified background with decorative orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      <Header />
      <TermsConditionsContent />
      <Footer />
    </div>
  );
}