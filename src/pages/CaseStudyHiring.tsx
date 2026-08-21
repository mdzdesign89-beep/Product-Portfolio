import { useEffect } from "react"
import { HeaderNav } from "@/components/sections/HeaderNav"
import { Cover } from "@/components/case-studies/hiring/Cover"
import { DisclaimerBar } from "@/components/case-studies/hiring/DisclaimerBar"
import { TlDr } from "@/components/case-studies/hiring/TlDr"
import { Section01Team } from "@/components/case-studies/hiring/Section01Team"
import { Section02Context } from "@/components/case-studies/hiring/Section02Context"
import { Section03Stakeholders } from "@/components/case-studies/hiring/Section03Stakeholders"
import { Section04Research } from "@/components/case-studies/hiring/Section04Research"
import { Section05Strategy } from "@/components/case-studies/hiring/Section05Strategy"
import { Section06Product } from "@/components/case-studies/hiring/Section06Product"
import { Section07Testing } from "@/components/case-studies/hiring/Section07Testing"
import { Section08Results } from "@/components/case-studies/hiring/Section08Results"
import { Section09Takeaway } from "@/components/case-studies/hiring/Section09Takeaway"
import { CaseFooter } from "@/components/case-studies/hiring/CaseFooter"

export function CaseStudyHiring() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <HeaderNav />
      <Cover />
      <DisclaimerBar />
      <TlDr />
      <Section01Team />
      <Section02Context />
      <Section03Stakeholders />
      <Section04Research />
      <Section05Strategy />
      <Section06Product />
      <Section07Testing />
      <Section08Results />
      <Section09Takeaway />
      <CaseFooter />
    </div>
  )
}
