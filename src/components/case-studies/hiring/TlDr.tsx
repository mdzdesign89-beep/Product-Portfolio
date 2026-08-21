import { Reveal } from "@/components/motion/Reveal"
const columns = [
  {
    label: "PROBLEM",
    body: "Recruitment ran on spreadsheets and email. Every PM and HR team kept its own tracking file, candidate documents were scattered, and filling a position took five to six weeks.",
  },
  {
    label: "MY ROLE",
    body: "I joined a project already five months in, as the first designer it ever had, and effectively acted as product owner for the design side across a fifteen-person engineering team.",
  },
  {
    label: "APPROACH",
    body: "Fifteen stakeholder interviews, a Lean UX canvas to force alignment, an information architecture the whole team could argue with, and a prioritisation matrix to sequence an MVP from scratch.",
  },
  {
    label: "OUTCOME",
    body: "Usability score moved 50 → 69 → 76 over two iterations and a design system went to the frontend team. The product never reached production — what this project really produced was a way of working.",
  },
]

export function TlDr() {
  return (
    <Reveal as="section" className="flex flex-col items-start gap-8 bg-hp-teal px-6 py-14 md:px-16">
      <p className="font-case text-base font-bold tracking-[0.1em] text-[#b0d6da]">
        THE CASE IN 30 SECONDS
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={col.label}
            className={i > 0 ? "flex flex-col gap-2.5 border-t border-[#4d7882] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" : "flex flex-col gap-2.5"}
          >
            <p className="font-case text-sm font-bold tracking-[0.08em] text-[#b0d6da]">
              {col.label}
            </p>
            <p className="font-case text-lg leading-relaxed text-[#e5f0f0]">{col.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
