'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Affiliation Icon Components
const TrophyIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const CashIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const GiftIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const CrownIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

interface ProgramSection {
  icon: React.ComponentType;
  title: string;
  content: React.ReactNode;
  gradient: string;
  iconColor: string;
  badge?: string;
}

const programSections: ProgramSection[] = [
  {
    icon: TrophyIcon,
    title: "Affiliate Program Overview",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    badge: "High Converting",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Join our exclusive affiliate program and become a partner in revolutionizing the travel industry. 
          Earn substantial recurring commissions while helping travel businesses succeed with our AI-powered platform.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Program Highlights</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• <span className="text-emerald-400 font-medium">10% recurring commission</span> on every successful signup</li>
          <li>• <span className="text-emerald-400 font-medium">Lifetime earnings</span> from your referrals</li>
          <li>• <span className="text-emerald-400 font-medium">Monthly payouts</span> with no minimum threshold</li>
          <li>• <span className="text-emerald-400 font-medium">60-day cookie duration</span> for maximum conversions</li>
          <li>• <span className="text-emerald-400 font-medium">Real-time tracking</span> and transparent reporting</li>
        </ul>
        
        <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-4 mt-6">
          <p className="text-emerald-200 text-sm">
            <span className="font-semibold">Example:</span> Refer 10 customers who subscribe to our $35/month Pro Plan = 
            <span className="font-bold text-emerald-400"> $35/month recurring income!</span>
          </p>
        </div>
      </div>
    )
  },
  {
    icon: CashIcon,
    title: "Commission Structure & Earnings",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Our transparent commission structure ensures you earn competitive rates for every successful referral. 
          All commissions are calculated on the subscription value and paid monthly.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Commission Breakdown</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 bg-amber-500/10 border border-amber-400/20 rounded-xl">
            <div>
              <p className="text-white font-semibold">Plus Plan ($10/month)</p>
              <p className="text-gray-300 text-sm">Individual creators & small agencies</p>
            </div>
            <div className="text-right">
              <p className="text-amber-400 font-bold text-lg">$1/month</p>
              <p className="text-gray-400 text-sm">recurring</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-amber-500/10 border border-amber-400/20 rounded-xl">
            <div>
              <p className="text-white font-semibold">Plus + Booking ($20/month)</p>
              <p className="text-gray-300 text-sm">Enhanced with booking engine</p>
            </div>
            <div className="text-right">
              <p className="text-amber-400 font-bold text-lg">$2/month</p>
              <p className="text-gray-400 text-sm">recurring</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-amber-500/10 border border-amber-400/20 rounded-xl">
            <div>
              <p className="text-white font-semibold">Pro Plan ($35/month)</p>
              <p className="text-gray-300 text-sm">Large agencies & enterprises</p>
            </div>
            <div className="text-right">
              <p className="text-amber-400 font-bold text-lg">$3.50/month</p>
              <p className="text-gray-400 text-sm">recurring</p>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4 mt-6">
          <h5 className="text-amber-400 font-semibold mb-2">Payment Schedule</h5>
          <ul className="text-amber-200 text-sm space-y-1">
            <li>• Monthly payouts on the 15th of each month</li>
            <li>• No minimum payout threshold</li>
            <li>• PayPal, bank transfer, or crypto payments available</li>
            <li>• Real-time earning tracking in your dashboard</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: LinkIcon,
    title: "How to Get Started",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Getting started with our affiliation program is simple and straightforward. 
          Follow these steps to begin earning commissions and referral rewards.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Step-by-Step Process</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-sm font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-medium">Apply for the Program</p>
              <p className="text-gray-300 text-sm">Email us at <a href="mailto:contact@voyage-forge.com" className="text-blue-400 hover:text-blue-300 underline">contact@voyage-forge.com</a> with your application</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-sm font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-medium">Get Your Unique Links</p>
              <p className="text-gray-300 text-sm">Receive personalized referral links and tracking codes</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-sm font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-medium">Share & Promote</p>
              <p className="text-gray-300 text-sm">Use our marketing materials and share with your network</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-sm font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-medium">Track & Earn</p>
              <p className="text-gray-300 text-sm">Monitor your earnings and receive monthly payouts</p>
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-white mt-6">Application Requirements</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• Active online presence (website, social media, or blog)</li>
          <li>• Interest in travel technology and AI content creation</li>
          <li>• Commitment to ethical marketing practices</li>
          <li>• Ability to provide valuable content to your audience</li>
        </ul>
      </div>
    )
  },
  {
    icon: ChartIcon,
    title: "Marketing Tools & Support",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          We provide comprehensive marketing tools and dedicated support to help you succeed. 
          Our resources are designed to make promotion easy and effective.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Marketing Materials</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 text-xs font-bold">
                IMG
              </div>
              <div>
                <p className="text-white font-medium">Banner Graphics</p>
                <p className="text-gray-400 text-sm">High-quality promotional banners</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 text-xs font-bold">
                TXT
              </div>
              <div>
                <p className="text-white font-medium">Email Templates</p>
                <p className="text-gray-400 text-sm">Ready-to-use email campaigns</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 text-xs font-bold">
                VID
              </div>
              <div>
                <p className="text-white font-medium">Demo Videos</p>
                <p className="text-gray-400 text-sm">Product demonstration content</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 text-xs font-bold">
                API
              </div>
              <div>
                <p className="text-white font-medium">API Integration</p>
                <p className="text-gray-400 text-sm">Custom tracking solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-white mt-6">Dedicated Support</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• <span className="text-green-400 font-medium">Personal account manager</span> for top performers</li>
          <li>• <span className="text-green-400 font-medium">24/7 support</span> for technical questions</li>
          <li>• <span className="text-green-400 font-medium">Monthly strategy calls</span> and optimization tips</li>
          <li>• <span className="text-green-400 font-medium">Exclusive training materials</span> and webinars</li>
          <li>• <span className="text-green-400 font-medium">Community access</span> to our affiliate network</li>
        </ul>
        
        <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4 mt-6">
          <h5 className="text-green-400 font-semibold mb-2">Performance Bonuses</h5>
          <p className="text-green-200 text-sm">
            Top-performing affiliates receive additional bonuses, early access to new features, 
            and invitations to exclusive events and training sessions.
          </p>
        </div>
      </div>
    )
  },
  {
    icon: UsersIcon,
    title: "Success Stories & Testimonials",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Our affiliates and referral partners are earning substantial income while helping travel businesses 
          transform their content creation and booking processes.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Partner Success Stories</h4>
        <div className="space-y-4">
          <div className="bg-rose-500/10 border border-rose-400/20 rounded-xl p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-400 font-bold">
                MK
              </div>
              <div className="flex-1">
                <h5 className="text-white font-semibold">Maria K. - Travel Blogger</h5>
                <p className="text-gray-300 text-sm mb-2">
                  "I've earned over $2,400 in my first 6 months as a Voyage Forge affiliate. 
                  The commission structure is excellent and the support team is amazing!"
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-rose-400">32 Referrals</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-rose-400">$400/month income</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-rose-500/10 border border-rose-400/20 rounded-xl p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-400 font-bold">
                DJ
              </div>
              <div className="flex-1">
                <h5 className="text-white font-semibold">David J. - Digital Marketing Agency</h5>
                <p className="text-gray-300 text-sm mb-2">
                  "Voyage Forge's affiliate program has become a significant revenue stream for our agency. 
                  We've integrated it perfectly with our client services."
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-rose-400">89 Referrals</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-rose-400">$1,200/month income</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-white mt-6">Program Statistics</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-400 mb-1">500+</div>
            <div className="text-gray-300 text-sm">Active Affiliates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-400 mb-1">$50K+</div>
            <div className="text-gray-300 text-sm">Monthly Payouts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-400 mb-1">15%</div>
            <div className="text-gray-300 text-sm">Avg. Conversion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-400 mb-1">4.9★</div>
            <div className="text-gray-300 text-sm">Partner Satisfaction</div>
          </div>
        </div>
      </div>
    )
  }
];

