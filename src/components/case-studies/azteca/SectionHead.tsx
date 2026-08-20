import type { ReactNode } from "react"

export function SectionHead({
  number,
  title,
  subtitle,
}: {
  number: string
  title: string
  subtitle?: ReactNode
}) {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <div className="flex items-center gap-2.5">
        <span className="h-0.5 w-7 bg-aza-green" />
        <span className="text-[11px] font-bold text-aza-green">{number}</span>
      </div>
      <h2 className="text-3xl font-bold leading-tight text-aza-ink md:text-[34px]">{title}</h2>
      {subtitle && (
        <p className="max-w-[860px] text-lg leading-relaxed text-aza-muted md:text-[17px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
