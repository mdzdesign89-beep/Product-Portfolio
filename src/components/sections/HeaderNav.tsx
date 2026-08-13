import { navLinks } from "@/lib/content"

export function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-ink px-6 py-5 md:px-16">
      <a href="#top" className="flex items-center font-logo text-base font-bold">
        <span className="border border-lime px-2 py-2 text-lime">EDUARDO</span>
        <span className="bg-lime px-2 py-2 text-ink">MENDOZA</span>
      </a>
      <nav className="hidden items-center gap-7 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-nav text-xs tracking-wide text-[#cccfcc] transition-colors hover:text-lime"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-lime px-3.5 py-1.5 font-nav text-xs font-bold tracking-wide text-ink"
        >
          CONTACT
        </a>
      </nav>
      <a
        href="#contact"
        className="bg-lime px-3.5 py-1.5 font-nav text-xs font-bold tracking-wide text-ink md:hidden"
      >
        CONTACT
      </a>
    </header>
  )
}
