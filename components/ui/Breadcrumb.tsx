import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { siteConfig } from "@/data/site"
import { breadcrumbSchema } from "@/lib/schema"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items]

  const schema = breadcrumbSchema(
    allItems.map((item) => ({
      name: item.name,
      url: `${siteConfig.domain}${item.href}`,
    }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-stone-900/50 border-b border-amber-900/20 py-3"
      >
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-1 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
            {allItems.map((item, index) => (
              <li
                key={`${item.href}-${index}`}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm transition-colors"
                    itemProp="item"
                  >
                    <Home size={13} />
                    <span itemProp="name">{item.name}</span>
                  </Link>
                ) : index === allItems.length - 1 ? (
                  <span className="text-gray-400 text-sm" itemProp="name" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                {index < allItems.length - 1 && (
                  <ChevronRight size={13} className="text-gray-600 mx-0.5" />
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
