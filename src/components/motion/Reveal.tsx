import type { ElementType, ReactNode } from "react"
import { useInView } from "@/lib/useInView"
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion"

export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  ...rest
}: {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  [key: string]: unknown
}) {
  const { ref, inView } = useInView<HTMLElement>()
  const reduceMotion = usePrefersReducedMotion()
  const visible = reduceMotion || inView

  return (
    <Component
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Component>
  )
}
