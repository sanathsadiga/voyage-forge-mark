"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const go = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-24 text-gray-300 bg-slate-950 border-t border-white/10">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <h3 className="text-white text-lg font-semibold text-center md:text-left">
            Launch your travel site faster with Voyage Forge
          </h3>
          <div className="flex gap-3">
            <button
              onClick={() => go("calendly")}
              className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
            >
              Book a Call
            </button>
            <button
              onClick={() => go("waitlist")}
              className="px-5 py-2 rounded-full bg-black/30 text-white border border-white/40 hover:bg-black/40 transition"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/vo (2).png"
                alt="Voyage Forge"
                className="h-10 w-auto object-contain"
              />
              <span className="text-white font-bold text-lg">Voyage Forge</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              AI-powered content, SEO, and ready-to-use widgets to get your
              travel business online—fast.
            </p>

            {/* Socials */}
            {/* Socials */}
            <div className="flex gap-4 mt-5">
              {/* Twitter / X */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 hover:border-white/30 transition"
                aria-label="X / Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21l-6.59 7.523L22 22h-6.9l-4.54-5.985L4.3 22H2l7.09-8.1L2 2h6.9l4.13 5.444L18.244 2Zm-2.4 18h1.49L8.25 4h-1.5l9.094 16Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/voyage-forge/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 hover:border-white/30 transition"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.18h.05c.54-1.02 1.86-2.18 3.84-2.18C20.5 8 24 10.42 24 16.08V24h-4v-7.13c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24h-4V8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/voyageforgetravelcms/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 hover:border-white/30 transition"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61579234916851"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 hover:border-white/30 transition"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:founder@voyage-forge.com"
                className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 hover:border-white/30 transition"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 4h20a2 2 0 0 1 2 2v.4l-12 7.2L0 6.4V6a2 2 0 0 1 2-2Zm0 5.6 10 6 10-6V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => go("features")} className="nav-link">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => go("waitlist")} className="nav-link">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => go("waitlist")} className="nav-link">
                  Waitlist
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="nav-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@travelcms.com" className="nav-link">
                  founder@voyage-forge.com
                </a>
              </li>
              <li>
                <button onClick={() => go("calendly")} className="nav-link">
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Voyage Forge. All rights reserved.
          </p>
          <div className="text-xs text-gray-500">
            Made for tour operators & travel agents.
          </div>
        </div>
      </div>

      {/* Footer styles for link hover underline */}
      <style jsx global>{`
        .nav-link {
          position: relative;
          display: inline-block;
          color: rgb(156 163 175); /* text-gray-400 */
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -3px;
          height: 2px;
          width: 0;
          background: #f59e0b; /* amber-500 */
          transition: all 0.25s ease;
        }
        .nav-link:hover::after {
          left: 0;
          width: 100%;
        }
      `}</style>
    </footer>
  );
}
