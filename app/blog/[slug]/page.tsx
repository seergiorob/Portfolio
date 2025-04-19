import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatPostData, getPostBySlug } from "../../../lib/wordpress"
import { notFound } from "next/navigation"
import { ShareButtons } from "./share-buttons"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const wpPost = await getPostBySlug(params.slug)

  if (!wpPost) {
    notFound()
  }

  const post = formatPostData(wpPost)

  return (
    <div className="container max-w-4xl py-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Button variant="outline" size="sm" asChild className="hover:bg-secondary/50">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <article className="prose prose-invert max-w-none prose-headings:font-bold prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mb-6 prose-p:text-lg prose-p:text-foreground/80 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: post.title }} />
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Badge variant="outline" className="flex items-center gap-1 bg-secondary/20">
              <Calendar className="h-3 w-3" />
              {post.date}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-secondary/20">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </Badge>
            {post.category && <Badge variant="secondary" className="bg-primary/10 text-primary">{post.category}</Badge>}
          </div>

          {post.featuredImage && (
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <p className="text-xl text-foreground/80 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.excerpt }} />

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1 bg-secondary/20">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 prose-p:leading-relaxed prose-li:leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <ShareButtons postTitle={post.title} />
    </div>
  )
}
