import { SectionHead } from "./SectionHead"
import variantA from "@/assets/case-studies/citradr/variant-a.png"
import variantB from "@/assets/case-studies/citradr/variant-b.png"
import { Reveal } from "@/components/motion/Reveal"

const rows = [
  {
    variant: "A · Card carousel",
    sample: "24 participants",
    method: "Moderated task: reach the trading product",
    failed: "4 entered the wrong section and could not navigate back. 4 spent significant time in the carousel without completing.",
    changed: "Killed the carousel as the primary route and added an explicit back affordance.",
    completion: "12 / 24",
    pct: "50%",
  },
  {
    variant: "B · Split entry",
    sample: "25 participants",
    method: "Same task, revised entry",
    failed: "1 abandoned after entering @CIBanco and could not return — the same navigation gap, now isolated.",
    changed: "Confirmed a persistent back button is required at every hand-off between the two apps.",
    completion: "20 / 25",
    pct: "80%",
  },
]

export function Section07Testing() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-cib-mist-2 px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="07"
        title="How I tested it"
        subtitle="The entry experience carried the whole cross-sell strategy, so it was the thing worth testing. Two variants, real tasks, small samples — stated plainly."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-xl border border-cib-line bg-cib-mist p-6">
          <p className="font-case text-lg text-[#161719]">
            <span className="text-3xl font-bold">A </span>
            <span className="align-middle">Card carousel</span>
          </p>
          <img src={variantA} alt="Variant A — card carousel entry" className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col gap-3 rounded-xl border border-cib-line bg-cib-mist p-6">
          <p className="font-case text-lg text-[#161719]">
            <span className="text-3xl font-bold">B </span>
            <span className="align-middle">Split entry</span>
          </p>
          <img src={variantB} alt="Variant B — split entry" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-2.5 border-l-4 border-cib-olive bg-cib-mist px-7.5 py-6">
        <p className="font-case text-lg font-bold text-[#161719]">What the test had to answer</p>
        {[
          "Do people understand there are two distinct products inside the same entry point?",
          "Can they intuitively find the second product — the findability question behind cross-selling?",
          "What is their overall impression of both offerings side by side?",
        ].map((item) => (
          <p key={item} className="font-case text-lg leading-relaxed text-[#575757]">· {item}</p>
        ))}
      </div>

      <div className="w-full overflow-x-auto rounded-xl border border-cib-line bg-white">
        <table className="w-full min-w-[900px] border-collapse font-case text-sm">
          <thead>
            <tr className="bg-cib-bg-2 text-left">
              {["VARIANT", "SAMPLE & METHOD", "WHAT FAILED", "WHAT I CHANGED", "COMPLETION"].map((h) => (
                <th key={h} className="px-7 py-4.5 text-[13px] font-bold tracking-[0.06em] text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.variant} className="border-t border-cib-line align-top">
                <td className="w-[170px] px-7 py-6 text-base font-semibold text-[#161719]">{row.variant}</td>
                <td className="w-[210px] px-7 py-6 text-base leading-relaxed text-[#575757]">
                  <p>{row.sample}</p>
                  <p>{row.method}</p>
                </td>
                <td className="w-[260px] px-7 py-6 text-base leading-relaxed text-[#575757]">{row.failed}</td>
                <td className="w-[260px] px-7 py-6 text-base leading-relaxed text-[#575757]">{row.changed}</td>
                <td className="px-7 py-6">
                  <p className="font-case text-2xl font-medium text-cib-olive">{row.completion}</p>
                  <p className="font-case text-2xl font-bold text-cib-olive">{row.pct}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex w-full flex-col gap-2 border-l-4 border-[#8a6408] bg-cib-mist px-7.5 py-6">
        <p className="font-case text-lg font-bold text-[#161719]">Being straight about these samples</p>
        <p className="font-case text-lg leading-relaxed text-[#575757]">
          24 and 25 participants, drawn largely from bank employees rather
          than real account holders, in a moderated setting. That is enough
          to find navigation failures — and it did, twice, pointing at the
          same missing back affordance — but not enough to claim a
          statistically significant lift. I would present the 50% → 80% as
          evidence that the second entry design removes a specific failure,
          not as a performance guarantee.
        </p>
      </div>
    </Reveal>
  )
}
