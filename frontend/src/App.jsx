import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Home from "./views/Home"
import { Route, Routes } from 'react-router-dom'
import { isWallectConnected } from './services/blockchain'
import { useEffect, useState } from 'react'
import Project from './views/Project'
const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain loaded')
    setLoaded(true)
  }, [])
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Home />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
   
    </div>
  )
}

export default App
