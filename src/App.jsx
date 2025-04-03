import Section from "./components/Section"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import Articles from "./components/Articles"

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
        <Section>
          <Articles />
        </Section>
      </main>
    </>
  )
}

export default App
