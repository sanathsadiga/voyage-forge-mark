import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Us - Voyage Forge | Revolutionizing Travel Through Innovation',
  description: 'Learn about Voyage Forge\'s mission to empower travel businesses with AI-powered tools and cutting-edge technology. Meet our team and discover our story.',
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
    <>
      <Header />
      <AboutUsContent />
      <Footer />
    </>
  );
}
