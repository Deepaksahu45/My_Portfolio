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
  return (
    <>
      {/* this BlurBlob is a */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      ></BlurBlob>
      <div className="bg-[#050414]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div>
          <Navbar />
          <h2>hello</h2>
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
