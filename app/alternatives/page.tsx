import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Star, CheckCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"
import TLDRBox from "@/components/ui/TLDRBox"

export const metadata: Metadata = buildMetadata({
  title: `Top 5 ${siteConfig.name} Alternatives in Pakistan (2026)`,
  description: `Best alternatives to ${siteConfig.name} in Pakistan. Real money earning apps with JazzCash withdrawals. Honest comparison with pros, cons, and ratings.`,
  path: "/alternatives",
  keywords: ["rumi slots alternatives", "apps like rumi slots pakistan", "best earning apps pakistan 2026"],
})

const alternatives = [
  {
    name: "Lucky Slots PK",
    rating: 4.4,
    welcomeBonus: "PKR 500",
    withdrawal: "10–25 min",
    minDeposit: "PKR 100",
    games: "1,500+",
    pros: ["24/7 customer support", "Smoother on low-end phones", "WhatsApp + in-app chat"],
    cons: ["Lower welcome bonus", "Slower withdrawals", "Referral capped at 50"],
    verdict: "Best support. Lower earning potential than Rumi Slot.",
  },
  {
    name: "1xBet Pakistan",
    rating: 4.2,
    welcomeBonus: "Up to PKR 15,000",
    withdrawal: "30–60 min",
    minDeposit: "PKR 200",
    games: "3,000+",
    pros: ["Huge sports betting library", "High welcome bonus ceiling", "International brand"],
    cons: ["No JazzCash withdrawal", "Complex bonus terms", "More focused on sports than slots"],
    verdict: "Best for sports bettors. Slot experience is weaker.",
  },
  {
    name: "Betway PK",
    rating: 4.1,
    welcomeBonus: "PKR 5,000",
    withdrawal: "1–24 hours",
    minDeposit: "PKR 1,000",
    games: "2,000+",
    pros: ["Trusted international brand", "Premium live casino", "High security standards"],
    cons: ["High minimum deposit", "No JazzCash support", "Slow withdrawals"],
    verdict: "Premium option for high-rollers. Not ideal for JazzCash users.",
  },
  {
    name: "Fun88 Pakistan",
    rating: 4.0,
    welcomeBonus: "PKR 1,000",
    withdrawal: "15–30 min",
    minDeposit: "PKR 200",
    games: "1,200+",
    pros: ["Strong cricket & PSL betting", "Local customer support", "Low minimum deposit (PKR 200)"],
    cons: ["Smaller slot library", "Fewer daily bonus options", "No free daily spin"],
    verdict: "Good for cricket fans. Weaker for slot enthusiasts.",
  },
  {
    name: "Spin Palace APK",
    rating: 4.3,
    welcomeBonus: "PKR 3,000",
    withdrawal: "24–48 hours",
    minDeposit: "PKR 200",
    games: "3,000+",
    pros: ["Largest slot game library", "Progressive jackpots", "Free play on all games"],
    cons: ["Very slow withdrawals (24–48 hours)", "No sports betting", "No JazzCash"],
    verdict: "Best pure slots experience. Terrible withdrawal speed.",
  },
]

export default function AlternativesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Alternatives", href: "/alternatives" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Top 5 <span className="gold-text">{siteConfig.name}</span> Alternatives in Pakistan
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Real money earning apps with JazzCash withdrawals — honest comparison for 2026.
        </p>

        <TLDRBox
          title="Quick Comparison Summary"
          points={[
            `${siteConfig.name} wins on: welcome bonus, withdrawal speed, referral program, and minimum deposit`,
            "Lucky Slots PK wins on: 24/7 support and low-end phone performance",
            "1xBet Pakistan is best for sports betting fans",
            "Spin Palace has the most games (3,000+) but slowest withdrawals (24–48 hours)",
            "You can use multiple apps simultaneously to maximize total earnings",
          ]}
        />

        <div className="space-y-6 mt-8 mb-10">
          {alternatives.map((app, i) => (
            <div key={app.name} className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h2 className="text-lg font-bold text-white">{app.name}</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={j < Math.floor(app.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-1">{app.rating}/5</span>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="text-amber-400 font-bold">{app.welcomeBonus} bonus</p>
                  <p className="text-gray-500 text-xs">{app.games} games</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4 text-sm">
                <div className="bg-stone-800/60 rounded-xl p-2.5">
                  <p className="text-xs text-gray-500 mb-0.5">Withdrawal</p>
                  <p className="font-semibold text-white">{app.withdrawal}</p>
                </div>
                <div className="bg-stone-800/60 rounded-xl p-2.5">
                  <p className="text-xs text-gray-500 mb-0.5">Min Deposit</p>
                  <p className="font-semibold text-white">{app.minDeposit}</p>
                </div>
                <div className="bg-stone-800/60 rounded-xl p-2.5 sm:block hidden">
                  <p className="text-xs text-gray-500 mb-0.5">Games</p>
                  <p className="font-semibold text-white">{app.games}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Pros</p>
                  {app.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-1.5 mb-1">
                      <CheckCircle size={11} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-400">{pro}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Cons</p>
                  {app.cons.map((con) => (
                    <div key={con} className="flex items-start gap-1.5 mb-1">
                      <span className="text-red-400 text-xs flex-shrink-0">✕</span>
                      <span className="text-xs text-gray-400">{con}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-950/30 border border-amber-900/30 rounded-xl px-3 py-2">
                <p className="text-xs text-amber-400">
                  <strong>Our Verdict:</strong> {app.verdict}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Rumi Slot wins */}
        <div className="bg-gradient-to-br from-amber-950/40 to-stone-900 border border-amber-700/40 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-white mb-4">
            Why {siteConfig.name} is Still Our #1 Pick
          </h2>
          <ul className="space-y-2.5">
            {[
              "Highest welcome bonus in Pakistan (PKR 5,000 — no deposit required)",
              "Fastest withdrawals — JazzCash in under 10 minutes",
              "Lowest minimum deposit — PKR 50",
              "No cap on referral earnings",
              "Daily free spins with zero investment",
            ].map((reason) => (
              <li key={reason} className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/download"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
          >
            Download {siteConfig.name} #1 Pick <ArrowRight size={16} />
          </Link>
          <Link
            href="/is-real-or-fake"
            className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700 transition-colors"
          >
            Full Honest Review <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
