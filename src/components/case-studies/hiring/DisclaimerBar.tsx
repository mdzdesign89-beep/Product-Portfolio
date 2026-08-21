import { Reveal } from "@/components/motion/Reveal"

export function DisclaimerBar() {
  return (
    <Reveal className="flex items-center gap-5 bg-hp-mist px-6 py-6 md:px-16">
      <span className="h-11 w-1 shrink-0 bg-hp-rust" />
      <p className="font-case text-base leading-relaxed text-hp-muted">
        How to read these numbers — 50 and 76 are usability scores from
        moderated sessions with 7 recruiters, not conversion or
        task-completion rates. This was an internal MVP that never reached
        a measurable business outcome. The honest value of the project is
        in the process and the team, and section 08 says so plainly.
      </p>
    </Reveal>
  )
}
