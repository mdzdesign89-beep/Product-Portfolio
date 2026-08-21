import { useState } from "react"

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
            className={`absolute inset-0 m-auto max-h-full max-w-full object-contain transition-opacity duration-300 ease-out ${
              showAfter ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={after}
            alt={afterAlt}
            className={`absolute inset-0 m-auto h-full w-auto object-contain transition-opacity duration-300 ease-out ${
              showAfter ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <ul className="flex flex-col gap-3 md:flex-1">
          {(showAfter ? afterBullets : beforeBullets).map((item) => (
            <li key={item} className="font-case text-base leading-relaxed text-[#575757]">
              · {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
