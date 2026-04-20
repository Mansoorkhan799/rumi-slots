import Link from "next/link"
import Image from "next/image"
import { Download } from "lucide-react"
import { siteConfig } from "@/data/site"
import MobileMenu from "./MobileMenu"

export const navLinks = [
  { href: "/download", label: "Download" },
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
  { href: "/how-to-earn-money", label: "Earn Money" },
  { href: "/is-real-or-fake", label: "Review" },
  { href: "/withdrawal-proof", label: "Proof" },
  { href: "/blog", label: "Blog" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/95 backdrop-blur-md border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-lg flex-shrink-0"
          aria-label={`${siteConfig.name} Homepage`}
        >
          <div className="relative w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-amber-500/40">
            <Image
              src="/images/rumi-slot.webp"
              alt={`${siteConfig.name} logo`}
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <span className="gold-text whitespace-nowrap">{siteConfig.name}</span>
        </Link>

        {/* Nav links — desktop only, centered */}
        <nav
          className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-gray-400 hover:text-amber-400 hover:bg-stone-800 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Download CTA + mobile hamburger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={siteConfig.downloadUrl}
            className="hidden sm:flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
            aria-label={`Download ${siteConfig.name} APK`}
          >
            <Download size={14} />
            Download APK
          </a>
          <MobileMenu links={navLinks} />
        </div>

      </div>
    </header>
  )
}
