import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/AboutMe/About.jsx";
import Project from "./components/Project/Project.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import { useRef } from "react";

function App() {

const heroRef=useRef(null) 
const aboutRef=useRef(null)
const carouselRef=useRef(null)
const projectRef=useRef(null)

const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <div>
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} heroRef={heroRef} carouselRef={carouselRef} projectRef={projectRef} />
      <section ref={heroRef}><Hero /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={carouselRef}><Carousel /></section>
      <Newsletter />
      <section ref={projectRef}><Project /></section>
      <Footer />
    </div>
  );
}

export default App;
