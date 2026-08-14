import type { ReactNode } from "react"

export function Callout({
  eyebrow,
  headline,
  body,
  bg = "bg-cs-bg",
  border = "border-cs-gold",
  eyebrowColor = "text-cs-gold",
  children,
}: {
  eyebrow: string
  headline: ReactNode
  body?: ReactNode
  bg?: string
  border?: string
  eyebrowColor?: string
  children?: ReactNode
}) {
  return (
    <div className={`flex w-full flex-col items-start gap-3.5 rounded-xl border-l-[3px] ${border} ${bg} px-6 py-8 md:px-11 md:py-9`}>
      <p className={`font-case text-xs font-bold tracking-[0.1em] ${eyebrowColor}`}>{eyebrow}</p>
      <p className="font-case text-xl font-medium leading-snug text-white md:text-[28px]">
        {headline}
      </p>
      {body && <p className="font-case text-base leading-relaxed text-cs-text md:text-[17px]">{body}</p>}
      {children}
    </div>
  )
}
