interface StepCardProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

export default function StepCard({ step, title, description, isLast = false }: StepCardProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-black text-sm shadow-lg shadow-amber-500/30">
          {step}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-amber-800/40 mt-2" />}
      </div>
      <div className={`pb-6 flex-1 ${isLast ? "" : ""}`}>
        <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
