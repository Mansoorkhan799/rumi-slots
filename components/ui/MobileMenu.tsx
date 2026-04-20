"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import {
  Menu, X, Download, ChevronRight,
  LogIn, UserPlus, Wallet, HelpCircle,
  ShieldCheck, BookOpen, Star, ArrowDownToLine,
  Info, Phone, FileText, Scale, Home,
} from "lucide-react"
import { siteConfig } from "@/data/site"

interface MobileMenuProps {
  links: { href: string; label: string }[]
}

const menuGroups = [
  {
    label: "Main",
    links: [
      { href: "/", label: "Home", icon: Home },
      { href: "/download", label: "Download APK", icon: ArrowDownToLine },
      { href: "/register", label: "Register", icon: UserPlus },
      { href: "/login", label: "Login", icon: LogIn },
    ],
  },
  {
    label: "Guides",
    links: [
      { href: "/how-to-earn-money", label: "Earn Money", icon: Wallet },
      { href: "/is-real-or-fake", label: "Is It Real?", icon: ShieldCheck },
      { href: "/withdrawal-proof", label: "Withdrawal Proof", icon: Star },
      { href: "/alternatives", label: "Alternatives", icon: HelpCircle },
      { href: "/blog", label: "Blog", icon: BookOpen },
    ],
  },
  {
    label: "Info",
    links: [
      { href: "/about", label: "About", icon: Info },
      { href: "/contact", label: "Contact", icon: Phone },
      { href: "/privacy-policy", label: "Privacy Policy", icon: FileText },
      { href: "/disclaimer", label: "Disclaimer", icon: Scale },
    ],
  },
]

export default function MobileMenu({ links: _ }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only mount portal after hydration
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const drawer = (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        style={{ transition: "opacity 0.3s" }}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm ${open ? "opacity-100 pointer-events-auto z-[9998]" : "opacity-0 pointer-events-none z-[-1]"}`}
      />

      {/* Slide-in drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{ transition: "transform 0.3s ease-in-out" }}
        className={`fixed top-0 right-0 bottom-0 z-[9999] w-72 bg-stone-950 border-l border-amber-900/25 flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-stone-800 flex-shrink-0">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 font-extrabold text-lg"
          >
            <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-amber-500/40 flex-shrink-0">
              <Image
                src="/images/rumi-slot.webp"
                alt={`${siteConfig.name} logo`}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="gold-text">{siteConfig.name}</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-xl bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav groups */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {menuGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 px-2 mb-1.5">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.links.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-gray-300 hover:text-amber-400 hover:bg-stone-800/80 transition-all text-sm font-medium group"
                    >
                      <Icon size={15} className="text-gray-500 group-hover:text-amber-400 transition-colors flex-shrink-0" />
                      <span className="flex-1">{label}</span>
                      <ChevronRight size={13} className="text-gray-700 group-hover:text-amber-500/60 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Download CTA */}
        <div className="px-4 py-4 border-t border-stone-800 flex-shrink-0 space-y-2">
          <a
            href={siteConfig.downloadUrl}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 rounded-xl transition-colors w-full text-sm"
          >
            <Download size={15} />
            Download Free APK
          </a>
          <p className="text-center text-[10px] text-gray-600">
            {siteConfig.size} · Android {siteConfig.os} · {siteConfig.versionLabel}
          </p>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Hamburger button — hide on desktop where nav links are visible */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-gray-300 transition-colors flex-shrink-0"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu size={18} />
      </button>

      {/* Portal: renders directly on <body>, outside all stacking contexts */}
      {mounted && createPortal(drawer, document.body)}
    </>
  )
}
