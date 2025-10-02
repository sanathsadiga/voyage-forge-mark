import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RefundPolicyContent from './RefundPolicyContent';

export const metadata: Metadata = {
  title: 'Refund Policy - Voyage Forge | Fair & Transparent Refund Terms',
  description: 'Clear and fair refund policy for Voyage Forge. Learn about our refund process, eligibility criteria, and how to request refunds for unused subscription periods.',
  keywords: [
    'voyage forge refund policy',
    'refund process',
    'subscription refund',
    'travel platform refund',
    'AI content refund',
    'billing refund',
    'cancellation policy',
    'money back guarantee',
    'refund eligibility',
    'subscription cancellation',
    'unused subscription refund',
    'fair refund terms'
  ],
  openGraph: {
    title: 'Refund Policy - Voyage Forge | Fair & Transparent Refund Terms',
    description: 'Clear and fair refund policy for Voyage Forge. Learn about our refund process and eligibility criteria.',
    images: [
      {
        url: '/api/og?title=Refund%20Policy%20-%20Voyage%20Forge',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge Refund Policy',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy - Voyage Forge',
    description: 'Fair and transparent refund policy. Your satisfaction is our priority.',
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
    canonical: 'https://voyage-forge.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <RefundPolicyContent />
      <Footer />
    </>
  );
}