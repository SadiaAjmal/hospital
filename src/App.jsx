import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"

function App() {

  return (
    <>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
