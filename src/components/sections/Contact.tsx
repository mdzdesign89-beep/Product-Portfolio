import { contactCards } from "@/lib/content"
import { Reveal } from "@/components/motion/Reveal"

export function Contact() {
  return (
    <Reveal as="section" id="contact" className="flex flex-col gap-8 bg-lime px-6 py-16 md:px-16 md:py-20">
      <div className="flex flex-col gap-3.5">
        <h2 className="font-display text-4xl font-black leading-[0.92] tracking-tight text-ink md:text-[56px] md:tracking-[-1.96px]">
          CONTACT EDUARDO SÁNCHEZ
        </h2>
        <p className="max-w-3xl text-lg text-[#333d1a] md:text-xl">
          For product design, UX research, design systems, or consulting work —
          reach me directly below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {contactCards.map((card, i) => (
          <Reveal
            key={card.title}
            as="a"
            href={card.href}
            delay={i * 90}
            className="flex flex-col items-start gap-3 bg-ink px-6 py-6.5"
          >
            <p className="font-semibold text-2xl tracking-tight text-mist">{card.title}</p>
            <p className="text-sm leading-relaxed text-[#adb0ad]">{card.description}</p>
            <p className="font-mono text-[11px] font-bold tracking-wide text-lime">
              {card.value}
            </p>
          </Reveal>
        ))}
      </div>
    </Reveal>
  )
}
