"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Tag, Loader2 } from "lucide-react"
import Link from "next/link"
import SectionHeading from "./section-heading"
import { formatPostData, getPosts } from "../lib/wordpress"
import Image from "next/image"

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedPost, setExpandedPost] = useState<string | null>(null)
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
        setError("Failed to load blog posts. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")

            const elements = entry.target.querySelectorAll(".animate-on-scroll")
            elements.forEach((el) => el.classList.add("slide-in"))
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const toggleExpand = (id: string) => {
    if (expandedPost === id) {
      setExpandedPost(null)
    } else {
      setExpandedPost(id)
    }
  }

  return (
    <section id="blog" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative typography */}
      <div className="absolute right-[5%] top-[20%] text-[15vw] font-black opacity-[0.02] select-none pointer-events-none tracking-tighter rotate-90">
        BLOG
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="My"
          highlight="Blog"
          subtitle="Sharing thoughts and experiences from my journey as a developer"
        />

        <div className="animate-on-scroll stagger-1 space-y-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-foreground/70">Loading posts...</span>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-foreground/70">{error}</p>
              <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-foreground/70">No posts found. Check back soon!</p>
            </div>
          ) : (
            posts.slice(0, 3).map((post) => (
              <Card
                key={post.id}
                className="animate-on-scroll border-secondary/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <CardTitle
                      className="text-xl font-mono tracking-tight"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </Badge>
                    </div>
                  </div>
                  {post.featuredImage && (
                    <div className="mt-4 relative h-48 rounded-md overflow-hidden">
                      <Image
                        src={post.featuredImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardDescription dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </CardHeader>
                <CardContent className={expandedPost === post.id ? "block" : "hidden"}>
                  <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(post.id)}
                      className="flex-1 sm:flex-auto"
                    >
                      {expandedPost === post.id ? "Show Less" : "Read More"}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-auto" asChild>
                      <Link href={`/blog/${post.slug}`} scroll={false}>
                        Full Post
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        <div className="mt-12 text-center animate-on-scroll stagger-2">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog" scroll={false}>
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
