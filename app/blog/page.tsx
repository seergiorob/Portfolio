import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatPostData, getPosts } from "../../lib/wordpress"

export default async function BlogPage() {
  let posts: any[] = []
  let error = null

  try {
    const wpPosts = await getPosts()
    posts = wpPosts.map(formatPostData)
  } catch (err) {
    console.error("Error fetching posts:", err)
    error = "Failed to load blog posts. Please try again later."
  }

  return (
    <div className="container max-w-6xl py-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-foreground/70">Sharing my thoughts and experiences as a developer</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {error ? (
        <div className="text-center py-10">
          <p className="text-foreground/70">{error}</p>
          <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      ) : posts.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-foreground/70">Loading posts...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post: any) => (
            <Card key={post.id} className="border-secondary/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    {post.category && <Badge variant="secondary">{post.category}</Badge>}
                  </div>
                  <CardTitle
                    className="text-xl font-mono tracking-tight"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
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
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </Badge>
                </div>
                <CardDescription dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </CardHeader>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
