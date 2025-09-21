'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Pricing Icon Components
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const CrownIcon = () => (
  <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface PricingPlan {
  name: string;
  price: {
    usd: number;
    inr: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  gradient: string;
  iconColor: string;
  icon: React.ComponentType;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Plus",
    price: { usd: 29, inr: 2400 },
    description: "Perfect for individual travel content creators and small agencies",
    features: [
      "AI-powered content generation",
      "Up to 100 pieces per month", 
      "SEO optimization tools",
      "WordPress integration",
      "Basic analytics dashboard",
      "Email support",
      "Template library access",
      "Social media content"
    ],
    buttonText: "Start Plus Plan",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    icon: RocketIcon
  },
  {
    name: "Plus + Booking Engine",
    price: { usd: 79, inr: 6500 },
    description: "Enhanced with integrated booking capabilities for tour operators",
    features: [
      "Everything in Plus plan",
      "Integrated booking system",
      "Payment processing", 
      "Customer management",
      "Automated confirmations",
      "Calendar synchronization",
      "Commission tracking",
      "Mobile-responsive booking widget",
      "Multi-language support",
      "Priority support"
    ],
    popular: true,
    buttonText: "Get Booking Engine", 
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
    icon: CrownIcon
  },
  {
    name: "Pro Plan",
    price: { usd: 149, inr: 12300 },
    description: "Complete solution for large agencies and tour operators",
    features: [
      "Everything in Plus + Booking",
      "Unlimited content generation",
      "Advanced analytics & reporting",
      "White-label solution",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Training sessions",
      "Custom branding",
      "24/7 priority support",
      "Multi-location management",
      "Advanced SEO tools"
    ],
    buttonText: "Go Pro",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    icon: StarIcon
  }
];

const comparisonFeatures = [
  {
    category: "Content Creation",
    features: [
      { name: "AI-powered content generation", plus: true, plusBooking: true, pro: true },
      { name: "Content pieces per month", plus: "Up to 100", plusBooking: "Up to 100", pro: "Unlimited" },
      { name: "SEO optimization tools", plus: true, plusBooking: true, pro: true },
      { name: "Template library access", plus: true, plusBooking: true, pro: true },
      { name: "Social media content", plus: true, plusBooking: true, pro: true },
    ]
  },
  {
    category: "Business Tools",
    features: [
      { name: "WordPress integration", plus: true, plusBooking: true, pro: true },
      { name: "Basic analytics dashboard", plus: true, plusBooking: true, pro: true },
      { name: "Integrated booking system", plus: false, plusBooking: true, pro: true },
      { name: "Payment processing", plus: false, plusBooking: true, pro: true },
      { name: "Customer management", plus: false, plusBooking: true, pro: true },
      { name: "White-label solution", plus: false, plusBooking: false, pro: true },
      { name: "API access", plus: false, plusBooking: false, pro: true },
    ]
  },
  {
    category: "Support & Features",
    features: [
      { name: "Support level", plus: "Email", plusBooking: "Priority", pro: "24/7 Priority" },
      { name: "Multi-language support", plus: false, plusBooking: true, pro: true },
      { name: "Commission tracking", plus: false, plusBooking: true, pro: true },
      { name: "Dedicated account manager", plus: false, plusBooking: false, pro: true },
      { name: "Custom integrations", plus: false, plusBooking: false, pro: true },
    ]
  }
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
  },
  {
    question: "What happens if I exceed my word limit?",
    answer: "If you approach your limit, we'll notify you in advance. You can either upgrade your plan or purchase additional word credits for that month."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund within the first 30 days."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade security measures including encryption, secure data centers, and regular security audits to protect your information."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes! Our Enterprise plan includes custom integrations, dedicated support, and can be tailored to your specific business needs. Contact our sales team for details."
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Wanderlust Adventures",
    role: "Marketing Director",
    content: "Voyage Forge transformed our content strategy. We're creating 10x more engaging content in half the time.",
    rating: 5,
    image: "SM"
  },
  {
    name: "Carlos Rodriguez", 
    company: "Global Escapes",
    role: "CEO",
    content: "The booking system integration is seamless. Our conversion rates increased by 40% since implementing Voyage Forge.",
    rating: 5,
    image: "CR"
  },
  {
    name: "Emily Chen",
    company: "Adventure Seekers",
    role: "Operations Manager", 
    content: "Best investment we've made for our travel business. The AI content quality is incredible and saves us hours daily.",
    rating: 5,
    image: "EC"
  }
];

