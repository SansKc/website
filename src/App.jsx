import "./App.css";
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from "./components/AboutMe/About.jsx";
import Project from "./components/Project/Project.jsx";

function App() {
  return  (
    <div>
    
    
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    </div>
  )
}

export default App;
