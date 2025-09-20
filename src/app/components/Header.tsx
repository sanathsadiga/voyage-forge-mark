"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Users } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { href: "/about-us", label: "About Us" },
    { href: "/privacy-policy", label: "Privacy Policy" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="relative">
        {/* Gradient border bottom */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        )}
        
        <div className="flex items-center justify-between h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/vo (2).png"
                  alt="Voyage Forge Logo"
                  width={180}
                  height={180}
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    pathname === item.href
                      ? scrolled
                        ? "text-yellow-600 bg-yellow-50"
                        : "text-yellow-400 bg-white/10"
                      : scrolled
                      ? "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("calendly")}
              className={`group flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full border-2 transition-all duration-300 ${
                scrolled
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-gray-900"
              }`}
            >
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              Book Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("waitlist")}
              className="group relative flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-black rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Users className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              Join Waitlist
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`md:hidden relative p-3 rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4 max-w-7xl mx-auto">
              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        pathname === item.href
                          ? "text-yellow-600 bg-yellow-50 border-l-4 border-yellow-400"
                          : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => scrollToSection("calendly")}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-gray-900 bg-white border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Book Call
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => scrollToSection("waitlist")}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-black bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg"
                >
                  <Users className="w-5 h-5" />
                  Join Waitlist
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}