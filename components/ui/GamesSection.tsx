import { Layers, Monitor, Trophy, Zap, Star, type LucideIcon } from "lucide-react"
import { GameCategory } from "@/data/site"

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Monitor,
  Trophy,
  Zap,
  Star,
}

interface GamesSectionProps {
  games: GameCategory[]
}

export default function GamesSection({ games }: GamesSectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {games.map((category) => {
        const Icon = iconMap[category.icon] || Layers
        return (
          <div
            key={category.name}
            className="bg-stone-900 border border-stone-800 rounded-2xl p-5 hover:border-amber-800/50 transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Icon size={18} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-white text-sm">{category.name}</h3>
            </div>
            <ul className="space-y-1.5">
              {category.games.map((game) => (
                <li
                  key={game}
                  className="text-xs text-gray-400 py-1 px-2.5 bg-stone-800/50 rounded-lg hover:bg-stone-800 transition-colors"
                >
                  {game}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
