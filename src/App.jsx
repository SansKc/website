import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/AboutMe/About.jsx";
import Project from "./components/Project/Project.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Carousel/>
      <Newsletter />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
