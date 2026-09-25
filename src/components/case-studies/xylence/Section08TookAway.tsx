import { SectionHead } from "./SectionHead"
import { Callout } from "./Callout"
import { Reveal } from "@/components/motion/Reveal"

const learnings = [
  {
    title: "Removing a section is the hard argument",
    body: "Adding a feature is easy to sell; removing one looks like loss. Dissolving Memory and Intelligence took evidence, not taste.",
  },
  {
    title: "Learn the layer below yours",
    body: "My best decision all year was invisible from a canvas: aligning endpoint names with the data warehouse. It only happened because I asked the data team how things actually connect.",
  },
  {
    title: "A design system for AI agent",
    body: "When an agent reads your documentation, vagueness has an immediate cost. It made me more rigorous than any handoff ritual ever did.",
  },
  {
    title: "Secondary research beats invented users",
    body: "Podcasts and an academic survey gave me a vocabulary and a decision model to design against. Not equivalent to real users — but better than inventing them.",
  },
]

const differently = [
  "Smuggle the alignment into artefacts they already needed, instead of asking for a separate session that was easy to say no to.",
  "Write the priority order down after every decision, so the same debate could not quietly reopen the following week.",
  "Get even a handful of real analysts in front of a prototype, rather than waiting for research access that was never going to be granted.",
]

const heading = [
  "Trust Layer patterns extended so every generated output carries its evidence, confidence and gaps by default.",
  "Echo and Soundboard held symmetric as both grow, so the two cockpits do not drift apart.",
  "The design system evolving alongside the agents that consume it — a system whose main reader is a machine ages differently.",
]

export function Section08TookAway() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-cs-bg-2 px-6 py-16 md:px-16 md:py-24">
      <SectionHead number="08" title="What I took away" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {learnings.map((item) => (
          <div key={item.title} className="flex flex-col gap-2.5 rounded-xl border border-cs-border bg-cs-bg p-7">
            <p className="font-case text-lg font-semibold text-white">{item.title}</p>
            <p className="font-case text-base leading-relaxed text-cs-text">{item.body}</p>
          </div>
        ))}
      </div>

      <Callout
        eyebrow="THE ARGUMENT I DID NOT WIN"
        headline="What I pushed for was not user testing. It was workshops — to align the founding team on objectives, on what the product actually is, and on what gets built first. That never happened."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3 border-l-[3px] border-cs-gold bg-cs-bg-3 px-7.5 py-6.5">
          <p className="font-case text-xl font-bold text-white">What I would do differently</p>
          <ul className="flex flex-col gap-2.5">
            {differently.map((item) => (
              <li key={item} className="font-case text-base leading-relaxed text-cs-text">· {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-l-[3px] border-cs-text-dim bg-cs-bg-3 px-7.5 py-6.5">
          <p className="font-case text-xl font-bold text-white">Where it is heading</p>
          <ul className="flex flex-col gap-2.5">
            {heading.map((item) => (
              <li key={item} className="font-case text-base leading-relaxed text-cs-text">· {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="max-w-[1300px] font-case text-sm leading-relaxed text-cs-text-dim">
        Cited source: Gompers, Gornall, Kaplan &amp; Strebulaev, "How Venture
        Capitalists Make Decisions," Harvard Business Review 99, no. 2
        (March–April 2021) — a survey of 885 venture capitalists at 681
        firms.
      </p>
    </Reveal>
  )
}
