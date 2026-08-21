import { useEffect } from "react"
import { HeaderNav } from "@/components/sections/HeaderNav"
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar"
import { Cover } from "@/components/case-studies/xylence/Cover"
import { TlDr } from "@/components/case-studies/xylence/TlDr"
import { Section01Arriving } from "@/components/case-studies/xylence/Section01Arriving"
import { Section02Thesis } from "@/components/case-studies/xylence/Section02Thesis"
import { Section03Research } from "@/components/case-studies/xylence/Section03Research"
import { Section04Architecture } from "@/components/case-studies/xylence/Section04Architecture"
import { Section05AiLoop } from "@/components/case-studies/xylence/Section05AiLoop"
import { Section06Product } from "@/components/case-studies/xylence/Section06Product"
import { Section07Delivered } from "@/components/case-studies/xylence/Section07Delivered"
import { Section08TookAway } from "@/components/case-studies/xylence/Section08TookAway"
import { CaseFooter } from "@/components/case-studies/xylence/CaseFooter"

export function CaseStudyXylence() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cs-bg">
      <ScrollProgressBar colorClassName="bg-cs-gold" />
      <HeaderNav />
      <Cover />
      <TlDr />
      <Section01Arriving />
      <Section02Thesis />
      <Section03Research />
      <Section04Architecture />
      <Section05AiLoop />
      <Section06Product />
      <Section07Delivered />
      <Section08TookAway />
      <CaseFooter />
    </div>
  )
}
