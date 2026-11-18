import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import "./ProcessDiagram.css"

type Phase = {
  name: string
  tint: string
  color: string
  icon: ReactNode
  activities: string[]
  outcome: string
  detail: string
}

// Every icon part carries pathLength=1 so it can be drawn stroke by stroke.
const phases: Phase[] = [
  {
    name: "Data",
    tint: "#fbd6d6",
    color: "#c2413f",
    icon: (
      <>
        <path pathLength={1} d="M3 20.5h18" />
        <rect pathLength={1} x="5" y="12" width="3.2" height="8.5" rx=".6" />
        <rect pathLength={1} x="10.4" y="5" width="3.2" height="15.5" rx=".6" />
        <rect pathLength={1} x="15.8" y="9" width="3.2" height="11.5" rx=".6" />
      </>
    ),
    activities: ["Program data", "User surveys"],
    outcome: "Located the drop-off",
    detail: "Program data and user surveys pointed to the reward redemption flow.",
  },
  {
    name: "Research",
    tint: "#d3e7f8",
    color: "#2f7bbf",
    icon: (
      <>
        <circle pathLength={1} cx="10.5" cy="10.5" r="6.5" />
        <path pathLength={1} d="M15.3 15.3 20.5 20.5" />
      </>
    ),
    activities: ["User interviews", "Business goals", "Program KPIs"],
    outcome: "3 behaviour findings",
    detail: "Abstract points don’t register with this segment. Tangible, short-term rewards do.",
  },
  {
    name: "Hypotheses",
    tint: "#d2ebcf",
    color: "#2f8a2b",
    icon: (
      <>
        <path pathLength={1} d="M9 17.5h6M10 21h4" />
        <path pathLength={1} d="M9.2 14.6A6.5 6.5 0 1 1 14.8 14.6c-.6.6-.8 1.6-.8 2.9h-4c0-1.3-.2-2.3-.8-2.9z" />
      </>
    ),
    activities: ["Hypothesis", "Jobs to be Done", "Information architecture"],
    outcome: "1 hypothesis, new IA",
    detail: "Show payments, gems and their value in pesos in one view, and more people finish redeeming.",
  },
  {
    name: "Design",
    tint: "#fbefbf",
    color: "#9a7400",
    icon: (
      <>
        <rect pathLength={1} x="3" y="4" width="18" height="16" rx="2" />
        <path pathLength={1} d="M3 9h18M9 9v11" />
      </>
    ),
    activities: ["Wireframes", "Prototype"],
    outcome: "One progress card",
    detail: "Merged the payment counter and reward status, and added the peso value.",
  },
  {
    name: "Test",
    tint: "#fbe2bd",
    color: "#b8650a",
    icon: (
      <>
        <path pathLength={1} d="M9 3h6M10 3v6.2l-5.2 9A1.9 1.9 0 0 0 6.4 21h11.2a1.9 1.9 0 0 0 1.6-2.8l-5.2-9V3" />
        <path pathLength={1} d="M7.3 15h9.4" />
      </>
    ),
    activities: ["A/B testing", "Report"],
    outcome: "−11.1% abandonment",
    detail: "A/B test with 5,000 users against the existing flow. Conversion rose 5.3%.",
  },
]

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)"
const EASE_IN_OUT_POINTS = [0.77, 0, 0.175, 1] as const
const EASE_IN_OUT = `cubic-bezier(${EASE_IN_OUT_POINTS.join(", ")})`
const TRACK_DELAY = 120
const TRACK_DURATION = 1100

function bezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  const cx = 3 * p1x, bx = 3 * (p2x - p1x) - cx, ax = 1 - cx - bx
  const cy = 3 * p1y, by = 3 * (p2y - p1y) - cy, ay = 1 - cy - by
  const x = (t: number) => ((ax * t + bx) * t + cx) * t
  const y = (t: number) => ((ay * t + by) * t + cy) * t
  return (progress: number) => {
    let lo = 0, hi = 1, t = progress
    for (let i = 0; i < 32; i++) {
      t = (lo + hi) / 2
      if (x(t) < progress) lo = t
      else hi = t
    }
    return y(t)
  }
}
const easeInOut = bezier(...EASE_IN_OUT_POINTS)

