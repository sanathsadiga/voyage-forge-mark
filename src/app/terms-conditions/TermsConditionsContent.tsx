'use client';

import { motion } from 'framer-motion';
import React from 'react';

// Terms & Conditions Icon Components
const DocumentIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const UserCheckIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CopyrightIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const ExclamationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

interface TermsSection {
  icon: React.ComponentType;
  title: string;
  content: React.ReactNode;
  gradient: string;
  iconColor: string;
}

const termsSections: TermsSection[] = [
  {
    icon: DocumentIcon,
    title: "Acceptance of Terms",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
    content: (
      <>
        <p className="text-gray-300 mb-4">
          By accessing and using Voyage Forge ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement.
        </p>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li>• These terms apply to all users of the Platform</li>
          <li>• Continued use constitutes acceptance of updated terms</li>
          <li>• You must be at least 18 years old to use our services</li>
          <li>• Business users must have authority to bind their organization</li>
        </ul>
        <p className="text-gray-300">
          If you do not agree to these terms, please do not use our Platform.
        </p>
      </>
    ),
  },
  {
    icon: UserCheckIcon,
    title: "User Responsibilities",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-400",
    content: (
      <>
        <p className="text-gray-300 mb-4">
          As a user of Voyage Forge, you agree to use our Platform responsibly and in compliance with all applicable laws.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Account Security</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Maintain confidentiality of your login credentials</li>
              <li>• Notify us immediately of any unauthorized access</li>
              <li>• Use strong passwords and enable two-factor authentication</li>
              <li>• You are responsible for all activities under your account</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Content Guidelines</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Create original, accurate, and lawful content</li>
              <li>• Respect intellectual property rights of others</li>
              <li>• Do not upload malicious code or harmful content</li>
              <li>• Comply with travel industry regulations and standards</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: CopyrightIcon,
    title: "Intellectual Property Rights",
    gradient: "from-purple-500/10 to-indigo-500/10",
    iconColor: "text-purple-400",
    content: (
      <>
        <p className="text-gray-300 mb-4">
          Voyage Forge respects intellectual property rights and expects users to do the same.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Our Intellectual Property</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Voyage Forge Platform, AI technology, and algorithms</li>
              <li>• Software, designs, graphics, and user interface</li>
              <li>• Trademarks, logos, and brand elements</li>
              <li>• Documentation, tutorials, and training materials</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Your Content Rights</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• You retain ownership of content you create</li>
              <li>• You grant us license to process and improve our services</li>
              <li>• AI-generated content follows fair use guidelines</li>
              <li>• You're responsible for ensuring content doesn't infringe rights</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: ServerIcon,
    title: "Service Availability & Performance",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-400",
    content: (
      <>
        <p className="text-gray-300 mb-4">
          We strive to provide reliable service but cannot guarantee uninterrupted availability.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Service Commitment</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• 99.9% uptime target for our Platform</li>
              <li>• Regular maintenance windows with advance notice</li>
              <li>• Continuous monitoring and performance optimization</li>
              <li>• Backup and disaster recovery procedures</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Service Limitations</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Usage limits based on your subscription plan</li>
              <li>• API rate limiting to ensure fair usage</li>
              <li>• Content generation quotas and restrictions</li>
              <li>• Geographic availability may vary</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: ScaleIcon,
    title: "Limitation of Liability",
    gradient: "from-red-500/10 to-pink-500/10",
    iconColor: "text-red-400",
    content: (
      <>
        <p className="text-gray-300 mb-4">
          Our liability is limited to the maximum extent permitted by law.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Disclaimer</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Services provided "as is" without warranties</li>
              <li>• No guarantee of specific business outcomes</li>
              <li>• AI-generated content may require human review</li>
              <li>• Users responsible for compliance with local laws</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Liability Limits</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Maximum liability limited to subscription fees paid</li>
              <li>• No liability for indirect or consequential damages</li>
              <li>• Force majeure events exclude liability</li>
              <li>• 30-day notice period for claims</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: ExclamationIcon,
    title: "Prohibited Uses",
    gradient: "from-gray-500/10 to-slate-500/10",
    iconColor: "text-gray-400",
    content: (
      <>
        <p className="text-gray-300 mb-4">
          The following activities are strictly prohibited on our Platform:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Technical Violations</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Reverse engineering or copying our software</li>
              <li>• Attempting to breach security measures</li>
              <li>• Overloading servers or disrupting services</li>
              <li>• Using automated scraping or data extraction</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Content Violations</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Creating false, misleading, or fraudulent content</li>
              <li>• Violating copyright or trademark rights</li>
              <li>• Posting harmful, offensive, or illegal material</li>
              <li>• Spamming or unsolicited commercial messages</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: GlobeIcon,
    title: "Governing Law & Disputes",
    gradient: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-400",
    content: (
      <>
        <p className="text-gray-300 mb-4">
          These terms are governed by the laws of the jurisdiction where Voyage Forge is incorporated.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-2">Dispute Resolution</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• First attempt resolution through direct communication</li>
              <li>• Mediation before pursuing legal action</li>
              <li>• Binding arbitration for unresolved disputes</li>
              <li>• Class action waiver applies</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Termination</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Either party may terminate with 30-day notice</li>
              <li>• Immediate termination for material breach</li>
              <li>• Data export available for 90 days post-termination</li>
              <li>• Surviving provisions remain in effect</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

export default function TermsConditionsContent() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center px-4 sm:px-8 pt-24 pb-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 backdrop-blur-lg border border-blue-400/30 mb-8 text-blue-100 text-sm font-medium shadow-lg"
          >
            <DocumentIcon />
            <span className="ml-3">Legal Agreement • Last Updated: October 2024</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight tracking-tight mb-8"
          >
            Terms &
            <span className="block text-gradient bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200/90 max-w-4xl mx-auto leading-relaxed font-light mb-8"
          >
            Please read these terms carefully before using our platform.
            <span className="text-blue-200 font-medium block mt-2">
              By using Voyage Forge, you agree to these terms and conditions.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-lg rounded-2xl border border-blue-400/20 p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 text-blue-200">
              <ExclamationIcon />
              <div className="text-left">
                <p className="font-semibold">Important Notice</p>
                <p className="text-sm opacity-90">These terms constitute a legally binding agreement between you and Voyage Forge.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Terms Sections */}
      <section className="relative py-24 px-4 sm:px-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-12">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${section.gradient} backdrop-blur-xl p-8 shadow-xl`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} border border-white/20 flex items-center justify-center ${section.iconColor} flex-shrink-0`}>
                    <section.icon />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                    <div>{section.content}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-4 sm:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
            </p>
            
            <div className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>📧 Email: legal@voyage-forge.com</p>
                    <p>🌐 Website: voyage-forge.com</p>
                    <p>📍 Address: Banglore, Karnataka</p>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-4">Response Time</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>📅 Standard inquiries: 1-2 business days</p>
                    <p>⚡ Urgent matters: Within 24 hours</p>
                    <p>📞 Phone support: +91 8904355301</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Last updated: October 2024</p>
              <p>Effective date: October 2024</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}