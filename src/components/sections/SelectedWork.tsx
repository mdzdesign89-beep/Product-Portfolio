import { Link } from "react-router-dom"
import { projects } from "@/lib/content"

export function SelectedWork() {
  return (
    <section id="work" className="flex flex-col gap-8 bg-ink px-6 py-16 md:px-16 md:py-20">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl font-black leading-[0.92] tracking-tight text-mist md:text-[56px] md:tracking-[-1.96px]">
            SELECTED WORK
          </h2>
          <p className="font-mono text-[11px] tracking-wide text-lime">07 / CASES</p>
        </div>
        <p className="max-w-3xl text-lg text-[#adb0ad] md:text-xl">
          Case studies across fintech, B2B marketplaces, talent platforms, and
          AI-assisted product design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-lg border border-line-dark bg-[#1b1c1c] px-4 pt-4"
          >
            <img
              src={project.cover}
              alt={project.coverAlt}
              className="h-[190px] w-full rounded object-cover"
            />
            <div className="flex flex-col items-start gap-2.5 px-2 py-5.5">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border-[0.5px] border-white/50 bg-gradient-to-b from-white/10 to-white/5 px-2 py-0.5 text-xs text-[#dedede]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-display text-2xl font-semibold tracking-tight text-mist">
                {project.title}
              </p>
              <dl className="flex w-full flex-col gap-1 font-mono text-[11px] tracking-wide">
                <div className="flex gap-2">
                  <dt className="w-[72px] shrink-0 text-[9px] font-bold text-[#898b89]">TYPE</dt>
                  <dd className="text-[#adb0ad]">{project.type}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-[72px] shrink-0 text-[9px] font-bold text-[#898b89]">ROLE</dt>
                  <dd className="text-[#adb0ad]">{project.role}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-[72px] shrink-0 text-[9px] font-bold text-[#898b89]">TIMELINE</dt>
                  <dd className="text-[#adb0ad]">{project.timeline}</dd>
                </div>
              </dl>
              <p className="text-[13px] leading-relaxed text-[#adb0ad]">{project.outcome}</p>
              {project.caseStudyHref ? (
                <Link to={project.caseStudyHref} className="text-[10px] font-bold tracking-wide text-lime">
                  VIEW CASE STUDY →
                </Link>
              ) : (
                <span className="text-[10px] font-bold tracking-wide text-lime/50">
                  CASE STUDY COMING SOON
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
