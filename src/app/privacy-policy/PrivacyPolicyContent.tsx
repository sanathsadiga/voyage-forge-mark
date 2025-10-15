'use client';

import { motion } from 'framer-motion';
import React from 'react';

// Privacy Policy Icon Components
const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const CookieIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

interface PolicySection {
  icon: React.ComponentType;
  title: string;
  content: React.ReactNode;
  gradient: string;
  iconColor: string;
}

const policySections: PolicySection[] = [
  {
    icon: DatabaseIcon,
    title: "Information We Collect",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    content: (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Personal Information</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• Name, email address, and contact information</li>
          <li>• Business information (company name, website, industry)</li>
          <li>• Payment and billing information</li>
          <li>• Profile information and preferences</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-white mt-6">Usage Information</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• Content you create and generate using our platform</li>
          <li>• Feature usage patterns and analytics</li>
          <li>• Device information and browser type</li>
          <li>• IP address and location data</li>
        </ul>
      </div>
    )
  },
  {
    icon: EyeIcon,
    title: "How We Use Your Information",
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
    content: (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Service Provision</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• Provide AI-powered content generation and travel tools</li>
          <li>• Process payments and manage your account</li>
          <li>• Offer customer support and technical assistance</li>
          <li>• Send important service updates and notifications</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-white mt-6">Improvement & Analytics</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• Analyze usage patterns to improve our services</li>
          <li>• Train and enhance our AI models</li>
          <li>• Develop new features and capabilities</li>
          <li>• Ensure platform security and prevent fraud</li>
        </ul>
      </div>
    )
  },
  {
    icon: ShieldIcon,
    title: "Google Calendar Access",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
    content: (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Calendar Booking Access</h4>
        <p className="text-gray-300">
          We request access to your Google Calendar only to create and manage events that represent bookings you have made with our service. This access is used solely to sync booking information (event title, time, and description) so your calendar reflects reservations made through Voyage Forge.
        </p>

        <h4 className="text-lg font-semibold text-white mt-6">No Other Google Data Access</h4>
        <p className="text-gray-300">
          We do not access, store, or use any other Google data (for example: email, contacts, Drive, or location) for advertising, analytics, profiling, or any purpose unrelated to booking/calendar sync.
        </p>

        <h4 className="text-lg font-semibold text-white mt-6">Sharing and Sale</h4>
        <p className="text-gray-300">
          We do not sell, rent, or share Google user data with third parties.
        </p>

        <h4 className="text-lg font-semibold text-white mt-6">Revoke Access</h4>
        <p className="text-gray-300">
          You may revoke access at any time via your Google Account (<a href="https://myaccount.google.com/permissions" className="underline">myaccount.google.com/permissions</a>) or from within our app's account settings.
        </p>
      </div>
    )
  },
  {
    icon: CookieIcon,
    title: "Cookies & Tracking",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    content: (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Essential Cookies</h4>
        <p className="text-gray-300">
          We use essential cookies to provide core functionality, including authentication, 
          session management, and security features.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Analytics Cookies</h4>
        <p className="text-gray-300">
          With your consent, we use analytics cookies to understand how you interact with 
          our platform and improve user experience.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Cookie Control</h4>
        <p className="text-gray-300">
          You can control cookie preferences through your browser settings or our 
          cookie consent banner. Note that disabling some cookies may affect functionality.
        </p>
      </div>
    )
  },
  {
    icon: UsersIcon,
    title: "Information Sharing",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    content: (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Third-Party Services</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• Payment processors (Stripe) for billing</li>
          <li>• AI service providers (OpenAI) for content generation</li>
          <li>• Analytics providers (Google Analytics) for insights</li>
          <li>• Customer support tools (Intercom) for assistance</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-white mt-6">Legal Requirements</h4>
        <p className="text-gray-300">
          We may disclose information when required by law, to protect our rights, 
          or to prevent fraud and ensure platform security.
        </p>
        
        <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-4 mt-4">
          <p className="text-red-200 font-semibold">We Never Sell Your Data</p>
          <p className="text-gray-300 text-sm mt-1">
            Your personal information is never sold to third parties for marketing purposes.
          </p>
        </div>
      </div>
    )
  },
  {
    icon: LockIcon,
    title: "Data Security",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    content: (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Security Measures</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• Industry-standard encryption for data in transit and at rest</li>
          <li>• Secure cloud infrastructure with regular security audits</li>
          <li>• Multi-factor authentication for enhanced account security</li>
          <li>• Regular security training for all team members</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-white mt-6">Data Retention</h4>
        <p className="text-gray-300">
          We retain your information only as long as necessary for service provision 
          and legal compliance. Account data is typically deleted within 30 days of account closure.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Incident Response</h4>
        <p className="text-gray-300">
          In the unlikely event of a security breach, we will notify affected users 
          within 72 hours and provide detailed information about the incident.
        </p>
      </div>
    )
  },
  {
    icon: ShieldIcon,
    title: "Your Rights & Controls",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    content: (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Data Rights (GDPR & CCPA)</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• <strong>Access:</strong> Request a copy of your personal data</li>
          <li>• <strong>Rectification:</strong> Correct inaccurate information</li>
          <li>• <strong>Erasure:</strong> Request deletion of your data</li>
          <li>• <strong>Portability:</strong> Export your data in a readable format</li>
          <li>• <strong>Restriction:</strong> Limit how we process your data</li>
          <li>• <strong>Objection:</strong> Opt out of certain data processing</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-white mt-6">How to Exercise Rights</h4>
        <p className="text-gray-300">
          Contact us at <span className="text-amber-400">privacy@voyageforge.com</span> or 
          use the data controls in your account settings. We'll respond within 30 days.
        </p>
        
        <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-4 mt-4">
          <p className="text-emerald-200 font-semibold">Account Settings</p>
          <p className="text-gray-300 text-sm mt-1">
            Manage your privacy preferences, download your data, or delete your account 
            directly from your dashboard.
          </p>
        </div>
      </div>
    )
  }
];

