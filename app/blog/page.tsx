import type { Metadata } from "next"
import { siteConfig } from "@/data/site"
import { blogPosts } from "@/data/blogs"
import { buildMetadata } from "@/lib/metadata"
import Breadcrumb from "@/components/ui/Breadcrumb"
import BlogCard from "@/components/ui/BlogCard"

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} Blog — Guides, Tips & Earning Strategies`,
  description: `Read the latest ${siteConfig.name} guides, earning tips, and how-to articles. Download guides, withdrawal proofs, and honest reviews — all in one place.`,
  path: "/blog",
})

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            <span className="gold-text">{siteConfig.name}</span> Blog & Guides
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know — download guides, earning strategies, withdrawal proofs,
            and honest reviews. Updated regularly with the latest information.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`text-sm px-4 py-1.5 rounded-full font-medium border transition-colors ${
                cat === "All"
                  ? "bg-amber-500 text-black border-amber-500"
                  : "bg-stone-900 text-gray-300 border-stone-700 hover:border-amber-700"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              thumbnail={post.thumbnail}
              publishedAt={post.publishedAt}
              excerpt={post.excerpt}
              category={post.category}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Ready to start earning with {siteConfig.name}?</p>
          <a
            href={siteConfig.downloadUrl}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Download {siteConfig.name} APK Free
          </a>
        </div>
      </div>
    </>
  )
}
