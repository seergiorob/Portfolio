import type React from "react"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="pt-16">{children}</div>
}
