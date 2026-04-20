import type { Metadata } from "next"
import Link from "next/link"
import { UserPlus, Gift, ArrowRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"
import StepCard from "@/components/ui/StepCard"
import HowToSchemaInjector from "@/components/ui/HowToSchema"
import TLDRBox from "@/components/ui/TLDRBox"
import FAQAccordion from "@/components/ui/FAQAccordion"

export const metadata: Metadata = buildMetadata({
  title: `How to Register on ${siteConfig.name} — Get PKR 5,000 Bonus Free`,
  description: `Step-by-step guide to register on ${siteConfig.name} and claim your PKR 5,000 welcome bonus instantly — no deposit required. Takes less than 5 minutes on any Android phone.`,
  path: "/register",
  keywords: ["rumi slots register", "rumi slots sign up", "rumi slots new account pakistan"],
})

const registerFAQs = [
  {
    question: `Is ${siteConfig.name} registration free?`,
    answer: "Yes, registration is completely free. No payment is required to create your account. You only need a Pakistani mobile number to sign up.",
  },
  {
    question: "Can I have two Rumi Slot accounts?",
    answer: "No. Each mobile number can have only one account. Multiple accounts on the same device are detected and banned under the platform's terms.",
  },
  {
    question: "What happens if I don't receive the OTP?",
    answer: "Wait 2 minutes, then tap Resend OTP. Ensure your phone has signal and SMS inbox is not full. If still not received after 3 attempts, contact WhatsApp support.",
  },
  {
    question: "When does the PKR 5,000 welcome bonus expire?",
    answer: "The PKR 5,000 welcome bonus is credited automatically when you create a new account — no deposit required. The bonus expires if not used within 7 days of account creation.",
  },
]

export default function RegisterPage() {
  return (
    <>
      <HowToSchemaInjector
        name={`How to Register on ${siteConfig.name}`}
        steps={siteConfig.steps.register}
      />
      <Breadcrumb items={[{ name: "How to Register", href: "/register" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          How to Register on <span className="gold-text">{siteConfig.name}</span>
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Create your account in 5 minutes and claim your{" "}
          <strong className="text-amber-400">PKR 5,000 welcome bonus — no deposit required</strong>.
        </p>

        <TLDRBox
          title="Registration Quick Facts"
          points={[
            "Registration is free — no payment required to sign up",
            "You need a Pakistani mobile number for OTP verification",
            "PKR 5,000 welcome bonus is credited automatically on new account creation — no deposit needed",
            "One account per mobile number — multiple accounts result in permanent ban",
            "You can also install on PC via BlueStacks emulator and register from there",
          ]}
        />

        {/* Bonus highlight */}
        <div className="bg-gradient-to-br from-amber-950/40 to-stone-900 border border-amber-700/40 rounded-2xl p-6 flex items-start gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Gift size={24} className="text-amber-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-1">New User Welcome Bonus</p>
            <p className="text-3xl font-extrabold text-white mb-1">PKR 5,000 FREE</p>
            <p className="text-sm text-gray-400">
              No deposit required — credited automatically when you register a new account
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">Step-by-Step Registration Guide</h2>
        <p className="text-gray-400 mb-8">Follow every step exactly to avoid losing your welcome bonus.</p>

        <div className="space-y-0 mb-10">
          {siteConfig.steps.register.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.register.length - 1}
            />
          ))}
        </div>

        {/* What you need */}
        <h2 className="text-2xl font-bold text-white mb-5">What You Need to Register</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { label: "Pakistani Mobile Number", desc: "Jazz, Telenor, Zong, Ufone, or Warid" },
            { label: "Android Phone", desc: "Android 5.0 or above, any brand" },
            { label: "Rumi Slot APK", desc: "Download free from rumislot.pk" },
            { label: "JazzCash or Easypaisa", desc: "For your first deposit after registration" },
          ].map((item) => (
            <div key={item.label} className="bg-stone-900 border border-stone-800 rounded-xl p-4 flex items-start gap-3">
              <UserPlus size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Registration FAQs</h2>
        <FAQAccordion faqs={registerFAQs} />

        {/* Related guides */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 mt-8 mb-4">
          <p className="text-sm font-bold text-amber-400 mb-3">What to Do After Registering</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/how-to-earn-money" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Learn 6 proven ways to earn PKR 8,000–15,000/month
              </Link>
            </li>
            <li>
              <Link href="/blog/rumi-slots-bonus-codes" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Use bonus codes on your first deposit for extra playing balance
              </Link>
            </li>
            <li>
              <Link href="/withdrawal-proof" className="text-gray-300 hover:text-amber-400 transition-colors">
                → See real JazzCash & Easypaisa withdrawal proofs before depositing
              </Link>
            </li>
            <li>
              <Link href="/is-real-or-fake" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Is Rumi Slot safe? Our honest 30-day review
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/download"
            className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700 transition-colors"
          >
            Download APK First <ArrowRight size={16} />
          </Link>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
          >
            Already Registered? Login <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
