const columns = [
  {
    label: "PROBLEM",
    body: (
      <>
        Xylence was building an engine that ingests everything about a
        startup, its founders, its market and its investors. Powerful, and
        completely illegible:{" "}
        <strong className="font-semibold text-white">
          there was an architecture written down, and nothing a person could
          actually open and use.
        </strong>
      </>
    ),
  },
  {
    label: "MY ROLE",
    body: (
      <>
        First designer in the company.{" "}
        <strong className="font-semibold text-white">
          I learned the business, the data model and what the engine could
          plausibly do, then designed the interface that made it usable
        </strong>{" "}
        — working inside a product vision and vocabulary the founders had
        already set.
      </>
    ),
  },
  {
    label: "APPROACH",
    body: (
      <>
        I could not reach my users — analysts and partners at VC funds. So{" "}
        <strong className="font-semibold text-white">
          I used specialised podcasts as an interview source and based on the
          largest academic survey of how VCs actually decide
        </strong>
        . That evidence is what changed the architecture.
      </>
    ),
  },
  {
    label: "OUTCOME",
    body: (
      <>
        A navigation that removed two proposed sections and added two that
        were missing, the{" "}
        <strong className="font-semibold text-white">
          Soundboard screens, a design system whose tokens an AI worked
          directly with React
        </strong>
        , and a working prototype built directly with Claude.
      </>
    ),
  },
]

export function TlDr() {
  return (
    <section className="flex flex-col items-start gap-8 bg-cs-bg-3 px-6 py-14 md:px-16">
      <p className="font-case text-base font-bold tracking-[0.1em] text-cs-gold">
        THE CASE IN 30 SECONDS
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={col.label}
            className={i > 0 ? "flex flex-col gap-2.5 border-t border-[#5d5d5d] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" : "flex flex-col gap-2.5"}
          >
            <p className="font-case text-sm font-bold tracking-[0.08em] text-cs-gold">
              {col.label}
            </p>
            <p className="font-case text-[17px] leading-relaxed text-cs-text">{col.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
