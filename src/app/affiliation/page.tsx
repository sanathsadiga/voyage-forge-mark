import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AffiliationContent from './AffiliationContent';

export const metadata: Metadata = {
  title: 'Affiliate Program - Voyage Forge | Earn 10% Recurring Commission',
  description: 'Join the Voyage Forge Affiliate Program and earn 10% recurring commission on every signup. Partner with us to grow your income while helping travel businesses succeed with AI-powered content creation.',
  keywords: [
    'voyage forge affiliate program',
    'travel affiliate marketing',
    'AI content affiliate',
    'travel technology partner',
    '10% commission affiliate',
    'affiliate marketing travel industry',
    'partner program voyage forge',
    'travel platform affiliate',
    'content creation affiliate',
    'travel business partnership',
    'affiliate commission travel',
    'travel tech affiliate',
    'recurring commission affiliate',
    'high converting affiliate program'
  ],
  openGraph: {
    title: 'Affiliate Program - Voyage Forge | Earn 10% Recurring Commission',
    description: 'Join our lucrative affiliate program. Earn 10% recurring commission on signups. Start earning with Voyage Forge today.',
    images: [
      {
        url: '/api/og?title=Affiliate%20Program%20-%20Voyage%20Forge&description=Earn%2010%25%20Recurring%20Commission',
        width: 1200,
        height: 630,
        alt: 'Voyage Forge Affiliate Program',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Program - Voyage Forge',
    description: 'Earn 10% recurring commission. Join our partner program today!',
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
    canonical: 'https://voyage-forge.com/affiliation',
  },
};

export default function AffiliationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
      {/* Enhanced background orbs and effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-4 -top-8 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -right-8 top-1/3 w-80 h-80 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <Header />
      <AffiliationContent />
      <Footer />
    </div>
  );
}