import Section from "./components/Section"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import BentoGridView from "./components/layout/BentoGridView"

function App() {

  return (
    <>
      <main>
        <Section sectionId='home'>
          <Hero />
        </Section>
        <Section sectionId='about'>
          <About />
        </Section>
        <Section sectionId='features'>
          <Features />
        </Section>
      </main>
    </>
  )
}

export default App
