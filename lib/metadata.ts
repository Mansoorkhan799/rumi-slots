import { Metadata } from "next"
import { siteConfig } from "@/data/site"

interface MetaOptions {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
  keywords?: string[]
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/images/rumi-slot-game-pakistan.webp",
  type = "website",
  keywords = [],
}: MetaOptions): Metadata {
  const url = `${siteConfig.domain}${path}`
  const imageUrl = `${siteConfig.domain}${image}`

  return {
    title,
    description,
    keywords: [
      siteConfig.keywords.primary,
      siteConfig.keywords.secondary,
      siteConfig.keywords.third,
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
