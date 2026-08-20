import { useEffect } from "react"
import { HeaderNav } from "@/components/sections/HeaderNav"
import { Hero } from "@/components/case-studies/azteca/Hero"
import { ImpactBand } from "@/components/case-studies/azteca/ImpactBand"
import { Section01Problem } from "@/components/case-studies/azteca/Section01Problem"
import { Section02Context } from "@/components/case-studies/azteca/Section02Context"
import { Section03Role } from "@/components/case-studies/azteca/Section03Role"
import { Section04Process } from "@/components/case-studies/azteca/Section04Process"
import { Section05Results } from "@/components/case-studies/azteca/Section05Results"
import { Section06Learnings } from "@/components/case-studies/azteca/Section06Learnings"
import { FooterNav } from "@/components/case-studies/azteca/FooterNav"

export function CaseStudyAzteca() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <HeaderNav />
      <Hero />
      <ImpactBand />
      <Section01Problem />
      <Section02Context />
      <Section03Role />
      <Section04Process />
      <Section05Results />
      <Section06Learnings />
      <FooterNav />
    </div>
  )
}
