import React from "react";

const Footers = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
        <div className="container mx-auto text-center">
          {/* Name / Logo */}
          <h2 className="text-xl font-semibold text-purple-500">Deepak Sahu</h2>

          {/* Navigation Links - Responsive */}
          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "work" },
              { name: "Education", id: "education" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="hover:text-purple-500 text-sm sm:text-base my-1"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Media Icons - Responsive */}

          {/* Copyright Text */}
          <p className="text-sm text-gray-400 mt-6">
            © 2025 Deepak Sahu. All rights reserved.
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footers;
