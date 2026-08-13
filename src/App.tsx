import { HeaderNav } from "@/components/sections/HeaderNav"
import { Hero } from "@/components/sections/Hero"
import { AboutMe } from "@/components/sections/AboutMe"
import { SelectedWork } from "@/components/sections/SelectedWork"
import { MyProcess } from "@/components/sections/MyProcess"
import { ExperienceTools } from "@/components/sections/ExperienceTools"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <HeaderNav />
      <main>
        <Hero />
        <AboutMe />
        <SelectedWork />
        <MyProcess />
        <ExperienceTools />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
