import { useEffect } from "react"
import { Cover } from "@/components/case-studies/citradr/Cover"
import { DisclaimerBar } from "@/components/case-studies/citradr/DisclaimerBar"
import { TlDr } from "@/components/case-studies/citradr/TlDr"
import { Section01Role } from "@/components/case-studies/citradr/Section01Role"
import { Section02Context } from "@/components/case-studies/citradr/Section02Context"
import { Section03Evidence } from "@/components/case-studies/citradr/Section03Evidence"
import { Section04Users } from "@/components/case-studies/citradr/Section04Users"
import { Section05Constraint } from "@/components/case-studies/citradr/Section05Constraint"
import { Section06Solution } from "@/components/case-studies/citradr/Section06Solution"
import { Section07Testing } from "@/components/case-studies/citradr/Section07Testing"
import { Section08Results } from "@/components/case-studies/citradr/Section08Results"
import { Section09Ending } from "@/components/case-studies/citradr/Section09Ending"
import { CaseFooter } from "@/components/case-studies/citradr/CaseFooter"

export function CaseStudyCitradr() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cib-bg">
      <Cover />
      <DisclaimerBar />
      <TlDr />
      <Section01Role />
      <Section02Context />
      <Section03Evidence />
      <Section04Users />
      <Section05Constraint />
      <Section06Solution />
      <Section07Testing />
      <Section08Results />
      <Section09Ending />
      <CaseFooter />
    </div>
  )
}
