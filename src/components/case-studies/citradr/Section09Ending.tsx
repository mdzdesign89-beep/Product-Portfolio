import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const learnings = [
  {
    title: "Constraints are the brief",
    body: "The regulation that split the apps looked like an obstacle and turned out to be the actual design problem. Once I stopped fighting it and designed the seam instead, the entry experience, the shared login and the cross-sell all fell out of the same decision.",
  },
  {
    title: "Proxy users find failures, not truths",
    body: "Bank employees surfaced the missing back button twice. They could never tell me whether a real client would trust the product. Knowing which question a sample can answer is more useful than having a bigger sample.",
  },
  {
    title: "Owning a module inside a programme is a consistency job",
    body: "With five other designers shipping in parallel, most of my value was not novelty — it was making trading feel like the same product as everything else, and pushing that back into the shared system.",
  },
  {
    title: "Not every good project ships",
    body: "This one ended for reasons no designer could influence. What survives is the reasoning, the documentation and the tested decisions — which is why I write case studies around those rather than around outcomes.",
  },
]

const differently = [
  "Push for even a handful of real account holders in testing. Employee-only samples measured comprehension of a product they already understood.",
  "Define usability baselines on the existing app before redesigning, so the new module had something to be measured against.",
  "Instrument the prototype. With no analytics anywhere in the programme, every claim depended on moderated observation.",
]

const carryForward = [
  "The extreme-users method as a deliberate answer to a bad sample, not as a default.",
  "Documenting components to spec level — sizing, padding, gap, radius — so handoff needs no interpretation.",
  "Writing down which source can answer which question before starting, rather than after.",
]

export function Section09Ending() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead number="09" title="How it ended, and what I took away" />

      <div className="flex w-full flex-col gap-3.5 rounded-xl bg-cib-bg-2 px-6 py-9 md:px-11 md:py-9">
        <p className="font-case text-sm font-bold tracking-[0.1em] text-cib-lime">
          WHY THIS PRODUCT NEVER SHIPPED
        </p>
        <p className="font-case text-xl font-medium leading-snug text-white md:text-2xl">
          In June 2025 the U.S. Treasury's FinCEN named CIBanco — alongside
          Intercam and Vector — as a primary money-laundering concern.
          Mexico's IPAB revoked the banking licence and CIBanco ceased
          operations on 10 October 2025. The super-app programme, including
          CITradR, ended with it.
        </p>
        <p className="font-case text-base leading-relaxed text-[#b8bdc2] md:text-lg">
          I am including this because it is public, because it explains the
          absence of post-launch metrics, and because leaving it out would
          be the kind of gap a reader finds on their own. The design work
          stands on what it was: a module delivered, tested and documented.
          Nothing in this case study is a claim about business outcomes,
          because there were none to claim.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {learnings.map((item) => (
          <div key={item.title} className="flex flex-col gap-2.5 rounded-xl border border-cib-line bg-white p-7">
            <p className="font-case text-xl font-semibold text-[#161719]">{item.title}</p>
            <p className="font-case text-base leading-relaxed text-[#575757]">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3 border-l-4 border-cib-olive bg-cib-mist px-7.5 py-6.5">
          <p className="font-case text-xl font-bold text-[#161719]">What I would do differently</p>
          <ul className="flex flex-col gap-2.5">
            {differently.map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-[#575757]">· {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-l-4 border-[#5c6066] bg-cib-mist px-7.5 py-6.5">
          <p className="font-case text-xl font-bold text-[#161719]">What I would carry forward</p>
          <ul className="flex flex-col gap-2.5">
            {carryForward.map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-[#575757]">· {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="max-w-[1400px] font-case text-sm leading-relaxed text-[#5c6066]">
        Public sources: FinCEN order of 25 June 2025; IPAB licence
        revocation and cessation of operations, 10 October 2025; CNBV asset
        figures via public reporting, April 2025; AMIB year-end 2025
        investment-account data.
      </p>
    </Reveal>
  )
}
