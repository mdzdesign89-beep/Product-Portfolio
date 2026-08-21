import { Link } from "react-router-dom"
import { Reveal } from "@/components/motion/Reveal"
import heroVisual from "@/assets/case-studies/azteca/hero-visual.png"

const tags = ["Fintech", "Consumer lending", "Mobile app"]

const meta = [
  { label: "MY ROLE", value: "Product Designer" },
  { label: "TEAM", value: "PD, UX, UI, UX Writer & business" },
  { label: "TIMELINE", value: "Oct – Dec 2024 ~6 weeks" },
  { label: "COMPANY", value: "Banco Azteca\nvia Xtudio (consulting)" },
]

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-5 bg-white px-6 pb-14 pt-10 md:px-16">
      <Link
        to="/"
        className="mb-2 inline-block text-sm text-aza-muted transition-colors hover:text-aza-green"
      >
        ← All work
      </Link>

      <Reveal delay={0} className="flex flex-wrap items-start gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-aza-border bg-aza-mist px-3 py-1.5 text-[11px] font-medium text-aza-muted"
          >
            {tag}
          </span>
        ))}
      </Reveal>

      <Reveal delay={90}>
        <h1 className="max-w-[1000px] text-4xl font-bold leading-tight text-aza-ink md:text-[52px]">
          Rewards + Gamification System
        </h1>
      </Reveal>

      <Reveal delay={180}>
        <p className="max-w-[860px] text-lg leading-relaxed text-aza-muted md:text-[19px]">
          Banco Azteca customers found it easy to take a loan and confusing to
          pay it back. I redesigned the rewards and progress system so every
          weekly payment showed its real, tangible value — validated with
          5,000 users.
        </p>
      </Reveal>

      <Reveal
        delay={270}
        className="grid w-full grid-cols-2 gap-6 border-t border-transparent pt-7 sm:grid-cols-4"
      >
        {meta.map((item, i) => (
          <div key={item.label} className={i > 0 ? "flex flex-col gap-1.5 border-l border-aza-border pl-6" : "flex flex-col gap-1.5"}>
            <p className="text-[10px] font-bold tracking-[0.04em] text-aza-muted-2">{item.label}</p>
            <p className="whitespace-pre-line text-[13px] font-medium text-aza-ink">{item.value}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={360} className="w-full">
        <img
          src={heroVisual}
          alt="Rewards and gamification screens for Banco Azteca"
          className="mt-2 w-full rounded-2xl bg-aza-mist"
        />
      </Reveal>
    </section>
  )
}
