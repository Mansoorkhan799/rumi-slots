import {
  Gift, Users, RotateCcw, TrendingUp, Crown, Wallet, Star
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Gift, Users, RotateCcw, TrendingUp, Crown, Wallet, Star,
}

interface BonusCardProps {
  title: string
  amount: string
  description: string
  icon: string
}

export default function BonusCard({ title, amount, description, icon }: BonusCardProps) {
  const Icon = iconMap[icon] || Gift

  return (
    <div className="relative bg-gradient-to-br from-stone-900 to-amber-950/30 border border-amber-800/30 rounded-2xl p-6 overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20">
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full" />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
          <Icon size={22} className="text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">{title}</p>
          <p className="text-2xl font-bold text-white mb-2">{amount}</p>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
