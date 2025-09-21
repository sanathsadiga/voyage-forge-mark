import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Voyage Forge | Data Protection & Your Rights',
  description: 'Learn how Voyage Forge protects your privacy and data. Comprehensive privacy policy covering data collection, usage, cookies, security measures, and your rights under GDPR and CCPA.',
  keywords: [
    'voyage forge privacy policy',
    'data protection',
    'privacy rights',
    'GDPR compliance',
    'CCPA compliance',
    'data security',
    'travel platform privacy',
    'AI content privacy',
    'user data protection',
    'cookie policy',
    'data processing',
    'privacy controls'
  ],
  openGraph: {
    title: 'Privacy Policy - Voyage Forge | Data Protection & Your Rights',
    description: 'Learn how Voyage Forge protects your privacy and data. Comprehensive privacy policy covering data collection, usage, and your rights.',
    images: [
      {
        url: '/api/og?title=Privacy%20Policy%20-%20Voyage%20Forge',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge Privacy Policy',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Voyage Forge',
    description: 'Learn how Voyage Forge protects your privacy and data. Your trust is our foundation.',
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
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}