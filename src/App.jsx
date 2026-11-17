import { useState } from 'react'
import HudLoader from './HudLoader'
import Header from './Header'
import Hero from './Hero'
import Storyteller from './Storyteller'
import CharacterGallery from './Character'
import CurrentResearch from './CurrentResearch'
import SkillsExpertise from './SkillsExpertise'
import ScholarlyWork from './ScholarlyWork'
import ProjectsHighlights from './ProjectHighlights'
import Footer from './Footer'
import './App.css'

function App() {


  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <HudLoader />
      <Header />
      <main>
        <Hero />
        <Storyteller />
        <CharacterGallery />
        <CurrentResearch />
        <SkillsExpertise />
        <ScholarlyWork />
        <ProjectsHighlights />
        <Footer />
      </main>
    </div>
  )
}

export default App
