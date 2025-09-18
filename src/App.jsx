import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
