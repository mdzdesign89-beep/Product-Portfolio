import { Reveal } from "@/components/motion/Reveal"
const columns = [
  {
    label: "PROBLEM",
    body: "CIBanco was rebuilding its digital products as a super app, but Mexican regulation prevents a brokerage from living inside a bank app. The trading product had to feel like one experience while legally staying two.",
  },
  {
    label: "MY ROLE",
    body: "One of six designers. I owned the CITradR trading module end to end — research, IA, prototypes, testing — and extended the bank's design system with trading-specific components.",
  },
  {
    label: "APPROACH",
    body: "No access to real clients and no customer-listening tooling. I used an extreme-users method, interviewed bank employees as proxy users, and validated the entry experience with a two-variant usability test.",
  },
  {
    label: "OUTCOME",
    body: "Task completion on first entry rose from 12/24 to 20/25 participants across variants. The module and its design-system contribution were delivered; the product never shipped because the bank was liquidated.",
  },
]

export function TlDr() {
  return (
    <Reveal as="section" className="flex flex-col items-start gap-8 bg-cib-bg-2 px-6 py-14 md:px-16">
      <p className="font-case text-base font-bold tracking-[0.1em] text-cib-lime">
        THE CASE IN 30 SECONDS
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={col.label}
            className={i > 0 ? "flex flex-col gap-2.5 border-t border-cib-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" : "flex flex-col gap-2.5"}
          >
            <p className="font-case text-sm font-bold tracking-[0.08em] text-cib-lime">
              {col.label}
            </p>
            <p className="font-case text-lg leading-relaxed text-[#d9dee0]">{col.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
