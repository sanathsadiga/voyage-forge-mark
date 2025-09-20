"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // modern icons

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-8 transition-all
        ${scrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"}

      `}
    >
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/vo (2).png"
            alt="Voyage Forge Logo"
            width={200}
            height={200}
            className="h-16 w-auto object-contain"  // 4rem tall
          />


        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about-us"
            className={`relative text-sm font-medium transition ${pathname === "/about-us"
                ? "text-white font-semibold after:w-full"
                : "text-gray-200 hover:text-white"
              } after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full`}
          >
            About Us
          </Link>

          <Link
            href="/privacy-policy"
            className={`relative text-sm font-medium transition ${pathname === "/privacy-policy"
                ? "text-white font-semibold after:w-full"
                : "text-gray-200 hover:text-white"
              } after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full`}
          >
            Privacy Policy
          </Link>
        </nav>



        {/* CTA Buttons (Desktop) */}
        <div className="hidden sm:flex gap-3">
          <button
            onClick={() => scrollToSection("calendly")}
            className="bg-black text-white text-sm font-medium px-5 py-2 rounded-full border border-black hover:bg-transparent hover:text-black transition-all"
          >
            Book Call
          </button>
          <button
            onClick={() => scrollToSection("waitlist")}
            className="bg-yellow-400 text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-yellow-500 transition-all"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg px-4 py-4 space-y-3">
          <Link
            href="/about-us"
            className="block text-gray-700 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/privacy-policy"
            className="block text-gray-700 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <button
            onClick={() => scrollToSection("calendly")}
            className="w-full bg-black text-white font-medium px-4 py-2 rounded-full"
          >
            Book Call
          </button>
          <button
            onClick={() => scrollToSection("waitlist")}
            className="w-full bg-yellow-400 text-black font-medium px-4 py-2 rounded-full"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </motion.header>
  );
}