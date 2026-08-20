import { SectionHead } from "./SectionHead"

const results = [
  {
    value: "50% → 80%",
    title: "Task completion on first entry",
    detail: "12/24 → 20/25 participants",
    note: "Moderated usability test, two variants",
    tag: "DIRECTIONAL",
    tagBg: "bg-[#8a6408]",
    highlight: true,
  },
  {
    value: "1 fix",
    title: "A persistent back button",
    detail: "the single failure both rounds surfaced",
    note: "Found in variant A, confirmed in variant B",
    tag: "DELIVERED",
    tagBg: "bg-cib-border",
    highlight: false,
  },
  {
    value: "3",
    title: "Data sets on the dashboard",
    detail: "performance, composition, pending orders",
    note: "Reduced from an open-ended requirement",
    tag: "DELIVERED",
    tagBg: "bg-cib-border",
    highlight: false,
  },
  {
    value: "1",
    title: "Design-system extension",
    detail: "CITradR layouts, components, guidelines",
    note: "Delivered into CIBanco's system",
    tag: "DELIVERED",
    tagBg: "bg-cib-border",
    highlight: false,
  },
]

const qualitative = [
  {
    title: "What the work achieved",
    body: "A trading module that met the brand brief on dense financial data, a dashboard reduced to the three questions both user extremes need, and a design-system contribution the rest of the programme could build on.",
    border: "border border-cib-border",
  },
  {
    title: "What I could not prove",
    body: "No live traffic, ever. AOV, acquisition, cross-selling and GTV were the business goals, and not one of them was measurable before the product was cancelled. The usability signal is the only evidence I have.",
    border: "border-l-4 border-[#f2ba3d]",
  },
  {
    title: "The honest limit of the sample",
    body: "Testing leaned on bank employees. They know the domain, which makes them useful for edge cases and terrible for measuring first-time comprehension. A real client sample would likely have produced worse completion rates.",
    border: "border-l-4 border-[#f2ba3d]",
  },
]

export function Section08Results() {
  return (
    <section className="flex flex-col gap-10 bg-cib-bg-2 px-6 py-16 md:px-16 md:py-24">
      <SectionHead theme="dark" number="08" title="Results" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((result) => (
          <div
            key={result.title}
            className={`flex flex-col gap-2 rounded-xl bg-cib-bg-3 p-7 ${result.highlight ? "border-2 border-cib-lime" : "border border-cib-border"}`}
          >
            <p className={`font-case text-[44px] font-bold leading-tight ${result.highlight ? "text-cib-lime" : "text-white"}`}>
              {result.value}
            </p>
            <p className="font-case text-lg font-semibold text-white">{result.title}</p>
            <p className="font-case text-base text-[#b9bec3]">{result.detail}</p>
            <div className="h-px w-full bg-cib-border" />
            <p className="font-case text-sm text-[#8b9096]">{result.note}</p>
            <span className={`w-fit rounded-full ${result.tagBg} px-2.5 py-1 font-case text-xs font-bold text-white`}>
              {result.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {qualitative.map((item) => (
          <div key={item.title} className={`flex flex-col gap-2.5 rounded-xl bg-cib-bg-3 px-7 py-6.5 ${item.border}`}>
            <p className="font-case text-xl font-semibold text-white">{item.title}</p>
            <p className="font-case text-base leading-relaxed text-[#b9bec3]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
