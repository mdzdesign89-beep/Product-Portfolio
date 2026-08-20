import { SectionHead } from "./SectionHead"

const findings = [
  {
    n: "FINDING 01",
    title: "Redundant writing",
    body: "Two lines carried the same motivational message. Because the task repeats every week, the copy went stale fast and users stopped reading it.",
  },
  {
    n: "FINDING 02",
    title: "Incomplete system status",
    body: "The UI showed only the number of payments made — duplicating information instead of giving a holistic view of progress toward the reward.",
  },
  {
    n: "FINDING 03",
    title: "Reward value never surfaced",
    body: `The accumulated benefit existed in the backend but was never translated into money. Users could not answer "what have I earned so far?"`,
  },
]

export function Section01Problem() {
  return (
    <section className="flex flex-col gap-8 bg-white px-6 py-16 md:px-16 md:py-22">
      <SectionHead
        number="01"
        title="The problem"
        subtitle="Banco Azteca had launched a rewards program that discounted interest when customers paid their weekly loan installments on time. The mechanic worked. The interface did not communicate it — so people kept missing payments they were financially motivated to make."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {findings.map((finding) => (
          <div key={finding.title} className="flex flex-col gap-2.5 rounded-[10px] border border-aza-border p-6">
            <p className="text-[10px] font-bold text-aza-muted-2">{finding.n}</p>
            <p className="text-lg font-semibold text-aza-ink">{finding.title}</p>
            <p className="text-sm leading-relaxed text-aza-muted">{finding.body}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-2.5 border-l-4 border-aza-green bg-aza-mist px-7 py-6">
        <p className="text-xl font-semibold text-aza-ink">
          "Getting a loan from Banco Azteca is very easy, but paying it back is complicated."
        </p>
        <p className="text-[13px] text-aza-muted">
          Recurring sentiment across interviews — the sentence that framed the whole project.
        </p>
      </div>
    </section>
  )
}