// Fraction of the track's duration at which its head reaches `position` (0–1).
function timeAt(position: number) {
  let lo = 0, hi = 1, m = position
  for (let i = 0; i < 32; i++) {
    m = (lo + hi) / 2
    if (easeInOut(m) < position) lo = m
    else hi = m
  }
  return m
}

function roundedPath(points: number[][], radius: number) {
  let d = `M${points[0][0]},${points[0][1]}`
  for (let i = 1; i < points.length - 1; i++) {
    const [x0, y0] = points[i - 1], [x1, y1] = points[i], [x2, y2] = points[i + 1]
    const inLen = Math.hypot(x1 - x0, y1 - y0), outLen = Math.hypot(x2 - x1, y2 - y1)
    const a = Math.min(radius, inLen / 2), b = Math.min(radius, outLen / 2)
    const ux = (x1 - x0) / inLen, uy = (y1 - y0) / inLen
    const vx = (x2 - x1) / outLen, vy = (y2 - y1) / outLen
    d += ` L${x1 - ux * a},${y1 - uy * a} Q${x1},${y1} ${x1 + vx * b},${y1 + vy * b}`
  }
  const end = points[points.length - 1]
  return `${d} L${end[0]},${end[1]}`
}

type Geometry = { vertical: boolean; starts: number[]; loopLength: number }

