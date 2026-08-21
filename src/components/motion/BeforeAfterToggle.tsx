import { useEffect, useState } from "react"

function StaggeredBullets({
  items,
  dotClassName,
}: {
  items: string[]
  dotClassName: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 20)
    return () => clearTimeout(id)
  }, [])

  return (
    <ul className="flex flex-col gap-3 md:flex-1">
      {items.map((item, i) => (
        <li
          key={item}
          className={`flex items-start gap-2.5 font-case text-base leading-relaxed text-[#575757] transition-[opacity,transform] duration-500 ease-out ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
          }`}
          style={{ transitionDelay: visible ? `${i * 70}ms` : "0ms" }}
        >
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotClassName}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function BeforeAfterToggle({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  beforeBullets,
  afterBullets,
  beforeActiveClassName,
  afterActiveClassName,
  beforeDotClassName,
  afterDotClassName,
  imageContainerClassName = "",
  className = "",
}: {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
  beforeBullets: string[]
  afterBullets: string[]
  beforeActiveClassName: string
  afterActiveClassName: string
  beforeDotClassName: string
  afterDotClassName: string
  imageContainerClassName?: string
  className?: string
}) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="inline-flex w-fit gap-1 rounded-full border border-[#e4e4e4] bg-white p-1">
        <button
          type="button"
          onClick={() => setShowAfter(false)}
          aria-pressed={!showAfter}
          className={`rounded-full px-3.5 py-1.5 font-case text-xs font-bold tracking-[0.08em] transition-colors duration-200 ${
            !showAfter ? beforeActiveClassName : "text-[#8a8a8a]"
          }`}
        >
          {beforeLabel}
        </button>
        <button
          type="button"
          onClick={() => setShowAfter(true)}
          aria-pressed={showAfter}
          className={`rounded-full px-3.5 py-1.5 font-case text-xs font-bold tracking-[0.08em] transition-colors duration-200 ${
            showAfter ? afterActiveClassName : "text-[#8a8a8a]"
          }`}
        >
          {afterLabel}
        </button>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div
          className={`relative h-[420px] w-full shrink-0 overflow-hidden rounded-lg md:w-[320px] ${imageContainerClassName}`}
        >
          <img
            src={before}
            alt={beforeAlt}
            className={`absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-300 ease-out ${
              showAfter ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={after}
            alt={afterAlt}
            className={`absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-300 ease-out ${
              showAfter ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <StaggeredBullets
          key={showAfter ? "after" : "before"}
          items={showAfter ? afterBullets : beforeBullets}
          dotClassName={showAfter ? afterDotClassName : beforeDotClassName}
        />
      </div>
    </div>
  )
}
