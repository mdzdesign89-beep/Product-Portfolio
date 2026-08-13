import { experience, toolGroups } from "@/lib/content"

export function ExperienceTools() {
  return (
    <section id="experience" className="flex flex-col gap-9 bg-paper px-6 py-16 md:px-16 md:py-20">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl font-black leading-[0.92] tracking-tight text-ink md:text-[56px] md:tracking-[-1.96px]">
            EXPERIENCE
          </h2>
          <p className="font-mono text-[11px] tracking-wide text-[#6b6e6b]">2016 → NOW</p>
        </div>
        <p className="max-w-3xl text-lg text-body md:text-xl">
          10+ years in design — from industrial design leadership to UX
          research, design systems, and AI-first product design.
        </p>
      </div>

      <div className="flex flex-col">
        {experience.map((job) => (
          <div
            key={job.company}
            className="flex flex-col gap-6 border-t border-line py-7.5 md:flex-row"
          >
            <div className="flex w-full shrink-0 flex-col gap-1.5 md:w-[230px]">
              <p className="font-mono text-[11px] font-bold tracking-wide text-[#6b6e6b]">
                {job.period}
              </p>
              <span className="w-fit border border-line bg-paper px-3 py-2 font-mono text-[10px] font-bold tracking-wide text-ink">
                {job.company}
              </span>
            </div>
            <div className="flex flex-1 flex-col items-start gap-3">
              <p className="font-semibold text-[28px] leading-tight tracking-tight text-ink">
                {job.role}
              </p>
              <p className="text-base leading-relaxed text-body">{job.summary}</p>
              <ul className="flex flex-col gap-1 text-sm leading-relaxed text-[#6b6e6b]">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>· {bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {job.chips.map((chip) => (
                  <span
                    key={chip}
                    className="border border-line bg-paper px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-ink"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <p className="font-semibold text-3xl tracking-tight text-ink">
          Tools &amp; methodologies
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {toolGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3 border border-line bg-paper px-6 py-5.5">
              <p className="font-mono text-xs font-bold tracking-wide text-[#2e49fa]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-mist px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-ink"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
