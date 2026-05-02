import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Download, Star, Shield, ArrowRight, Wallet } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import { softwareAppSchema, faqSchema } from "@/lib/schema"
import TLDRBox from "@/components/ui/TLDRBox"
import AppDetailsTable from "@/components/ui/AppDetailsTable"
import FeatureCard from "@/components/ui/FeatureCard"
import BonusCard from "@/components/ui/BonusCard"
import GamesSection from "@/components/ui/GamesSection"
import StepCard from "@/components/ui/StepCard"
import HowToSchemaInjector from "@/components/ui/HowToSchema"
import ProsCons from "@/components/ui/ProsCons"
import ReviewCard from "@/components/ui/ReviewCard"
import InternalLinksSection from "@/components/ui/InternalLinksSection"
import FAQAccordion from "@/components/ui/FAQAccordion"

const pageTitle = "Rumi Slot Game Pakistan | Free Download Official APK"

export const metadata: Metadata = {
  ...buildMetadata({
    title: pageTitle,
    description: `Rumi Slot Game is Pakistan's fastest-growing real-money casino app with 100+ games, instant JazzCash and Easypaisa withdrawals, and a PKR 5,000 welcome bonus. Download free APK v3.0.0.`,
    path: "/",
    keywords: ["rumi slots game", "rumi slots apk v2026", "rumi slots download latest version", "earn real money pakistan casino app"],
  }),
  title: { absolute: pageTitle },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(siteConfig.faqs)) }}
      />
      <HowToSchemaInjector
        name={`How to Download ${siteConfig.name} APK`}
        steps={siteConfig.steps.download}
      />
      <HowToSchemaInjector
        name={`How to Register on ${siteConfig.name}`}
        steps={siteConfig.steps.register}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden bg-stone-950"
        aria-labelledby="hero-heading"
      >
        {/* Subtle background gradient — no full-bleed image so the app screenshot is the star */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-stone-950 to-stone-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(217,119,6,0.08),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 w-full text-center">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-700/40 rounded-full px-4 py-1.5 text-xs font-semibold text-amber-400 mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            {siteConfig.versionLabel} — Latest Version Available
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
          >
            <span className="gold-text">Rumi Slots Game Download APK v2026</span>
            <br />
            <span className="text-2xl sm:text-3xl font-bold text-gray-200">
              [Latest Version] — Earn Real Money in Pakistan
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            {siteConfig.name}{" "}is Pakistan&apos;s fastest-growing real-money casino app with 100+ games,
            instant JazzCash and Easypaisa withdrawals, and a{" "}
            <strong className="text-amber-400">PKR 5,000 welcome bonus</strong> for new players.
          </p>

          <div className="flex items-center justify-center gap-1 mb-7">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < Math.floor(siteConfig.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-600"
                }
              />
            ))}
            <span className="ml-2 text-white font-bold">{siteConfig.rating}</span>
            <span className="text-gray-400 text-sm ml-1">
              ({siteConfig.totalReviews.toLocaleString()} reviews)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
            <a
              href={siteConfig.downloadUrl}
              className="relative overflow-hidden flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all hover:scale-105 btn-shine"
              aria-label={`Download ${siteConfig.name} APK Free`}
            >
              <Download size={22} />
              Download APK Free
            </a>
            <Link
              href="/register"
              className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold text-base px-6 py-4 rounded-2xl border border-stone-700 transition-colors"
            >
              Register & Get PKR 5,000
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Shield size={12} className="text-green-400" />
              100% Safe & Secure
            </span>
            <span className="flex items-center gap-1">
              <Wallet size={12} className="text-amber-400" />
              JazzCash & Easypaisa
            </span>
            <span className="flex items-center gap-1">
              <Download size={12} className="text-blue-400" />
              {siteConfig.size} · Android {siteConfig.os}
            </span>
            <span className="flex items-center gap-1">
              <Star size={12} className="text-amber-400" />
              {siteConfig.rating}/5 ({siteConfig.totalReviews.toLocaleString()}+ reviews)
            </span>
          </div>
        </div>
      </section>

      {/* ── TL;DR ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <TLDRBox
            title={`Quick Answer: What is ${siteConfig.name} Game?`}
            points={[
              `${siteConfig.name} Game is Pakistan's fastest-growing real-money casino app with 100+ games across 9 categories.`,
              "New players get a PKR 5,000 welcome bonus — no deposit required, claimed instantly on registration.",
              "Withdrawals are processed to JazzCash and Easypaisa within 5–15 minutes, minimum PKR 200.",
              "Rated 4.8/5 by 92,000+ users. File size: 43.7 MB. Supports Android 5.0+ on all major brands.",
              "You can also install Rumi Slot on PC using an Android emulator like BlueStacks.",
            ]}
          />
          {/* App image — visible alongside the Quick Answer box */}
          <div className="hidden lg:block relative w-64 flex-shrink-0">
            <div className="absolute -inset-3 bg-amber-500/10 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-amber-500/30 shadow-2xl shadow-amber-950/60 h-[340px]">
              <Image
                src="/images/rumi-slot.webp"
                alt={`${siteConfig.name} game screenshot — real money casino Pakistan`}
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] font-black px-2.5 py-1 rounded-lg shadow-md rotate-3">
              PKR 5,000 Bonus
            </div>
          </div>
        </div>
      </section>

      {/* ── APP OVERVIEW ──────────────────────────────────────── */}
      <section
        className="max-w-6xl mx-auto px-4 py-16"
        aria-labelledby="overview-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="overview-heading" className="text-3xl font-bold text-white mb-4">
              Why {siteConfig.name}{" "}is Pakistan&apos;s #1 Casino App in 2026
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pakistan's fastest-growing real-money casino app, rated{" "}
              <strong className="text-amber-400">4.8/5 by 92,000+ users</strong>. Available as a free{" "}
              {siteConfig.size} APK for Android (v{siteConfig.version}), the app gives you access
              to 100+ games across 9 categories — from slots and live casino to crash games, fishing
              games, and sports betting.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Unlike competing platforms, it offers a{" "}
              <strong className="text-amber-400">PKR 5,000 welcome bonus with no deposit required</strong>.
              Withdrawals land in your JazzCash or Easypaisa within 5–15 minutes. The VIP Rewards
              Program gives loyal players higher cashback, faster withdrawals, and exclusive benefits
              — all verified by real Pakistani users.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/download"
                className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                Download Guide <ArrowRight size={13} />
              </Link>
              <Link
                href="/is-real-or-fake"
                className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                Is it Real? <ArrowRight size={13} />
              </Link>
              <Link
                href="/how-to-earn-money"
                className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                Earn Money Guide <ArrowRight size={13} />
              </Link>
              <Link
                href="/blog"
                className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                All Guides <ArrowRight size={13} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {siteConfig.images.screenshots.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[9/16] border border-stone-700">
                <Image
                  src={src}
                  alt={`${siteConfig.name} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 30vw, 15vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP DETAILS TABLE ──────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 pb-16" aria-labelledby="details-heading">
          <h2 id="details-heading" className="text-2xl font-bold text-white mb-6 text-center">
          App Details & Specifications
        </h2>
        <AppDetailsTable />
      </section>

      {/* ── SAFETY BANNER ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-amber-950/30 border border-amber-800/40 rounded-2xl p-6 flex items-start gap-4">
          <Shield size={24} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-base font-bold text-white mb-1">Safety & Legal Notice</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              This app is for entertainment purposes only. Real money gambling involves financial risk.
              Only deposit money you can afford to lose. Must be 18+ to participate.
              This site is not affiliated with the Pakistani government or any regulatory body.
              See our <Link href="/disclaimer" className="text-amber-400 hover:underline">Disclaimer</Link> for full terms.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="features-heading">
        <div className="text-center mb-10">
          <h2 id="features-heading" className="text-3xl font-bold text-white mb-3">
            Why Choose {siteConfig.name}?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pakistan's most trusted real-money gaming app — proven payouts, the highest bonuses, and the fastest JazzCash withdrawals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* ── BONUSES ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="bonuses-heading">
        <div className="text-center mb-10">
          <h2 id="bonuses-heading" className="text-3xl font-bold text-white mb-3">
            Bonuses & Promotions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Claim daily bonuses, referral rewards, and special event prizes. New promotions every week.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.bonuses.map((bonus) => (
            <BonusCard key={bonus.title} {...bonus} />
          ))}
        </div>
      </section>

      {/* ── GAMES ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="games-heading">
        <div className="text-center mb-10">
          <h2 id="games-heading" className="text-3xl font-bold text-white mb-3">
            Complete Game Library — 100+ Games Across 9 Categories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Slots, live casino, sports betting, crash games, fishing games, table games, and more — all in one app. New games added weekly.
          </p>
        </div>
        <GamesSection games={siteConfig.games} />
      </section>

      {/* ── DOWNLOAD STEPS ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="download-steps-heading">
        <h2 id="download-steps-heading" className="text-3xl font-bold text-white mb-2">
          How to Download {siteConfig.name} APK
        </h2>
        <p className="text-gray-400 mb-8">Install on any Android phone in under 5 minutes — no Play Store needed.</p>
        <div className="space-y-0">
          {siteConfig.steps.download.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.download.length - 1}
            />
          ))}
        </div>
        <a
          href={siteConfig.downloadUrl}
          className="inline-flex items-center gap-2 mt-6 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
        >
          <Download size={18} />
          Download {siteConfig.name} APK Now
        </a>
      </section>

      {/* ── REGISTER STEPS ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="register-steps-heading">
        <h2 id="register-steps-heading" className="text-3xl font-bold text-white mb-2">
          How to Register & Claim Your Bonus
        </h2>
        <p className="text-gray-400 mb-8">Create your account in 5 minutes and get PKR 5,000 free — no deposit needed.</p>
        <div className="space-y-0">
          {siteConfig.steps.register.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.register.length - 1}
            />
          ))}
        </div>
        <Link
          href="/register"
          className="inline-flex items-center gap-2 mt-6 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700 transition-colors"
        >
          View Full Register Guide <ArrowRight size={16} />
        </Link>
      </section>

      {/* ── LOGIN STEPS ───────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="login-steps-heading">
        <h2 id="login-steps-heading" className="text-3xl font-bold text-white mb-2">
          How to Login to Your Account
        </h2>
        <p className="text-gray-400 mb-8">Access your account quickly and securely from any Android device.</p>
        <div className="space-y-0">
          {siteConfig.steps.login.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.login.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ── DEPOSIT STEPS ─────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="deposit-steps-heading">
        <h2 id="deposit-steps-heading" className="text-3xl font-bold text-white mb-2">
          How to Deposit via JazzCash & Easypaisa
        </h2>
        <p className="text-gray-400 mb-8">Fund your account instantly — minimum deposit PKR 50, processed in seconds.</p>
        <div className="space-y-0">
          {siteConfig.steps.deposit.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.deposit.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ── WITHDRAW STEPS ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="withdraw-steps-heading">
        <h2 id="withdraw-steps-heading" className="text-3xl font-bold text-white mb-2">
          How to Withdraw Your Winnings
        </h2>
        <p className="text-gray-400 mb-8">
          Cash out to JazzCash or Easypaisa in as little as 4 minutes. Minimum withdrawal: PKR 200.
        </p>
        <div className="space-y-0">
          {siteConfig.steps.withdraw.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.withdraw.length - 1}
            />
          ))}
        </div>
        <Link
          href="/withdrawal-proof"
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
        >
          See Real Withdrawal Proofs <ArrowRight size={14} />
        </Link>
      </section>

      {/* ── TIPS ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="tips-heading">
        <div className="text-center mb-10">
          <h2 id="tips-heading" className="text-3xl font-bold text-white mb-3">
            Pro Tips to Maximize Your Earnings
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strategies used by top Pakistani earners to consistently generate real income every month.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.tips.map((tip) => (
            <FeatureCard key={tip.title} icon={tip.icon} title={tip.title} description={tip.description} />
          ))}
        </div>
      </section>

      {/* ── PROS & CONS ───────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="pros-cons-heading">
        <h2 id="pros-cons-heading" className="text-3xl font-bold text-white mb-8 text-center">
          Honest Pros & Cons
        </h2>
        <ProsCons pros={siteConfig.pros} cons={siteConfig.cons} />
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="faq-heading">
        <div className="text-center mb-10">
          <h2 id="faq-heading" className="text-3xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">Everything you need to know before downloading and playing.</p>
        </div>
        <FAQAccordion faqs={siteConfig.faqs} />
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="reviews-heading">
        <div className="text-center mb-10">
          <h2 id="reviews-heading" className="text-3xl font-bold text-white mb-3">
            What Pakistani Users Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="font-bold text-white ml-1">{siteConfig.rating}/5</span>
            <span className="text-gray-500 text-sm">
              based on {siteConfig.totalReviews.toLocaleString()} reviews
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>

      {/* ── INTERNAL LINKS ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-2xl font-bold text-white mb-6 text-center">
          Explore All Guides & Resources
        </h2>
        <InternalLinksSection />
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-br from-amber-950/40 to-stone-900 border border-amber-800/40 rounded-3xl p-10">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Download Rumi Slot APK v2026 — Start Earning Today
          </h2>
          <p className="text-gray-400 mb-2 max-w-xl mx-auto">
            Download free and claim your{" "}
            <strong className="text-amber-400">PKR 5,000 welcome bonus</strong> — no deposit required.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Rated 4.8/5 by 92,000+ Pakistani users. 100+ games. Instant JazzCash & Easypaisa withdrawals.
          </p>
          <a
            href={siteConfig.downloadUrl}
            className="relative overflow-hidden inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105 btn-shine"
          >
            <Download size={22} />
            Download {siteConfig.name} APK Free
          </a>
          <p className="text-xs text-gray-600 mt-4">
            {siteConfig.versionLabel} · Free · Android {siteConfig.os} · {siteConfig.size}
          </p>
        </div>
      </section>
    </>
  )
}
