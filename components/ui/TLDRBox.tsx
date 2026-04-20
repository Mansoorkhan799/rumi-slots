import { Zap } from "lucide-react"

interface TLDRBoxProps {
  title?: string
  points: string[]
}

export default function TLDRBox({ title = "Quick Answer", points }: TLDRBoxProps) {
  return (
    <div className="bg-amber-950/40 border border-amber-500/30 rounded-2xl p-6 my-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
          <Zap size={16} className="text-amber-400" />
        </div>
        <h2 className="text-lg font-bold text-amber-400">{title}</h2>
      </div>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5 text-gray-200 text-sm leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
              {i + 1}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
