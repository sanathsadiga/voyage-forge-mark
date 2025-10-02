import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReferralContent from './ReferralContent';

export const metadata: Metadata = {
  title: 'Referral Program - Voyage Forge | Get Free Months for Referrals',
  description: 'Refer friends to Voyage Forge and earn free months! Get 1 month free per referral, unlock 10 months free for 10 referrals. Simple sharing for existing users.',
  keywords: [
    'voyage forge referral program',
    'travel referral rewards',
    'refer friends travel platform',
    'free months referral',
    'travel platform rewards',
    'referral bonus voyage forge',
    'share and earn travel',
    'user referral program',
    'travel rewards program',
    'refer and earn free months',
    'existing user benefits',
    'travel platform sharing',
    'referral incentives travel',
    'free subscription referral'
  ],
  openGraph: {
    title: 'Referral Program - Voyage Forge | Get Free Months for Referrals',
    description: 'Refer friends and earn free months! Simple sharing program for existing users. Get rewarded for spreading the word.',
    images: [
      {
        url: '/api/og?title=Referral%20Program%20-%20Voyage%20Forge&description=Get%20Free%20Months%20for%20Referrals',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge Referral Program',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referral Program - Voyage Forge',
    description: 'Refer friends and earn free months! Simple sharing rewards.',
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
    canonical: 'https://voyageforge.com/referral',
  },
};

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      <Header />
      
      <main className="relative z-10">
        <ReferralContent />
      </main>
      
      <Footer />
    </div>
  );
}