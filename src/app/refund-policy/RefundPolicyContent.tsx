'use client';

import { motion } from 'framer-motion';
import React from 'react';

// Refund Policy Icon Components
const RefundIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const ProcessIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const ExceptionIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

interface RefundSection {
  icon: React.ComponentType;
  title: string;
  content: React.ReactNode;
  gradient: string;
  iconColor: string;
}

const refundSections: RefundSection[] = [
  {
    icon: ShieldCheckIcon,
    title: "Our Refund Commitment",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          At Voyage Forge, we believe in fair and transparent billing. We want you to be completely 
          satisfied with our service, and if you're not, we'll make it right.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Our Promise</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• <span className="text-emerald-400 font-medium">Fair refunds</span> for unused subscription periods</li>
          <li>• <span className="text-emerald-400 font-medium">Quick processing</span> within 5-10 business days</li>
          <li>• <span className="text-emerald-400 font-medium">No questions asked</span> for cancellations within 14 days</li>
          <li>• <span className="text-emerald-400 font-medium">Prorated refunds</span> for mid-cycle cancellations</li>
        </ul>
      </div>
    )
  },
  {
    icon: CalendarIcon,
    title: "Unused Period Refunds",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          We automatically calculate and refund any unused days or months from your subscription 
          when you cancel your account.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">How It Works</h4>
        <ul className="space-y-3 text-gray-300">
          <li>
            <span className="text-blue-400 font-medium">• Daily Proration:</span> 
            <span className="ml-2">If you cancel mid-month, we refund unused days</span>
          </li>
          <li>
            <span className="text-blue-400 font-medium">• Monthly Refunds:</span> 
            <span className="ml-2">Annual subscribers get refunds for full unused months</span>
          </li>
          <li>
            <span className="text-blue-400 font-medium">• Automatic Processing:</span> 
            <span className="ml-2">Refunds are processed automatically upon cancellation</span>
          </li>
        </ul>
        
        <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-4 mt-6">
          <p className="text-blue-200 text-sm">
            <span className="font-semibold">Example:</span> Cancel your annual plan after 3 months? 
            You'll receive a refund for the remaining 9 months.
          </p>
        </div>
      </div>
    )
  },
  {
    icon: MailIcon,
    title: "Early Cancellation Process",
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          If you decide not to continue with your subscription and the payment for the upcoming billing 
          cycle has already been processed, we've got you covered.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">What to Do</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 text-sm font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-medium">Contact Us Immediately</p>
              <p className="text-gray-300 text-sm">Email us at <a href="mailto:contact@voyage-forge.com" className="text-purple-400 hover:text-purple-300 underline">contact@voyage-forge.com</a> as soon as possible</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 text-sm font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-medium">Include Your Details</p>
              <p className="text-gray-300 text-sm">Provide your account email, billing date, and reason for cancellation</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 text-sm font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-medium">Get Your Refund</p>
              <p className="text-gray-300 text-sm">We'll process your full refund and confirm via email</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-500/10 border border-purple-400/20 rounded-xl p-4 mt-6">
          <p className="text-purple-200 text-sm">
            <span className="font-semibold">Pro Tip:</span> Reach out before your next billing date to avoid any charges altogether.
          </p>
        </div>
      </div>
    )
  },
  {
    icon: ClockIcon,
    title: "Processing Timeframes",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          We understand that when you request a refund, you want it processed quickly. 
          Here's what you can expect:
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Refund Timeline</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4">
            <h5 className="text-amber-400 font-semibold mb-2">Credit Card Refunds</h5>
            <p className="text-gray-300 text-sm">3-5 business days</p>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4">
            <h5 className="text-amber-400 font-semibold mb-2">Bank Transfer Refunds</h5>
            <p className="text-gray-300 text-sm">5-10 business days</p>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4">
            <h5 className="text-amber-400 font-semibold mb-2">PayPal Refunds</h5>
            <p className="text-gray-300 text-sm">1-3 business days</p>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4">
            <h5 className="text-amber-400 font-semibold mb-2">Digital Wallet Refunds</h5>
            <p className="text-gray-300 text-sm">1-2 business days</p>
          </div>
        </div>
        
        <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4 mt-6">
          <p className="text-amber-200 text-sm">
            <span className="font-semibold">Note:</span> Processing times may vary depending on your bank or payment provider. 
            We'll send you a confirmation email once the refund is initiated.
          </p>
        </div>
      </div>
    )
  },
  {
    icon: ProcessIcon,
    title: "How to Request a Refund",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Requesting a refund is simple and straightforward. We've made the process as easy as possible.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Step-by-Step Process</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center">
              <MailIcon />
            </div>
            <div className="flex-1">
              <h5 className="text-white font-semibold mb-2">Send an Email</h5>
              <p className="text-gray-300 text-sm mb-2">
                Email us at <a href="mailto:contact@voyage-forge.com" className="text-green-400 hover:text-green-300 underline font-medium">contact@voyage-forge.com</a> with "Refund Request" in the subject line.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center">
              <ProcessIcon />
            </div>
            <div className="flex-1">
              <h5 className="text-white font-semibold mb-2">Include Required Information</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Your account email address</li>
                <li>• Account/subscription details</li>
                <li>• Reason for refund request</li>
                <li>• Preferred refund method (if different from original payment)</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center">
              <ClockIcon />
            </div>
            <div className="flex-1">
              <h5 className="text-white font-semibold mb-2">Wait for Confirmation</h5>
              <p className="text-gray-300 text-sm">
                We'll review your request within 24 hours and send you a confirmation email with processing details.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4 mt-6">
          <h5 className="text-green-400 font-semibold mb-2">Alternative Methods</h5>
          <ul className="text-green-200 text-sm space-y-1">
            <li>• Contact support through our in-app chat</li>
            <li>• Submit a support ticket from your account dashboard</li>
            <li>• Call our support line during business hours</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: CreditCardIcon,
    title: "Refund Methods & Billing",
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          We process refunds using the same payment method you used for your original purchase, 
          ensuring security and simplicity.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Supported Refund Methods</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                <CreditCardIcon />
              </div>
              <div>
                <p className="text-white font-medium">Credit/Debit Cards</p>
                <p className="text-gray-400 text-sm">Visa, MasterCard, American Express</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400 text-xs font-bold">
                PP
              </div>
              <div>
                <p className="text-white font-medium">PayPal</p>
                <p className="text-gray-400 text-sm">Direct to your PayPal account</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400 text-xs font-bold">
                ACH
              </div>
              <div>
                <p className="text-white font-medium">Bank Transfer</p>
                <p className="text-gray-400 text-sm">Direct deposit to your bank</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400 text-xs font-bold">
                DW
              </div>
              <div>
                <p className="text-white font-medium">Digital Wallets</p>
                <p className="text-gray-400 text-sm">Apple Pay, Google Pay, etc.</p>
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-white mt-6">Billing Adjustments</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• <span className="text-teal-400 font-medium">Prorated refunds</span> calculated automatically</li>
          <li>• <span className="text-teal-400 font-medium">No hidden fees</span> or processing charges</li>
          <li>• <span className="text-teal-400 font-medium">Full transparency</span> in refund calculations</li>
          <li>• <span className="text-teal-400 font-medium">Email confirmations</span> for all refund transactions</li>
        </ul>
      </div>
    )
  },
  {
    icon: ExceptionIcon,
    title: "Special Circumstances & Exceptions",
    gradient: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          While we strive to accommodate all refund requests, there are some special circumstances 
          and exceptions to be aware of.
        </p>
        
        <h4 className="text-lg font-semibold text-white mt-6">Non-Refundable Items</h4>
        <ul className="space-y-2 text-gray-300">
          <li>• <span className="text-red-400 font-medium">Setup fees</span> for custom integrations</li>
          <li>• <span className="text-red-400 font-medium">Third-party service costs</span> (when applicable)</li>
          <li>• <span className="text-red-400 font-medium">Custom development work</span> already completed</li>
          <li>• <span className="text-red-400 font-medium">Data export services</span> after account closure</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-white mt-6">Exceptional Circumstances</h4>
        <div className="space-y-3">
          <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-4">
            <h5 className="text-red-400 font-semibold mb-2">Service Outages</h5>
            <p className="text-gray-300 text-sm">
              If our service is unavailable for 24+ hours due to technical issues, 
              we'll automatically credit your account or provide a refund.
            </p>
          </div>
          
          <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-4">
            <h5 className="text-red-400 font-semibold mb-2">Data Loss</h5>
            <p className="text-gray-300 text-sm">
              In the unlikely event of data loss on our end, we'll provide a full refund 
              and help with data recovery at no additional cost.
            </p>
          </div>
          
          <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-4">
            <h5 className="text-red-400 font-semibold mb-2">Account Violations</h5>
            <p className="text-gray-300 text-sm">
              Accounts terminated for terms of service violations are not eligible for refunds. 
              We'll provide a clear explanation of any violations.
            </p>
          </div>
        </div>
        
        <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4 mt-6">
          <p className="text-amber-200 text-sm">
            <span className="font-semibold">Need Help?</span> If you have a unique situation not covered here, 
            please contact our support team. We'll work with you to find a fair solution.
          </p>
        </div>
      </div>
    )
  }
];

