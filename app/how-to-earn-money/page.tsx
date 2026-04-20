import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, ArrowRight, DollarSign } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"
import TLDRBox from "@/components/ui/TLDRBox"
import FeatureCard from "@/components/ui/FeatureCard"
import FAQAccordion from "@/components/ui/FAQAccordion"

export const metadata: Metadata = buildMetadata({
  title: `How to Earn Money from ${siteConfig.name} — 6 Proven Methods`,
  description: `Learn 6 proven ways to earn real money from ${siteConfig.name} in Pakistan. Referral program, daily bonuses, slot winnings, and more. Withdraw via JazzCash.`,
  path: "/how-to-earn-money",
  keywords: ["rumi slots earn money", "rumi slots income pakistan", "rumi slot referral income"],
})

const earningMethods = [
  {
    icon: "Users",
    title: "Referral Program",
    description: "Earn PKR 200 for every friend who registers and deposits. No cap on referrals — power users earn PKR 20,000+ monthly from referrals alone.",
  },
  {
    icon: "RotateCcw",
    title: "Daily Free Spin",
    description: "Every account gets one free spin every 24 hours. Win PKR 10–500 each day with zero investment.",
  },
  {
    icon: "TrendingUp",
    title: "Friday 50% Bonus",
    description: "Every Friday deposit gets a 50% bonus. Time your deposits on Fridays to maximize playing balance.",
  },
  {
    icon: "Trophy",
    title: "Weekly Tournaments",
    description: "Free-to-enter weekly slot tournaments with prize pools up to PKR 500,000 distributed among top 50 players.",
  },
  {
    icon: "Crown",
    title: "VIP Cashback",
    description: "VIP Silver and above receive 10% weekly cashback every Monday on the previous week's net losses.",
  },
  {
    icon: "Gift",
    title: "Welcome Bonus",
    description: "New accounts get PKR 5,000 welcome bonus — no deposit required. Use it strategically on high-RTP games to clear wagering requirements and cash out.",
  },
]

const earningFAQs = [
  {
    question: `How much can I earn from ${siteConfig.name} per month?`,
    answer: "Using referrals (30 referrals = PKR 6,000), daily spins (PKR 1,500–3,000), and Friday bonuses, consistent users earn PKR 8,000–15,000/month without gambling. Slot winnings can add more but are variable.",
  },
  {
    question: `Can I earn from ${siteConfig.name} without depositing?`,
    answer: "Yes. The referral program pays PKR 200 per referral with no deposit required. Daily free spins also give earnings every 24 hours. You can earn thousands monthly without ever depositing.",
  },
  {
    question: "What is the fastest way to earn on Rumi Slot?",
    answer: "Share your referral link in WhatsApp groups with 200+ members. If 10 people register and deposit in one day, you earn PKR 2,000 immediately.",
  },
  {
    question: "Which slot game has the highest winning chance?",
    answer: "Games with RTP above 97%: Pakistan Super Spins (97.2%), Kashmir Dreams (97.1%), Mumbai Express (97.0%). Higher RTP means better long-term odds.",
  },
]

export default function HowToEarnMoneyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "How to Earn Money", href: "/how-to-earn-money" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          How to Earn Money from{" "}
          <span className="gold-text">{siteConfig.name}</span> in Pakistan
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          6 proven methods Pakistani users are using to earn PKR 5,000–30,000 per month.
        </p>

        <TLDRBox
          title="Earning Quick Summary"
          points={[
            "Referral program: PKR 200 per friend, no deposit required, no cap — find your link in the app after registering",
            "Daily free spin: PKR 10–500 every 24 hours, zero investment — available after download",
            "Friday deposit bonus: 50% extra on all Friday deposits — use bonus codes for extra value",
            "Weekly tournaments: free entry, PKR 500,000 prize pool — visible in the app Promotions section",
            "VIP cashback: 10% every Monday on previous week's losses — unlocked after consistent deposits",
          ]}
        />

        <div className="bg-amber-950/30 border border-amber-800/40 rounded-2xl p-6 flex items-start gap-4 my-8">
          <DollarSign size={24} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white mb-1">Realistic Monthly Earning Estimate</p>
            <p className="text-sm text-gray-400">
              30 referrals (PKR 6,000) + daily spins (PKR 2,000) + Friday bonuses (PKR 750) + cashback (PKR 500) ={" "}
              <strong className="text-amber-400">PKR 9,250/month</strong> without gambling.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">6 Ways to Earn from {siteConfig.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {earningMethods.map((method) => (
            <FeatureCard key={method.title} {...method} />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-5">How to Maximize the Referral Program</h2>
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 mb-10">
          <ol className="space-y-4">
            {[
              "Find your referral link in the app under Profile → Referral Code",
              "Share in WhatsApp family and friends groups (minimum 50 members each)",
              "Post in gaming and earning Facebook groups in Pakistan",
              "Add your referral link to your TikTok or YouTube bio",
              "For each person who registers and deposits, you instantly earn PKR 200",
              "Track your referral count and earnings in real-time in the app",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Earning FAQs</h2>
        <FAQAccordion faqs={earningFAQs} />

        {/* Related guides */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 my-8">
          <p className="text-sm font-bold text-amber-400 mb-3">Related Guides</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/rumi-slots-bonus-codes" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Rumi Slot Bonus Codes for April 2026 — maximize every deposit
              </Link>
            </li>
            <li>
              <Link href="/withdrawal-proof" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Real JazzCash & Easypaisa withdrawal proofs from Pakistani users
              </Link>
            </li>
            <li>
              <Link href="/is-real-or-fake" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Is Rumi Slot real? Our 30-day honest review
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-earn-money-rumi-slots" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Full earning blog post with monthly income breakdowns
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/withdrawal-proof"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
          >
            See Real Payment Proofs <ArrowRight size={16} />
          </Link>
          <Link
            href="/download"
            className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700 transition-colors"
          >
            Download & Start Earning <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
