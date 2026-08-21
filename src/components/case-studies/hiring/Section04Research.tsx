import { SectionHead } from "./SectionHead"
import personaNatalia from "@/assets/case-studies/hiring/persona-natalia.png"
import personaAlejandro from "@/assets/case-studies/hiring/persona-alejandro.png"
import userFlows from "@/assets/case-studies/hiring/user-flows.png"
import cardSorting from "@/assets/case-studies/hiring/card-sorting.png"
import { Reveal } from "@/components/motion/Reveal"

const stats = [
  { value: "9", label: "HR recruiters interviewed" },
  { value: "3", label: "Project managers" },
  { value: "3", label: "Account managers" },
  { value: "5", label: "Frameworks applied" },
]

type Quadrant = { label: string; items: string[] }

function PersonaCard({
  photo,
  archetype,
  name,
  role,
  education,
  quote,
  quadrants,
  tools,
}: {
  photo: string
  archetype: string
  name: string
  role: string
  education: string
  quote: string
  quadrants: Quadrant[]
  tools: string[]
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-hp-border">
      <div className="flex flex-col gap-5 p-6.5 sm:flex-row sm:items-center">
        <img src={photo} alt={name} className="h-24 w-24 shrink-0 rounded-xl object-cover" />
        <div className="flex flex-col gap-1.5">
          <span className="w-fit rounded-full bg-hp-mist px-3 py-1 font-case text-xs font-bold tracking-[0.04em] text-hp-muted-2">
            {archetype}
          </span>
          <p className="font-case text-3xl font-bold text-hp-ink">{name}</p>
          <p className="font-case text-lg text-hp-muted">{role}</p>
          <p className="font-case text-sm text-hp-muted-2">{education}</p>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 rounded-xl bg-hp-mist p-5">
          <p className="font-case text-xs font-bold tracking-[0.04em] text-hp-muted-2">IN THEIR WORDS</p>
          <p className="font-case text-lg font-medium text-hp-ink">{quote}</p>
          <p className="font-case text-sm text-hp-muted-2">Synthesised from interviews — not a verbatim quote.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-hp-border border-t border-hp-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {quadrants.map((quad) => (
          <div key={quad.label} className="flex flex-col gap-2 p-6.5">
            <p className="font-case text-sm font-bold tracking-[0.04em] text-hp-ink">{quad.label}</p>
            <ul className="flex flex-col gap-1">
              {quad.items.map((item) => (
                <li key={item} className="font-case text-base leading-relaxed text-hp-muted">· {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-hp-border bg-hp-mist px-6.5 py-4">
        <p className="font-case text-xs font-bold tracking-[0.04em] text-hp-muted-2">TOOLS TODAY</p>
        {tools.map((tool) => (
          <span key={tool} className="rounded border border-hp-border bg-white px-3 py-1.5 font-case text-sm text-hp-ink">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Section04Research() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="04"
        title="Research & the two people it came down to"
        subtitle="Fifteen interviews across three roles, plus card sorting and a focus group. Two personas carried every later decision — not because personas are mandatory, but because the team needed names to argue about."
      />

      <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className={i > 0 ? "flex flex-col gap-1 border-l border-hp-border pl-7" : "flex flex-col gap-1"}>
            <p className="font-case text-4xl font-bold text-hp-teal">{stat.value}</p>
            <p className="font-case text-base font-medium text-hp-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-6">
        <PersonaCard
          photo={personaNatalia}
          archetype="PRIMARY PERSONA"
          name="Natalia, 27"
          role="IT Recruiter"
          education="Education: Bachelor · Interviewed as part of the 9 HR recruiters"
          quote="I spend more time updating the spreadsheet than talking to candidates."
          quadrants={[
            { label: "GOALS", items: ["Deliver on time and at high quality.", "Reach her monthly placement goal.", "Keep good communication with account managers."] },
            { label: "PAIN POINTS", items: ["Has to work through an official platform for screening and tracking positions.", "Fill positions within tight deadlines.", "Candidate information is scattered across files and inboxes.", "Must report to multiple stakeholders at once."] },
            { label: "MOTIVATIONS", items: ["Streamline candidate selection and tracking.", "Find the suitable candidate quickly.", "Professional recognition for the placements she makes."] },
            { label: "FRUSTRATIONS", items: ["Inefficient time management in a high-pressure environment.", "Spends much of the day manually updating and cross-checking Excel.", "No visibility or reliable tracking of where a candidate stands."] },
          ]}
          tools={["Excel", "Email", "Shared drives", "Calendar"]}
        />
        <PersonaCard
          photo={personaAlejandro}
          archetype="SECONDARY PERSONA"
          name="Alejandro, 35"
          role="Account Manager"
          education="Education: MBA · Interviewed as part of the 3 account managers"
          quote="I send emails all day just so everyone knows where a position stands."
          quadrants={[
            { label: "GOALS", items: ["Deliver on time and at high quality.", "Assemble teams based on each specific client.", "Know where his resources are currently working."] },
            { label: "PAIN POINTS", items: ["Constant changes in client requirements.", "The tracking file is complex to maintain.", "Runs several projects simultaneously.", "Has to define the IT role for HR and the skills it needs."] },
            { label: "MOTIVATIONS", items: ["Growth of accounts and stronger client relationships.", "Professional recognition inside the company."] },
            { label: "FRUSTRATIONS", items: ["Sends a stream of emails daily just to keep stakeholders informed.", "The candidate tracking tool is complex to use.", "Has to keep the Excel file updated at the end of every day.", "Struggles to assemble the team on time."] },
          ]}
          tools={["Excel", "Email", "Client reports", "Calendar"]}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3.5 rounded-xl border border-hp-border p-7">
          <p className="font-case text-xl font-semibold text-hp-ink">User flows crossed with jobs to be done</p>
          <p className="font-case text-base leading-relaxed text-hp-muted">
            The process was complex and each role consumed different
            information, so a plain flow was not enough. I merged the flow
            with jobs to be done to make explicit which data each user
            needs at each step — and used it as the map the whole team
            referred to.
          </p>
          <img src={userFlows} alt="User flows crossed with jobs to be done diagram" className="w-full rounded-xl border border-hp-border" />
        </div>
        <div className="flex flex-col gap-3.5 rounded-xl border border-hp-border p-7">
          <p className="font-case text-xl font-semibold text-hp-ink">Card sorting</p>
          <p className="font-case text-base leading-relaxed text-hp-muted">
            Used to settle what belongs on the screening view. It later
            became the evidence for deferring the metrics module that
            account managers wanted and recruiters did not — a decision
            made by data instead of seniority.
          </p>
          <img src={cardSorting} alt="Card sorting results" className="w-full rounded-xl border border-hp-border" />
        </div>
      </div>
    </Reveal>
  )
}
