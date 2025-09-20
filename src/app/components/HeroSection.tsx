"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 backdrop-blur-lg border border-amber-400/30 mb-6 text-amber-100 text-sm font-medium shadow-lg"
      >
        <svg className="w-3 h-3 mr-2 text-emerald-400 animate-pulse" viewBox="0 0 8 8" fill="currentColor">
          <circle cx="4" cy="4" r="4" />
        </svg>
        🚀 Now Live — Transform Your Travel Business
      </motion.span>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-200 leading-tight tracking-tight"
      >
        Create Stunning Travel Content That 
        <span className="block text-gradient bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-pulse">
          Converts & Captivates
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl sm:text-2xl text-slate-200/90 mt-6 max-w-2xl leading-relaxed font-light"
      >
        From AI-powered itineraries to SEO-optimized landing pages and booking widgets — 
        <span className="text-amber-200 font-medium">generate professional travel content in minutes</span> 
        and watch your bookings soar.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-5"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection("get-started")}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 hover:from-amber-500 hover:via-orange-500 hover:to-yellow-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            ✨ Start Your Free Trial
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection("templates")}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-white/10"
        >
          <span className="flex items-center gap-2">
            🎨 View Live Demos
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              ⚡
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10 grid grid-cols-2 gap-6 text-white/90 text-sm"
      >
        {[
          { label: "No Code Required", icon: CheckIcon, color: "text-emerald-400" },
          { label: "Built-in SEO Magic", icon: CheckIcon, color: "text-blue-400" },
          { label: "Booking-Ready Widgets", icon: CheckIcon, color: "text-purple-400" },
          { label: "AI-Powered Content", icon: CheckIcon, color: "text-amber-400" },
        ].map((f, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
            className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
          >
            <f.icon className={`w-5 h-5 mr-3 ${f.color} group-hover:scale-110 transition-transform duration-300`} />
            <span className="font-medium group-hover:text-white transition-colors duration-300">{f.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 flex items-center gap-6 text-sm text-slate-300/80"
      >
        <div className="flex items-center gap-3">
          <span className="text-amber-400 font-semibold">Trusted by 2,500+</span>
          <div className="flex items-center gap-2">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-bold backdrop-blur-sm"
            >
              🏨 Hotels
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-bold backdrop-blur-sm"
            >
              ✈️ Agencies
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-xs font-bold backdrop-blur-sm"
            >
              🗺️ Guides
            </motion.div>
          </div>
        </div>
      </motion.div>
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