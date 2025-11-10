"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";

// SVG Icons for the feature cards
const PenToolIcon = (): ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const UsersIcon = (): ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const SearchIcon = (): ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PuzzleIcon = (): ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 104 0V4z" />
  </svg>
);

const ChartBarIcon = (): ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

interface FeatureCard {
  icon: () => ReactElement;
  title: string;
  description: string;
  highlights: string[];
  gradient: string;
  iconColor: string;
  badge?: string;
}

const featureCards: FeatureCard[] = [
  {
    icon: PenToolIcon,
    title: "AI Content Writer",
    description: "Advanced AI-powered content creation that generates engaging, SEO-optimized travel content tailored to your audience.",
    highlights: [
      "Generate travel blogs & articles instantly",
      "Personalized itineraries & destination guides",
      "Social media content automation",
      "Multi-language content support",
      "Brand voice customization"
    ],
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
    badge: "AI Powered"
  },
  {
    icon: UsersIcon,
    title: "CRM - Inquiry Handling",
    description: "Comprehensive customer relationship management system that automates inquiry handling and nurtures leads effectively.",
    highlights: [
      "Automated inquiry responses",
      "Lead scoring & prioritization",
      "Customer journey tracking",
      "Follow-up automation",
      "Integration with booking system"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    icon: SearchIcon,
    title: "Ready Heavy-Loaded SEO",
    description: "Enterprise-grade SEO tools built-in to ensure your travel content ranks high and drives organic traffic.",
    highlights: [
      "Advanced keyword optimization",
      "Technical SEO automation",
      "Schema markup generation",
      "Meta tags optimization",
      "Local SEO for destinations"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    badge: "SEO Ready"
  },
  {
    icon: PuzzleIcon,
    title: "Plugins & Integrations",
    description: "Extensive plugin ecosystem for forms, cookies, analytics, and third-party integrations to enhance functionality.",
    highlights: [
      "Form integration & management",
      "Cookie consent & GDPR compliance",
      "Google Analytics & tracking",
      "Payment gateway integrations",
      "Third-party API connections"
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400"
  },
  {
    icon: ChartBarIcon,
    title: "Advanced Analytics",
    description: "Comprehensive analytics dashboard to track visitor behavior, traffic sources, and conversion metrics in real-time.",
    highlights: [
      "Real-time visitor tracking",
      "Geographic traffic analysis",
      "Conversion funnel analytics",
      "User behavior insights",
      "Custom reporting dashboards"
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    badge: "Live Data"
  }
];

interface FeatureCardProps {
  feature: FeatureCard;
  index: number;
}

const FeatureCardComponent = ({ feature, index }: FeatureCardProps): ReactElement => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
  className={`relative rounded-3xl border border-white/10 bg-gradient-to-br ${feature.gradient} backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group`}
    >
      {feature.badge && (
        <div className="absolute -top-3 right-6">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {feature.badge}
          </span>
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-6">
        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon />
        </div>
        
        <div className="flex-1">
          <h3 className={`text-2xl font-bold text-white mb-3 group-hover:${feature.iconColor.replace('text-', 'text-')} transition-colors duration-300`}>
            {feature.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${feature.iconColor.replace('text-', 'bg-')} animate-pulse`}></span>
          Key Features:
        </h4>
        {feature.highlights.map((highlight, highlightIndex) => (
          <motion.div
            key={highlightIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + highlightIndex * 0.05 }}
            className="flex items-center gap-3"
          >
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.iconColor.replace('text-', 'bg-')}/20 ${feature.iconColor}`}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
              {highlight}
            </span>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
        className="mt-6 pt-6 border-t border-white/10"
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Available Now</span>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className={`w-3 h-3 rounded-full ${feature.iconColor.replace('text-', 'bg-')} opacity-60`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function FeatureCardsSection(): ReactElement {
  return (
    <section 
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      itemScope 
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 top-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/6 to-indigo-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-8 bottom-1/4 w-[40rem] h-80 bg-gradient-to-l from-amber-500/6 to-orange-600/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-r from-cyan-400/3 to-blue-500/3 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-purple-400/40 rounded-full animate-ping" style={{animationDelay: '0s'}} />
        <div className="absolute bottom-1/4 right-1/6 w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping" style={{animationDelay: '4s'}} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-white">Built for Travel Success</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Everything you need to create, manage, and optimize your travel business - from AI-powered content creation to advanced analytics and CRM capabilities.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <FeatureCardComponent key={feature.title} feature={feature} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 rounded-full text-amber-200 font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            All features included in every plan - No hidden costs
          </div>
        </motion.div>
      </div>
      
      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h3>Complete Travel Business Software Features</h3>
        <div itemScope itemType="https://schema.org/SoftwareApplication">
          <span itemProp="name">Voyage Forge Travel Platform</span>
          <div itemProp="featureList">
            <ul>
              <li>AI-powered travel content writer for blogs and itineraries</li>
              <li>Customer relationship management (CRM) system for inquiry handling</li>
              <li>Advanced SEO optimization tools for travel websites</li>
              <li>Plugin integrations for forms, analytics, and third-party services</li>
              <li>Comprehensive analytics dashboard for visitor tracking</li>
              <li>Real-time performance monitoring and reporting</li>
              <li>Lead generation and conversion optimization</li>
              <li>Multi-language content support for global reach</li>
            </ul>
          </div>
        </div>
        
        <h4>Travel Industry Software Benefits</h4>
        <ul>
          <li>Increase website traffic with SEO-optimized content</li>
          <li>Automate customer inquiries and lead management</li>
          <li>Track visitor behavior and conversion metrics</li>
          <li>Integrate with existing travel booking systems</li>
          <li>Generate high-quality travel content at scale</li>
          <li>Improve search engine rankings for travel keywords</li>
          <li>Streamline travel business operations</li>
          <li>Enhance customer experience with personalized content</li>
        </ul>
      </div>
    </section>
  );
}