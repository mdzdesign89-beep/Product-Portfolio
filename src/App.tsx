import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { CaseStudyXylence } from "@/pages/CaseStudyXylence"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies/xylence" element={<CaseStudyXylence />} />
    </Routes>
  )
}

export default App
