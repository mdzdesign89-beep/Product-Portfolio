import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { CaseStudyXylence } from "@/pages/CaseStudyXylence"
import { CaseStudyCitradr } from "@/pages/CaseStudyCitradr"
import { CaseStudyAzteca } from "@/pages/CaseStudyAzteca"
import { CaseStudyHiring } from "@/pages/CaseStudyHiring"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies/xylence" element={<CaseStudyXylence />} />
      <Route path="/case-studies/citradr" element={<CaseStudyCitradr />} />
      <Route path="/case-studies/azteca" element={<CaseStudyAzteca />} />
      <Route path="/case-studies/hiring" element={<CaseStudyHiring />} />
    </Routes>
  )
}

export default App
