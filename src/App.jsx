import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import AboutMe from "./components/About/AboutMe";
import ProjectsSliders from "./components/ProjectSliders/ProjectSliders";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer.css/Footer";
import Navbar from "./components/Navbar/Navbar";
// import ProjectsSliders from "./components/ProjectSlider;

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      const projectSection = document.getElementById(selectedProject);
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedProject]);

  return (
    <div>
      <Navbar />
      <Header setSelectedProject={setSelectedProject} />
      <AboutMe />
      <ProjectsSliders />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
