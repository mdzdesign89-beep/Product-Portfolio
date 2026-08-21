import { SectionHead } from "./SectionHead"
import { Reveal } from "@/components/motion/Reveal"

const team = [
  { n: "1", title: "Design lead", body: "Set direction and reviewed my work weekly", accent: false },
  { n: "2", title: "Product designers", body: "Owned other super-app products", accent: false },
  { n: "2", title: "Support designers", body: "Assets, handoff and design-system upkeep", accent: false },
  { n: "1", title: "Me", body: "Sole owner of the CITradR trading module", accent: true },
]

export function Section01Role() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-white px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="01"
        title="My role in a six-designer team"
        subtitle="CITradR was one module inside a much larger super-app programme. Being precise about which part was mine — and who I leaned on — is the point of this section."
      />

      <div className="grid w-full grid-cols-1 divide-y divide-cib-border rounded-xl bg-cib-bg-2 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {team.map((member) => (
          <div key={member.title} className="flex flex-col gap-1.5 px-9 py-7.5">
            <p className={`font-case text-4xl font-bold ${member.accent ? "text-cib-lime" : "text-white"}`}>
              {member.n}
            </p>
            <p className={`font-case text-lg font-semibold ${member.accent ? "text-cib-lime" : "text-white"}`}>
              {member.title}
            </p>
            <p className="font-case text-sm text-[#adb2b8]">{member.body}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3.5 rounded-xl border-2 border-cib-olive bg-white px-7.5 py-7">
          <span className="w-fit rounded-full bg-cib-olive px-3 py-1 font-case text-sm font-bold tracking-[0.06em] text-white">
            DIRECTLY RESPONSIBLE
          </span>
          <p className="font-case text-xl font-semibold text-[#161719]">What I owned</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "The CITradR trading module end to end: portfolio dashboard, orders, and the entry experience shared with the bank app.",
              "Heuristic analysis of the existing app against Nielsen's heuristics.",
              "Proxy-user research: interviews with bank employees, store-review analysis, and survey synthesis.",
              "Interactive prototypes and the two-variant usability test of the first-time entry flow.",
              "Extending CIBanco's design system with CITradR-specific layouts, components and interaction guidelines.",
            ].map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-[#575757]">· {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3.5 rounded-xl border border-cib-line bg-cib-mist px-7.5 py-7">
          <span className="w-fit rounded-full bg-[#73767a] px-3 py-1 font-case text-sm font-bold tracking-[0.06em] text-white">
            COLLABORATED
          </span>
          <p className="font-case text-xl font-semibold text-[#161719]">What I did not own</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "The super-app strategy and the decision to converge products — set by CIBanco and Minsait.",
              "Market, industry, business-case and trend analysis — conducted by Minsait before I joined.",
              "The new visual identity and brand guidelines — already defined when the module started.",
              "Other super-app modules — owned by the two product designers on the team.",
              "Engineering and the regulatory interpretation that forced two separate apps.",
            ].map((item) => (
              <li key={item} className="font-case text-lg leading-relaxed text-[#575757]">· {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 border-l-4 border-cib-olive bg-cib-mist px-7.5 py-6">
        <p className="font-case text-lg font-bold text-[#161719]">How I worked inside the programme</p>
        <p className="font-case text-lg leading-relaxed text-[#575757]">
          My design lead reviewed the module weekly and represented it in
          programme-level decisions. Requirements arrived largely defined —
          driven by business goals with brand guidelines already in place —
          so my job was less "what should we build" and more "make this
          consistent, usable and defensible with the evidence we can
          actually get."
        </p>
      </div>
    </Reveal>
  )
}