const faqs = [
  {
    question: "How much can I earn with the affiliate program?",
    answer: "Earnings depend on your referral volume and the plans your referrals choose. With our 10% recurring commission structure, active affiliates typically earn $500-$2,000+ per month. Top performers earn $5,000+ monthly."
  },
  {
    question: "What is the difference between this and a referral program?",
    answer: "Our affiliate program is designed for marketers and business partners who want to actively promote Voyage Forge for recurring income. It requires an application and provides marketing tools, tracking, and dedicated support."
  },
  {
    question: "When do I receive my commission payments?",
    answer: "Commission payments are made monthly on the 15th for all earnings from the previous month. There's no minimum payout threshold, and you can choose PayPal, bank transfer, or cryptocurrency."
  },
  {
    question: "Can I track my referrals and earnings in real-time?",
    answer: "Absolutely! You'll have access to a comprehensive dashboard showing real-time statistics including clicks, conversions, earnings, and detailed reporting for all your referral activity."
  },
  {
    question: "What marketing materials do you provide?",
    answer: "We provide banners, email templates, demo videos, landing pages, API integrations, and custom promotional materials. Our marketing team continuously creates new assets to help you succeed."
  },
  {
    question: "How long do my referral cookies last?",
    answer: "Our referral cookies last for 60 days, meaning you'll receive credit for any signup within 60 days of someone clicking your referral link. We also use additional tracking methods for maximum accuracy."
  }
];

