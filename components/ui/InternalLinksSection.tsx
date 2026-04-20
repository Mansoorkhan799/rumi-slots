import Link from "next/link"
import {
  Download, UserPlus, LogIn, TrendingUp, HelpCircle, CheckCircle,
  LayoutGrid, BookOpen, ArrowRight
} from "lucide-react"

const links = [
  { href: "/download", label: "Download APK", icon: Download, desc: "Get the latest APK file" },
  { href: "/register", label: "How to Register", icon: UserPlus, desc: "Create your account" },
  { href: "/login", label: "How to Login", icon: LogIn, desc: "Access your account" },
  { href: "/how-to-earn-money", label: "Earn Money", icon: TrendingUp, desc: "Earning strategies" },
  { href: "/is-real-or-fake", label: "Real or Fake?", icon: HelpCircle, desc: "Honest review" },
  { href: "/withdrawal-proof", label: "Withdrawal Proof", icon: CheckCircle, desc: "Real payment proofs" },
  { href: "/alternatives", label: "Alternatives", icon: LayoutGrid, desc: "Similar apps" },
  { href: "/blog", label: "Blog & Guides", icon: BookOpen, desc: "Latest articles" },
]

export default function InternalLinksSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.href}
            href={link.href}
            className="bg-stone-900 border border-stone-800 rounded-xl p-4 hover:border-amber-800/50 hover:bg-stone-800/80 transition-all duration-200 group flex flex-col items-center text-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
              <Icon size={18} className="text-amber-400" />
            </div>
            <span className="text-xs font-semibold text-white leading-tight">{link.label}</span>
            <span className="text-xs text-gray-500 leading-tight hidden sm:block">{link.desc}</span>
            <ArrowRight size={12} className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        )
      })}
    </div>
  )
}
