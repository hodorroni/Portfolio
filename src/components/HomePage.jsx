import Contact from "./Contact";
import Footer from "./Footer";
import HeaderHomePage from "./HeaderHomePage";
import Projects from "./Projects";
import ProjectsNumber from "./ProjectsNumber";
import TopContent from "./TopContent";
import React, { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <div className={`website_content`} id="home">
        <HeaderHomePage />
        <main className="main__content">
          <TopContent />
          <ProjectsNumber />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
