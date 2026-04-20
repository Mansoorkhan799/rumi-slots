import Link from "next/link"
import { siteConfig } from "@/data/site"

const mainLinks = [
  { href: "/download", label: "Download APK" },
  { href: "/register", label: "How to Register" },
  { href: "/login", label: "How to Login" },
  { href: "/how-to-earn-money", label: "Earn Money" },
  { href: "/is-real-or-fake", label: "Real or Fake?" },
  { href: "/withdrawal-proof", label: "Withdrawal Proof" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/blog", label: "Blog" },
]

const trustLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 border-t border-amber-900/20" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-xl mb-4">
              <span className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-black text-sm">
                R
              </span>
              <span className="gold-text">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-4">
              {siteConfig.tagline}. Download the APK and start earning via JazzCash and Easypaisa today.
            </p>
            <p className="text-xs text-amber-700 bg-amber-950/40 border border-amber-900/30 rounded-xl p-3">
              ⚠️ For entertainment purposes only. 18+ only. Please gamble responsibly.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">
              {trustLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Payments</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="text-xs bg-stone-800 text-gray-300 px-2.5 py-1 rounded-lg border border-stone-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            {siteConfig.domain.replace("https://", "")}
          </p>
        </div>
      </div>
    </footer>
  )
}
