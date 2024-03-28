import React from "react";
import Header from "./sections/header";
import AboutMe from "./sections/aboutme";
import ProjectsAndSKills from "./sections/projectsandskills";
import ProjectGallery from "./sections/projectgallery";
import Footer from "./sections/footer";



function App() {
  return (
    <div>
        <Header />
        <AboutMe />
        <ProjectsAndSKills />
        <ProjectGallery />
        <Footer />
    </div>
  );
}

export default App;