export default function PrivacyPolicyContent() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 px-4 sm:px-8 pt-24 pb-20 overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-12 -top-6 w-96 h-96 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-6 bottom-6 w-[32rem] h-80 bg-gradient-to-l from-purple-500/8 to-indigo-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-violet-400/4 to-purple-500/4 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.08),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.06),transparent_50%)]" />
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping" style={{animationDelay: '0s'}} />
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-lg border border-blue-400/30 mb-6 text-blue-100 text-sm font-medium shadow-lg"
          >
            <LockIcon />
            <span className="ml-2">🔒 Your Privacy is Our Priority</span>
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-tight tracking-tight mb-8"
          >
            Privacy Policy
            <span className="block text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-violet-300 bg-clip-text text-transparent">
              Transparent & Secure
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We believe in complete transparency about how we collect, use, and protect your data. 
            <span className="text-blue-200 font-medium"> Your trust is the foundation of our platform.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 text-gray-300"
          >
            <p className="text-lg">Last Updated: October 10, 2025</p>
            <p className="text-sm mt-2">Effective Date: September 21, 2025</p>
          </motion.div>
        </div>
      </main>

      {/* Quick Summary Section */}
      <section className="relative py-16 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy at a Glance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key principles that guide how we handle your information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Data Protection",
                description: "Industry-standard encryption and security measures protect your information"
              },
              {
                icon: "🚫",
                title: "No Data Selling",
                description: "We never sell your personal information to third parties for marketing"
              },
              {
                icon: "⚙️",
                title: "You're In Control",
                description: "Full access to your data with easy export, edit, and deletion options"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy Sections */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/6 to-indigo-400/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-10 bottom-1/4 w-[32rem] h-80 bg-gradient-to-l from-blue-500/6 to-cyan-600/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Detailed Privacy Information
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about how we handle your data
            </p>
          </motion.div>

          <div className="space-y-12">
            {policySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${section.gradient} backdrop-blur-xl p-8 md:p-12 shadow-xl`}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} border border-white/20 flex items-center justify-center ${section.iconColor}`}>
                    <section.icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>
                    <div className="text-gray-300 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Updates Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-r from-blue-400/4 to-purple-500/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're here to help you understand how your data is protected and managed.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Our Privacy Team</h3>
                <p className="text-gray-300 mb-4">
                  Have questions about your data or need to exercise your privacy rights?
                </p>
                <a 
                  href="mailto:privacy@voyageforge.com" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                >
                  privacy@voyageforge.com
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Policy Updates</h3>
                <p className="text-gray-300 mb-4">
                  We'll notify you of any significant changes to this privacy policy via email.
                </p>
                <p className="text-blue-400 font-semibold">
                  Last updated: October 10, 2025
                </p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-lg rounded-2xl hover:from-blue-300 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-blue-500/30">
                Manage Your Privacy Settings
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}