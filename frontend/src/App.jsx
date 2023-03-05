import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Home from "./views/Home"
import { Route, Routes } from 'react-router-dom'
import { isWallectConnected } from './services/blockchain'
import { useEffect, useState } from 'react'
import Project from './views/Project'
import { ToastContainer } from 'react-toastify'
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
      {loaded ? (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      ):null}
      {/* <Home />
      <Footer /> */}
     
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
