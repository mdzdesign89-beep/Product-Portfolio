import { SectionHead } from "./SectionHead"
import { Callout } from "./Callout"

const columns = [
  {
    label: "WHAT I INHERITED",
    labelColor: "text-cs-text-dim",
    text: "text-cs-text",
    body: "The product vision, the naming of the system and its concepts, and a first proposal for how navigation should be organised. Written by the founders, not by me.",
  },
  {
    label: "WHAT I BROUGHT",
    labelColor: "text-cs-gold",
    text: "text-cs-text",
    body: "User research the architecture had never been tested against, and the obligation to make every section survive contact with an actual screen.",
  },
  {
    label: "WHAT CHANGED",
    labelColor: "text-cs-gold",
    text: "text-white",
    body: "Two proposed sections turned out not to be sections at all. Two more were missing entirely. The architecture in the file today is not the one on the page.",
  },
]

const navRows = [
  { proposed: "Home", shipped: "Home", shippedColor: "text-white", why: "Kept. A prioritised feed of what changed since the last visit, not a grid of widgets." },
  { proposed: "Pipeline", shipped: "Pipeline / Deal Flow", shippedColor: "text-white", why: "Kept and kept prominent. Sourcing and evaluation are roughly half an analyst's week." },
  { proposed: "Portfolio", shipped: "Portafolio", shippedColor: "text-white", why: "Kept. Post-investment is a different mental model from pre-investment, even for the same person." },
  { proposed: "Memory", shipped: "— dissolved", shippedColor: "text-[#f87171]", why: "Not a place. The decision trail belongs attached to each startup and each decision, reachable without leaving the task." },
  { proposed: "Intelligence", shipped: "— dissolved", shippedColor: "text-[#f87171]", why: "Not a destination. Signals and benchmarks are context for the thing you are evaluating, not a room you visit on a Friday." },
  { proposed: "Graph", shipped: "Network", shippedColor: "text-white", why: `Renamed. "Network" is the word a VC already uses for the idea; "Graph" is the word an engineer uses.` },
  { proposed: "Workspace", shipped: "Settings", shippedColor: "text-white", why: `Renamed down. "Workspace" sounded strategic for a screen where you manage seats and integrations.` },
  { proposed: "—", shipped: "Startups Explorer", shippedColor: "text-[#4ade80]", why: "Added. The dataset is the product's main asset and there was no way to explore it except through the pipeline you were already in." },
  { proposed: "—", shipped: "Copilot", shippedColor: "text-[#4ade80]", why: "Added to the navigation. Keeping it purely as a cmd+K overlay assumes a power user; a visible home lets a new analyst discover it exists." },
]

export function Section04Architecture() {
  return (
    <section className="flex flex-col gap-11 bg-cs-bg-2 px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="04"
        title="Redefining an architecture I inherited"
        subtitle="The founding team handed me a product architecture on paper: names, sections, principles. My job was to turn it into an interface — and the moment I designed against real user evidence, parts of it stopped holding up."
      />
      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-cs-border sm:grid-cols-3">
        {columns.map((col, i) => (
          <div
            key={col.label}
            className={`flex flex-col gap-2.5 bg-cs-bg-2 p-7.5 ${i > 0 ? "border-t border-cs-border sm:border-l sm:border-t-0" : ""} ${i === 2 ? "bg-cs-bg-3" : ""}`}
          >
            <p className={`font-case text-xs font-bold tracking-[0.08em] ${col.labelColor}`}>{col.label}</p>
            <p className={`font-case text-base leading-relaxed ${col.text}`}>{col.body}</p>
          </div>
        ))}
      </div>

      <Callout
        eyebrow="THE DECISION THAT CHANGED THE ARCHITECTURE"
        headline="Memory and Intelligence were proposed as two of the seven sections. They are not places you go. They are properties of the whole system."
        body={`The research made this obvious once I went looking. Nobody in the interview corpus ever described "going to check the fund's memory" — they described wanting to know why they passed on something, at the moment they were staring at a similar startup. Same with intelligence: signals and benchmarks are close to worthless as a destination and valuable as context attached to whatever you are already evaluating. A section forces the user to leave the task to get what the task needs, which is backwards. So I dissolved both: the decision trail lives inside every startup and every decision, and signals surface where the work is happening. Arguing to remove a section is harder than arguing to add one — it looks like you are taking something away. What you are taking away is a detour.`}
      />

      <p className="font-case text-2xl font-semibold text-white">
        Proposed on paper vs. shipped in the file
      </p>
      <div className="w-full overflow-x-auto rounded-xl border border-cs-border bg-cs-bg">
        <table className="w-full min-w-[800px] border-collapse font-case text-sm">
          <thead>
            <tr className="bg-cs-bg-3 text-left">
              {["PROPOSED", "SHIPPED", "WHY IT CHANGED"].map((h) => (
                <th key={h} className="px-7 py-4.5 text-[13px] font-bold tracking-[0.06em] text-cs-gold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {navRows.map((row) => (
              <tr key={row.proposed + row.shipped} className="border-t border-cs-border align-top">
                <td className="w-[220px] px-7 py-5.5 text-base font-semibold text-cs-text-dim">{row.proposed}</td>
                <td className={`w-[240px] px-7 py-5.5 text-base font-semibold ${row.shippedColor}`}>{row.shipped}</td>
                <td className="px-7 py-5.5 text-base leading-relaxed text-cs-text">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
