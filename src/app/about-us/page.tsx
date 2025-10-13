import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Free Travel Platform | Voyage Forge Story & Mission',
  description: 'Learn about Voyage Forge - the free travel website builder empowering 500+ travel businesses. Our mission: democratize travel technology with free AI-powered tools.',
  openGraph: {
    title: 'About Us - Voyage Forge | Revolutionizing Travel Through Innovation',
    description: 'Learn about Voyage Forge\'s mission to empower travel businesses with AI-powered tools and cutting-edge technology.',
    images: [
      {
        url: '/api/og?title=About%20Us%20-%20Voyage%20Forge',
        width: 1200,
        height: 630,
        alt: 'About Voyage Forge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Voyage Forge',
    description: 'Learn about Voyage Forge\'s mission to empower travel businesses with AI-powered tools.',
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
      {/* Enhanced background orbs and effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-4 -top-8 w-96 h-96 bg-amber-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -right-8 top-1/3 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <Header />
      
      <SEOEnhancer 
        pageType="about"
        focusKeyword="about free travel platform"
        keywords={[
          'free travel website company',
          'travel technology free',
          'about voyage forge'
        ]}
      />
      
      <AboutUsContent />
      <Footer />
    </div>
  );
}
