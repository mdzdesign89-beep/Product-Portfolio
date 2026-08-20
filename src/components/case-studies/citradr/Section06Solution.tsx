import { SectionHead } from "./SectionHead"
import beforeApp from "@/assets/case-studies/citradr/before-app.png"
import afterApp from "@/assets/case-studies/citradr/after-app.png"
import dashboardHero from "@/assets/case-studies/citradr/dashboard-hero.png"
import designSystem from "@/assets/case-studies/citradr/design-system.png"
import crossSelling from "@/assets/case-studies/citradr/cross-selling.png"

export function Section06Solution() {
  return (
    <section className="flex flex-col gap-8 bg-cib-mist px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="06"
        title="The solution"
        subtitle="A new identity applied to a data-dense product, a dashboard reduced to three questions, and a design-system contribution so the next module would not have to reinvent it."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-xl border border-[#e2a08c] bg-white p-6">
          <span className="w-fit rounded bg-[#c0471f] px-3 py-1 font-case text-xs font-bold tracking-[0.08em] text-white">
            BEFORE
          </span>
          <img src={beforeApp} alt="CIBanco app before redesign" className="w-full rounded-lg bg-cib-mist" />
          <ul className="flex flex-col gap-2">
            {[
              "Light theme with product rows — reads as utility banking, not wealth.",
              "Favourites buried below a long product list; no sense of hierarchy.",
              "Nothing signals a trading product exists.",
            ].map((item) => (
              <li key={item} className="font-case text-base leading-relaxed text-[#575757]">· {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-[#aac132] bg-white p-6">
          <span className="w-fit rounded bg-cib-olive px-3 py-1 font-case text-xs font-bold tracking-[0.08em] text-white">
            AFTER
          </span>
          <img src={afterApp} alt="CIBanco home, new identity" className="mx-auto max-h-[480px] rounded-lg bg-cib-bg-2 object-contain" />
          <ul className="flex flex-col gap-2">
            {[
              "Dark base with a single accent — status and legibility in the same move.",
              "Balance and card carousel first; actions promoted into a fixed grid.",
              "CITradR surfaces as a peer product with live market data, opening the cross-sell.",
            ].map((item) => (
              <li key={item} className="font-case text-base leading-relaxed text-[#575757]">· {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-xl border border-cib-line bg-white p-6">
          <p className="font-case text-2xl font-semibold text-[#161719]">
            The dashboard, reduced to three questions
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Portfolio performance — how am I doing over time",
              "Portfolio composition — what am I actually holding",
              "Pending orders — what is still in flight",
            ].map((item, i) => (
              <li key={item} className="flex items-center gap-3 font-case text-base text-[#575757]">
                <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-cib-mist text-sm font-semibold text-[#161719]">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
          <img src={dashboardHero} alt="CITradR dashboard on phone mockup" className="mx-auto max-h-[420px] rounded-lg bg-cib-bg-2 object-contain" />
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-[#aac132] bg-white p-6">
          <p className="font-case text-2xl font-semibold text-[#161719]">Extending the design system</p>
          <p className="font-case text-base leading-relaxed text-[#575757]">
            The system had to stay generic for the rest of the super app
            while absorbing trading-specific needs. I contributed CITradR
            layouts, components and interaction guidelines — documented
            down to sizing, padding, gap and radius so engineering could
            build without interpretation.
          </p>
          <img src={designSystem} alt="CITradR design system extension" className="mx-auto max-h-[420px] rounded-lg bg-cib-mist object-contain" />
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-xl bg-cib-bg-2 px-6 py-8 md:px-11 md:py-10">
        <p className="font-case text-2xl font-semibold text-white md:text-[32px]">
          Making cross-selling work across two legally separate apps
        </p>
        <p className="max-w-[1100px] font-case text-lg leading-relaxed text-[#b9bec3]">
          First-time entry presents both products with a summary of their
          core features and a route into either. Once a customer holds one
          product, the other appears as a contextual offer inside the
          session instead of a campaign — a shared login is what makes
          that possible.
        </p>
        <img src={crossSelling} alt="CITradR cross-selling flow across both apps" className="w-full rounded-lg" />
      </div>
    </section>
  )
}
