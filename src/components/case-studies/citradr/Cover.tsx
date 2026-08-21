import { Link } from "react-router-dom"
import { Reveal } from "@/components/motion/Reveal"
import phoneMockup from "@/assets/case-studies/citradr/cover-phone.png"

const roles = [
  { label: "MY ROLE", value: "Sr. UX/UI Designer — owner of the trading module" },
  { label: "TEAM", value: "6 designers: 2 product, 2 support, 1 lead, me" },
  { label: "CHAIN", value: "Xtudio, for Minsait, end client CIBanco" },
]

const metrics = [
  {
    value: "50% → 80%",
    title: "Task completion on first entry",
    detail: "12/24 → 20/25 participants",
    note: "Moderated usability test · 2 variants",
  },
  {
    value: "~100",
    title: "Trading clients at the start",
    detail: "the base the business wanted to grow",
    note: "CIBanco business scope, internal",
  },
  {
    value: "1",
    title: "Design system extension",
    detail: "CITradR patterns, components, guidelines",
    note: "Delivered into CIBanco's system",
  },
]

export function Cover() {
  return (
    <section className="relative overflow-hidden bg-cib-bg px-6 pb-20 pt-10 md:px-16 md:pt-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border-[70px] border-cib-lime opacity-90" />
      <div className="pointer-events-none absolute right-16 top-[500px] hidden h-[200px] w-[200px] bg-cib-lime md:block" />
      <Link
        to="/"
        className="relative z-10 mb-16 inline-block font-case text-sm text-cib-text-dim transition-colors hover:text-cib-lime"
      >
        ← Back to portfolio
      </Link>
      <div className="relative flex flex-col gap-16 lg:flex-row lg:items-start">
        <div className="flex max-w-[1000px] flex-1 flex-col items-start gap-6">
          <Reveal delay={0}>
            <p className="font-case text-base font-bold tracking-[0.06em] text-cib-lime">
              CIBANCO · WEALTH &amp; TRADING · MAR – OCT 2025
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="font-case text-6xl font-bold leading-[1.12] text-white md:text-[92px]">
              CITradR
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="font-case text-2xl font-light leading-relaxed text-[#c7ccd1]">
              Designing the trading module of a bank super app — under a legal
              constraint that kept it a separate product.
            </p>
          </Reveal>

          <Reveal
            delay={270}
            className="flex w-full flex-col gap-6 border-l-4 border-cib-lime px-5 py-4 sm:flex-row sm:gap-10"
          >
            {roles.map((role) => (
              <div key={role.label} className="flex flex-1 flex-col gap-1">
                <p className="font-case text-xs font-bold tracking-[0.08em] text-cib-lime">
                  {role.label}
                </p>
                <p className="font-case text-lg font-medium text-white">{role.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={360}
            className="flex w-full flex-col divide-y divide-cib-border sm:flex-row sm:divide-x sm:divide-y-0"
          >
            {metrics.map((metric) => (
              <div key={metric.title} className="flex flex-1 flex-col gap-1 py-4 first:pt-0 sm:px-7.5 sm:py-0 sm:first:pl-0">
                <p className="font-case text-[46px] font-bold leading-tight text-cib-lime">
                  {metric.value}
                </p>
                <p className="font-case text-lg font-semibold text-white">{metric.title}</p>
                <p className="font-case text-sm text-[#b8bdc2]">{metric.detail}</p>
                <p className="font-case text-sm text-[#797f84]">{metric.note}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative w-full min-w-0 max-w-[420px] self-center lg:self-start">
          <img
            src={phoneMockup}
            alt="CITradR trading app mockup on a phone"
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
