import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"

export const metadata: Metadata = buildMetadata({
  title: `Disclaimer — ${siteConfig.name}`,
  description: `${siteConfig.name} disclaimer. Important information about real money gambling risks, terms of use, and responsible gaming guidelines for Pakistani users.`,
  path: "/disclaimer",
})

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Disclaimer", href: "/disclaimer" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <AlertTriangle size={20} className="text-amber-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white">Disclaimer</h1>
        </div>

        <p className="text-gray-400 mb-8">Last updated: April 15, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Entertainment Purposes Only</h2>
            <p>
              {siteConfig.name} ({siteConfig.domain}) is an online gaming and entertainment platform.
              All content on this website, including game descriptions, earning guides, and promotional
              materials, is provided for informational and entertainment purposes only.
            </p>
            <p className="mt-3">
              Participating in real money games involves significant financial risk. There is no
              guarantee of winning. Users may lose some or all money deposited. Only deposit money
              that you can afford to lose entirely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Age Restriction</h2>
            <p>
              You must be <strong className="text-white">18 years of age or older</strong> to use {siteConfig.name}.
              By downloading, installing, or using the app, you confirm that you are at least 18 years old.
              Access by minors is strictly prohibited and accounts found to be used by minors will be
              permanently banned without refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">No Guarantee of Earnings</h2>
            <p>
              Any earning estimates, referral income examples, or winning stories on this website are
              illustrative and based on historical data. They do not guarantee future results. Actual
              earnings depend on individual play patterns, luck, and responsible use of the platform.
            </p>
            <p className="mt-3">
              Referral income is real and consistent but depends on your ability to successfully refer
              active depositing users. Gambling-based income is variable and unpredictable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Legal Status in Pakistan</h2>
            <p>
              Online gaming laws in Pakistan are subject to change. Users are responsible for ensuring
              that participation in online gaming is legal in their jurisdiction. {siteConfig.name} is not
              responsible for any legal consequences arising from use of the platform in regions where
              online gambling is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Responsible Gaming</h2>
            <p>We are committed to responsible gaming. If you believe you have a gambling problem:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-400">
              <li>Set daily deposit limits in your account settings</li>
              <li>Use the self-exclusion feature to temporarily block access</li>
              <li>Take regular breaks from gaming</li>
              <li>Contact our support team to discuss your concerns</li>
              <li>Seek help from responsible gambling organizations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Affiliate Disclosure</h2>
            <p>
              This website may contain affiliate links and promotional content. We may receive compensation
              when users click links and complete registrations or deposits. This does not affect our editorial
              independence or the honesty of our reviews. All assessments are based on our own testing
              and experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Third-Party Links</h2>
            <p>
              This site may contain links to third-party websites. We are not responsible for the content,
              privacy practices, or accuracy of information on any external site. Visiting external sites
              is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              For questions about this disclaimer, contact us at{" "}
              <a href="mailto:support@rumislot.pk" className="text-amber-400 hover:underline">
                support@rumislot.pk
              </a>{" "}
              or visit our <Link href="/contact" className="text-amber-400 hover:underline">Contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
