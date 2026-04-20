import {
  Zap, Shield, Gift, Smartphone, Users, Trophy, CreditCard, Star,
  Target, TrendingUp, Clock, BookOpen, Wallet, Bell, Layers, Monitor
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Zap, Shield, Gift, Smartphone, Users, Trophy, CreditCard, Star,
  Target, TrendingUp, Clock, BookOpen, Wallet, Bell, Layers, Monitor,
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const Icon = iconMap[icon] || Star

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-900/10 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 flex items-center justify-center mb-4 transition-colors">
        <Icon size={22} className="text-amber-400" />
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}
