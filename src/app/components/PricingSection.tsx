"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { useState } from "react";

// SVG Icons for pricing features
const CheckIcon = (): ReactElement => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const StarIcon = (): ReactElement => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ZapIcon = (): ReactElement => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

interface PricingPlan {
  name: string;
  price: {
    usd: number;
    inr: number;
  };
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  popular?: boolean;
  badge?: string;
  buttonText: string;
  icon: () => ReactElement;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Plus",
    price: { usd: 10, inr: 899 },
    period: "/month",
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
    highlighted: false,
    buttonText: "Start Plus Plan",
    icon: CheckIcon
  },
  {
    name: "Plus + Booking Engine",
    price: { usd: 20, inr: 1750 },
    period: "/month",
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
    highlighted: true,
    popular: true,
    badge: "Most Popular",
    buttonText: "Get Booking Engine",
    icon: StarIcon
  },
  {
    name: "Pro Plan",
    price: { usd: 35, inr: 2999 },
    period: "/month",
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
    highlighted: false,
    buttonText: "Go Pro",
    icon: ZapIcon
  }
];

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  currency: 'usd' | 'inr';
}

const PricingCard = ({ plan, index, currency }: PricingCardProps): ReactElement => {
  const Icon = plan.icon;
  
  const formatPrice = (price: { usd: number; inr: number }) => {
    if (currency === 'usd') {
      return `$${price.usd}`;
    } else {
      return `₹${price.inr}`;
    }
  };

  // Function to redirect to auth page
  const handleSignUp = () => {
    window.open("https://app.voyage-forge.com/auth", "_blank");
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-3xl p-8 transition-all duration-500 ${
        plan.highlighted
          ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-400/30 shadow-2xl shadow-amber-500/20'
          : 'bg-gradient-to-br from-white/8 to-white/4 border border-white/10 shadow-xl hover:shadow-purple-500/10'
      } backdrop-blur-xl`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {plan.badge}
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
          plan.highlighted 
            ? 'bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-400' 
            : 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20 text-purple-400'
        }`}>
          <Icon />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
        
        <div className="flex items-baseline justify-center gap-1 mb-6">
          <span className={`text-5xl font-bold ${
            plan.highlighted ? 'text-amber-400' : 'text-white'
          }`}>
            {formatPrice(plan.price)}
          </span>
          <span className="text-gray-400 text-lg">{plan.period}</span>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSignUp}
          className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
            plan.highlighted
              ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/30'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/30'
          }`}
        >
          {plan.buttonText}
        </motion.button>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-white font-semibold text-lg mb-4">Everything included:</h4>
        {plan.features.map((feature, featureIndex) => (
          <motion.div
            key={featureIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
              plan.highlighted 
                ? 'bg-amber-400/20 text-amber-400' 
                : 'bg-green-500/20 text-green-400'
            }`}>
              <CheckIcon />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function PricingSection(): ReactElement {
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');

  return (
    <section 
      className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden"
      itemScope 
      itemType="https://schema.org/PriceSpecification"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/6 to-orange-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-10 bottom-1/4 w-[32rem] h-80 bg-gradient-to-l from-purple-500/6 to-indigo-600/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-r from-cyan-400/3 to-blue-500/3 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-amber-400/40 rounded-full animate-ping" style={{animationDelay: '0s'}} />
        <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping" style={{animationDelay: '4s'}} />
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
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="text-white">Pricing</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect plan for your travel business. All plans include our core AI-powered content creation tools with no hidden fees.
          </motion.p>

          {/* Currency Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center mt-8 mb-8"
          >
            <div className="flex items-center bg-slate-800/50 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
              <button
                onClick={() => setCurrency('usd')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  currency === 'usd'
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('inr')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  currency === 'inr'
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                INR (₹)
              </button>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} currency={currency} />
          ))}
        </div>        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckIcon />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon />
              24/7 Support
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon />
              Money-back guarantee
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h3>Travel Content Creation Pricing Plans</h3>
        <div itemScope itemType="https://schema.org/Product">
          <span itemProp="name">Voyage Forge Plus Plan</span>
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price">10</span>
            <span itemProp="priceCurrency">USD</span>
            <span itemProp="availability">https://schema.org/InStock</span>
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Product">
          <span itemProp="name">Voyage Forge Plus with Booking Engine</span>
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price">20</span>
            <span itemProp="priceCurrency">USD</span>
            <span itemProp="availability">https://schema.org/InStock</span>
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Product">
          <span itemProp="name">Voyage Forge Pro Plan</span>
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price">35</span>
            <span itemProp="priceCurrency">USD</span>
            <span itemProp="availability">https://schema.org/InStock</span>
          </div>
        </div>
        
        <h4>Pricing Features for Travel Industry</h4>
        <ul>
          <li>AI-powered travel content generation for tour operators</li>
          <li>Integrated booking system for travel agencies</li>
          <li>SEO-optimized travel marketing content</li>
          <li>WordPress integration for travel websites</li>
          <li>Travel itinerary creation tools</li>
          <li>Booking widget for travel businesses</li>
          <li>Travel content management system</li>
          <li>Automated travel marketing solutions</li>
        </ul>
      </div>
    </section>
  );
}