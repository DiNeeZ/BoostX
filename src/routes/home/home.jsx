import React from 'react'
import Features from '../../components/features/features'
import Goals from '../../components/goals/goals'
import Hero from '../../components/hero/hero'
import Projects from '../../components/projects/projects'

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Projects />
      <Goals />
    </main>
  )
}

export default Home