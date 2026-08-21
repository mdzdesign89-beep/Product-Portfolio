import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const columns = [
  {
    title: "Business context",
    items: [
      "Banco Azteca serves a largely underbanked segment whose financial knowledge comes from personal experience and close acquaintances — producing strong confirmation bias.",
      "Customers trust face-to-face interaction with branch employees more than apps or ATMs, so the app had to earn credibility, not assume it.",
      "The business goal was retention: keep customers repaying on time and re-taking loans after the first year.",
    ],
  },
  {
    title: "Constraints",
    items: [
      "The rewards mechanic itself was fixed — I could change how it was communicated, not how it worked.",
      "Existing design system and banking compliance rules on financial copy and disclosures.",
      "Changes had to be testable in an A/B framework, which capped how much of the flow could shift at once.",
      "12-week window shared with a writer, UI designer and frontend team.",
    ],
  },
]

export function Section02Context() {
  return (
    <Reveal as="section" className="flex flex-col gap-8 bg-aza-mist px-6 py-16 md:px-16 md:py-22">
      <SectionHead number="02" title="Context & constraints" />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3.5 rounded-[10px] border border-aza-border bg-white p-6.5">
            <p className="text-lg font-semibold text-aza-ink">{col.title}</p>
            <ul className="flex flex-col gap-2.5">
              {col.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-aza-muted">· {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
