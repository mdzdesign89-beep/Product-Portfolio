import { Link } from "react-router-dom"
import { Reveal } from "@/components/motion/Reveal"
import dashboard from "@/assets/case-studies/xylence/portada-dashboard.png"

const roles = [
  { label: "MY ROLE", value: "AI Product Designer — first designer hired" },
  { label: "I OWNED", value: "Research · Screens · Design system · Prototype" },
  { label: "I WORKED WITH", value: "Product vision from the founders and data already running." },
]

const metrics = [
  {
    value: "−2 sections",
    title: "Dissolved from the proposed architecture",
    detail: "Memory and Intelligence became properties, not places",
  },
  {
    value: "Figma → React",
    title: "Design tokens compiled by AI",
    detail: "straight into the production repository",
  },
  {
    value: "1",
    title: "Functional prototype, built with Claude",
    detail: "clickable product, not a static mockup",
  },
]

export function Cover() {
  return (
    <section className="relative overflow-hidden bg-cs-bg px-6 pb-20 pt-10 md:px-16 md:pt-14">
      <div className="pointer-events-none absolute -right-40 -top-56 h-[560px] w-[560px] rounded-full bg-cs-gold/20 blur-[100px]" />
      <Link
        to="/"
        className="relative mb-16 inline-block font-case text-sm text-cs-text-dim transition-colors hover:text-cs-gold"
      >
        ← Back to portfolio
      </Link>
      <div className="relative flex flex-col gap-16 lg:flex-row lg:items-start">
        <div className="flex max-w-[760px] flex-col items-start gap-6 border-l-[3px] border-cs-gold pl-6">
          <Reveal delay={0}>
            <p className="font-case text-base font-bold tracking-[0.06em] text-cs-gold">
              XYLENCE · AI PRODUCT DESIGN · 2026 – PRESENT
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="font-case text-4xl font-bold leading-[1.12] text-white sm:text-5xl sm:whitespace-nowrap md:text-[76px]">
              Turning a brain
              <br />
              into a product
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="font-case text-xl font-light leading-relaxed text-[#bdbdbd] md:text-[22px]">
              Xylence had an intelligence engine and an architecture on paper. I
              turned it into an interface — and the research changed the
              architecture on the way.
            </p>
          </Reveal>

          <Reveal
            delay={270}
            className="flex w-full flex-col gap-6 border-l-[3px] border-cs-gold px-5 py-4 sm:flex-row sm:gap-8"
          >
            {roles.map((role) => (
              <div key={role.label} className="flex flex-1 flex-col gap-1">
                <p className="font-case text-xs font-bold tracking-[0.08em] text-cs-gold">
                  {role.label}
                </p>
                <p className="font-case text-[15px] font-medium text-white">{role.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={360}
            className="flex w-full flex-col divide-y divide-[#2e2e2e] sm:flex-row sm:divide-x sm:divide-y-0"
          >
            {metrics.map((metric) => (
              <div key={metric.title} className="flex flex-1 flex-col gap-1 py-4 first:pt-0 sm:px-6 sm:py-0 sm:first:pl-0">
                <p className="font-case text-[34px] font-bold leading-tight text-cs-gold">
                  {metric.value}
                </p>
                <p className="font-case text-base font-semibold text-white">{metric.title}</p>
                <p className="font-case text-sm text-cs-text-dim">{metric.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative w-full min-w-0 max-w-[900px] lg:flex-1">
          <img
            src={dashboard}
            alt="Xylence VC intelligence dashboard mockup"
            className="w-full rounded-xl"
          />
        </Reveal>
      </div>
    </section>
  )
}
