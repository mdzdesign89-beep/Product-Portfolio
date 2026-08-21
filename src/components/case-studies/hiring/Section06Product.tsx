import { SectionHead } from "./SectionHead"
import productBoard from "@/assets/case-studies/hiring/product-board.png"
import { Reveal } from "@/components/motion/Reveal"

export function Section06Product() {
  return (
    <Reveal as="section" className="flex flex-col gap-10 bg-hp-mist px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="06"
        title="The product"
        subtitle="One board that replaces the spreadsheet, one candidate view that replaces the email chain, and a design system so the next module would not start from zero."
      />

      <div className="flex w-full flex-col gap-6 rounded-xl bg-hp-teal px-6 py-9 md:px-11">
        <img src={productBoard} alt="Candidate board and candidate detail view" className="w-full rounded-[10px] bg-white" />
        <p className="max-w-[1100px] font-case text-base leading-relaxed text-[#b8d4d9]">
          The board answers what a recruiter checks first — who, for which
          client, at what status, against which deadline — and the detail
          view concentrates everything that used to live in email.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-xl border border-hp-border bg-white p-7.5">
          <p className="font-case text-xl font-semibold text-hp-ink">A design system built with frontend, not for them</p>
          <p className="font-case text-lg leading-relaxed text-hp-muted">
            With four frontend engineers and no design precedent,
            documenting a system alone would have produced a file nobody
            opened. I built tokens alongside them as screens shipped, then
            ran a workshop to hand it over — the handoff was an event, not
            a folder.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-xl border border-hp-border bg-white p-7.5">
          <p className="font-case text-xl font-semibold text-hp-ink">Handoff as a comparison exercise</p>
          <p className="font-case text-lg leading-relaxed text-hp-muted">
            We compared the beta build against the prototypes side by side
            in a session. Every mismatch became a ticket with a named owner
            instead of a comment thread, which is also how I learned to
            read what the frontend team could and could not absorb in a
            sprint.
          </p>
        </div>
      </div>
    </Reveal>
  )
}
