import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setisOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", Label: "About" },
    { id: "skills", Label: "Skills" },
    { id: "experience", Label: "Experience" },
    { id: "work", Label: "Work" },
    { id: "education", Label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-white/70 dark:bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center text-black dark:text-white">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span>Deepak</span>
          <span className="text-[#8245ec]">/</span>
          <span>Sahu</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleItemClick(item.id)}>
                {item.Label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social icons + theme toggle */}
        <div className="hidden md:flex gap-5 items-center text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/Deepaksahu45"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/Deepaksahu45"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded-md hover:bg-[#8245ec] transition-colors"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setisOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setisOpen(true)}
            />
          )}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/80 dark:bg-[#050414]/80 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-5 text-gray-700 dark:text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-[#8245ec] ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handleItemClick(item.id)}>
                    {item.Label}
                  </button>
                </li>
              ))}

              {/* Social icons */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Deepaksahu45"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#8245ec]"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/Deepaksahu45"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#8245ec]"
                >
                  <FaLinkedin size={24} />
                </a>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 border rounded-md hover:bg-[#8245ec] transition-colors"
                >
                  {darkMode ? "🌞" : "🌙"}
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
