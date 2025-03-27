import Section from "./components/Section"
import Hero from "./components/Hero"
import About from "./components/About"

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
      </main>
    </>
  )
}

export default App
