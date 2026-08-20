export function CaseFooter() {
  return (
    <footer className="flex flex-col items-start gap-6 bg-cib-bg px-6 py-12 md:flex-row md:items-center md:justify-between md:px-16">
      <div className="flex flex-col gap-2">
        <p className="font-case text-2xl font-bold text-white">
          Eduardo Sánchez — Product Designer
        </p>
        <p className="font-case text-base text-cib-text-dim">
          mdz.design.89@gmail.com · linkedin.com/in/edd-mendoza-ux · Behance
        </p>
      </div>
      <div className="flex flex-col items-start gap-1.5 md:items-end">
        <p className="font-case text-base font-medium text-cib-lime">
          Xtudio · for Minsait · client CIBanco
        </p>
        <p className="font-case text-base text-[#8c9499]">
          CITradR — trading module · Mar – Oct 2025
        </p>
      </div>
    </footer>
  )
}
