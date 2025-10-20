"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function ZohoSalesIQ() {
  const [loaded, setLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const loadZoho = useCallback(() => {
    if (typeof window === "undefined" || loaded) return;
    try {
      // Prevent multiple inserts
      if (scriptRef.current) return;

      // Minimal bootstrap to hide float until ready
      (window as any).$zoho = (window as any).$zoho || {};
      (window as any).$zoho.salesiq = (window as any).$zoho.salesiq || {
        widgetcode: "siq61a298e1bd3ba42a2ed191e8f66c1b881676befc45621b7e1d63a78ffd5e31b1",
        values: {},
        ready: function () {
          try {
            (window as any).$zoho.salesiq.floatbutton && (window as any).$zoho.salesiq.floatbutton.visible('hide');
          } catch (e) {}
        },
      };

      const d = document;
      const s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zoho.in/widget";
      scriptRef.current = s;
      const scripts = d.getElementsByTagName("script");
      const t = scripts && scripts.length ? scripts[0] : null;
      if (t && t.parentNode) {
        t.parentNode.insertBefore(s, t);
      } else {
        d.head.appendChild(s);
      }

      s.addEventListener("load", () => {
        setLoaded(true);
      });
    } catch (e) {
      // noop
    }
  }, [loaded]);

  useEffect(() => {
    // Try to load during idle if available to improve UX
    if (typeof window === "undefined") return;
    if (typeof (window as any).requestIdleCallback === "function") {
      const id = (window as any).requestIdleCallback(() => {
        loadZoho();
      });
      return () => {
        try {
          (window as any).cancelIdleCallback && (window as any).cancelIdleCallback(id);
        } catch (e) {}
      };
    }
    // Fallback: load after short delay (non-blocking)
    const t = setTimeout(() => {
      loadZoho();
    }, 5000);
    return () => clearTimeout(t);
  }, [loadZoho]);

  // Provide a simple manual trigger UI for immediate loading (accessible)
  return (
    <div aria-hidden={loaded}>
      {!loaded && (
        <button
          onClick={() => loadZoho()}
          aria-pressed={false}
          className="zohoload-btn sr-only"
          style={{ position: "absolute", left: -9999, top: -9999 }}
        >
          Load chat
        </button>
      )}
    </div>
  );
}
