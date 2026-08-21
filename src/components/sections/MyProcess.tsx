import { processSteps } from "@/lib/content"
import { Reveal } from "@/components/motion/Reveal"

export function MyProcess() {
  return (
    <Reveal as="section" className="flex flex-col gap-8 border-y border-line bg-paper px-6 py-16 md:px-16 md:py-20">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl font-black leading-[0.92] tracking-tight text-ink md:text-[56px] md:tracking-[-1.96px]">
            MY PROCESS
          </h2>
          <p className="font-mono text-[11px] tracking-wide text-[#6b6e6b]">05 / STEPS</p>
        </div>
        <p className="max-w-3xl text-lg text-body md:text-xl">
          From discovery to post-launch optimization — with AI embedded at
          every step and human judgment kept in the loop.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal
            key={step.number}
            delay={i * 80}
            className="flex flex-col gap-2.5 border border-line bg-mist p-5.5"
          >
            <div className="h-1.5 w-10" style={{ backgroundColor: step.accent }} />
            <p className="font-mono text-[11px] font-bold tracking-wide text-[#6b6e6b]">
              {step.number}
            </p>
            <p className="font-display text-2xl font-semibold tracking-tight text-ink">
              {step.title}
            </p>
            <p className="text-sm leading-relaxed text-body">{step.description}</p>
            <ul className="flex flex-col gap-1 font-mono text-[11px] tracking-wide text-[#6b6e6b]">
              {step.deliverables.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Reveal>
  )
}
