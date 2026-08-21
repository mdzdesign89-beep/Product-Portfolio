import { SectionHead } from "./SectionHead"
import annotatedScreens from "@/assets/case-studies/hiring/annotated-screens.png"
import contrastHeatmap from "@/assets/case-studies/hiring/contrast-heatmap.jpg"
import { Reveal } from "@/components/motion/Reveal"

const scores = [
  { value: "50", title: "Usability score · Baseline", note: "First prototype, before any iteration", highlight: false },
  { value: "69", title: "Usability score · After iteration 1", note: "Menu, CTA, chips, pagination", highlight: false },
  { value: "76", title: "Usability score · After iteration 2", note: "Contrast, redundant messaging, scope", highlight: true },
]

const rows = [
  {
    round: "01 · Baseline",
    failed: "Users struggled to find the CTA to create a candidate. Chips were too small to scan. Charts failed contrast. A week-number message duplicated the deadline already shown per row.",
    changed: "Rebuilt the primary CTA and moved it into the flow recruiters expected. Enlarged chips for scanning. Fixed contrast. Removed the redundant message so focus stayed on the deadline.",
    score: "50 → 69",
  },
  {
    round: "02 · Iteration 1",
    failed: "Findability across sections was still weak, and the metrics block on screening pulled attention from the task.",
    changed: "Reworked the menu and deployable navigation for findability, based on Nielsen's freedom-and-control heuristic. Added pagination and optimised space. Deferred the metrics module with the team.",
    score: "69 → 76",
  },
  {
    round: "Cross-round finding",
    failed: "The single biggest usability gain came from one element, not from the redesign as a whole.",
    changed: "After the CTA change, users reached the primary action three times faster — the clearest evidence that placement beat visual refinement on this screen.",
    score: "3× faster",
  },
]

export function Section07Testing() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="07"
        title="Testing & iteration"
        subtitle="Seven recruiters, the same four tasks each round: screen a new candidate, find a specific one, change a status, and locate information about them. Every change below came from watching someone fail."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {scores.map((score) => (
          <div
            key={score.title}
            className={`flex flex-col gap-1.5 rounded-xl p-7 ${score.highlight ? "border-2 border-hp-teal bg-hp-teal" : "border border-hp-border bg-hp-mist"}`}
          >
            <p className={`font-case text-[56px] font-bold leading-tight ${score.highlight ? "text-white" : "text-hp-teal"}`}>
              {score.value}
            </p>
            <p className={`font-case text-lg font-semibold ${score.highlight ? "text-white" : "text-hp-ink"}`}>{score.title}</p>
            <p className={`font-case text-[15px] ${score.highlight ? "text-[#c7dbde]" : "text-hp-muted"}`}>{score.note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <img src={annotatedScreens} alt="Tested screens with annotations" className="w-full rounded-xl" />
        <img src={contrastHeatmap} alt="Contrast heatmap from the first round of testing" className="w-full rounded-xl" />
      </div>

      <div className="w-full overflow-x-auto rounded-xl border border-hp-border bg-white">
        <table className="w-full min-w-[900px] border-collapse font-case text-sm">
          <thead>
            <tr className="bg-hp-teal text-left">
              {["ROUND", "WHAT FAILED", "WHAT I CHANGED, AND WHY", "SCORE"].map((h) => (
                <th key={h} className="px-7 py-4.5 text-[13px] font-bold tracking-[0.06em] text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.round} className="border-t border-hp-border align-top">
                <td className="w-[190px] px-7 py-6 text-base font-semibold text-hp-ink">{row.round}</td>
                <td className="px-7 py-6 text-base leading-relaxed text-hp-muted">{row.failed}</td>
                <td className="px-7 py-6 text-base leading-relaxed text-hp-muted">{row.changed}</td>
                <td className="px-7 py-6">
                  <p className="font-case text-base font-medium text-hp-teal">{row.score}</p>
                  <span className="mt-1 inline-block rounded-full bg-[#8a6408] px-2.5 py-1 font-case text-xs font-bold text-white">
                    DIRECTIONAL
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex w-full flex-col gap-2 border-l-4 border-[#8a6408] bg-hp-mist px-7.5 py-6">
        <p className="font-case text-lg font-bold text-hp-ink">Being straight about these scores</p>
        <p className="font-case text-lg leading-relaxed text-hp-muted">
          Seven participants, all internal recruiters, in moderated
          sessions on a prototype. A usability score moving 50 → 76 tells
          you the interface got materially easier to use for the people
          who would use it. It does not tell you hiring got faster,
          because the platform never ran in production long enough to
          measure that. I present these as design evidence, not business
          impact.
        </p>
      </div>
    </Reveal>
  )
}
