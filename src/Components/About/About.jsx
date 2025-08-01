import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center  ">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 ">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 loading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Deepak Sahu
          </h2>

          <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            {/* this is a type animation */}
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Fullstack Developer",
                2000,
                "Web Developer",
                2000,
                "Coder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a dedicated and growth-driven Full-Stack Web Developer,
            currently specializing in the MERN stack. With a strong foundation
            in HTML, CSS, JavaScript, and React.js, I’ve built multiple
            responsive and user-friendly web applications. I’m now expanding my
            expertise into backend development using Node.js, Express.js, and
            MongoDB to become a complete full-stack developer.
          </p>

          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1scl4Ue4EGGvJQG3e2OD8DNqV1HTd6_1v/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5  text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/**right side of the about where all the logo are present */}
        <div className="md:w-1/2 flex justify-center md:justify-end ml-5 ">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="/profile.png"
              alt="Deepak Sahu"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] "
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
