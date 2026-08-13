import { testimonials } from "@/lib/content"

export function Testimonials() {
  return (
    <section className="flex flex-col gap-8 border-y border-line bg-paper px-6 py-16 md:px-16 md:py-20">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl font-black leading-[0.92] tracking-tight text-ink md:text-[56px] md:tracking-[-1.96px]">
            WHAT PEOPLE SAY
          </h2>
          <p className="font-mono text-[11px] tracking-wide text-[#6b6e6b]">// 02</p>
        </div>
        <p className="max-w-3xl text-lg text-body md:text-xl">
          Testimonials from colleagues, stakeholders, and leaders I have worked
          with.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4.5 border border-line bg-mist px-8 py-7.5"
          >
            <p className="font-black text-[44px] leading-none tracking-tight text-[#878985]">
              &ldquo;
            </p>
            <p className="text-lg leading-relaxed text-ink">{testimonial.quote}</p>
            <div className="flex items-center gap-3.5">
              <div className="size-11 shrink-0 bg-line" />
              <div className="flex flex-col">
                <p className="font-semibold text-[15px] text-ink">{testimonial.name}</p>
                <p className="font-mono text-[10px] tracking-wide text-[#6b6e6b]">
                  {testimonial.role}
                </p>
                <p className="font-mono text-[10px] tracking-wide text-[#6b6e6b]">
                  {testimonial.relationship}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
