import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Storyteller from './Storyteller'
import CharacterGallery from './Character'
import CurrentResearch from './CurrentResearch'
import SkillsExpertise from './SkillsExpertise'
import './App.css'

function App() {


  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <Header />
      <main>
        <Hero />
        <Storyteller />
        <CharacterGallery />
        <CurrentResearch />
        <SkillsExpertise />
      </main>
    </div>
  )
}

export default App
