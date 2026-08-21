import type { ReactNode } from "react"

const themes = {
  light: { label: "text-hp-rust", title: "text-hp-ink", subtitle: "text-hp-muted" },
  dark: { label: "text-[#ffbfae]", title: "text-white", subtitle: "text-hp-muted" },
}

export function SectionHead({
  number,
  title,
  subtitle,
  theme = "light",
}: {
  number: string
  title: string
  subtitle?: ReactNode
  theme?: "light" | "dark"
}) {
  const t = themes[theme]
  return (
    <div className="flex flex-col items-start gap-3">
      <p className={`font-case text-2xl font-bold tracking-[0.1em] ${t.label}`}>{number}</p>
      <h2 className={`font-case text-3xl font-bold leading-tight md:text-[48px] ${t.title}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-[1100px] font-case text-lg font-light leading-relaxed md:text-[22px] ${t.subtitle}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
