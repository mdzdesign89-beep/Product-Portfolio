import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const stats = [
  { value: "MXN 236 bn", title: "CIBanco assets under management", note: "1.54% of the Mexican banking system — CNBV, Apr 2025" },
  { value: "24.6 M", title: "Brokerage accounts in Mexico", note: "at close of 2025 — AMIB" },
  { value: "4×", title: "Growth in Mexican investors", note: "from under 3M to 13.1M in five years — AMIB" },
  { value: "~100", title: "CITradR trading clients", note: "the base the business scope aimed to grow beyond" },
]

const cards = [
  {
    title: "The business scope",
    highlight: false,
    items: [
      "AOV — raise transaction value through a better experience.",
      "Acquisition — a modern visual identity conveying higher status.",
      "Cross-selling — converge the bank's products into one app, easy to find.",
      "GTV — prioritise features tied directly to revenue.",
    ],
  },
  {
    title: "The design problem",
    highlight: true,
    items: [
      "A brokerage cannot legally live inside a banking app in Mexico. Two products, one perceived experience.",
      "A brand-new visual identity had to be applied to dense financial data without losing legibility.",
      "Trading data — portfolio performance, composition, pending orders — is heavy, and the audience is not.",
      "No usability baseline existed for the previous app, so there was nothing to improve against.",
    ],
  },
  {
    title: "What design had to convey",
    highlight: false,
    items: [
      "High status — the product signals who it is for.",
      "Premier product — parity with private-banking expectations.",
      "Elegance and cleanliness — restraint over decoration.",
      "Finance — legibility of numbers above all else.",
    ],
  },
]

export function Section02Context() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-cib-bg-2 px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        theme="dark"
        number="02"
        title="Context: a small book in a fast-growing market"
      />

      <div className="grid w-full grid-cols-1 divide-y divide-cib-border rounded-xl border border-cib-border bg-cib-bg-3 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.title} className="flex flex-col gap-1.5 px-7.5 py-8">
            <p className="font-case text-[42px] font-bold leading-tight text-cib-lime">{stat.value}</p>
            <p className="font-case text-base font-semibold text-white">{stat.title}</p>
            <p className="font-case text-sm text-[#d4d4d4]">{stat.note}</p>
          </div>
        ))}
      </div>
      <p className="max-w-[1300px] font-case text-sm leading-relaxed text-[#8b9096]">
        Sources: CNBV via public reporting (Apr 2025); AMIB year-end 2025
        figures. Client-base figure from CIBanco's internal business scope.
        These frame the opportunity — they are not outcomes of my work.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col gap-3.5 rounded-xl bg-cib-bg-3 px-7.5 py-7 ${card.highlight ? "border-2 border-[#c0471f]" : "border border-cib-border"}`}
          >
            <p className="font-case text-xl font-semibold text-white">{card.title}</p>
            <ul className="flex flex-col gap-2">
              {card.items.map((item) => (
                <li key={item} className="font-case text-lg leading-relaxed text-[#b9bec3]">· {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
