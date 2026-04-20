import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag, ArrowRight, ArrowLeft } from "lucide-react"
import { blogPosts } from "@/data/blogs"
import { siteConfig } from "@/data/site"
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import Breadcrumb from "@/components/ui/Breadcrumb"
import BlogCard from "@/components/ui/BlogCard"
import FAQAccordion from "@/components/ui/FAQAccordion"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const url = `${siteConfig.domain}/blog/${post.slug}`
  const imageUrl = `${siteConfig.domain}${post.thumbnail}`

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) as typeof blogPosts

  const postUrl = `${siteConfig.domain}/blog/${post.slug}`

  const articleSchemaData = articleSchema({
    title: post.title,
    description: post.description,
    url: postUrl,
    image: post.thumbnail,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
  })

  const faqSchemaData = faqSchema(post.faq)

  const breadcrumbSchemaData = breadcrumbSchema([
    { name: "Home", url: siteConfig.domain },
    { name: "Blog", url: `${siteConfig.domain}/blog` },
    { name: post.title, url: postUrl },
  ])

  const publishDate = new Date(post.publishedAt).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const updateDate = new Date(post.updatedAt).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaData) }}
      />

      <Breadcrumb
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12" itemScope itemType="https://schema.org/Article">

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <Link href="/blog" className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors">
              <ArrowLeft size={13} />
              Back to Blog
            </Link>
          </div>

          <span className="inline-block text-xs font-semibold bg-amber-500 text-black px-3 py-1 rounded-lg mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4" itemProp="headline">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime={post.publishedAt} itemProp="datePublished">Published: {publishDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={13} />
              <time dateTime={post.updatedAt} itemProp="dateModified">Updated: {updateDate}</time>
            </span>
            <span className="text-gray-600">By {siteConfig.developer}</span>
          </div>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-stone-800">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </header>

        {/* Article content */}
        <div
          className="prose max-w-none mb-10"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FAQ */}
        {post.faq.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={post.faq} />
          </section>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-br from-amber-950/40 to-stone-900 border border-amber-700/40 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-5">
          <div className="flex-1">
            <p className="font-bold text-white mb-1">Ready to try {siteConfig.name}?</p>
            <p className="text-sm text-gray-400">Download free, claim PKR 5,000 welcome bonus, and start playing today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={siteConfig.downloadUrl}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Download APK Free
            </a>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-white font-semibold text-sm px-5 py-3 rounded-xl border border-stone-700 transition-colors whitespace-nowrap"
            >
              Register Now <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.slug}
                  slug={related.slug}
                  title={related.title}
                  description={related.description}
                  thumbnail={related.thumbnail}
                  publishedAt={related.publishedAt}
                  excerpt={related.excerpt}
                  category={related.category}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
