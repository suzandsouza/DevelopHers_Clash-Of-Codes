import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Home from "./views/Home"
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Home />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   
    </div>
  )
}

export default App
