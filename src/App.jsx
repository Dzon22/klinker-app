import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'
import ContactUs from './Components/ContactUs'
import Studio from './Components/Studio'
import './App.css'
import ProjectDetails from './Components/ProjectDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<ProjectDetails />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </>
  )
}

export default App
