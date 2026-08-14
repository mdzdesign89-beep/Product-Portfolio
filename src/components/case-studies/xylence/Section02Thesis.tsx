import { SectionHead } from "./SectionHead"
import { Callout } from "./Callout"

const cards = [
  {
    title: "Who the product serves",
    glass: true,
    items: [
      "Analysts at VC funds — sourcing and evaluation is roughly half their week.",
      "Partners — decision, portfolio and thesis, with far less time per item.",
      "Founders on the other side of the same transaction, with opposite incentives.",
      "Two audiences that must never see each other's data, inside one shared engine.",
    ],
  },
  {
    title: "What made it hard to design",
    glass: false,
    items: [
      "The engine could produce almost anything, so nothing was self-evidently the product.",
      "AI was in the company from day one — the interface had to make machine reasoning inspectable, not magical.",
      "Two user types with mirrored workflows had to feel symmetric without being duplicated.",
      "Everything was moving: what the data could support changed as the engine matured.",
    ],
  },
  {
    title: "The constraint that shaped my method",
    glass: true,
    items: [
      "VC analysts and partners are close to unreachable for a pre-launch startup.",
      "No customer-listening tooling, no existing user base, no warm intro path at scale.",
      "Founders' priorities shifted often, so any research had to stay useful across pivots.",
      "That pushed me toward secondary sources with real rigour rather than none at all.",
    ],
  },
]

export function Section02Thesis() {
  return (
    <section className="flex flex-col gap-10 bg-cs-bg-2 px-6 py-16 md:px-16 md:py-24">
      <SectionHead number="02" title={`What "intelligence first" actually means`} />
      <Callout
        eyebrow="THE COMPANY THESIS"
        headline="Most tools filter information through an LLM and present it nicely. Xylence is built the other way round: gather signals from any source, compare them against what founders themselves disclose, and generate intelligence about the whole environment — the founders, the market, the technology, who else is investing, and the product."
        body="The design consequence: the product cannot be a dashboard of outputs. It has to be a place where a decision gets made, and where the reasoning behind it survives."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={
              card.glass
                ? "flex flex-col gap-3.5 rounded-[10px] bg-gradient-to-b from-white/[0.14] to-[#999]/10 px-7 py-6 shadow-[0px_8px_24px_-4px_rgba(0,0,0,0.4)] backdrop-blur-md"
                : "flex flex-col gap-3.5 rounded-xl border-2 border-cs-gold bg-cs-bg-2 px-7 py-7"
            }
          >
            <p className="font-case text-xl font-semibold text-white">{card.title}</p>
            <ul className="flex flex-col gap-2.5">
              {card.items.map((item) => (
                <li key={item} className="font-case text-[17px] leading-relaxed text-cs-text">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
