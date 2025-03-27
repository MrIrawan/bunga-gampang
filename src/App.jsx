import Section from "./components/Section"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <main>
        <Section sectionId='home'>
          <Hero />
        </Section>
        <Section sectionId='about'>
          
        </Section>
      </main>
    </>
  )
}

export default App
