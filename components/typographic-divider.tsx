interface TypographicDividerProps {
  text: string
  className?: string
}

export default function TypographicDivider({ text, className = "" }: TypographicDividerProps) {
  return (
    <div className={`relative flex items-center py-10 ${className}`}>
      <div className="flex-grow border-t border-secondary/50"></div>
      <span className="flex-shrink mx-4 text-foreground/60 font-mono tracking-widest text-sm uppercase">{text}</span>
      <div className="flex-grow border-t border-secondary/50"></div>
    </div>
  )
}
