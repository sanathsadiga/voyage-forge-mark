"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const go = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to open Calendly booking - same as Header
  const openCalendly = () => {
    window.open("https://calendly.com/founder-voyage-forge/30min", "_blank");
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Enhanced background with same theme as hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950">
        {/* Background orbs and effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-12 top-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-6 bottom-1/4 w-[32rem] h-80 bg-gradient-to-l from-purple-500/8 to-indigo-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-cyan-400/4 to-blue-500/4 rounded-full blur-3xl" />

          {/* Floating particles */}
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-ping"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Top CTA section with modern design */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-yellow-400/10 backdrop-blur-xl border-y border-amber-400/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-200 mb-4"
            >
              Ready to Transform Your Travel Business?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-slate-200/90 mb-8 max-w-2xl mx-auto"
            >
              Join 2,500+ travel professionals creating stunning content with AI
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={openCalendly}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 hover:from-amber-500 hover:via-orange-500 hover:to-yellow-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Book Your Free Call
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://app.voyage-forge.com/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  Sign Up
                  <ExternalLink className="w-5 h-5" />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative">
                <Image
                  src="/vo (2).png"
                  alt="Voyage Forge Logo"
                  width={48}
                  height={48}
                  className="h-17 w-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-black text-2xl bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                Voyage Forge
              </span>
            </motion.div>

            <p className="text-lg text-slate-200/80 mb-8 leading-relaxed">
              AI-powered travel content creation platform that helps tour
              operators, agencies, and guides
              <span className="text-amber-200 font-medium">
                {" "}
                build stunning websites in minutes
              </span>
              .
            </p>

            {/* Enhanced social links */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://twitter.com/",
                  label: "Twitter",
                  icon: TwitterIcon,
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  border: "border-blue-400/30",
                  hover: "hover:border-blue-400/60",
                },
                {
                  href: "https://www.linkedin.com/company/voyage-forge/",
                  label: "LinkedIn",
                  icon: LinkedInIcon,
                  gradient: "from-blue-600/20 to-blue-800/20",
                  border: "border-blue-500/30",
                  hover: "hover:border-blue-500/60",
                },
                {
                  href: "https://www.instagram.com/voyageforgetravelcms/",
                  label: "Instagram",
                  icon: InstagramIcon,
                  gradient: "from-pink-500/20 to-purple-500/20",
                  border: "border-pink-400/30",
                  hover: "hover:border-pink-400/60",
                },
                {
                  href: "https://www.facebook.com/profile.php?id=61579234916851",
                  label: "Facebook",
                  icon: FacebookIcon,
                  gradient: "from-blue-500/20 to-indigo-500/20",
                  border: "border-blue-400/30",
                  hover: "hover:border-blue-400/60",
                },
                {
                  href: "mailto:founder@voyage-forge.com",
                  label: "Email",
                  icon: EmailIcon,
                  gradient: "from-amber-500/20 to-orange-500/20",
                  border: "border-amber-400/30",
                  hover: "hover:border-amber-400/60",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} backdrop-blur-sm border ${social.border} ${social.hover} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              Products
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Features", href:"/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Waitlist", href: "/waitlist" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={item.href}
                      className="group text-slate-300/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-slate-400 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></span>
                      {item.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Partners", href: "/affiliation" },
                { label: "Referrals", href: "/referral" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Terms and Conditions", href: "/terms-conditions" }
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={item.href}
                      className="group text-slate-300/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-slate-400 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></span>
                      {item.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:founder@voyage-forge.com"
                  className="group text-slate-300/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  founder@voyage-forge.com
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={openCalendly}
                  className="group text-slate-300/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-purple-400" />
                  Book a Call
                </motion.button>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-slate-300/80 text-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              © {new Date().getFullYear()} Voyage Forge. All rights reserved.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 text-sm text-slate-400/80"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Crafted for travel professionals worldwide 🌍</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Icon components
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21l-6.59 7.523L22 22h-6.9l-4.54-5.985L4.3 22H2l7.09-8.1L2 2h6.9l4.13 5.444L18.244 2Zm-2.4 18h1.49L8.25 4h-1.5l9.094 16Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.18h.05c.54-1.02 1.86-2.18 3.84-2.18C20.5 8 24 10.42 24 16.08V24h-4v-7.13c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24h-4V8z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
    </svg>
  );
}

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 4h20a2 2 0 0 1 2 2v.4l-12 7.2L0 6.4V6a2 2 0 0 1 2-2Zm0 5.6 10 6 10-6V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.6Z" />
    </svg>
  );
}