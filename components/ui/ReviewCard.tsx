import { Star, MapPin } from "lucide-react"

interface ReviewCardProps {
  name: string
  initials: string
  rating: number
  comment: string
  date: string
  location: string
}

export default function ReviewCard({ name, initials, rating, comment, date, location }: ReviewCardProps) {
  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 hover:border-amber-800/40 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold text-sm">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-sm">{name}</p>
          <div className="flex items-center gap-1 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}
              />
            ))}
          </div>
        </div>
        <span className="text-xs text-gray-500 flex-shrink-0">{date}</span>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed mb-3">{comment}</p>
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <MapPin size={11} />
        <span>{location}</span>
      </div>
    </div>
  )
}
