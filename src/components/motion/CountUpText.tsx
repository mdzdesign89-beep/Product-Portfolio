import { useEffect, useRef, useState } from "react"
import { useInView } from "@/lib/useInView"
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion"

const NUMBER_PATTERN = /[+\-−]?\d[\d,]*(?:\.\d+)?/g

type NumberToken = {
  index: number
  length: number
  sign: string
  decimals: number
  target: number
  hasComma: boolean
}

function findAnimatableNumbers(text: string): NumberToken[] {
  const tokens: NumberToken[] = []
  for (const match of text.matchAll(NUMBER_PATTERN)) {
    const raw = match[0]
    const digitsOnly = raw.replace(/[^\d]/g, "")
    if (digitsOnly.length < 2) continue
    const sign = /^[+\-−]/.test(raw) ? raw[0] : ""
    const decimals = raw.match(/\.(\d+)/)?.[1].length ?? 0
    const target = parseFloat(raw.replace(/[,+\-−]/g, ""))
    tokens.push({ index: match.index ?? 0, length: raw.length, sign, decimals, target, hasComma: raw.includes(",") })
  }
  return tokens
}

function renderAtProgress(text: string, tokens: NumberToken[], progress: number) {
  let cursor = 0
  let out = ""
  for (const token of tokens) {
    out += text.slice(cursor, token.index)
    const magnitude = token.target * progress
    const formatted = token.hasComma
      ? magnitude.toLocaleString("en-US", {
          minimumFractionDigits: token.decimals,
          maximumFractionDigits: token.decimals,
        })
      : magnitude.toFixed(token.decimals)
    out += `${token.sign}${formatted}`
    cursor = token.index + token.length
  }
  return out + text.slice(cursor)
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function CountUpText({
  text,
  duration = 900,
  className,
}: {
  text: string
  duration?: number
  className?: string
}) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const reduceMotion = usePrefersReducedMotion()
  const tokensRef = useRef<NumberToken[] | null>(null)
  if (tokensRef.current === null) tokensRef.current = findAnimatableNumbers(text)
  const tokens = tokensRef.current

  const [display, setDisplay] = useState(() =>
    tokens.length === 0 ? text : renderAtProgress(text, tokens, 0)
  )
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    if (reduceMotion || tokens.length === 0) {
      setDisplay(text)
      return
    }

    let frame: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      if (progress >= 1) {
        setDisplay(text)
        return
      }
      setDisplay(renderAtProgress(text, tokens, easeOutCubic(progress)))
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduceMotion, text, duration, tokens])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
