import { SectionHead } from "./SectionHead"

const learnings = [
  {
    title: "Leading without authority is a design skill",
    body: "I had no mandate over fourteen developers and two PMs. Influence came from being the only person who had spoken to all fifteen stakeholders — and from turning that into artefacts they could argue with instead of opinions they had to accept.",
  },
  {
    title: "Agile taught me what design can actually promise",
    body: "Working in sprints alongside engineering forced me to size design work honestly. I learned to bring decisions at the moment the team needed them, not when the file looked finished — which is the habit I have carried into every project since.",
  },
  {
    title: "Technical fluency changed what I proposed",
    body: "Sitting with nine backend engineers taught me which ideas were cheap and which were expensive. I stopped designing screens that were elegant and impossible, and started designing ones the team could commit to in a sprint.",
  },
  {
    title: "Artefacts are for arguing, not for archiving",
    body: "The architecture diagram and prioritisation matrix mattered because people disagreed over them in a room. Every artefact in this project earned its place by settling a debate, and that is the standard I now hold my deliverables to.",
  },
]

const differently = [
  "Establish a usability baseline on the existing spreadsheet workflow before designing, so the 50 had something outside the prototype to compare against.",
  "Involve the frontend team in the architecture stage rather than at handoff — the design system would have started three sprints earlier.",
  "Push to keep one recruiter as a standing participant instead of recruiting seven people fresh each round.",
]

const heading = [
  "Workshop with the frontend team to present the design system and plan its implementation in the beta.",
  "Integrate the design with the MVP and build the next modules: interviews, position creation, candidate rating.",
  "Grow the design team and form a standing user group so research and testing could run at sprint pace.",
]

export function Section09Takeaway() {
  return (
    <section className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead number="09" title="What I took away" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {learnings.map((item) => (
          <div key={item.title} className="flex flex-col gap-2.5 rounded-xl border border-hp-border p-7">
            <p className="font-case text-xl font-semibold text-hp-ink">{item.title}</p>
            <p className="font-case text-base leading-relaxed text-hp-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3 border-l-4 border-hp-rust bg-hp-mist px-7.5 py-6.5">
          <p className="font-case text-xl font-bold text-hp-ink">What I would do differently</p>
          <ul className="flex flex-col gap-2.5">
            {differently.map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-hp-muted">· {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-l-4 border-hp-muted-2 bg-hp-mist px-7.5 py-6.5">
          <p className="font-case text-xl font-bold text-hp-ink">Where it was heading</p>
          <ul className="flex flex-col gap-2.5">
            {heading.map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-hp-muted">· {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
