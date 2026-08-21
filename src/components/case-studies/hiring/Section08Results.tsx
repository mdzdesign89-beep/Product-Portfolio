import { SectionHead } from "./SectionHead"

const results = [
  {
    value: "50 → 76",
    title: "Usability score",
    detail: "+26 points over two iterations",
    note: "7 recruiters · moderated · prototype",
    tag: "DIRECTIONAL",
    tagBg: "bg-[#8a6408]",
    highlight: true,
  },
  {
    value: "3×",
    title: "Faster to the primary action",
    detail: "after the CTA was relocated",
    note: "Same sessions, second round",
    tag: "DIRECTIONAL",
    tagBg: "bg-[#8a6408]",
    highlight: false,
  },
  {
    value: "1",
    title: "Design system handed over",
    detail: "tokens built with the frontend team",
    note: "Delivered via workshop",
    tag: "DELIVERED",
    tagBg: "bg-[#4d7882]",
    highlight: false,
  },
  {
    value: "4",
    title: "Modules mapped for what comes next",
    detail: "interviews, position creation, rating",
    note: "Architecture, not built",
    tag: "SCOPED",
    tagBg: "bg-[#4d7882]",
    highlight: false,
  },
]

const qualitative = [
  { title: "What I can defend", body: "A usability score that moved 26 points across two measured iterations, with every change traceable to an observed failure.", border: "border border-[#4d7882]" },
  { title: "What I cannot claim", body: "Any effect on the five-to-six week hiring cycle. The platform was an internal MVP that stopped before production.", border: "border-l-4 border-[#8a6408]" },
  { title: "A correction worth making", body: `I have seen this described as a "76% improvement". It is not. 76 is a usability score, up from a baseline of 50 — a +26 point gain, not a 76% lift.`, border: "border-l-4 border-[#8a6408]" },
]

export function Section08Results() {
  return (
    <section className="flex flex-col gap-10 bg-hp-teal px-6 py-16 md:px-16 md:py-24">
      <SectionHead theme="dark" number="08" title="Results — and what they are not" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((result) => (
          <div
            key={result.title}
            className={`flex flex-col gap-2 rounded-xl bg-hp-teal-2 p-7 ${result.highlight ? "border-2 border-[#ffbfae]" : "border border-[#4d7882]"}`}
          >
            <p className={`font-case text-[44px] font-bold leading-tight ${result.highlight ? "text-[#ffbfae]" : "text-white"}`}>
              {result.value}
            </p>
            <p className="font-case text-lg font-semibold text-white">{result.title}</p>
            <p className="font-case text-[15px] text-[#c7dbde]">{result.detail}</p>
            <div className="h-px w-full bg-[#4d7882]" />
            <p className="font-case text-[15px] text-[#9ebdc2]">{result.note}</p>
            <span className={`w-fit rounded-full ${result.tagBg} px-2.5 py-1 font-case text-xs font-bold text-white`}>
              {result.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-3.5 rounded-xl bg-white px-6 py-9 md:px-11">
        <p className="font-case text-sm font-bold tracking-[0.1em] text-hp-rust">THE HONEST FRAMING</p>
        <p className="font-case text-2xl font-semibold text-hp-ink md:text-[30px]">
          This project did not produce a business outcome. It produced a
          designer who could lead one.
        </p>
        <p className="font-case text-lg leading-relaxed text-hp-muted">
          The MVP never reached production, so hiring time never moved and
          no revenue number belongs on this page. What did happen: I
          walked into a fifteen-person engineering team with no design
          practice, acted as product owner for the design side, and left
          behind a research habit, an architecture the team argued with, a
          prioritisation method the PMs kept using, and a design system
          the frontend team owned.{" "}
          <strong className="font-bold text-hp-ink">
            If you are evaluating how I operate inside a team that has
            never worked with a designer, this is the only one that shows
            it and learn to work with what you actually have.
          </strong>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {qualitative.map((item) => (
          <div key={item.title} className={`flex flex-col gap-2.5 rounded-xl bg-hp-teal-2 px-7 py-6.5 ${item.border}`}>
            <p className="font-case text-xl font-semibold text-white">{item.title}</p>
            <p className="font-case text-base leading-relaxed text-[#c7dbde]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
