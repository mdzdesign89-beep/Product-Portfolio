import { SectionHead } from "./SectionHead"
import { Callout } from "./Callout"
import { Reveal } from "@/components/motion/Reveal"

const methodPoints = [
  {
    label: "WHY PODCASTS",
    text: "Access and time. Recruiting VC partners was not realistic in the window I had.",
  },
  {
    label: "WHY AI",
    text: "It let me cover many more voices than manual analysis would allow.",
  },
  {
    label: "WHAT I LOOKED FOR",
    text: "How they evaluate a company. How they build founder relationships.",
  },
]

const evidenceRows = [
  {
    source: "Academic survey",
    what: (
      <>
        A survey of <span className="text-[#fefefe]">885 venture capitalists at 681 firms</span>,
        published in Harvard Business Review (Mar–Apr 2021).
      </>
    ),
    could: "How VCs take their decisions across sourcing, selection, valuation, deal structure and exits — and that they attribute success more to the team than to the product.",
    couldNot: "Anything about software. It describes judgement, not workflow or tooling.",
    confidence: "PRIMARY-GRADE",
    confidenceColor: "bg-[#4ade80]",
  },
  {
    source: "Specialised VC podcasts",
    what: "Long-form interviews with partners and analysts, treated as a coded interview corpus.",
    could: "Vocabulary, recurring frustrations, how they describe a pass, what they complain about in their current process.",
    couldNot: "Inquire about the hiring process and how a founder typically initiates the first approach.",
    confidence: "DIRECTIONAL",
    confidenceColor: "bg-cs-amber",
  },
  {
    source: "Theses and published research",
    what: "Academic and industry work on venture decision-making and information asymmetry.",
    could: "Structural framing: why founders and funds hold different information, and what that asymmetry costs both sides.",
    couldNot: "Anything specific to a screen, a flow, or an interaction.",
    confidence: "DIRECTIONAL",
    confidenceColor: "bg-cs-amber",
  },
  {
    source: "The team's own domain knowledge",
    what: "Founders and data scientists who had operated adjacent to this market.",
    could: "Fast reality checks on whether a proposed idea was plausible with the data we actually held.",
    couldNot: "An outside perspective — they shared the same assumptions I was trying to test.",
    confidence: "DIRECTIONAL",
    confidenceColor: "bg-cs-amber",
  },
]

const findings = [
  {
    title: "Team over product, in the interface",
    body: "VCs credit outcomes to the founding team more than to the product. So founder analysis sits in the primary view, not a buried tab.",
  },
  {
    title: "A pass is a decision, not a deletion",
    body: "Partners kept describing passes they still think about. So passing records a structured reason and stays searchable.",
  },
  {
    title: "Explainability as a precondition",
    body: "If an output cannot be explained, it does not get used. Every result shows its evidence, its confidence and what data is missing.",
  },
]

export function Section03Research() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-cs-bg px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="03"
        title="Research without access"
        subtitle="My users were VC analysts and partners. They do not answer recruitment emails from a pre-launch startup."
      />
      <Callout
        eyebrow="HOW I REACHED USERS I COULD NOT REACH"
        bg="bg-cs-bg-2"
        headline="VC partners do not take research calls. So I used podcasts as my interviews — hundreds of hours where my exact users already explain how they think."
        body="Then I used AI to work through far more of them than I could have read alone: transcribed, coded and clustered, looking for two things — how they judge a company, and how they build relationships with founders. Those two questions shaped the product."
      >
        <div className="grid w-full grid-cols-1 gap-6 pt-2 sm:grid-cols-3">
          {methodPoints.map((point, i) => (
            <div key={point.label} className={i > 0 ? "flex flex-col gap-1.5 border-t border-cs-border pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0" : "flex flex-col gap-1.5"}>
              <p className="font-case text-[11px] font-bold tracking-[0.08em] text-cs-gold">{point.label}</p>
              <p className="font-case text-[15px] leading-relaxed text-cs-text">{point.text}</p>
            </div>
          ))}
        </div>
      </Callout>

      <div className="w-full overflow-x-auto rounded-xl border border-cs-border bg-cs-bg-2">
        <table className="w-full min-w-[900px] border-collapse font-case text-sm">
          <thead>
            <tr className="bg-cs-bg-3 text-left">
              {["SOURCE", "WHAT IT IS", "WHAT IT COULD TELL ME", "WHAT IT COULD NOT"].map((h) => (
                <th key={h} className="px-7 py-4.5 text-[13px] font-bold tracking-[0.06em] text-cs-gold">
                  {h}
                </th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {evidenceRows.map((row) => (
              <tr key={row.source} className="border-t border-cs-border align-top">
                <td className="px-7 py-6 text-base font-semibold text-white">{row.source}</td>
                <td className="max-w-[280px] px-7 py-6 text-[15px] leading-relaxed text-cs-text">{row.what}</td>
                <td className="max-w-[340px] px-7 py-6 text-[15px] leading-relaxed text-cs-text">{row.could}</td>
                <td className="max-w-[320px] px-7 py-6 text-[15px] leading-relaxed text-cs-text">{row.couldNot}</td>
                <td className="px-7 py-6">
                  <span className={`whitespace-nowrap rounded-full ${row.confidenceColor} px-2.5 py-1 font-case text-[10px] font-bold text-cs-bg`}>
                    {row.confidence}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex w-full flex-col gap-2 rounded-md border-l-[3px] border-cs-amber bg-cs-bg-3 px-7 py-6">
        <p className="font-case text-lg font-bold text-white">What this method cannot do</p>
        <p className="font-case text-[17px] leading-relaxed text-cs-text">
          A podcast is performed. The guest is building a reputation, not describing a bad Tuesday — and I cannot ask a follow-up question. So this gave me vocabulary and a decision model to design against, not proof that any screen works. Anything that needed probing became an assumption, labelled as one.
        </p>
      </div>

      <p className="font-case text-2xl font-medium text-white">Key findings</p>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {findings.map((finding) => (
          <div key={finding.title} className="flex flex-col gap-2.5 rounded-xl border border-cs-border bg-cs-bg-2 px-7 py-6.5">
            <p className="font-case text-lg font-semibold text-white">{finding.title}</p>
            <p className="font-case text-base leading-relaxed text-cs-text">{finding.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
