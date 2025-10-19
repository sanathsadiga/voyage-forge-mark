'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: any;
  }
}

export default function MicrosoftClarity() {
  useEffect(() => {
    // Microsoft Clarity tracking code
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.clarity.ms/tag/tsno3a7itj';
    
    // Initialize clarity object
    (window as any).clarity = (window as any).clarity || function(...args: any[]) {
      ((window as any).clarity.q = (window as any).clarity.q || []).push(args);
    };
    
    document.head.appendChild(script);

    // Wait for Clarity to load then initialize
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).clarity) {
        (window as any).clarity('set', 'projectId', 'tsno3a7itj');
        
        // Track page view
        (window as any).clarity('identify', {
          userId: 'anonymous',
          sessionId: `session_${Date.now()}`,
          pageId: window.location.pathname,
          friendlyName: 'Voyage Forge Visitor'
        });

        // Set custom tags for better filtering
        (window as any).clarity('setTag', 'platform', 'web');
        (window as any).clarity('setTag', 'page_type', getPageType());
        (window as any).clarity('setTag', 'user_agent', navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop');
        
        // Track key conversion events
        trackConversionEvents();
      }
    };
  }, []);

  const getPageType = (): string => {
    const path = window.location.pathname;
    if (path === '/') return 'homepage';
    if (path.includes('/pricing')) return 'pricing';
    if (path.includes('/about')) return 'about';
    if (path.includes('/contact')) return 'contact';
    if (path.includes('/blog')) return 'blog';
    return 'other';
  };

  const trackConversionEvents = () => {
    // Track CTA button clicks
    const trackButton = (selector: string, eventName: string) => {
      const buttons = document.querySelectorAll(selector);
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          if ((window as any).clarity) {
            (window as any).clarity('event', eventName);
          }
        });
      });
    };

    // Wait for DOM to be ready
    setTimeout(() => {
      // Track main CTA buttons
      trackButton('a[href*="app.voyage-forge.com"]', 'cta_start_free_trial');
      trackButton('a[href*="calendly.com"]', 'cta_book_demo');
      
      // Track navigation
      trackButton('a[href="/pricing"]', 'nav_pricing');
      trackButton('a[href="/about-us"]', 'nav_about');
      trackButton('a[href="/contact"]', 'nav_contact');
      
      // Track scroll depth
      let maxScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (scrollPercent >= 25 && (window as any).clarity) {
            (window as any).clarity('event', 'scroll_25_percent');
          }
          if (scrollPercent >= 50 && (window as any).clarity) {
            (window as any).clarity('event', 'scroll_50_percent');
          }
          if (scrollPercent >= 75 && (window as any).clarity) {
            (window as any).clarity('event', 'scroll_75_percent');
          }
          if (scrollPercent >= 90 && (window as any).clarity) {
            (window as any).clarity('event', 'scroll_90_percent');
          }
        }
      });

      // Track time on page
      let timeOnPage = 0;
      const timeInterval = setInterval(() => {
        timeOnPage += 10;
        if (timeOnPage === 30 && (window as any).clarity) {
          (window as any).clarity('event', 'time_30_seconds');
        }
        if (timeOnPage === 60 && (window as any).clarity) {
          (window as any).clarity('event', 'time_1_minute');
        }
        if (timeOnPage === 120 && (window as any).clarity) {
          (window as any).clarity('event', 'time_2_minutes');
        }
        if (timeOnPage === 300 && (window as any).clarity) {
          (window as any).clarity('event', 'time_5_minutes');
        }
      }, 10000);

      // Clean up interval when component unmounts
      return () => {
        clearInterval(timeInterval);
      };
    }, 1000);
  };

  return null; // This component doesn't render anything
}

// Helper function to track custom events from other components
export const trackClarityEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', eventName);
    
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        (window as any).clarity('setTag', key, value);
      });
    }
  }
};

// Helper function to identify users
export const identifyClarityUser = (userId: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('identify', {
      userId,
      sessionId: `session_${userId}_${Date.now()}`,
      pageId: window.location.pathname,
      friendlyName: properties?.name || 'Voyage Forge User'
    });

    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        (window as any).clarity('setTag', key, value);
      });
    }
  }
};

// Helper function to set custom tags
export const setClarityTag = (key: string, value: string | string[]) => {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('setTag', key, value);
  }
};