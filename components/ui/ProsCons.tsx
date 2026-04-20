import { CheckCircle, XCircle } from "lucide-react"

interface ProsConsProps {
  pros: string[]
  cons: string[]
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-950/30 border border-green-800/40 rounded-2xl p-6">
        <h3 className="text-base font-bold text-green-400 mb-4 flex items-center gap-2">
          <CheckCircle size={18} className="text-green-400" />
          Pros
        </h3>
        <ul className="space-y-3">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
              <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6">
        <h3 className="text-base font-bold text-red-400 mb-4 flex items-center gap-2">
          <XCircle size={18} className="text-red-400" />
          Cons
        </h3>
        <ul className="space-y-3">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
              <XCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
