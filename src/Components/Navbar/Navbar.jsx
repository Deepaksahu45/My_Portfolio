import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // importing icon from react icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //   smooth scroll function
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
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]   ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* this div are written for my name log */}
        <div className=" text-lg  font-semibold cursor-pointer ">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Deepak</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Sahu</span>
          <span className="text-[#8245ec]">&gt;</span>
          {/* this lines are written for this <> this   */}
        </div>

        {/* desktop menu  */}
        <ul className="hidden md:flex space-x-8 text-gray-300 ">
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
        {/* social media icons add */}
        <div className="hidden md:flex gap-5  ">
          <a
            href="https://github.com/Deepaksahu45"
            target="_blank"
            rel="nopener norefferer"
            className="text-grey-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://github.com/Deepaksahu45"
            target="_blank"
            rel="nopener norefferer"
            className="text-grey-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* mobile menu icons  */}
        <div className="md:hidden ">
          {isOpen ? (
            <FiX
              className=" text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setisOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setisOpen(true)}
            />
          )}
        </div>

        {/* Mobile Menu items  */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-5 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handleItemClick(item.id)}>
                    {item.Label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-4 ">
                <a
                  href="https://github.com/Deepaksahu45"
                  target="_blank"
                  rel="nopener norefferer"
                  className="text-grey-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://github.com/Deepaksahu45"
                  target="_blank"
                  rel="nopener norefferer"
                  className="text-grey-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
