'use client'

import { useCallback, useState, useEffect } from 'react'

export default function TawkChat() {
  const [loaded, setLoaded] = useState(false)

  const loadTawk = useCallback(() => {
    if (typeof window === 'undefined' || loaded) return
    try {
      // Avoid loading twice
      if (document.querySelector('script[data-tawk="embed"]')) {
        setLoaded(true)
        return
      }

      // Ensure Tawk globals exist (per embed recommendations)
      ;(window as any).Tawk_API = (window as any).Tawk_API || {}
      ;(window as any).Tawk_LoadStart = new Date()

      const s1 = document.createElement('script')
      s1.async = true
      s1.src = 'https://embed.tawk.to/68e5bb6ba72e351952185fb9/1j70m87ai'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s1.setAttribute('data-tawk', 'embed')
      const s0 = document.getElementsByTagName('script')[0]
      if (s0 && s0.parentNode) s0.parentNode.insertBefore(s1, s0)
      else document.head.appendChild(s1)
      s1.addEventListener('load', () => {
        console.log('[TawkChat] embed script loaded')
        setLoaded(true)
      })
    } catch (e) {
      // Log the error for easier debugging
      // eslint-disable-next-line no-console
      console.error('[TawkChat] failed to load chat widget', e)
    }
  }, [loaded])

  // Auto-load after a short idle timeout so it doesn't block initial rendering
  useEffect(() => {
    if (typeof window === 'undefined') return
    // If the widget is already present, mark as loaded
    if (document.querySelector('script[data-tawk="embed"]')) {
      setLoaded(true)
      return
    }

    const timer = window.setTimeout(() => {
      loadTawk()
    }, 1200)

    return () => window.clearTimeout(timer)
  }, [loadTawk])

  // Small accessible button to open chat (loads the widget on click)
  return (
    <div>
      {!loaded && (
        <button
          onClick={() => loadTawk()}
          className="chat-load-button"
          aria-label="Open chat"
          type="button"
        >
          Chat with us
        </button>
      )}
    </div>
  )
}
