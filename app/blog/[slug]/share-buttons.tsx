"use client"

import { Button } from "@/components/ui/button"

interface ShareButtonsProps {
  postTitle: string
}

export function ShareButtons({ postTitle }: ShareButtonsProps) {
  return (
    <div className="mt-12 pt-8 border-t border-secondary/50">
      <h3 className="text-xl font-bold mb-4">Share this post</h3>
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(postTitle)}`,
              "_blank",
            )
          }
        >
          Twitter
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
              "_blank",
            )
          }
        >
          LinkedIn
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            alert("Link copied to clipboard!")
          }}
        >
          Copy Link
        </Button>
      </div>
    </div>
  )
} 