export default function PricingPageContent() {
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const formatPrice = (price: { usd: number; inr: number }) => {
    if (currency === 'usd') {
      return `$${price.usd}`;
    } else {
      return `₹${price.inr}`;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 px-4 sm:px-8 pt-24 pb-20 overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-12 -top-6 w-96 h-96 bg-gradient-to-r from-emerald-400/8 to-teal-400/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-6 bottom-6 w-[32rem] h-80 bg-gradient-to-l from-purple-500/8 to-indigo-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-amber-400/4 to-orange-500/4 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,237,74,0.08),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.06),transparent_50%)]" />
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping" style={{animationDelay: '0s'}} />
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        </div>

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
            💳 14-Day Free Trial • No Credit Card Required
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-200 leading-tight tracking-tight mb-8"
          >
            Simple, Transparent
            <span className="block text-gradient bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Pricing for Everyone
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Choose the perfect plan for your travel business. 
            <span className="text-emerald-200 font-medium"> Start free and scale as you grow.</span>
          </motion.p>

          {/* Currency Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center mt-12 mb-16"
          >
            <div className="flex items-center bg-slate-800/50 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
              <button
                onClick={() => setCurrency('usd')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currency === 'usd'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('inr')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currency === 'inr'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                INR (₹)
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Pricing Plans Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/6 to-indigo-400/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-10 bottom-1/4 w-[32rem] h-80 bg-gradient-to-l from-emerald-500/6 to-teal-600/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-3xl border ${
                  plan.popular 
                    ? 'border-purple-400/50 bg-gradient-to-br from-purple-500/10 to-indigo-500/10' 
                    : 'border-white/10 bg-gradient-to-br from-white/8 to-white/4'
                } backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group ${
                  plan.popular ? 'scale-105 lg:scale-110' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.gradient} border border-white/20 flex items-center justify-center ${plan.iconColor}`}>
                    <plan.icon />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white hover:from-purple-300 hover:to-indigo-400 shadow-lg shadow-purple-500/30'
                    : 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black hover:from-emerald-300 hover:to-teal-400 shadow-lg shadow-emerald-500/30'
                }`}>
                  {plan.buttonText}
                </button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Everything included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent">
                Compare All Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed feature comparison to help you choose the right plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 text-white font-semibold">Features</th>
                  <th className="text-center py-4 text-white font-semibold">Plus</th>
                  <th className="text-center py-4 text-white font-semibold">Plus + Booking</th>
                  <th className="text-center py-4 text-white font-semibold">Pro Plan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={category.category}>
                    <tr>
                      <td colSpan={4} className="py-6">
                        <h3 className="text-lg font-bold text-emerald-400">{category.category}</h3>
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-white/5">
                        <td className="py-3 text-gray-300">{feature.name}</td>
                        <td className="py-3 text-center">
                          {typeof feature.plus === 'boolean' ? (
                            feature.plus ? <CheckIcon /> : <XIcon />
                          ) : (
                            <span className="text-gray-300 text-sm">{feature.plus}</span>
                          )}
                        </td>
                        <td className="py-3 text-center">
                          {typeof feature.plusBooking === 'boolean' ? (
                            feature.plusBooking ? <CheckIcon /> : <XIcon />
                          ) : (
                            <span className="text-gray-300 text-sm">{feature.plusBooking}</span>
                          )}
                        </td>
                        <td className="py-3 text-center">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? <CheckIcon /> : <XIcon />
                          ) : (
                            <span className="text-gray-300 text-sm">{feature.pro}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent">
                Loved by Travel Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how travel businesses are growing with Voyage Forge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
              >
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
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
              Got questions? We've got answers.
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
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
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
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Travel Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of travel businesses already using Voyage Forge to automate their content creation 
              and boost their online presence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-lg rounded-2xl hover:from-emerald-300 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/30">
                  Start Your Free Trial
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckIcon />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon />
                Cancel anytime
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}