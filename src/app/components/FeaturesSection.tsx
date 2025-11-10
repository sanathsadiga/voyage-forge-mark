"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";

export default function FeaturesSection() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl border border-white/5 backdrop-blur-xl p-8 shadow-xl hover:shadow-amber-500/10 transition-all duration-500"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={RobotIcon}
            title="AI Content Studio"
            desc="Generate personalized itineraries, destination guides, and SEO-optimized blog posts in seconds with our advanced AI."
            gradient="from-purple-500/20 to-indigo-500/20"
            iconColor="text-purple-400"
          />
          <FeatureCard
            icon={RocketIcon}
            title="One-Click Publishing"
            desc="Export to WordPress, HTML, or publish directly to your website. No technical skills required."
            gradient="from-emerald-500/20 to-teal-500/20"
            iconColor="text-emerald-400"
          />
          <FeatureCard
            icon={ChartUpIcon}
            title="SEO Powerhouse"
            desc="Built-in keyword optimization, meta tags, and structured data to dominate search rankings."
            gradient="from-blue-500/20 to-cyan-500/20"
            iconColor="text-blue-400"
          />
          <FeatureCard
            icon={WidgetIcon}
            title="Conversion Widgets"
            desc="Booking forms, review displays, and interactive maps that turn visitors into paying customers."
            gradient="from-amber-500/20 to-orange-500/20"
            iconColor="text-amber-400"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 rounded-full text-amber-200 text-sm font-medium backdrop-blur-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Perfect for tour operators, agencies & travel creators
        </div>
      </motion.div>

      {/* Enhanced preview section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-8"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-4 backdrop-blur-sm hover:bg-white/8 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-400/30 flex items-center justify-center text-sm font-bold text-amber-300 backdrop-blur-sm">
              ✨ Live
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <motion.div 
                  animate={{ width: ['40%', '80%', '60%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="h-3 bg-gradient-to-r from-amber-400/40 to-orange-400/40 rounded-full"
                />
                <span className="text-xs text-amber-400 font-medium">Generating...</span>
              </div>
              <motion.div 
                animate={{ width: ['20%', '70%', '45%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                className="h-2 bg-white/20 rounded-full"
              />
              <motion.div 
                animate={{ width: ['60%', '30%', '80%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
                className="h-2 bg-white/15 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.aside>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  gradient = "from-white/8 to-white/4",
  iconColor = "text-amber-300",
}: {
  icon: (props: React.SVGProps<SVGSVGElement>) => ReactElement;
  title: string;
  desc: string;
  gradient?: string;
  iconColor?: string;
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
  className={`rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur-sm p-6 text-white hover:border-white/20 transition-all duration-300 group`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${iconColor} group-hover:rotate-12 transition-transform duration-300`} />
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-amber-200 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{desc}</p>
    </motion.div>
  );
}

function RobotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 2h2v3h3a2 2 0 012 2v9a4 4 0 01-4 4h-6a4 4 0 01-4-4V7a2 2 0 012-2h3V2zm-3 7a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zM8 14h8v2H8v-2z" />
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 3l7 7-4 1-4 4-1 4-7-7 4-1 4-4 1-4zM4 20l3-3 1 4-4-1z" />
    </svg>
  );
}

function ChartUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h2v18H3V3zm16 18H7v-2h12V3h2v18zm-8-5l3-3 2 2 4-4v3h2V7h-7v2h3l-3 3-2-2-4 4 2 2z" />
    </svg>
  );
}

function WidgetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" />
    </svg>
  );
}