const footerNav = ["HOME", "ABOUT", "PROCESS", "PROJECTS", "CONTACT"]
const social = [
  { label: "IN", href: "https://www.linkedin.com/in/edd-mendoza-ux" },
  { label: "BE", href: "https://www.behance.net/" },
  { label: "✉", href: "mailto:mdz.design.89@gmail.com" },
]

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 bg-ink px-6 pb-7 pt-10 md:px-16">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] font-bold tracking-wide text-lime">
          EDUARDO SÁNCHEZ
        </p>
        <nav className="flex flex-wrap gap-6 font-mono text-[10px] tracking-wide text-[#b8bab8]">
          {footerNav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-lime">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex gap-2.5">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border border-[#424542] px-2.5 py-1.5 font-mono text-[10px] text-[#b8bab8] hover:border-lime hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 border-t border-[#383b38] pt-5 font-mono text-[10px] tracking-wide sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[#9ea19e]">
          © 2026 EDUARDO SÁNCHEZ · PRODUCT DESIGNER · UX RESEARCH &amp; DESIGN SYSTEMS
        </p>
        <a href="#top" className="text-[#b8bab8] hover:text-lime">
          ↑ BACK TO TOP
        </a>
      </div>
    </footer>
  )
}
