import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import PrevProjects from "./components/PrevProjects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";




export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <PrevProjects />
      <Skills />    
      <Contact />
    </main>
   );
}



//src="https://www.google.com/maps/embed/v1/place?q=Koper&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"  