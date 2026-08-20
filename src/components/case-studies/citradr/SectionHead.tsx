import type { ReactNode } from "react"

const themes = {
  dark: { label: "text-cib-lime", title: "text-white", subtitle: "text-cib-text" },
  light: { label: "text-cib-olive", title: "text-[#161719]", subtitle: "text-[#575757]" },
  lime: { label: "text-[#161719]", title: "text-[#161719]", subtitle: "text-[#2e340b]" },
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
  theme?: "dark" | "light" | "lime"
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
