const metrics = [
  { value: "−11.1%", label: "Abandonment in the reward\nredemption flow" },
  { value: "+5.3%", label: "Conversion on the same flow" },
  { value: "5,000", label: "Users in the A/B test" },
  { value: "1 loop", label: "Design-to-dev hand-off\n(was multiple rounds)" },
]

export function ImpactBand() {
  return (
    <section className="flex flex-col items-start gap-7 bg-aza-green px-6 py-14 md:px-16">
      <p className="text-[10px] font-bold text-[#d1f0de]">IMPACT</p>
      <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <div key={metric.value} className={i > 0 ? "flex flex-col gap-2 border-l border-[#59bf80] pl-8" : "flex flex-col gap-2"}>
            <p className="text-4xl font-bold leading-tight text-white">{metric.value}</p>
            <p className="whitespace-pre-line text-[13px] text-[#d9f2e3]">{metric.label}</p>
          </div>
        ))}
      </div>
      <p className="max-w-[800px] text-[13px] text-[#d1f0de]">
        Measured through an A/B test run over the redemption flow with
        5,000 Banco Azteca users. Baseline taken from the pre-redesign flow
        over the same period.
      </p>
    </section>
  )
}
