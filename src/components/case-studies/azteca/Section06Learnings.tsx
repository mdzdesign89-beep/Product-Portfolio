import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const learnings = [
  {
    title: "Abstract rewards do not motivate this segment",
    body: "Points and badges read as noise. The moment the reward was expressed in pesos, the behaviour changed. Research told us this before we designed anything — the win came from listening, not from inventing.",
  },
  {
    title: "Subtraction beat addition",
    body: "The strongest change was removing a duplicated message and collapsing two indicators into one. I came in expecting to add a gamification layer and left having mostly taken things away.",
  },
  {
    title: "Trust is a design constraint, not a given",
    body: `This audience trusts people over interfaces. Any element that felt like marketing lowered credibility, which is why compliance detail moved behind "Conocer más" instead of being hidden.`,
  },
]

const differently = [
  "Instrument repayment behaviour from day one, not just flow completion — we optimised the metric we could measure rather than the one the business cared about.",
  "Run a small qualitative round after the A/B test. We know what changed, but not precisely why the variant worked; a handful of interviews would have closed that gap cheaply.",
  "Involve the frontend team during IA, not after. Two of the layout decisions had to be simplified late because of implementation cost.",
]

export function Section06Learnings() {
  return (
    <Reveal as="section" className="flex flex-col gap-8 bg-aza-mist px-6 py-16 md:px-16 md:py-22">
      <SectionHead number="06" title="Learnings" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {learnings.map((item) => (
          <div key={item.title} className="flex flex-col gap-2.5 rounded-[10px] border border-aza-border bg-white p-6.5">
            <p className="text-lg font-semibold text-aza-ink">{item.title}</p>
            <p className="text-sm leading-relaxed text-aza-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-3 border-l-4 border-aza-green bg-white px-7 py-6">
        <p className="text-[15px] font-bold text-aza-ink">What I would do differently</p>
        <ul className="flex flex-col gap-2">
          {differently.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-aza-muted">· {item}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