export default function AffiliationContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center px-4 sm:px-8 pt-24 pb-20">
        {/* Remove individual background effects to use unified page background */}

        <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 backdrop-blur-lg border border-emerald-400/30 mb-6 text-emerald-100 text-sm font-medium shadow-lg"
          >
            <svg className="w-3 h-3 mr-2 text-emerald-400 animate-pulse" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="4" />
            </svg>
            💰 High-Converting Affiliate Program
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-200 leading-tight tracking-tight mb-8"
          >
            Affiliate Program
            <span className="block text-gradient bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Earn 10% Recurring
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Join our affiliate program and earn 
            <span className="text-emerald-200 font-medium"> 10% recurring commissions</span> for every customer you refer. 
            <span className="text-emerald-200 font-medium"> Build a sustainable income stream</span> while helping travel businesses succeed.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-12"
          >
            {[
              { number: "10%", label: "Commission Rate", icon: CashIcon },
              { number: "500+", label: "Active Affiliates", icon: UsersIcon },
              { number: "$50K+", label: "Monthly Payouts", icon: TrophyIcon },
              { number: "60", label: "Day Cookie Duration", icon: ChartIcon }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                  <stat.icon />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="mailto:contact@voyage-forge.com?subject=Affiliation Program Application"
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-lg rounded-2xl hover:from-emerald-300 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/30 inline-flex items-center gap-2"
              >
                <MailIcon />
                Apply Now
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="/contact"
                className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Program Sections */}
      <section className="relative py-24 px-4 sm:px-8">
        {/* Remove individual background effects to use unified page background */}

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent">
                Affiliate Program Details
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about earning with our affiliate program
            </p>
          </motion.div>

          <div className="space-y-8">
            {programSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative"
              >
                {section.badge && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {section.badge}
                    </span>
                  </div>
                )}
                
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} border border-white/20 flex items-center justify-center ${section.iconColor} flex-shrink-0`}>
                    <section.icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                    {section.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our affiliate program
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-r from-emerald-400/4 to-teal-500/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start Earning?
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Join Our Affiliate Program
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful affiliates earning 10% recurring commissions. 
              Contact us today to get started with our high-converting affiliate program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="mailto:contact@voyage-forge.com?subject=Partnership Program Application - Affiliation & Referrals"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-lg rounded-2xl hover:from-emerald-300 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/30 inline-flex items-center gap-2"
                >
                  <MailIcon />
                  Apply for Partnership
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="/contact"
                  className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Schedule a Call
                </a>
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-cyan-400/10 backdrop-blur-xl border border-emerald-400/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-emerald-400 font-semibold mb-3">What to Include in Your Application:</h3>
              <ul className="text-gray-300 text-sm space-y-1 text-left">
                <li>• Your online presence (website, social media, blog)</li>
                <li>• Experience with affiliate marketing (if any)</li>
                <li>• Target audience and marketing approach</li>
                <li>• Monthly traffic/audience size estimates</li>
                <li>• Why you want to partner with Voyage Forge</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}