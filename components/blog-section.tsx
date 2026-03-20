"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"
import { formatPostData, getPosts } from "../lib/wordpress"

export default function BlogSection() {
  const [posts, setPosts] = useState<ReturnType<typeof formatPostData>[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const wpPosts = await getPosts()
        const formattedPosts = wpPosts.map(formatPostData)
        setPosts(formattedPosts)
        setError(null)
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError("Failed to load blog posts.")
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="px-8 py-32 bg-[#171f33]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-headline font-extrabold tracking-tighter uppercase mb-16 text-white">
          Thoughts
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-[#bcc9cd]">Loading posts...</span>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-[#bcc9cd]">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-[#bcc9cd]">No posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-0">
            {posts.slice(0, 3).map((post, index) => (
              <div
                key={post.id}
                className={`bg-[#0b1326] p-10 flex flex-col justify-between h-[450px] hover:bg-[#222a3d] transition-all group ${
                  index < 2 ? "border-r border-[#3d494c]" : ""
                }`}
              >
                <div>
                  <div className="font-mono text-primary text-xs mb-6 uppercase tracking-widest">
                    {post.tags?.[0] ?? "Article"}
                  </div>
                  <h3
                    className="text-3xl font-headline font-bold leading-tight uppercase text-white group-hover:translate-x-2 transition-transform"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                </div>
                <div>
                  <p
                    className="text-[#bcc9cd] text-sm mb-6 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-widest text-sm text-primary hover:gap-4 transition-all"
                  >
                    Read Case <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-widest text-sm text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-[#003640] transition-all duration-300"
          >
            View All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
