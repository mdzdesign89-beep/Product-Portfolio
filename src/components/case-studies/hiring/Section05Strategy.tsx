import { SectionHead } from "./SectionHead"
import architectureDiagram from "@/assets/case-studies/hiring/architecture-diagram.png"
import prioritisationMatrix from "@/assets/case-studies/hiring/prioritisation-matrix.png"
import { Reveal } from "@/components/motion/Reveal"

const chain = [
  {
    tag: "SEQUENCING",
    found: "Fifteen interviews said tracking, not screening, was the pain.",
    tension: "Everyone assumed the platform was about evaluating candidates.",
    decision: "Build the candidate board first. Screening depth waits for a later sprint.",
    highlight: true,
  },
  {
    tag: "SCOPE",
    found: "Card sorting showed recruiters ignore metrics while screening.",
    tension: "Account managers had asked for them on that exact screen.",
    decision: "Defer the metrics module. Agreed with the team to revisit in a future sprint rather than ship it unused.",
    highlight: false,
  },
  {
    tag: "TRADE-OFF",
    found: "Technical interviewer booking was the biggest delay in hiring.",
    tension: "But it depended on calendar integrations the team could not commit to yet.",
    decision: "Keep it in the architecture and out of the MVP — visible as a next module, not silently dropped.",
    highlight: true,
  },
  {
    tag: "TEAM",
    found: "Nine backend engineers were already building against undefined screens.",
    tension: "Design decided late would mean rework they would resent.",
    decision: "Deliver the architecture diagram before any high-fidelity screen, so backend had contracts to build against.",
    highlight: false,
  },
  {
    tag: "SYSTEM",
    found: "No design system existed and I was the only designer.",
    tension: "Every new screen risked becoming a one-off.",
    decision: "Build tokens with the frontend team as we went, and run a workshop to hand it over rather than document it alone.",
    highlight: true,
  },
]

export function Section05Strategy() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="05"
        title="Strategy & how things got decided"
        subtitle="A product from scratch with a short deadline means the real design work is sequencing. These are the five decisions that shaped what got built first."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3.5 rounded-xl border border-hp-border bg-hp-mist p-7">
          <p className="font-case text-xl font-semibold text-hp-ink">Information architecture</p>
          <p className="font-case text-base leading-relaxed text-hp-muted">
            This diagram was the alignment tool. It let fourteen
            developers, two PMs and four stakeholder groups see how the
            platform works, what information each screen carries and what
            actions belong where — before anyone wrote a ticket.
          </p>
          <img src={architectureDiagram} alt="Information architecture diagram" className="w-full rounded-xl border border-hp-border bg-white" />
        </div>
        <div className="flex flex-col gap-3.5 rounded-xl border border-hp-border bg-hp-mist p-7">
          <p className="font-case text-xl font-semibold text-hp-ink">Prioritisation matrix</p>
          <p className="font-case text-base leading-relaxed text-hp-muted">
            Built from scratch means everything looks urgent. I ran the
            matrix with the PMs so the sequence came out of business value
            against user need, and the backlog order stopped being a
            negotiation.
          </p>
          <img src={prioritisationMatrix} alt="Prioritisation matrix" className="w-full rounded-xl border border-hp-border bg-white" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        {chain.map((link, i) => (
          <Reveal
            key={link.tag}
            delay={i * 90}
            className={`flex flex-col gap-5 rounded-[10px] px-7 py-6 sm:flex-row ${link.highlight ? "bg-hp-mist border border-hp-border" : "bg-white border border-hp-border"}`}
          >
            <p className="w-full shrink-0 font-case text-xs font-bold tracking-[0.08em] text-hp-rust sm:w-[140px]">
              {link.tag}
            </p>
            <div className="flex flex-1 flex-col gap-1.5">
              <p className="font-case text-xs font-bold tracking-[0.08em] text-hp-muted-2">WHAT I FOUND</p>
              <p className="font-case text-base leading-relaxed text-hp-muted">{link.found}</p>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <p className="font-case text-xs font-bold tracking-[0.08em] text-hp-muted-2">THE TENSION</p>
              <p className="font-case text-base leading-relaxed text-hp-muted">{link.tension}</p>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <p className="font-case text-xs font-bold tracking-[0.08em] text-hp-muted-2">DECISION</p>
              <p className="font-case text-base font-medium leading-relaxed text-hp-ink">{link.decision}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  )
}
