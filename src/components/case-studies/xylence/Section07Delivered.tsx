import { SectionHead } from "./SectionHead"

const deliverables = [
  {
    value: "7",
    title: "Soundboard moduls designed",
    body: "Home, Portafolio, Pipeline, Startups Explorer, Copilot, Network, Settings",
    highlight: false,
  },
  {
    value: "−2 / +2",
    title: "Changes to the inherited architecture",
    body: "Memory and Intelligence dissolved; Startups Explorer and Copilot added",
    highlight: false,
  },
  {
    value: "1",
    title: "Machine-readable design system",
    body: "Tokens and components an AI compiles into production React",
    highlight: false,
  },
  {
    value: "1",
    title: "Functional prototype",
    body: "Built directly with Claude on the same primitives as production",
    highlight: true,
  },
]

export function Section07Delivered() {
  return (
    <section className="flex flex-col gap-10 bg-cs-bg px-6 py-16 md:px-16 md:py-24">
      <SectionHead number="07" title="What was delivered — and what cannot be claimed" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {deliverables.map((item) => (
          <div
            key={item.title}
            className={`flex flex-col gap-2 rounded-xl border p-7 ${item.highlight ? "border-2 border-cs-gold" : "border-cs-border"} bg-cs-bg-2`}
          >
            <p className="font-case text-[42px] font-bold leading-tight text-cs-gold">{item.value}</p>
            <p className="font-case text-[17px] font-semibold text-white">{item.title}</p>
            <p className="font-case text-[15px] leading-relaxed text-cs-text">{item.body}</p>
            <span className="mt-1 w-fit rounded-full bg-cs-border px-2.5 py-1 font-case text-[10px] font-bold text-cs-text">
              DELIVERED
            </span>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-3.5 rounded-xl border-l-[3px] border-cs-amber bg-cs-bg-3 px-6 py-8 md:px-11 md:py-9">
        <p className="font-case text-xs font-bold tracking-[0.1em] text-cs-amber">
          WHAT THIS CASE DOES NOT PROVE
        </p>
        <p className="font-case text-xl font-medium leading-snug text-white md:text-[28px]">
          Every number above counts something I made, not something a user did.
        </p>
        <p className="font-case text-base leading-relaxed text-cs-text md:text-[17px]">
          The product is still being built, so there is no adoption figure,
          no task-completion rate, no retention curve — and I have not
          tested a single one of these screens with a real VC analyst. I
          also did not define the product vision or the naming; those came
          from the founders, and section 04 says so plainly. What I can
          defend is the reasoning behind the interface: an architecture I
          changed because the evidence said to, screens that hold up under
          dense financial data, and a system that an agent can build from.
        </p>
      </div>
    </section>
  )
}
