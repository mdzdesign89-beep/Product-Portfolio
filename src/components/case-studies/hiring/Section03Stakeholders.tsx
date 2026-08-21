import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const rows = [
  {
    stakeholder: "IT recruiters",
    needed: "Screen and track candidates fast, without cross-checking spreadsheets by hand.",
    clashed: "Wanted density; account managers wanted summaries on the same screen.",
    kept: "Ran the usability sessions with them directly, so the changes came from their own recordings rather than my opinion.",
  },
  {
    stakeholder: "Account managers",
    needed: "Visibility on where a position stands, without asking anyone.",
    clashed: "Asked for metrics on the screening view that recruiters found irrelevant.",
    kept: "Showed the card-sorting results and agreed to defer metrics to a later sprint rather than argue in the abstract.",
  },
  {
    stakeholder: "Product managers",
    needed: "Scope they could commit to in sprints.",
    clashed: "Needed sequencing; I needed the sequence to follow user value.",
    kept: "Built the prioritisation matrix with them in the room, so the backlog order was a shared output instead of a design request.",
  },
  {
    stakeholder: "Technical interviewers",
    needed: "To be booked without a chain of emails.",
    clashed: "Lowest availability, highest impact on hiring time.",
    kept: "Kept them in the journey map as a first-class actor so their bottleneck stayed visible to everyone else.",
  },
]

const strategies = [
  {
    title: "Interview first, design later",
    body: "I spent the first weeks in fifteen interviews — nine HR, three project managers, three account managers — before proposing a single screen. It bought credibility I could spend later.",
  },
  {
    title: "One artefact per argument",
    body: "Every recurring disagreement got a dedicated artefact: a blueprint for the process, a journey map for the bottlenecks, an architecture diagram for scope. The artefact carried the discussion, not me.",
  },
  {
    title: "Decide in the room, record after",
    body: "Sessions ended with a decision and who made it. Writing it down afterwards meant the same debate did not reopen three sprints later.",
  },
  {
    title: "Test with the people who complained",
    body: "Whoever pushed back hardest became a participant. Watching a recruiter fail a task ended more debates than any deck I could have built.",
  },
]

const canvas = [
  {
    label: "BUSINESS PROBLEM",
    body: "Hiring takes five to six weeks. Technical interviewers are hard to book, stakeholders cannot see where a position stands, and there is no standard tracking file.",
  },
  {
    label: "USERS",
    body: "Junior and senior recruitment specialists, account managers, product managers, technical interviewers.",
  },
  {
    label: "HYPOTHESIS",
    body: "If we replace spreadsheets and email with one tool that concentrates candidate files and links, hiring time drops and adoption is easier than the status quo.",
  },
  {
    label: "MOST IMPORTANT TO LEARN",
    body: "How the process actually works, where it breaks, and what the principal pain points are — before committing engineering to screens.",
  },
  {
    label: "LEAST WORK TO LEARN IT",
    body: "Stakeholder interviews, reading the existing tracking spreadsheets, and a service blueprint. No prototype needed to answer these.",
  },
]

export function Section03Stakeholders() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="03"
        title="Working with stakeholders"
        subtitle="Four groups wanted different things from the same screen. Most of my work was not resolving that in design — it was making the disagreement visible early enough to be settled by people, not by defaults."
      />

      <div className="w-full overflow-x-auto rounded-xl border border-hp-border">
        <table className="w-full min-w-[900px] border-collapse font-case text-sm">
          <thead>
            <tr className="bg-hp-teal text-left">
              {["STAKEHOLDER", "WHAT THEY NEEDED", "WHERE THEY CLASHED", "HOW I KEPT THEM WITH ME"].map((h) => (
                <th key={h} className="px-7 py-4.5 text-[13px] font-bold tracking-[0.06em] text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.stakeholder} className="border-t border-hp-border bg-white align-top">
                <td className="w-[220px] px-7 py-5.5 text-base font-semibold text-hp-ink">{row.stakeholder}</td>
                <td className="px-7 py-5.5 text-base leading-relaxed text-hp-muted">{row.needed}</td>
                <td className="px-7 py-5.5 text-base leading-relaxed text-hp-muted">{row.clashed}</td>
                <td className="px-7 py-5.5 text-base leading-relaxed text-hp-muted">{row.kept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {strategies.map((s) => (
          <div key={s.title} className="flex flex-col gap-2.5 rounded-xl border border-hp-border bg-hp-mist p-6.5">
            <p className="font-case text-lg font-semibold text-hp-ink">{s.title}</p>
            <p className="font-case text-base leading-relaxed text-hp-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-5 rounded-xl bg-hp-block px-6 py-9 md:px-10">
        <p className="font-case text-2xl font-semibold text-hp-ink">
          The Lean UX canvas as an alignment device
        </p>
        <p className="font-case text-lg leading-relaxed text-hp-muted">
          I did not use it because it is a nice framework. I used it because
          it forces four groups to write the same sentence about the
          problem, and because a hypothesis is easier to disagree with than
          a mockup.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {canvas.map((c) => (
            <div key={c.label} className="flex flex-col gap-2 rounded-[10px] bg-white p-5">
              <p className="font-case text-xs font-bold tracking-[0.08em] text-hp-rust">{c.label}</p>
              <p className="font-case text-[15px] leading-relaxed text-hp-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
