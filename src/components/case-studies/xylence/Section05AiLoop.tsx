import { SectionHead } from "./SectionHead"
import { Callout } from "./Callout"
import { Reveal } from "@/components/motion/Reveal"

const pipeline = [
  {
    n: "01",
    title: "Tokens",
    body: "Colour, type, spacing and elevation defined as named tokens rather than values, so the same decision has one source of truth in Figma and in the repo.",
  },
  {
    n: "02",
    title: "Components",
    body: "Patterns and interaction guidelines documented to spec level — sizing, padding, gap, radius, states — because an agent cannot infer intent from a picture.",
  },
  {
    n: "03",
    title: "Generation",
    body: "The AI consumes those tokens and components and produces React that already matches the system, instead of an approximation a developer then corrects.",
  },
  {
    n: "04",
    title: "Repo",
    body: "Output goes straight into the repository, so prototypes and production draw on the same primitives and the gap between them stops widening.",
  },
]

const changes = [
  {
    title: "Documentation became executable",
    body: "A component spec used to be a courtesy for developers. Here it is an input to a generator, so ambiguity has an immediate cost. It made me far more precise than any handoff process ever did.",
  },
  {
    title: "The prototype and the product converged",
    body: "Because generation draws on the same tokens, what I prototyped and what shipped stopped being separate artefacts. Feedback loops with engineering went from days to the same afternoon.",
  },
  {
    title: "I had to learn the stack",
    body: "Repositories, how the databases connected, what the agents could and could not do. Not to write production code, but to stop proposing things that were elegant on a canvas and expensive in a pipeline.",
  },
]

export function Section05AiLoop() {
  return (
    <Reveal as="section" className="flex flex-col gap-11 bg-cs-bg px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="05"
        title="Designing so a machine could build it"
        subtitle="AI was in this company from day one, which changed what a design system is for. Mine had two readers: the engineers, and the agents generating the code. Optimising for the second turned out to be the highest-leverage thing I did."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pipeline.map((step) => (
          <div key={step.n} className="flex flex-col gap-2.5 rounded-lg border border-cs-border bg-cs-bg-2 p-7">
            <p className="font-case text-xs font-bold tracking-[0.08em] text-cs-gold">{step.n}</p>
            <p className="font-case text-[22px] font-bold text-white">{step.title}</p>
            <p className="font-case text-base leading-relaxed text-cs-text">{step.body}</p>
          </div>
        ))}
      </div>

      <Callout
        eyebrow="THE DECISION I AM PROUDEST OF"
        bg="bg-cs-bg-3"
        headline="I named the endpoints after the fields the data scientists already used in the database — so the agents stopped burning tokens translating between two vocabularies."
        body="This is not a design decision in the traditional sense, and that is exactly why it mattered. I sat with the data team to understand how the databases connected and which fields were canonical, then made the product's naming inherit theirs instead of inventing a parallel set of labels. Every mismatch between what a screen calls something and what the warehouse calls it is a translation the agent has to perform on every single call. Removing that mismatch made the pipeline cheaper and more reliable — and it only surfaced because I went and learned the data model rather than treating the backend as someone else's problem."
      />

      <Callout
        eyebrow="WHERE THE PIPELINE PAID OFF"
        bg="bg-cs-bg-2"
        headline="I prototyped directly with Claude and got a working product instead of a clickable mockup."
        body={`Because the tokens and components were already machine-readable, I could describe a screen and get real, running code back — the same primitives production would use, not a throwaway. That changed what a review meeting is: instead of asking people to imagine an interaction from a static frame, they used it. Founders stopped debating hypotheticals, engineering could see exactly what was being proposed, and the distance between "designed" and "built" collapsed to something I could cross in an afternoon. It also kept me honest, because a prototype that has to actually run cannot hide behind a pretty frame.`}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {changes.map((change) => (
          <div key={change.title} className="flex flex-col gap-2.5 rounded-xl border border-cs-border bg-cs-bg-2 px-7 py-6.5">
            <p className="font-case text-lg font-semibold text-white">{change.title}</p>
            <p className="font-case text-base leading-relaxed text-cs-text">{change.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
