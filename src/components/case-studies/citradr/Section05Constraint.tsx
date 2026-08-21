import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const chain = [
  {
    tag: "ENTRY",
    constraint: "Regulation forbids embedding a brokerage inside a banking app.",
    soWhat: "Users would have to authenticate twice and could perceive two unrelated brands.",
    decision: "Design a shared login from the outset, so one identity opens either product.",
    emphasis: false,
  },
  {
    tag: "CROSS-SELL",
    constraint: "Cross-selling is a primary business goal, but the products are legally distinct.",
    soWhat: "A hard split kills discovery of the second product.",
    decision: "Introduce both products at first entry, each with a summary of core features and a route into either one.",
    emphasis: true,
  },
  {
    tag: "BRAND",
    constraint: "The brand identity was new and unproven on dense financial data.",
    soWhat: "Status and legibility can pull in opposite directions.",
    decision: "Hold the dark, restrained base for data screens and let the lime accent carry only state and action — never decoration.",
    emphasis: false,
  },
  {
    tag: "IA",
    constraint: "Trading data is heavy: performance, composition, pending orders.",
    soWhat: "Showing everything at once serves the expert and loses the novice.",
    decision: "Open the dashboard with exactly those three data sets, each collapsible, with detail one level down.",
    emphasis: true,
  },
  {
    tag: "SYSTEM",
    constraint: "CIBanco's design system was generic and had no trading patterns.",
    soWhat: "Every new screen risked drifting from the rest of the super app.",
    decision: "Extend the system rather than fork it: CITradR-specific layouts, components and interaction guidelines, documented with specs.",
    emphasis: false,
  },
]

export function Section05Constraint() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-cib-lime px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        theme="lime"
        number="05"
        title="The constraint, and what I decided because of it"
      />

      <div className="flex w-full flex-col gap-3.5 rounded-xl bg-cib-bg-2 px-6 py-9 md:px-12 md:py-11">
        <p className="font-case text-sm font-bold tracking-[0.1em] text-cib-lime">
          THE CONSTRAINT THAT DEFINED THE PROJECT
        </p>
        <p className="font-case text-2xl font-semibold leading-snug text-white md:text-[34px]">
          By law, the trading module could not be embedded inside the bank's
          app. Two separate products, two separate licences — but the
          business goal was cross-selling, which depends on them feeling
          like one.
        </p>
        <p className="font-case text-base leading-relaxed text-[#b9bec3] md:text-lg">
          So the design problem stopped being "where does trading go in the
          app" and became "how does a person move between two apps without
          noticing the seam."
        </p>
      </div>

      <p className="font-case text-2xl font-semibold text-[#2e340b] md:text-[30px]">
        From constraint to decision
      </p>

      <div className="flex w-full flex-col gap-4">
        {chain.map((link, i) => (
          <Reveal
            key={link.tag}
            delay={i * 90}
            className={`flex flex-col gap-5 rounded-[10px] bg-white px-7 py-6 sm:flex-row ${link.emphasis ? "border-2 border-[#aac132]" : "border border-[#aac132]"}`}
          >
            <p className="w-full shrink-0 font-case text-xs font-bold tracking-[0.08em] text-[#2e340b] sm:w-[140px]">
              {link.tag}
            </p>
            <div className="flex flex-1 flex-col gap-1.5">
              <p className="font-case text-xs font-bold tracking-[0.08em] text-[#5c6066]">CONSTRAINT</p>
              <p className="font-case text-base leading-relaxed text-[#575757]">{link.constraint}</p>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <p className="font-case text-xs font-bold tracking-[0.08em] text-[#5c6066]">SO WHAT</p>
              <p className="font-case text-base leading-relaxed text-[#575757]">{link.soWhat}</p>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <p className="font-case text-xs font-bold tracking-[0.08em] text-[#5c6066]">DECISION</p>
              <p className="font-case text-base font-medium leading-relaxed text-[#161719]">{link.decision}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  )
}
