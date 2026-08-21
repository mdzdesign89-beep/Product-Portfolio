import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const rows = [
  {
    source: "Market, industry & trend analysis",
    whose: "Minsait",
    could: "Sizing, competitor patterns and the business case behind the super app.",
    couldNot: "Anything about how CIBanco's own clients behave in the product.",
  },
  {
    source: "Heuristic analysis (Nielsen)",
    whose: "Mine",
    could: "Concrete usability debt in the existing app, independent of opinion.",
    couldNot: "Whether those problems actually cost the business anything.",
  },
  {
    source: "Interviews with bank employees",
    whose: "Mine",
    could: "Domain language, edge cases, and how advisors explain products. This group became the pillar for testing.",
    couldNot: "Real client motivation — employees know the product too well to be naive users.",
  },
  {
    source: "App store reviews",
    whose: "Mine",
    could: "Unprompted pain points from the existing app, in users' own words.",
    couldNot: "A representative view — reviewers skew to the extremes.",
  },
  {
    source: "Surveys to the user base",
    whose: "Mine",
    could: "A broad, qualitative read on expectations of the app.",
    couldNot: "Behaviour. Self-report only, no observation, no analytics to cross-check.",
  },
]

export function Section03Evidence() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="03"
        title="Evidence, and where it came from"
        subtitle={`CIBanco gave us data, not access. There were no customer-listening tools and no way to reach the actual account holders. The honest framing is not "my research" but "which source could answer what."`}
      />

      <div className="w-full overflow-x-auto rounded-xl border border-cib-line">
        <table className="w-full min-w-[900px] border-collapse font-case text-sm">
          <thead>
            <tr className="bg-cib-bg-2 text-left">
              {["SOURCE", "WHOSE", "WHAT IT COULD TELL ME", "WHAT IT COULD NOT"].map((h) => (
                <th key={h} className="px-7 py-4.5 text-[13px] font-bold tracking-[0.06em] text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.source} className="border-t border-cib-line bg-white align-top">
                <td className="w-[260px] px-7 py-5.5 text-base font-semibold text-[#161719]">{row.source}</td>
                <td className="w-[160px] px-7 py-5.5 text-base text-[#575757]">{row.whose}</td>
                <td className="px-7 py-5.5 text-base leading-relaxed text-[#575757]">{row.could}</td>
                <td className="px-7 py-5.5 text-base leading-relaxed text-[#575757]">{row.couldNot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex w-full flex-col gap-2 border-l-4 border-[#c0471f] bg-cib-mist px-7.5 py-6">
        <p className="font-case text-lg font-bold text-[#161719]">Why I chose an extreme-users method</p>
        <p className="font-case text-lg leading-relaxed text-[#575757]">
          With no representative sample available, averaging was not an
          option — I would only have averaged my own assumptions. Designing
          for the two ends of the spectrum instead (the seasoned trader and
          the first-time investor) surfaces friction that a mid-point
          persona hides, and the resulting design covers the middle by
          construction. It is a deliberate response to a sampling
          constraint, not a preference.
        </p>
      </div>
    </Reveal>
  )
}
