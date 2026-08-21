import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from "react"

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
}: {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const handlePointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const handlePointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }
  const handlePointerUp = () => {
    draggingRef.current = false
  }
  const handleContainerClick = (e: ReactPointerEvent<HTMLDivElement>) => {
    updateFromClientX(e.clientX)
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5))
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5))
  }

  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <div
        ref={containerRef}
        onPointerDown={handleContainerClick}
        className="relative w-full touch-none select-none overflow-hidden rounded-xl"
      >
        <img src={before} alt={beforeAlt} className="block w-full" draggable={false} />
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src={after} alt={afterAlt} className="block h-full w-full object-cover" draggable={false} />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-[0.06em] text-white">
          {beforeLabel}
        </span>
        <span
          className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-[0.06em] text-white transition-opacity duration-150"
          style={{ opacity: position > 82 ? 0 : 1 }}
        >
          {afterLabel}
        </span>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
        </div>
        <button
          type="button"
          aria-label="Drag to compare before and after"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ left: `${position}%` }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1 1 7l5 6" stroke="#1b2a2e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 1l5 6-5 6" stroke="#1b2a2e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <p className="text-center font-case text-xs tracking-[0.04em] text-current opacity-60">
        ← Drag to compare, or use the arrow keys →
      </p>
    </div>
  )
}
