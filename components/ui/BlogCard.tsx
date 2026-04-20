import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"

interface BlogCardProps {
  slug: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  excerpt: string
  category: string
}

export default function BlogCard({
  slug,
  title,
  description,
  thumbnail,
  publishedAt,
  excerpt,
  category,
}: BlogCardProps) {
  const date = new Date(publishedAt).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-800/40 hover:shadow-lg hover:shadow-amber-900/10 transition-all duration-300 group flex flex-col">
      <Link href={`/blog/${slug}`} className="block overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute top-3 left-3 text-xs font-semibold bg-amber-500 text-black px-2.5 py-1 rounded-lg">
            {category}
          </span>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Tag size={11} />
            {category}
          </span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h2 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1 line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors mt-auto"
        >
          Read Full Guide
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
