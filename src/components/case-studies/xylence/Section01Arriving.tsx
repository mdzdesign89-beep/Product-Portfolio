import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const columns = [
  {
    label: "WHAT EXISTED",
    labelColor: "text-cs-text-dim",
    bg: "bg-cs-bg-2",
    text: "text-cs-text",
    body: (
      <>
        A data ingestion engine, scoring logic, and a team fluent in
        pipelines and models. Deep capability,{" "}
        <strong className="font-semibold text-white">not usable interface.</strong>
      </>
    ),
  },
  {
    label: "WHAT DID NOT",
    labelColor: "text-cs-text-dim",
    bg: "bg-cs-bg-2",
    text: "text-cs-text",
    body: (
      <>
        Any notion of product. No information architecture, no naming,{" "}
        <strong className="font-semibold text-white">no flows, no design system, no user research.</strong>
      </>
    ),
  },
  {
    label: "WHAT I HAD TO LEARN",
    labelColor: "text-cs-text-dim",
    bg: "bg-cs-bg-2",
    text: "text-cs-text",
    body: "The business, the data model, what the engine could plausibly do, and backend and data vocabulary and Github pull request process.",
  },
  {
    label: "WHAT I PRODUCED",
    labelColor: "text-cs-gold",
    bg: "bg-cs-bg-3",
    text: "text-white",
    body: "A coherent system: four named products, one lexicon, navigation with rationale, flows, and a design system engineering could consume.",
  },
]

export function Section01Arriving() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-cs-bg px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="01"
        title="Arriving before the product existed"
        subtitle="When I joined, everything lived in the engine. There was no product notion, no navigation, no shared vocabulary — the company could process data and that platform was not usable."
      />
      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-cs-border sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={col.label}
            className={`flex flex-col gap-2.5 p-7 ${col.bg} ${i > 0 ? "border-t border-cs-border sm:border-l sm:border-t-0" : ""}`}
          >
            <p className={`font-case text-sm font-bold tracking-[0.08em] ${col.labelColor}`}>
              {col.label}
            </p>
            <p className={`font-case text-base leading-relaxed ${col.text}`}>{col.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
