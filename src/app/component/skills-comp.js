"use client"; // Mark as a Client Component

import { skillsData } from "../constant/skills-const"; // Import skills data


export default function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Skills
          <span className="block h-1 w-16 bg-yellow-400 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md text-center overflow-hidden group"
            >
              {/* Skill Text */}
              <h3 className="text-lg font-semibold text-gray-800 relative z-10 transition-colors duration-300 group-hover:text-white">
                {skill}
              </h3>

              {/* Hover Effect */}
              <div className="absolute inset-x-0 bottom-0 h-0 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:h-full rounded-t-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}