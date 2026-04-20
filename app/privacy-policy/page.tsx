import type { Metadata } from "next"
import Link from "next/link"
import { Shield } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"

export const metadata: Metadata = buildMetadata({
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `${siteConfig.name} privacy policy. How we collect, use, and protect your personal data. GDPR and Pakistan data protection compliant.`,
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Shield size={20} className="text-amber-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
        </div>

        <p className="text-gray-400 mb-8">Last updated: April 15, 2026. Effective immediately.</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates {siteConfig.domain} and the {siteConfig.name} mobile application.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you use our platform. Please read this carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <h3 className="text-base font-semibold text-amber-400 mb-2">Personal Information</h3>
            <ul className="space-y-1.5 list-disc list-inside text-gray-400 mb-4">
              <li>Mobile phone number (required for registration and OTP)</li>
              <li>Payment account numbers (JazzCash, Easypaisa) for withdrawals</li>
              <li>CNIC number (only when required for KYC verification on large withdrawals)</li>
            </ul>
            <h3 className="text-base font-semibold text-amber-400 mb-2">Automatically Collected Data</h3>
            <ul className="space-y-1.5 list-disc list-inside text-gray-400">
              <li>Device model and Android version</li>
              <li>IP address and general location (city level)</li>
              <li>App usage patterns and game session data</li>
              <li>Transaction history (deposits and withdrawals)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>To create and maintain your account</li>
              <li>To process deposits and withdrawals via JazzCash and Easypaisa</li>
              <li>To verify your identity for large withdrawals (KYC compliance)</li>
              <li>To send important account notifications via SMS</li>
              <li>To detect and prevent fraud and bonus abuse</li>
              <li>To improve app performance and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-gray-400">
              <li>256-bit SSL/TLS encryption for all data transmission</li>
              <li>Encrypted storage of sensitive account information</li>
              <li>Regular security audits by third-party firms</li>
              <li>Two-factor authentication (OTP) for all account access</li>
              <li>Strict internal access controls for staff</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Sharing</h2>
            <p>We do <strong className="text-white">not</strong> sell your personal data to third parties. We share data only with:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-gray-400">
              <li><strong className="text-gray-200">JazzCash / Easypaisa:</strong> To process your payment transactions</li>
              <li><strong className="text-gray-200">Analytics providers:</strong> Aggregated, anonymized app usage data</li>
              <li><strong className="text-gray-200">Law enforcement:</strong> When legally required by Pakistani authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain your account data for as long as your account is active. Deleted accounts have
              personal data removed within 30 days, except transaction records which are kept for 7 years
              as required by financial regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-gray-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact:{" "}
              <a href="mailto:privacy@rumislot.pk" className="text-amber-400 hover:underline">
                privacy@rumislot.pk
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Cookies</h2>
            <p>
              Our website uses essential cookies for session management and analytics cookies (Google Analytics)
              to improve user experience. You can disable cookies in your browser settings, though some
              functionality may be affected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be notified via app
              notification or SMS to your registered number at least 7 days before taking effect.
              Continued use of {siteConfig.name} after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
            <p>
              For privacy-related inquiries:{" "}
              <a href="mailto:privacy@rumislot.pk" className="text-amber-400 hover:underline">
                privacy@rumislot.pk
              </a>
              {" "}or visit our <Link href="/contact" className="text-amber-400 hover:underline">Contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
