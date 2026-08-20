import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { CaseStudyXylence } from "@/pages/CaseStudyXylence"
import { CaseStudyCitradr } from "@/pages/CaseStudyCitradr"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies/xylence" element={<CaseStudyXylence />} />
      <Route path="/case-studies/citradr" element={<CaseStudyCitradr />} />
    </Routes>
  )
}

export default App
