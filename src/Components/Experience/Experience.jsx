import React from "react";
import { experiences } from "../../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans 
                 bg-skills-gradient dark:bg-[#050414] clip-path-custom-2"
    >
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-xl font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience timeline */}
      <div className="relative flex justify-center items-center">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* Experience card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl 
                          border border-gray-200 dark:border-white/10 
                          bg-white/70 dark:bg-white/5 backdrop-blur-md 
                          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                          ${
                            index % 2 === 0
                              ? "sm:ml-25 sm:mr-0"
                              : "sm:mr-25 sm:ml-0"
                          } ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Header with logo + info */}
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, company, date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-700 dark:text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-700 dark:text-gray-400">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-gray-900 dark:text-white">
                  Skills:
                </h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-white px-4 py-1 
                                 text-xs sm:text-sm rounded-lg mr-2 mb-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
