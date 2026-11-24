import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import CompetitiveProgramming from './components/CompetitiveProgramming.jsx'
import GitHubSection from './components/GitHubSection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <CompetitiveProgramming />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
