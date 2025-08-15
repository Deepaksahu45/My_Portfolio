import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footers from "./Components/Footers/Footers";
import BlurBlob from "./Components/BlurBlob";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply/remove `dark` class to HTML tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
      {/* Background effects */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div>
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Main content container */}
        <div className="bg-white text-black dark:bg-[#050414] dark:text-gray-300 transition-colors duration-300">
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
          <div className="pt-1"></div>
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footers />
        </div>
      </div>
    </>
  );
}

export default App;
