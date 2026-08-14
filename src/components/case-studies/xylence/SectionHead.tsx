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
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <span className="h-[3px] w-[30px] bg-cs-gold" />
        <span className="font-case text-[13px] font-bold tracking-[0.1em] text-cs-gold">
          {number}
        </span>
      </div>
      <h2 className="font-case text-3xl font-bold leading-tight text-white md:text-[46px]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[1080px] font-case text-lg font-light leading-relaxed text-cs-text md:text-[21px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
