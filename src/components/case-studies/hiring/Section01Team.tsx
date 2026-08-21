import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const team = [
  { n: "9", title: "Backend engineers", body: "Already building against undefined screens", accent: false },
  { n: "4", title: "Frontend engineers", body: "My closest counterparts on the design system", accent: false },
  { n: "2", title: "Product managers", body: "Owned scope; I owned how it got decided", accent: false },
  { n: "1", title: "Designer", body: "Me — the first the project ever had", accent: true },
]

export function Section01Team() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="01"
        title="Walking into a project already in motion"
        subtitle="The project had been running five months with fourteen developers and no designer. My first job was not designing — it was earning the right to change how the team decided things."
      />

      <div className="grid w-full grid-cols-1 divide-y divide-[#4d7882] rounded-xl bg-hp-teal sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {team.map((member) => (
          <div key={member.title} className="flex flex-col gap-1.5 px-7 py-7.5">
            <p className={`font-case text-4xl font-bold ${member.accent ? "text-[#ffbfae]" : "text-white"}`}>
              {member.n}
            </p>
            <p className={`font-case text-lg font-semibold ${member.accent ? "text-[#ffbfae]" : "text-white"}`}>
              {member.title}
            </p>
            <p className="font-case text-sm text-[#b8d4d9]">{member.body}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3.5 rounded-xl border-2 border-hp-teal bg-white px-7.5 py-7">
          <span className="w-fit rounded-full bg-hp-teal px-3 py-1 font-case text-xs font-bold tracking-[0.06em] text-white">
            DIRECTLY RESPONSIBLE
          </span>
          <p className="font-case text-xl font-semibold text-hp-ink">What I owned</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Acting as product owner for the design side: turning stakeholder input into decisions the team could build against.",
              "All research — fifteen interviews, stakeholder mapping, empathy maps, card sorting and a focus group.",
              "Information architecture and the prioritisation matrix that sequenced the MVP.",
              "Wireframes, prototypes, the design system and the handoff to frontend.",
              "Running the usability sessions and deciding what each round changed.",
            ].map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-hp-muted">· {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3.5 rounded-xl border border-hp-border bg-hp-mist px-7.5 py-7">
          <span className="w-fit rounded-full bg-hp-muted-2 px-3 py-1 font-case text-xs font-bold tracking-[0.06em] text-white">
            OUTSIDE MY CONTROL
          </span>
          <p className="font-case text-xl font-semibold text-hp-ink">What I did not own</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "The decision to build the platform, and the five months of engineering that preceded me.",
              "Backlog and sprint scope — held by the two product managers.",
              "Technical architecture and the existing data model.",
              "Access to a UI designer or a second researcher; there were none.",
              "Whether the MVP would be funded to production — it was not.",
            ].map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-hp-muted">· {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 border-l-4 border-hp-rust bg-hp-mist px-7.5 py-6">
        <p className="font-case text-lg font-bold text-hp-ink">The hardest constraint was not the deadline</p>
        <p className="font-case text-lg leading-relaxed text-hp-muted">
          It was that nobody on the team had worked with a designer before.
          Engineers were building screens from tickets, and the two PMs
          were used to deciding on their own. Nothing I proposed would
          survive unless the team understood where it came from — which is
          why almost every artefact in this case study exists to be argued
          with in a room, not to be admired in a portfolio.
        </p>
      </div>
    </Reveal>
  )
}
