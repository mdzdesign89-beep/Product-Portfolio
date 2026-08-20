import { Link } from "react-router-dom"

export function FooterNav() {
  return (
    <footer className="flex flex-col items-start gap-6 bg-aza-footer px-6 py-10 md:flex-row md:items-center md:justify-between md:px-16">
      <Link to="/case-studies/citradr" className="group flex flex-col gap-1.5">
        <p className="text-[10px] font-bold text-[#8c9eb8]">NEXT CASE STUDY</p>
        <p className="text-xl font-bold text-white group-hover:text-aza-green sm:text-2xl">
          Trading module within a bank ecosystem →
        </p>
      </Link>
      <Link
        to="/#contact"
        className="rounded-lg bg-aza-green px-6.5 py-4 text-[15px] font-semibold text-white"
      >
        Get in touch
      </Link>
    </footer>
  )
}
