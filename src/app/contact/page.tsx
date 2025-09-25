import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - Voyage Forge | Get in Touch with AI Travel Platform Experts',
  description: 'Contact Voyage Forge for AI-powered travel content creation support. Reach out via phone +91 9483730167 or email founder@voyage-forge.com. Schedule a free consultation for your travel business.',
  keywords: [
    'contact voyage forge',
    'voyage forge support',
    'travel platform consultation',
    'AI travel content support',
    'travel business consultation',
    'voyage forge contact details',
    'travel technology support',
    'founder@voyage-forge.com',
    'travel content creator contact',
    'AI travel platform help',
    'travel agency software support',
    'voyage forge customer service',
    'travel marketing consultation',
    'book travel platform demo',
    '+91 9483730167'
  ],
  openGraph: {
    title: 'Contact Us - Voyage Forge | Get in Touch with AI Travel Platform Experts',
    description: 'Contact Voyage Forge for AI-powered travel content creation support. Schedule a free consultation for your travel business today.',
    images: [
      {
        url: '/api/og?title=Contact%20Us%20-%20Voyage%20Forge&description=Get%20Expert%20Support%20for%20Your%20Travel%20Business',
        width: 1200,
        height: 630,
        alt: 'Contact Voyage Forge - AI Travel Platform Support',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Voyage Forge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Voyage Forge',
    description: 'Get expert support for your travel business. Contact us via phone +91 9483730167 or email founder@voyage-forge.com',
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
    canonical: 'https://voyage-forge.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  );
}