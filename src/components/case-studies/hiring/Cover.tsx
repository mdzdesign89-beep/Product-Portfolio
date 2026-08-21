import { Link } from "react-router-dom"
import { Reveal } from "@/components/motion/Reveal"
import { CountUpText } from "@/components/motion/CountUpText"
import coverMockup from "@/assets/case-studies/hiring/cover-macbook.png"

const roles = [
  { label: "MY ROLE", value: "Product Designer, acting as product owner" },
  { label: "TEAM", value: "9 backend, 4 frontend, 2 PMs — and me" },
  { label: "CONTEXT", value: "Internal product, Nov 2023" },
]

const metrics = [
  {
    value: "50 → 76",
    title: "Usability score",
    detail: "across two design iterations",
    note: "Moderated test · 7 recruiters",
  },
  {
    value: "3×",
    title: "Faster to reach the primary action",
    detail: "after redesigning the main CTA",
    note: "Same test, second round",
  },
  {
    value: "1 of 15",
    title: "Designer on the team",
    detail: "no design practice existed before",
    note: "9 backend · 4 frontend · 2 PM",
  },
]

export function Cover() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-16 pt-10 md:px-16 md:pt-14">
      <div className="pointer-events-none absolute -left-16 top-40 h-[420px] w-[480px] bg-hp-block" />
      <Link
        to="/"
        className="relative z-10 mb-14 inline-block text-sm text-hp-muted transition-colors hover:text-hp-rust"
      >
        ← All work
      </Link>
      <div className="relative flex flex-col gap-14 lg:flex-row lg:items-start">
        <div className="flex max-w-[822px] flex-1 flex-col items-start gap-5">
          <Reveal delay={0}>
            <p className="font-case text-base font-bold tracking-[0.06em] text-hp-rust">
              EVIDEN / ATOS · INTERNAL TALENT PLATFORM · 2023
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="font-case text-5xl font-bold leading-[1.12] text-hp-ink md:text-[78px]">
              Hiring Platform
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="font-case text-xl font-light leading-relaxed text-hp-muted md:text-2xl">
              Replacing spreadsheets and email chains with one recruitment
              tool — as the only designer inside a fifteen-person engineering
              team.
            </p>
          </Reveal>

          <Reveal
            delay={270}
            className="flex w-full flex-col gap-6 border-l-4 border-hp-rust px-5.5 py-4 sm:flex-row sm:gap-8"
          >
            {roles.map((role) => (
              <div key={role.label} className="flex flex-1 flex-col gap-1">
                <p className="font-case text-xs font-bold tracking-[0.08em] text-hp-rust">
                  {role.label}
                </p>
                <p className="font-case text-base font-medium text-hp-ink">{role.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={360}
            className="flex w-full flex-col divide-y divide-hp-border sm:flex-row sm:divide-x sm:divide-y-0"
          >
            {metrics.map((metric) => (
              <div key={metric.title} className="flex flex-1 flex-col gap-1 py-4 first:pt-0 sm:px-6.5 sm:py-0 sm:first:pl-0">
                <p className="font-case text-[44px] font-bold leading-tight text-hp-teal">
                  <CountUpText text={metric.value} />
                </p>
                <p className="font-case text-base font-semibold text-hp-ink">{metric.title}</p>
                <p className="font-case text-base text-hp-muted">{metric.detail}</p>
                <p className="font-case text-base text-hp-muted-2">{metric.note}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative w-full min-w-0 max-w-[900px] self-center lg:self-start">
          <img
            src={coverMockup}
            alt="Hiring Platform candidate screening dashboard on a laptop"
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
