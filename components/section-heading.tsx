interface SectionHeadingProps {
  title: string
  highlight: string
  subtitle?: string
}

export default function SectionHeading({ title, highlight, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="animate-on-scroll text-3xl font-bold mb-4 relative inline-block">
        {title}{" "}
        <span className="text-primary relative">
          {highlight}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50"></span>
        </span>
      </h2>
      {subtitle && (
        <p className="animate-on-scroll stagger-1 text-center text-foreground/70 max-w-2xl mx-auto mt-4">{subtitle}</p>
      )}
    </div>
  )
}
