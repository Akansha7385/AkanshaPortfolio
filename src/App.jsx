import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Project from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import './App.css'


function App() {
 

  return (
    // <>
    // <Home/>
    // </>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
    </Routes>
    
  )
}

export default App
