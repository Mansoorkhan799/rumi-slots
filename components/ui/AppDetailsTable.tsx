import { siteConfig } from "@/data/site"
import { Star } from "lucide-react"

export default function AppDetailsTable() {
  const rows = [
    { label: "App Name", value: siteConfig.name },
    { label: "Latest Version", value: siteConfig.versionLabel },
    { label: "File Size", value: siteConfig.size },
    { label: "Category", value: siteConfig.category },
    { label: "Supported OS", value: siteConfig.os },
    { label: "Payment Methods", value: "JazzCash, Easypaisa, Bank Transfer" },
    { label: "Welcome Bonus", value: "PKR 5,000 (No Deposit Required)" },
    { label: "Price", value: siteConfig.price },
    { label: "Developer", value: siteConfig.developer },
    { label: "Rating", value: `${siteConfig.rating}/5 (${siteConfig.totalReviews.toLocaleString()}+ reviews)` },
  ]

  return (
    <div className="bg-stone-900 border border-amber-900/30 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 bg-amber-900/20 border-b border-amber-900/30 flex items-center gap-2">
        <Star size={18} className="text-amber-400 fill-amber-400" />
        <h2 className="text-lg font-bold text-white">Rumi Slot App Details</h2>
      </div>
      <div className="divide-y divide-stone-800">
        {rows.map((row) => (
          <div key={row.label} className="flex px-6 py-3.5 hover:bg-stone-800/50 transition-colors">
            <span className="w-1/2 text-sm text-gray-400 font-semibold">{row.label}</span>
            <span className={`w-1/2 text-sm font-medium ${row.label === "Welcome Bonus" ? "text-amber-400 font-bold" : "text-gray-100"}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
