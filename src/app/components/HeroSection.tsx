"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const authLink = "https://app.voyage-forge.com/auth";

  function onCTAClick(e: React.MouseEvent) {
    e.preventDefault();
    const href = authLink;
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'hero_start_free',
      });
    }
    // small delay to allow analytics to fire
    setTimeout(() => { window.location.href = href; }, 150);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-200 leading-tight tracking-tight"
      >
        Free Travel Website Builder
        <span className="block text-gradient bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
          With AI-Powered Content
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl sm:text-2xl text-slate-200/90 mt-6 max-w-3xl leading-relaxed font-light"
      >
        Create professional travel websites with AI-generated content, SEO optimization, and booking widgets. 
        <span className="text-amber-200 font-medium">Launch your travel business online in minutes, not months.</span>
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-5"
      >
        <motion.a
          href={authLink}
          onClick={onCTAClick}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-black font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl overflow-hidden"
        >
          <span className="mr-3 inline-flex items-center px-2 py-1 text-xs font-semibold bg-white/90 text-black rounded-full">Free</span>
          <span className="relative z-10 flex items-center gap-2">
            Start Free - No Card
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ➔
            </motion.span>
          </span> 
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </motion.a>

        <motion.a
          href="https://calendly.com/founder-voyage-forge/30min"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-white/10"
        >
          <span className="flex items-center gap-2">
            Book Demo
          </span>
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-300/80 cursor-default"
        style={{ cursor: 'default' }}
      >
        <div className="flex items-center gap-2">
          <CheckIcon className="w-5 h-5 text-emerald-400" />
          <span>No Code Required</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckIcon className="w-5 h-5 text-blue-400" />
          <span>SEO Optimized</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckIcon className="w-5 h-5 text-amber-400" />
          <span>AI Content</span>
        </div>
      </motion.div>
      {/* Trust line under CTA */}
      <div className="mt-4 text-sm text-slate-300/80 flex items-center gap-4 justify-center">
        <span>Trusted by 500+ travel businesses</span>
        <span>•</span>
        <span>No card required</span>
      </div>
    </motion.section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.36-9.97a.75.75 0 10-1.06-1.06L9 10.27 7.7 8.97a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l3.66-3.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}