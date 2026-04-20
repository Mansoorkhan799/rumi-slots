"use client"

import { useState, useEffect } from "react"
import { X, Star, Download } from "lucide-react"
import { siteConfig } from "@/data/site"

export default function StickyDownloadBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const wasDismissed = localStorage.getItem("sticky-bar-dismissed")
    if (wasDismissed) {
      setDismissed(true)
      return
    }
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    setVisible(false)
    localStorage.setItem("sticky-bar-dismissed", "1")
  }

  if (dismissed || !visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label={`Download ${siteConfig.name}`}
    >
      <div className="bg-stone-950 border-t border-amber-800/40 px-4 py-3 flex items-center gap-3 shadow-2xl">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white truncate">{siteConfig.name}</p>
          <div className="flex items-center gap-1 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < Math.floor(siteConfig.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-600"
                }
              />
            ))}
            <span className="text-xs text-gray-400 ml-1">{siteConfig.rating}</span>
          </div>
        </div>
        <a
          href={siteConfig.downloadUrl}
          className="relative overflow-hidden flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-colors btn-shine"
          aria-label={`Download ${siteConfig.name} APK`}
        >
          <Download size={13} />
          Download Free
        </a>
        <button
          onClick={handleDismiss}
          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white transition-colors flex-shrink-0"
          aria-label="Dismiss download bar"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  )
}
