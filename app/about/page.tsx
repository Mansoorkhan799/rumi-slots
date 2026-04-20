import type { Metadata } from "next"
import Link from "next/link"
import { Users, Target, Shield, ArrowRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"

export const metadata: Metadata = buildMetadata({
  title: `About ${siteConfig.name} — Pakistan's #1 Earning App`,
  description: `Learn about ${siteConfig.name}, Pakistan's leading online slots and earning app. Our mission, team, and commitment to safe, transparent gaming.`,
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "About Us", href: "/about" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          About <span className="gold-text">{siteConfig.name}</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Pakistan&apos;s #1 online slots and real money earning platform.
        </p>

        {/* Mission */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Target size={20} className="text-amber-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {siteConfig.name} was built with one mission: to give every Pakistani user access to a fair,
            transparent, and fast-paying gaming platform. We believe that entertainment should come with
            real rewards, and that withdrawing your winnings should never be a battle.
          </p>
        </div>

        {/* Story */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {siteConfig.name} was founded in 2023 by a team of Pakistani software engineers and gaming
            enthusiasts frustrated by the poor quality of existing platforms available to Pakistani users.
            The options available were slow, unreliable, and often delayed payments for days.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            We built {siteConfig.name} from the ground up with a focus on three things: instant payments,
            a premium game experience, and local payment support. By integrating directly with JazzCash and
            Easypaisa APIs, we achieved sub-10-minute withdrawal times that no competitor could match.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Since launching, over 500,000 Pakistani users across Lahore, Karachi, Islamabad, Faisalabad,
            and every major city have made {siteConfig.name} their primary earning platform.
          </p>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-white mb-5">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: Shield,
              title: "Transparency",
              desc: "All game RTPs are publicly listed. No hidden fees. No surprise deductions. Every transaction is traceable.",
            },
            {
              icon: Users,
              title: "Community First",
              desc: "We listen to our users. Every major feature in the app was requested by Pakistani players. Your feedback shapes our roadmap.",
            },
            {
              icon: Target,
              title: "Responsible Gaming",
              desc: "We promote responsible gaming with daily deposit limits, self-exclusion tools, and clear risk warnings on all pages.",
            },
          ].map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Active Users", value: "500,000+" },
            { label: "Games Available", value: "2,000+" },
            { label: "Avg Rating", value: `${siteConfig.rating}/5` },
            { label: "Est.", value: "2023" },
          ].map((stat) => (
            <div key={stat.label} className="bg-stone-900 border border-stone-800 rounded-2xl p-4 text-center">
              <p className="text-2xl font-extrabold gold-text">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
          >
            Contact Our Team <ArrowRight size={16} />
          </Link>
          <Link
            href="/download"
            className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700 transition-colors"
          >
            Download the App <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