export function ProcessDiagram() {
  const rootRef = useRef<HTMLDivElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const loopSvgRef = useRef<SVGSVGElement>(null)
  const loopPathRef = useRef<SVGPathElement>(null)
  const loopHeadRef = useRef<SVGPathElement>(null)
  const loopLabelRef = useRef<HTMLSpanElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const geometry = useRef<Geometry | null>(null)
  const played = useRef(false)
  const [active, setActive] = useState<number | null>(null)

  // Positions the track and the loop from the rendered circles.
  const layout = () => {
    const diagram = diagramRef.current, list = listRef.current, root = rootRef.current
    const track = trackRef.current, svg = loopSvgRef.current, path = loopPathRef.current
    const head = loopHeadRef.current, label = loopLabelRef.current
    if (!diagram || !list || !root || !track || !svg || !path || !head || !label) return
    const box = diagram.getBoundingClientRect()
    const nodes = [...list.querySelectorAll<HTMLElement>(".pd-node")].map((n) => n.getBoundingClientRect())
    if (nodes.length === 0) return
    const vertical = root.clientWidth <= 680
    const first = nodes[0], last = nodes[nodes.length - 1]
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`)
    let points: number[][]
    let starts: number[]
    let angle: number
    if (!vertical) {
      const y = first.top - box.top + first.height / 2
      const c0 = first.left - box.left + first.width / 2
      const c1 = last.left - box.left + last.width / 2
      Object.assign(track.style, { left: `${c0}px`, top: `${y - 1}px`, width: `${c1 - c0}px`, height: "2px", transformOrigin: "left center" })
      starts = nodes.map((n) => (n.left + n.width / 2 - first.left - first.width / 2) / (c1 - c0))
      const top = 18
      points = [[last.right - box.left + 4, y], [box.width - 8, y], [box.width - 8, top], [8, top], [8, y], [first.left - box.left - 3, y]]
      angle = 0
      label.style.left = `${box.width / 2}px`
      label.style.top = `${top}px`
    } else {
      const x = first.left - box.left + first.width / 2
      const y0 = first.top - box.top + first.height / 2
      const y1 = last.top - box.top + last.height / 2
      Object.assign(track.style, { left: `${x - 1}px`, top: `${y0}px`, width: "2px", height: `${y1 - y0}px`, transformOrigin: "center top" })
      starts = nodes.map((n) => (n.top - first.top) / (last.top - first.top))
      points = [[last.left - box.left - 4, y1], [8, y1], [8, y0], [first.left - box.left - 3, y0]]
      angle = 0
    }
    path.setAttribute("d", roundedPath(points, 14))
    const end = points[points.length - 1]
    head.setAttribute("transform", `translate(${end[0]},${end[1]}) rotate(${angle})`)
    geometry.current = { vertical, starts, loopLength: path.getTotalLength() }
  }

  const play = () => {
    const root = rootRef.current, list = listRef.current, track = trackRef.current
    const path = loopPathRef.current, head = loopHeadRef.current, label = loopLabelRef.current
    if (!root || !list || !track || !path || !head || !label) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    layout()
    const geo = geometry.current
    if (!geo) return
    root.getAnimations({ subtree: true }).forEach((a) => a.cancel())

    track.animate([{ transform: geo.vertical ? "scaleY(0)" : "scaleX(0)" }, { transform: "none" }], {
      duration: TRACK_DURATION, delay: TRACK_DELAY, easing: EASE_IN_OUT, fill: "both",
    })
    let lastStart = 0
    ;[...list.children].forEach((li, i) => {
      const start = TRACK_DELAY + timeAt(Math.min(1, geo.starts[i] + 0.02)) * TRACK_DURATION
      lastStart = start
      li.querySelector(".pd-node")?.animate([{ opacity: 0, transform: "scale(.9)" }, { opacity: 1, transform: "none" }], {
        duration: 520, delay: start, easing: EASE_OUT, fill: "both",
      })
      li.querySelectorAll(".pd-node svg [pathLength]").forEach((part, j) =>
        part.animate(
          [{ strokeDasharray: "1 1", strokeDashoffset: 1 }, { strokeDasharray: "1 1", strokeDashoffset: 0 }],
          { duration: 480, delay: start + 140 + j * 40, easing: EASE_OUT, fill: "backwards" },
        ),
      )
      li.querySelector("h3")?.animate([{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }], {
        duration: 400, delay: start + 120, easing: EASE_OUT, fill: "both",
      })
      li.querySelector(".pd-acts")?.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 360, delay: start + 200, easing: EASE_OUT, fill: "both",
      })
      li.querySelector(".pd-detail")?.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 400, delay: start + 260, easing: EASE_OUT, fill: "both",
      })
    })
    const loopStart = lastStart + 520
    path.style.strokeDasharray = `${geo.loopLength}`
    const draw = path.animate([{ strokeDashoffset: geo.loopLength }, { strokeDashoffset: 0 }], {
      duration: 900, delay: loopStart, easing: EASE_IN_OUT, fill: "both",
    })
    draw.onfinish = () => {
      path.style.strokeDasharray = ""
      draw.cancel()
    }
    head.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, delay: loopStart + 820, easing: EASE_OUT, fill: "both" })
    label.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: loopStart + 300, easing: EASE_OUT, fill: "both" })
  }

  // Already on screen at load: play before the first paint, so nothing flashes.
  useLayoutEffect(() => {
    layout()
    const root = rootRef.current
    if (!root) return
    const r = root.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) {
      played.current = true
      play()
    }
  }, [])

  // Otherwise play once, starting just before it scrolls into view.
  // The diagram is fully visible until then: the animation never leaves it hidden.
  useEffect(() => {
    const root = rootRef.current, diagram = diagramRef.current
    if (!root || !diagram) return
    const resize = new ResizeObserver(() => layout())
    resize.observe(diagram)
    let observer: IntersectionObserver | null = null
    if (!played.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true
            play()
            observer?.disconnect()
          }
        },
        { threshold: 0, rootMargin: "0px 0px 120px 0px" },
      )
      observer.observe(root)
    }
    document.fonts?.ready.then(() => layout())
    return () => {
      resize.disconnect()
      observer?.disconnect()
    }
  }, [])

  return (
    <div className="pd" ref={rootRef}>
      <div className="pd-diagram" ref={diagramRef}>
        <div className="pd-track" ref={trackRef} aria-hidden="true" />
        <svg className="pd-loop" ref={loopSvgRef} aria-hidden="true">
          <path ref={loopPathRef} />
          <path ref={loopHeadRef} d="M-7,-5 L0,0 L-7,5" />
        </svg>
        <span className="pd-loop-label" ref={loopLabelRef}>
          Results feed the next cycle
        </span>
        <ol className="pd-phases" ref={listRef} aria-label="Design process, in five phases">
          {phases.map((phase, i) => (
            <li
              key={phase.name}
              className={`pd-phase${active === i ? " is-active" : ""}`}
              style={{ "--pd-color": phase.color, "--pd-tint": phase.tint } as CSSProperties}
              tabIndex={0}
              onClick={() => setActive(active === i ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setActive(active === i ? null : i)
                }
              }}
            >
              <div className="pd-node" aria-hidden="true">
                <svg viewBox="0 0 24 24">{phase.icon}</svg>
              </div>
              <h3>{phase.name}</h3>
              <p className="pd-acts">{phase.activities.join(" · ")}</p>
              <div className="pd-detail">
                <b>{phase.outcome}</b>
                <p>{phase.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
