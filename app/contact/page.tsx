import type { Metadata } from "next"
import { MessageCircle, Mail, Clock } from "lucide-react"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"

export const metadata: Metadata = buildMetadata({
  title: `Contact ${siteConfig.name} — Customer Support`,
  description: `Contact ${siteConfig.name} support team via WhatsApp or email. Average response time under 30 minutes. JazzCash & Easypaisa issues resolved fast.`,
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Contact <span className="gold-text">{siteConfig.name}</span> Support
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          We respond within 30 minutes. Available 7 days a week, 9 AM – 11 PM PKT.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-green-950/30 border border-green-800/40 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <MessageCircle size={24} className="text-green-400" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">WhatsApp Support</h2>
            <p className="text-sm text-gray-400 mb-4">Fastest response. Send your message and get help within 15–30 minutes.</p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-gray-500 mt-3">+92-300-1234567</p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
              <Mail size={24} className="text-amber-400" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Email Support</h2>
            <p className="text-sm text-gray-400 mb-4">For detailed queries, account issues, or withdrawal disputes. Response within 4 hours.</p>
            <a
              href="mailto:support@rumislot.pk"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              <Mail size={15} />
              Email Us
            </a>
            <p className="text-xs text-gray-500 mt-3">support@rumislot.pk</p>
          </div>
        </div>

        {/* Support hours */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-white mb-5">Support Hours & Response Times</h2>
          <div className="space-y-4">
            {[
              { day: "Monday – Friday", hours: "9:00 AM – 11:00 PM PKT", response: "15–30 min" },
              { day: "Saturday", hours: "10:00 AM – 10:00 PM PKT", response: "20–40 min" },
              { day: "Sunday", hours: "11:00 AM – 8:00 PM PKT", response: "30–60 min" },
            ].map((slot) => (
              <div key={slot.day} className="flex items-center justify-between py-3 border-b border-stone-800 last:border-0">
                <div className="flex items-center gap-2.5">
                  <Clock size={14} className="text-amber-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">{slot.day}</p>
                    <p className="text-xs text-gray-500">{slot.hours}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded-lg">
                  ~{slot.response}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment support */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Payment Support Channels</h2>
          <p className="text-sm text-gray-400 mb-5">
            For JazzCash and Easypaisa issues, always have your transaction reference number ready before contacting support.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {siteConfig.paymentMethods.map((method) => (
              <div key={method} className="flex items-center gap-2.5 bg-stone-800/60 rounded-xl px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm text-gray-300 font-medium">{method}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ before contacting */}
        <div className="bg-amber-950/30 border border-amber-800/40 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Before You Contact Us</h2>
          <p className="text-sm text-gray-400 mb-3">Many issues are solved faster by checking these resources first:</p>
          <ul className="space-y-2">
            {[
              { label: "App crashing or not loading?", href: "/blog/rumi-slots-not-working-fix" },
              { label: "Withdrawal stuck or pending?", href: "/withdrawal-proof" },
              { label: "Can't login to your account?", href: "/login" },
              { label: "APK installation problems?", href: "/download" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
                  → {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
