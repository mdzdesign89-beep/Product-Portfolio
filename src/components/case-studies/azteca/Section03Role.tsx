import { SectionHead } from "./SectionHead"

export function Section03Role() {
  return (
    <section className="flex flex-col gap-8 bg-white px-6 py-16 md:px-16 md:py-22">
      <SectionHead
        number="03"
        title="My role"
        subtitle="I was the Product Designer on a four-person design team. I owned the research, the interface logic and the UX writing of the reward component; the UI designer owned visual execution and the writer owned campaign-level copy. I ran the A/B test with the business and data teams."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-[10px] border-[1.5px] border-aza-green p-6.5">
          <p className="text-lg font-semibold text-aza-ink">What I owned</p>
          <p className="text-xs text-aza-muted-2">Directly responsible</p>
          <ul className="flex flex-col gap-2">
            {[
              "User research: surveys, interviews and synthesis of financial habits and gamification behaviour.",
              "Problem framing and the hypothesis behind the redesign.",
              "Information architecture of the payment-progress and rewards module.",
              "UX writing for the component — the message hierarchy that replaced the redundant copy.",
              "Prototyping in Figma and the A/B test design with business and data.",
            ].map((item) => (
              <li key={item} className="text-sm leading-relaxed text-aza-muted">· {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-[10px] border border-aza-border bg-aza-mist p-6.5">
          <p className="text-lg font-semibold text-aza-ink">What the team owned</p>
          <p className="text-xs text-aza-muted-2">Collaborated, did not own</p>
          <ul className="flex flex-col gap-2">
            {[
              "Final visual design and design-system compliance — UI designer.",
              "Campaign-level and marketing copy — UX writer.",
              "Implementation and instrumentation — frontend and data teams.",
              "The rewards mechanic and its financial rules — business stakeholders.",
            ].map((item) => (
              <li key={item} className="text-sm leading-relaxed text-aza-muted">· {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 border-l-4 border-aza-green bg-aza-mist px-7 py-5.5">
        <p className="text-[13px] font-bold text-aza-ink">How we worked</p>
        <p className="text-sm leading-relaxed text-aza-muted">
          Weekly design critique with the UI designer and writer, bi-weekly
          review with business stakeholders, and a shared Kanban board with
          frontend to keep scope and progress visible. Research findings
          were presented once and then referenced as the decision record
          for every later trade-off.
        </p>
      </div>
    </section>
  )
}
