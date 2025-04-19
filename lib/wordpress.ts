/**
 * WordPress API service to fetch blog posts
 */

// WordPress.com sites use a slightly different API endpoint structure than self-hosted WordPress
export const API_URL = "https://public-api.wordpress.com/wp/v2/sites/seergiorob.wordpress.com"

export interface WordPressPost {
  id: number
  date: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  slug: string
  link: string
  featured_media: number
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
    }>
    "wp:term"?: Array<
      Array<{
        id: number
        name: string
        slug: string
      }>
    >
  }
  categories: number[]
  tags: number[]
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  count: number
}

export interface WordPressTag {
  id: number
  name: string
  slug: string
  count: number
}

/**
 * Fetch all posts from WordPress
 */
export async function getPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${API_URL}/posts?_embed=wp:featuredmedia,wp:term&per_page=10`,
      { next: { revalidate: 3600 } }, // Revalidate every hour
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress posts:", error)
    return []
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${API_URL}/posts?slug=${slug}&_embed=wp:featuredmedia,wp:term`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`)
    }

    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error(`Error fetching WordPress post with slug ${slug}:`, error)
    return null
  }
}

/**
 * Fetch all categories
 */
export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${API_URL}/categories`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress categories:", error)
    return []
  }
}

/**
 * Format WordPress post data for our UI
 */
export function formatPostData(post: WordPressPost) {
  // Extract categories and tags from _embedded terms
  const categories = post._embedded?.["wp:term"]?.[0] || []
  const tags = post._embedded?.["wp:term"]?.[1] || []

  // Calculate approximate read time (1 minute per 200 words)
  const wordCount = post.content.rendered.replace(/<[^>]*>/g, "").split(/\s+/).length
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  // Get featured image if available
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null

  return {
    id: post.id.toString(),
    title: post.title.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: `${readTime} min read`,
    slug: post.slug,
    link: post.link,
    featuredImage,
    category: categories.length > 0 ? categories[0].name : "Uncategorized",
    tags: tags.map((tag) => tag.name),
  }
}
