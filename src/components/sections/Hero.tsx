import { Reveal } from "@/components/motion/Reveal"

export function Hero() {
  return (
    <section id="top" className="flex flex-col items-start gap-6 bg-paper px-6 py-16 md:px-16 md:py-20">
      <Reveal delay={0}>
        <span className="bg-lime px-3 py-1.5 font-mono text-[10px] font-bold tracking-wide text-ink">
          MEXICO CITY | REMOTE
        </span>
      </Reveal>
      <Reveal delay={90}>
        <h1 className="max-w-[1250px] font-display text-5xl font-black leading-[0.92] tracking-tight text-ink md:text-7xl lg:whitespace-nowrap lg:text-[92px] lg:tracking-[-3.22px]">
          UX Designer,
          <br />
          Product Designer &amp;
          <br />
          AI Workflows
        </h1>
      </Reveal>
      <Reveal delay={180}>
        <p className="max-w-xl text-lg leading-relaxed text-body md:text-xl">
          I solve real problems end to end — from discovery and research to
          high-fidelity UI and post-launch optimization. I act as the bridge
          between users, stakeholders, business and development teams.
        </p>
      </Reveal>
      <Reveal delay={270} className="flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-lg bg-ink px-6 py-4 font-nav text-base font-bold tracking-wide text-lime"
        >
          VIEW CASE STUDIES
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-ink px-6 py-4 font-nav text-base font-bold tracking-wide text-ink"
        >
          LET&rsquo;S TALK
        </a>
      </Reveal>
    </section>
  )
}
