import React from 'react'
import Hero from '../components/Hero'
import {Route,Routes} from 'react-router-dom'
import Projects from '../components/Projects'
function Home() {
  return (
    <>
        <Hero />
        <Projects/>
    </>
  )
}

export default Home
