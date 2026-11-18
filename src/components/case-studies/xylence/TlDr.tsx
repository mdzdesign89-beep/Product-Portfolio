import { Reveal } from "@/components/motion/Reveal"
const columns = [
  {
    label: "PROBLEM",
    body: "An engine that ingested everything about a startup — and nothing a person could open. There was an architecture on paper, no product.",
  },
  {
    label: "MY ROLE",
    body: "First designer in the company. I turned the engine into an interface, working inside a vision the founders had already set.",
  },
  {
    label: "APPROACH",
    body: "I could not reach VC analysts, so I used specialised podcasts as interviews plus a major academic survey on how VCs decide. That evidence changed the architecture.",
  },
  {
    label: "OUTCOME",
    body: "Soundboard's screens, a navigation I redefined, and a design system whose tokens an AI turns into React. Plus a working prototype built with Claude.",
  },
]

export function TlDr() {
  return (
    <Reveal as="section" className="flex flex-col items-start gap-8 bg-cs-bg-3 px-6 py-14 md:px-16">
      <p className="font-case text-base font-bold tracking-[0.1em] text-cs-gold">
        THE CASE IN 30 SECONDS
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={col.label}
            className={i > 0 ? "flex flex-col gap-2.5 border-t border-[#5d5d5d] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" : "flex flex-col gap-2.5"}
          >
            <p className="font-case text-sm font-bold tracking-[0.08em] text-cs-gold">
              {col.label}
            </p>
            <p className="font-case text-[17px] leading-relaxed text-cs-text">{col.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
