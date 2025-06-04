import { Routes, Route } from 'react-router'
import './assets/css/index.css'
import Landing from './pages/landing'
import Contact from './pages/contact'
import About from './pages/about'
import Nav from './components/nav'
import { IconContext } from "react-icons";
import Footer from './components/footer'

function App() {

  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </IconContext.Provider>
  )
}

export default App
