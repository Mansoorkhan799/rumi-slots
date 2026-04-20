import type { Metadata } from "next"
import Link from "next/link"
import { LogIn, ArrowRight, AlertCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"
import StepCard from "@/components/ui/StepCard"
import HowToSchemaInjector from "@/components/ui/HowToSchema"
import TLDRBox from "@/components/ui/TLDRBox"
import FAQAccordion from "@/components/ui/FAQAccordion"

export const metadata: Metadata = buildMetadata({
  title: `How to Login to ${siteConfig.name} — Account Access Guide`,
  description: `Can't login to ${siteConfig.name}? Step-by-step guide to access your account. Fix login errors, reset password, and recover your account in minutes.`,
  path: "/login",
  keywords: ["rumi slots login", "rumi slots sign in", "rumi slots account access"],
})

const loginFAQs = [
  {
    question: `I forgot my ${siteConfig.name} password. How do I reset it?`,
    answer: "On the login screen, tap Forgot Password. Enter your registered mobile number, receive an OTP, and set a new password. The process takes under 2 minutes.",
  },
  {
    question: "My login OTP is not coming. What should I do?",
    answer: "Check your mobile signal, ensure SMS inbox is not full, and disable Do Not Disturb mode. Tap Resend OTP after 2 minutes. If still not received, contact WhatsApp support.",
  },
  {
    question: "Why does Rumi Slot say my account is suspended?",
    answer: "Accounts are suspended for violating terms: multiple accounts, bonus abuse, or fraudulent activity. Contact WhatsApp support with your mobile number for review and possible reinstatement.",
  },
  {
    question: "Can I login to Rumi Slot from multiple devices?",
    answer: "Yes, but only one active session is allowed at a time. Logging in on a new device automatically logs out the previous session for security.",
  },
]

export default function LoginPage() {
  return (
    <>
      <HowToSchemaInjector
        name={`How to Login to ${siteConfig.name}`}
        steps={siteConfig.steps.login}
      />
      <Breadcrumb items={[{ name: "How to Login", href: "/login" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          How to Login to <span className="gold-text">{siteConfig.name}</span>
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Access your account, check your balance, and start playing in seconds.
        </p>

        <TLDRBox
          title="Login Quick Guide"
          points={[
            "Open the Rumi Slot app → tap Login → enter your mobile number and password",
            "Passwords are case-sensitive — check Caps Lock is off",
            "Use Forgot Password for a reset via OTP if you cannot remember your password",
            "Enable biometric login (fingerprint) for faster access in Settings",
            "Contact support via WhatsApp if your account is locked or suspended",
          ]}
        />

        <h2 className="text-2xl font-bold text-white mb-2 mt-8">Login Steps</h2>
        <p className="text-gray-400 mb-8">Standard login process for all account types.</p>

        <div className="space-y-0 mb-10">
          {siteConfig.steps.login.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.login.length - 1}
            />
          ))}
        </div>

        {/* Common login errors */}
        <h2 className="text-2xl font-bold text-white mb-5">Common Login Errors & Fixes</h2>
        <div className="space-y-3 mb-10">
          {[
            { error: "Invalid Credentials", fix: "Double-check your number and password. Caps Lock must be off. Reset via Forgot Password if needed." },
            { error: "Account Not Found", fix: "Ensure you registered with this number. Try the original number used during sign up." },
            { error: "Too Many Attempts", fix: "Account temporarily locked after 5 failed attempts. Wait 30 minutes or contact support." },
            { error: "App Not Loading", fix: "Clear app cache: Settings → Apps → Rumi Slot → Clear Cache. Restart and try again." },
          ].map((item) => (
            <div key={item.error} className="bg-stone-900 border border-stone-800 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">Error: "{item.error}"</p>
                <p className="text-sm text-gray-400">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Login FAQs</h2>
        <FAQAccordion faqs={loginFAQs} />

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
          >
            Don&apos;t have an account? Register <ArrowRight size={16} />
          </Link>
          <Link
            href="/download"
            className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700 transition-colors"
          >
            Download APK <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
