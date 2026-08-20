import { Link, useLocation } from "react-router-dom"
import { navLinks } from "@/lib/content"

export function HeaderNav() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"
  const linkTo = (hash: string) => (isHome ? hash : `/${hash}`)

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-ink px-6 py-5 md:px-16">
      <Link to="/" className="flex items-center font-logo text-base font-bold">
        <span className="border border-lime px-2 py-2 text-lime">EDUARDO</span>
        <span className="bg-lime px-2 py-2 text-ink">MENDOZA</span>
      </Link>
      <nav className="hidden items-center gap-7 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={linkTo(link.href)}
            className="font-nav text-xs tracking-wide text-[#cccfcc] transition-colors hover:text-lime"
          >
            {link.label}
          </Link>
        ))}
        <Link
          to={linkTo("#contact")}
          className="bg-lime px-3.5 py-1.5 font-nav text-xs font-bold tracking-wide text-ink"
        >
          CONTACT
        </Link>
      </nav>
      <Link
        to={linkTo("#contact")}
        className="bg-lime px-3.5 py-1.5 font-nav text-xs font-bold tracking-wide text-ink md:hidden"
      >
        CONTACT
      </Link>
    </header>
  )
}
