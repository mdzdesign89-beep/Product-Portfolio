import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const metrics = [
  { value: "−11.1%", title: "Abandonment", detail: "Reward redemption flow, variant vs control" },
  { value: "+5.3%", title: "Conversion", detail: "Completed redemptions on the same flow" },
  { value: "5,000", title: "Users tested", detail: "Split across control and variant" },
]

const outcomes = [
  { title: "Relevant rewards", body: "The value of the rewards system became legible: users could state what they had earned and what it was worth." },
  { title: "User understanding", body: "Awareness of payment-mission status rose — people knew where they stood in the cycle without opening support." },
  { title: "Retention signal", body: "The business case was repeat lending after year one; early behaviour pointed the right way, but this needed a longer window than the project had." },
]

export function Section05Results() {
  return (
    <Reveal as="section" className="flex flex-col gap-8 bg-white px-6 py-16 md:px-16 md:py-22">
      <SectionHead number="05" title="Results" subtitle="What the test returned, and what it did not." />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.title} className="flex flex-col gap-1.5 rounded-[10px] border border-aza-border bg-aza-mist p-6.5">
            <p className="text-4xl font-bold leading-tight text-aza-ink">{metric.value}</p>
            <p className="text-[15px] font-semibold text-aza-ink">{metric.title}</p>
            <p className="text-[13px] text-aza-muted">{metric.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {outcomes.map((outcome) => (
          <div key={outcome.title} className="flex flex-col gap-2.5 rounded-[10px] border border-aza-border p-6">
            <p className="text-base font-semibold text-aza-ink">{outcome.title}</p>
            <p className="text-sm leading-relaxed text-aza-muted">{outcome.body}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-2 border-l-4 border-aza-muted-2 bg-aza-mist px-7 py-5.5">
        <p className="text-[13px] font-bold text-aza-ink">What the test could not prove</p>
        <p className="text-sm leading-relaxed text-aza-muted">
          The redesign moved the redemption flow, not repayment behaviour
          itself. Whether clearer rewards actually reduce late payments
          over a full loan cycle needs a longer observation window and a
          different metric than the one we instrumented.
        </p>
      </div>
    </Reveal>
  )
}
