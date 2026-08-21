import { skills } from "@/lib/content"
import { Reveal } from "@/components/motion/Reveal"

export function AboutMe() {
  return (
    <Reveal as="section" id="about" className="flex flex-col gap-10 border-y border-line bg-paper px-6 py-16 md:px-16 md:py-20">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl font-black leading-[0.92] tracking-tight text-ink md:text-[56px] md:tracking-[-1.96px]">
            ABOUT ME
          </h2>
          <p className="font-mono text-[11px] tracking-wide text-[#6b6e6b]">// 01</p>
        </div>
        <p className="max-w-3xl text-lg text-body md:text-xl">
          Product Designer with 10+ years across UX research, design systems and
          industrial design.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex h-[300px] w-full items-center justify-center border border-line bg-mist lg:h-[500px] lg:w-[420px] lg:shrink-0">
          <p className="font-mono text-[11px] tracking-wide text-[#6b6e6b]">
            [ FOTO DE PERFIL ]
          </p>
        </div>

        <div className="flex flex-1 flex-col items-start gap-4.5">
          <p className="text-[17px] leading-relaxed text-body">
            I&rsquo;m Eduardo Sánchez, a Product Designer focused on user
            experience, currently working as AI Product Designer at Xylence on a
            B2B venture capital SaaS platform.
          </p>
          <p className="text-[17px] leading-relaxed text-body">
            My work spans UX research, usability testing, design systems, UX
            writing and accessibility. I pioneered an AI-first workflow that
            cut the design-to-development hand-off from multiple rounds to a
            single loop, generating production-ready UI code directly from
            Figma + MCP.
          </p>
          <p className="text-[17px] leading-relaxed text-body">
            Before product design I led industrial design teams, shipping
            modular packaging systems for the automotive and food industries —
            over 100 projects and more than $1M in first-year profit.
          </p>

          <p className="font-bold text-[14px] tracking-wide text-[#2e49fa]">
            // WHAT I&rsquo;M BEST AT
          </p>
          <ul className="flex flex-col gap-2.5">
            {skills.map((skill) => (
              <li key={skill.label} className="flex items-center gap-3 text-[15px] text-[#1c1c1c]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a6a6a6]" />
                {skill.label}
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            className="mt-1 rounded-lg bg-ink px-6.5 py-4 font-nav text-xs font-bold tracking-wide text-lime"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </Reveal>
  )
}
