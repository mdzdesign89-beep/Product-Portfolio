import { SectionHead } from "./SectionHead"
import { BeforeAfterSlider } from "@/components/motion/BeforeAfterSlider"
import processDiagram from "@/assets/case-studies/azteca/process-diagram.png"
import fieldResearch from "@/assets/case-studies/azteca/field-research.png"
import iaBefore from "@/assets/case-studies/azteca/ia-before.png"
import iaAfter from "@/assets/case-studies/azteca/ia-after.png"
import rewardComponent from "@/assets/case-studies/azteca/reward-component.png"
import finalScreens from "@/assets/case-studies/azteca/final-screens.png"
import { Reveal } from "@/components/motion/Reveal"

function StepHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex items-center rounded-full bg-aza-green px-2.5 py-1 text-[10px] font-bold text-white">
        {n}
      </span>
      <p className="text-xl font-bold text-aza-ink sm:text-2xl">{title}</p>
    </div>
  )
}

const researchFindings = [
  {
    title: "Financial habits",
    body: "Knowledge comes from personal experience and close acquaintances, producing confirmation bias. Trust sits with branch employees more than with apps or ATMs.",
  },
  {
    title: "Gamification behaviour",
    body: "Responds to clear, tangible incentives — discounts and prizes. Prefers short-term, achievable goals with visual feedback over long-horizon rewards.",
  },
  {
    title: "Motivation",
    body: "Driven by practical benefit: paying less interest, getting free products. Abstract points and badges did not register as value.",
  },
]

const quotes = [
  `"If they explain it to me calmly, I do understand; I just want something that doesn't complicate my life and helps me move forward."`,
  `"Sometimes I fall behind because I don't have the money, or I forget; then it's a hassle to catch up and they charge me extra."`,
  `"Getting a loan from Banco Azteca is very easy, but paying it back is complicated."`,
]

const decisions = [
  {
    title: "Payment progress as a single object",
    body: "Four check marks replace a counter, giving a holistic status instead of duplicated numbers.",
  },
  {
    title: "Gems as an intermediate currency",
    body: "Research showed abstract points fail — gems only work because they are immediately converted.",
  },
  {
    title: "Monetary equivalence, always visible",
    body: `"$40" is the extrinsic reward this segment responds to. It turns an abstract benefit into a decision.`,
  },
  {
    title: "One motivational line, not two",
    body: "Removed the redundant message; the remaining line carries a single job and survives weekly repetition.",
  },
  {
    title: `"Conocer más" as a pressure valve`,
    body: "Compliance detail lives one tap away instead of crowding the primary view.",
  },
]

const testSetup = [
  { label: "SAMPLE", body: "5,000 Banco Azteca app users, split between control and variant." },
  { label: "PRIMARY METRIC", body: "Abandonment rate in the reward redemption flow." },
  { label: "SECONDARY METRIC", body: "Conversion to completed redemption." },
  { label: "GUARDRAIL", body: "No increase in support contacts about rewards." },
]

export function Section04Process() {
  return (
    <Reveal as="section" className="flex flex-col gap-14 bg-white px-6 py-16 md:px-16 md:py-22">
      <SectionHead
        number="04"
        title="Design process"
        subtitle="A conversion-rate-optimization loop: understand the behaviour, form a hypothesis, restructure the information, then prove it with a test rather than an opinion."
      />

      <img src={processDiagram} alt="Design process diagram: research, optimization, solution, evaluation" className="w-full rounded-xl border border-aza-border" />

      <div className="flex flex-col gap-4">
        <StepHead n="01" title="Research — how this segment actually behaves" />
        <p className="max-w-[900px] text-[15px] leading-relaxed text-aza-muted">
          Surveys plus in-depth interviews with Banco Azteca borrowers,
          focused on two things: how they form financial decisions, and
          what actually motivates repeat behaviour.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {researchFindings.map((finding) => (
            <div key={finding.title} className="flex flex-col gap-2.5 rounded-[10px] border border-aza-border p-6">
              <p className="text-base font-semibold text-aza-ink">{finding.title}</p>
              <p className="text-sm leading-relaxed text-aza-muted">{finding.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 sm:flex-row">
          <img src={fieldResearch} alt="Field research photo" className="h-[280px] w-full rounded-xl object-cover sm:h-auto sm:max-w-[420px]" />
          <div className="flex flex-1 flex-col gap-4 rounded-xl bg-aza-mist p-7">
            <p className="text-base font-semibold text-[#2e3032]">What they said</p>
            {quotes.map((quote) => (
              <p key={quote} className="text-sm leading-relaxed text-[#6c7385]">{quote}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <StepHead n="02" title="Hypothesis & information architecture" />
        <div className="flex w-full flex-col gap-2 border-l-4 border-aza-green px-7 py-6">
          <p className="text-[10px] font-bold text-aza-green">HYPOTHESIS</p>
          <p className="text-lg font-medium text-aza-ink">
            If we replace repeated motivational copy with a single view
            that shows payments made, gems accumulated and their
            equivalent in money, then users will understand what they have
            earned and complete the redemption flow instead of abandoning
            it.
          </p>
        </div>
        <p className="max-w-[900px] text-[15px] leading-relaxed text-aza-muted">
          The restructure was mostly subtractive: remove the duplicated
          message, collapse payment count and reward status into one
          progress object, and add the one thing that was missing —
          monetary equivalence.
        </p>
        <div className="flex flex-col gap-4 rounded-xl border border-aza-border bg-aza-mist p-6">
          <BeforeAfterSlider
            before={iaBefore}
            after={iaAfter}
            beforeAlt="Before: payment mission card showing only a check-mark counter"
            afterAlt="After: one card showing payments, gems and monetary equivalence"
            className="text-aza-muted"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <p className="text-[13px] leading-relaxed text-[#6c7385]">
              <strong className="font-semibold text-aza-ink">BEFORE —</strong>{" "}
              Payment count only. The mission title repeats inside the
              card, and the reward is never expressed as a value — the
              user cannot tell what four check marks are worth.
            </p>
            <p className="text-[13px] leading-relaxed text-[#6c7385]">
              <strong className="font-semibold text-aza-ink">AFTER —</strong>{" "}
              One object carries payments, gems and monetary equivalence.
              Progress, reward and value are read in a single glance, with
              compliance detail behind "Conocer más".
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <StepHead n="03" title="The solution" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <img src={rewardComponent} alt="Before and after of the reward component" className="w-full rounded-xl" />
          <div className="flex flex-col gap-3.5 rounded-[10px] border border-aza-border p-6.5">
            <p className="text-lg font-semibold text-aza-ink">Design decisions & why</p>
            {decisions.map((decision) => (
              <div key={decision.title} className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-aza-ink">{decision.title}</p>
                <p className="text-[13px] leading-relaxed text-aza-muted">{decision.body}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={finalScreens} alt="Final screens: loan summary, rewards view and progress component" className="w-full rounded-xl" />
        <p className="text-sm text-aza-muted">
          Final screens — loan summary, rewards view and the redesigned
          progress component.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <StepHead n="04" title="Validation — A/B test" />
        <p className="max-w-[900px] text-[15px] leading-relaxed text-aza-muted">
          The redesign shipped as a variant against the existing flow.
          5,000 users, same period, same segment, one primary metric:
          completion of the reward redemption flow.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testSetup.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 rounded-[10px] border border-aza-border p-5">
              <p className="text-[10px] font-bold text-aza-muted-2">{item.label}</p>
              <p className="text-[13px] leading-relaxed text-aza-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