const faqs = [
  {
    question: "How long do I have to request a refund?",
    answer: "You can request a refund at any time during your subscription period. For the best experience, we recommend contacting us as soon as you decide to cancel to avoid any upcoming charges."
  },
  {
    question: "Can I get a refund if I've already used the service?",
    answer: "Yes! We provide prorated refunds for unused portions of your subscription, regardless of how much you've used the service during the billing period."
  },
  {
    question: "What if my refund doesn't appear in my account?",
    answer: "Refund processing times vary by payment method (3-10 business days). If you don't see your refund after the expected timeframe, please contact us with your refund confirmation email, and we'll investigate immediately."
  },
  {
    question: "Can I get a refund for a downgraded plan?",
    answer: "When you downgrade your plan, we automatically calculate and refund the difference for the unused portion of your current billing period."
  },
  {
    question: "Do you offer partial refunds for unused features?",
    answer: "Our refunds are based on subscription time periods rather than individual features. However, if you have specific concerns about features, please contact our support team to discuss your situation."
  },
  {
    question: "What happens to my data after a refund?",
    answer: "Your account and data remain active for 30 days after a refund in case you decide to return. After 30 days, your data is permanently deleted in accordance with our privacy policy."
  }
];

export default function RefundPolicyContent() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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
            🛡️ Fair & Transparent Refund Policy
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-200 leading-tight tracking-tight mb-8"
          >
            Refund Policy
            <span className="block text-gradient bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Your Satisfaction Matters
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We believe in fair billing and customer satisfaction. 
            <span className="text-emerald-200 font-medium"> Here's our commitment to you.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="mailto:contact@voyage-forge.com?subject=Refund Request"
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-lg rounded-2xl hover:from-emerald-300 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/30 inline-flex items-center gap-2"
              >
                <MailIcon />
                Request Refund
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
                Contact Support
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Refund Policy Sections */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/6 to-indigo-400/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-10 bottom-1/4 w-[32rem] h-80 bg-gradient-to-l from-emerald-500/6 to-teal-600/6 rounded-full blur-3xl" />
        </div>

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
                Everything You Need to Know
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Clear, straightforward information about our refund process and policies
            </p>
          </motion.div>

          <div className="space-y-8">
            {refundSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
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
              Common questions about refunds and billing
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

      {/* Contact Support CTA */}
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
              Still Have Questions?
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our support team is available 24/7 to assist with your refund requests 
              and answer any questions about our billing policies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="mailto:contact@voyage-forge.com?subject=Refund Request - Need Help"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-lg rounded-2xl hover:from-emerald-300 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/30 inline-flex items-center gap-2"
                >
                  <MailIcon />
                  Email Support
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
                  Live Chat
                </a>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <ClockIcon />
                24/7 Support Available
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheckIcon />
                Fair & Transparent Process
              </span>
              <span className="flex items-center gap-2">
                <RefundIcon />
                Quick Refund Processing
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}