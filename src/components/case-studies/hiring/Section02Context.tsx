import { SectionHead } from "./SectionHead"

const stats = [
  { value: "6–8 weeks", title: "To fill a single position", note: "the business problem behind the project" },
  { value: "5 months", title: "Already spent when I joined", note: "fourteen developers, no designer" },
  { value: "0", title: "Shared tracking files", note: "every PM and HR team kept their own spreadsheet" },
  { value: "4", title: "Stakeholder groups to satisfy", note: "recruiters, account managers, PMs, interviewers" },
]

const cards = [
  {
    title: "Background",
    highlight: false,
    items: [
      "An internal product for a software contracting company — the client was the company itself.",
      "Five months of engineering had already happened before any designer joined.",
      "A fourteen-developer team building against requirements, not screens.",
    ],
  },
  {
    title: "The problem",
    highlight: true,
    items: [
      "Recruitment ran on disconnected spreadsheets; every PM and HR area maintained its own.",
      "Candidate documentation was scattered across email, drives and personal files.",
      "All communication and tracking happened by email, so status lived in inboxes.",
      "Booking technical interviewers was a recurring bottleneck.",
    ],
  },
  {
    title: "The challenge",
    highlight: false,
    items: [
      "A short deadline on a product being defined from scratch.",
      "No design mindset in the team — no precedent for research or testing.",
      "I was the only designer, so every artefact had to double as a communication tool.",
    ],
  },
]

export function Section02Context() {
  return (
    <section className="flex flex-col gap-10 bg-hp-teal px-6 py-16 md:px-16 md:py-24">
      <SectionHead theme="dark" number="02" title="Context & the problem" />

      <div className="grid w-full grid-cols-1 divide-y divide-[#4d7882] rounded-xl border border-[#4d7882] bg-hp-teal-2 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.title} className="flex flex-col gap-1.5 px-7.5 py-8">
            <p className="font-case text-4xl font-bold leading-tight text-[#ffbfae]">{stat.value}</p>
            <p className="font-case text-base font-semibold text-white">{stat.title}</p>
            <p className="font-case text-sm text-[#b8d4d9]">{stat.note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col gap-3.5 rounded-xl bg-hp-teal-2 px-7.5 py-7 ${card.highlight ? "border-2 border-[#ffbfae]" : "border border-hp-border"}`}
          >
            <p className="font-case text-xl font-semibold text-white">{card.title}</p>
            <ul className="flex flex-col gap-2">
              {card.items.map((item) => (
                <li key={item} className="font-case text-lg leading-relaxed text-[#c7dbde]">· {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
