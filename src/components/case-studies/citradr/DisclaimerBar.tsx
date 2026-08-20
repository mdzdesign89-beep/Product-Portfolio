export function DisclaimerBar() {
  return (
    <div className="flex items-center gap-5 bg-cib-mist px-6 py-6 md:px-16">
      <span className="h-11 w-1 shrink-0 bg-cib-lime" />
      <p className="font-case text-base leading-relaxed text-[#575757]">
        How to read these numbers — CITradR never reached production; CIBanco's
        banking licence was revoked in October 2025 (see section 09). Every
        figure below therefore comes from moderated testing or from public
        sources, never from live traffic. Sample sizes are stated so you can
        weigh them yourself.
      </p>
    </div>
  )
}
