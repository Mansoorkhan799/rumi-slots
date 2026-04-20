import type { Metadata } from "next"
import Link from "next/link"
import { Download, Smartphone, CheckCircle, ArrowRight, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"
import StepCard from "@/components/ui/StepCard"
import HowToSchemaInjector from "@/components/ui/HowToSchema"
import TLDRBox from "@/components/ui/TLDRBox"

export const metadata: Metadata = buildMetadata({
  title: `Download ${siteConfig.name} APK v${siteConfig.version} — Free Android`,
  description: `Download ${siteConfig.name} APK ${siteConfig.version} free for Android. ${siteConfig.size} file, safe & verified. Install guide for all Pakistani Android phones. Get PKR 5,000 welcome bonus.`,
  path: "/download",
  keywords: ["rumi slots apk download", "rumi slots android", "rumi slot apk free"],
})

export default function DownloadPage() {
  return (
    <>
      <HowToSchemaInjector
        name={`How to Download ${siteConfig.name} APK`}
        steps={siteConfig.steps.download}
      />
      <Breadcrumb items={[{ name: "Download APK", href: "/download" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Download <span className="gold-text">{siteConfig.name} APK v2026</span> Free
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          {siteConfig.versionLabel} · {siteConfig.size} · Android {siteConfig.os} · Free to Download
        </p>

        <TLDRBox
          title="Quick Download Facts"
          points={[
            `Official APK: ${siteConfig.name} ${siteConfig.versionLabel} (${siteConfig.size})`,
            "Only download from rumislot.pk — never from third-party sites",
            "Works on Android 5.0+ — Samsung, Oppo, Vivo, Huawei, all brands",
            "Enable 'Install Unknown Sources' in your browser settings before installing",
            "PKR 5,000 welcome bonus (no deposit required) claimed instantly after registration",
          ]}
        />

        {/* Download CTA card */}
        <div className="bg-gradient-to-br from-amber-950/40 to-stone-900 border border-amber-700/40 rounded-2xl p-8 mb-10 text-center">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
            <Download size={36} className="text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{siteConfig.name} APK</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 mb-6">
            <span className="text-amber-400 font-bold">{siteConfig.versionLabel}</span>
            <span>·</span>
            <span>{siteConfig.size}</span>
            <span>·</span>
            <span>Android {siteConfig.os}</span>
            <span>·</span>
            <span className="text-green-400 font-semibold">Free</span>
          </div>
          <a
            href={siteConfig.downloadUrl}
            className="relative overflow-hidden inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105 btn-shine"
            aria-label={`Download ${siteConfig.name} APK v${siteConfig.version}`}
          >
            <Download size={22} />
            Download Free APK
          </a>
          <p className="text-xs text-gray-600 mt-3">
            Updated: {siteConfig.lastUpdated} · Virus-free verified
          </p>
        </div>

        {/* Step-by-step guide */}
        <h2 className="text-2xl font-bold text-white mb-2">How to Install {siteConfig.name} APK</h2>
        <p className="text-gray-400 mb-8">Follow these steps to install on any Android phone.</p>
        <div className="space-y-0 mb-10">
          {siteConfig.steps.download.map((step, i) => (
            <StepCard
              key={step.step}
              {...step}
              isLast={i === siteConfig.steps.download.length - 1}
            />
          ))}
        </div>

        {/* Compatibility */}
        <h2 className="text-2xl font-bold text-white mb-5">Compatible Devices</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {[
            "Samsung Galaxy", "Oppo / Realme", "Vivo Series",
            "Huawei / Honor", "Xiaomi / Redmi", "OnePlus Series",
          ].map((brand) => (
            <div key={brand} className="flex items-center gap-2.5 bg-stone-900 border border-stone-800 rounded-xl px-4 py-3">
              <Smartphone size={16} className="text-amber-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">{brand}</span>
            </div>
          ))}
        </div>

        {/* Safety notice */}
        <div className="bg-amber-950/30 border border-amber-800/40 rounded-2xl p-5 flex items-start gap-3 mb-10">
          <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white text-sm mb-1">Installation Safety Notice</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Only download from the official domain <strong className="text-amber-400">rumislot.pk</strong>.
              The APK is signed with an official certificate and scanned for malware before every release.
              Never install APKs from WhatsApp forwards or unofficial sites.
            </p>
          </div>
        </div>

        {/* Common errors */}
        <h2 className="text-2xl font-bold text-white mb-5">Common Installation Errors & Fixes</h2>
        <div className="space-y-3 mb-10">
          {[
            { error: "Parse Error", fix: "APK file corrupted. Re-download from rumislot.pk on stable WiFi." },
            { error: "App Not Installed", fix: "Uninstall older version first. Then install the new APK." },
            { error: "Insufficient Storage", fix: "Free up 200 MB storage. Delete unused apps or photos." },
            { error: "Unknown Sources Blocked", fix: "Settings → Security → Allow installation from your browser." },
          ].map((item) => (
            <div key={item.error} className="bg-stone-900 border border-stone-800 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">"{item.error}"</p>
                <p className="text-sm text-gray-400">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related guides */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 mb-8">
          <p className="text-sm font-bold text-amber-400 mb-3">Related Guides</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/register" className="text-gray-300 hover:text-amber-400 transition-colors">
                → How to register and claim PKR 5,000 welcome bonus — no deposit needed
              </Link>
            </li>
            <li>
              <Link href="/is-real-or-fake" className="text-gray-300 hover:text-amber-400 transition-colors">
                → Is Rumi Slot real or fake? Honest 30-day review
              </Link>
            </li>
            <li>
              <Link href="/how-to-earn-money" className="text-gray-300 hover:text-amber-400 transition-colors">
                → 6 proven earning methods — referrals, daily spins, VIP cashback
              </Link>
            </li>
            <li>
              <Link href="/blog/rumi-slots-latest-version" className="text-gray-300 hover:text-amber-400 transition-colors">
                → What's new in Rumi Slot v3.0.0 — full changelog
              </Link>
            </li>
          </ul>
        </div>

        {/* Next steps */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
          >
            Register Your Account <ArrowRight size={16} />
          </Link>
          <Link
            href="/is-real-or-fake"
            className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700 transition-colors"
          >
            Is {siteConfig.name} Real? <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
