import { SectionHead } from "./SectionHead"
import dashboardTilt from "@/assets/case-studies/citradr/dashboard-tilt.png"

const traits = [
  { title: "The expert end", body: "Trades actively, reads dense tables fluently, wants density and speed over hand-holding. Punishes extra taps." },
  { title: "The novice end", body: "Holds the assets but delegates decisions to an advisor. Needs orientation, plain language and a way back when lost." },
  { title: "What both share", body: "Low tolerance for anything that feels unserious. In wealth, visual noise reads as risk." },
]

export function Section04Users() {
  return (
    <section className="flex flex-col gap-10 bg-cib-mist-2 px-6 py-16 md:px-16 md:py-24">
      <SectionHead number="04" title="Who I was designing for" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <img
          src={dashboardTilt}
          alt="CITradR dashboard mockup, tilted view"
          className="w-full max-w-[520px] rounded-xl border border-cib-line bg-cib-mist object-cover lg:shrink-0"
        />

        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-col gap-3 rounded-xl bg-cib-bg-2 px-8.5 py-7.5">
            <p className="font-case text-2xl font-semibold text-white">
              High-profile clients holding upwards of USD $50,000 in
              investments — trading currencies and ETFs, travelling often,
              and needing a stable rate with immediate access to local
              currency.
            </p>
            <p className="font-case text-base text-[#adb2b8]">
              Defined from CIBanco's own client data. I never met one —
              which is exactly why the extreme-users method and the
              employee interviews mattered.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {traits.map((trait) => (
              <div key={trait.title} className="flex flex-col gap-2 rounded-xl border border-cib-line bg-white px-6 py-5.5">
                <p className="font-case text-lg font-semibold text-[#161719]">{trait.title}</p>
                <p className="font-case text-base leading-relaxed text-[#575757]">{trait.body}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-2 border-l-4 border-cib-olive bg-white px-7.5 py-5.5">
            <p className="font-case text-lg font-bold text-[#161719]">So what this means for the design</p>
            <p className="font-case text-lg leading-relaxed text-[#575757]">
              The dashboard had to open with the three answers both ends
              need first — portfolio performance, portfolio composition,
              and pending orders — and let depth live one level down.
              Density for the expert, orientation for the novice, without
              two separate products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
