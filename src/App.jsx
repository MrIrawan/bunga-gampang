import Section from "./components/Section"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import Blog from "./components/Blog"

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
          <Blog />
        </Section>
      </main>
    </>
  )
}

export default App
