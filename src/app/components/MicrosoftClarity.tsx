"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    clarity?: any;
  }
}

export default function MicrosoftClarity() {
  const scrollRaf = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const attached = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Defensive: don't attach multiple times
    if (attached.current) return;
    attached.current = true;

    // Create script tag lazily
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.clarity.ms/tag/tsno3a7itj";

    // Lightweight bootstrap to queue calls before clarity is ready
    (window as any).clarity = (window as any).clarity || function (...args: any[]) {
      ((window as any).clarity.q = (window as any).clarity.q || []).push(args);
    };

    document.head.appendChild(script);

    const onLoad = () => {
      try {
        if (!window.clarity) return;

        // Small, safe initialization
        window.clarity("set", "projectId", "tsno3a7itj");
        window.clarity("identify", {
          userId: "anonymous",
          sessionId: `session_${Date.now()}`,
          pageId: location.pathname,
          friendlyName: "Voyage Forge Visitor",
        });

        window.clarity("setTag", "platform", /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop");
        window.clarity("setTag", "page_type", getPageTypeSafe());

        // Start tracking lighter-weight events
        attachLightweightHandlers();
      } catch (err) {
        // Don't crash the app when clarity misbehaves
        // eslint-disable-next-line no-console
        console.warn("Clarity init failed:", err);
      }
    };

    script.addEventListener("load", onLoad);

    function getPageTypeSafe() {
      try {
        const path = location.pathname || "/";
        if (path === "/") return "homepage";
        if (path.includes("/pricing")) return "pricing";
        if (path.includes("/about")) return "about";
        if (path.includes("/contact")) return "contact";
        if (path.includes("/blog")) return "blog";
        return "other";
      } catch (e) {
        return "other";
      }
    }

    function attachLightweightHandlers() {
      // Throttled scroll reporter using rAF to avoid layout thrashing
      let lastReported = 0;

      const onScroll = () => {
        if (scrollRaf.current != null) return; // already queued
        scrollRaf.current = requestAnimationFrame(() => {
          scrollRaf.current = null;
          try {
            const scrollPercent = Math.round((window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent >= 25 && lastReported < 25) {
              lastReported = 25;
              window.clarity && window.clarity("event", "scroll_25_percent");
            } else if (scrollPercent >= 50 && lastReported < 50) {
              lastReported = 50;
              window.clarity && window.clarity("event", "scroll_50_percent");
            } else if (scrollPercent >= 75 && lastReported < 75) {
              lastReported = 75;
              window.clarity && window.clarity("event", "scroll_75_percent");
            } else if (scrollPercent >= 90 && lastReported < 90) {
              lastReported = 90;
              window.clarity && window.clarity("event", "scroll_90_percent");
            }
          } catch (e) {
            // ignore errors
          }
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });

      // Track time-on-page with a single interval but guarded and cleaned up
      let elapsedSeconds = 0;
      intervalRef.current = window.setInterval(() => {
        elapsedSeconds += 10;
        try {
          if (elapsedSeconds >= 30) {
            window.clarity && window.clarity("event", "time_30_seconds");
          }
          if (elapsedSeconds >= 60) {
            window.clarity && window.clarity("event", "time_1_minute");
          }
          if (elapsedSeconds >= 120) {
            window.clarity && window.clarity("event", "time_2_minutes");
          }
        } catch (e) {
          // ignore
        }
      }, 10000) as unknown as number;

      // Track CTA clicks in a safe way: attach once
      setTimeout(() => {
        try {
          const trackButton = (selector: string, eventName: string) => {
            const nodes = document.querySelectorAll(selector);
            nodes.forEach((node) => {
              // Use one-time listener to avoid duplicates
              const handler = () => {
                try {
                  window.clarity && window.clarity("event", eventName);
                } catch (e) {}
                node.removeEventListener("click", handler);
              };
              node.addEventListener("click", handler, { passive: true });
            });
          };

          trackButton('a[href*="app.voyage-forge.com"]', "cta_start_free_trial");
          trackButton('a[href*="calendly.com"]', "cta_book_demo");
          trackButton('a[href="/pricing"]', "nav_pricing");
          trackButton('a[href="/about-us"]', "nav_about");
          trackButton('a[href="/contact"]', "nav_contact");
        } catch (e) {
          // noop
        }
      }, 800);
    }

    return () => {
      // cleanup
      try {
        script.removeEventListener("load", onLoad);
      } catch (e) {}
      if (scrollRaf.current != null) {
        cancelAnimationFrame(scrollRaf.current);
        scrollRaf.current = null;
      }
      if (intervalRef.current != null) {
        clearInterval(intervalRef.current as unknown as number);
        intervalRef.current = null;
      }
    };
  }, []);

  return null;
}

// Lightweight helpers for other modules — safe no-ops if clarity isn't ready
export const trackClarityEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === "undefined" || !window.clarity) return;
  try {
    window.clarity("event", eventName);
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        window.clarity("setTag", key, value as any);
      });
    }
  } catch (e) {
    // noop
  }
};

export const identifyClarityUser = (userId: string, properties?: Record<string, any>) => {
  if (typeof window === "undefined" || !window.clarity) return;
  try {
    window.clarity("identify", {
      userId,
      sessionId: `session_${userId}_${Date.now()}`,
      pageId: location.pathname,
      friendlyName: properties?.name || "Voyage Forge User",
    });
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        window.clarity("setTag", key, value as any);
      });
    }
  } catch (e) {
    // noop
  }
};

export const setClarityTag = (key: string, value: string | string[]) => {
  if (typeof window === "undefined" || !window.clarity) return;
  try {
    window.clarity("setTag", key, value as any);
  } catch (e) {
    // noop
  }
};