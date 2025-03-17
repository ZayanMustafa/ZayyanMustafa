"use client";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa"; // React Icons
import { projects } from "../constant/projectdetail-const"; // Import projects data
import Footer from "../component/footer-comp";
import NavBar from "../component/nav-comp";
export default function ProjectsPage() {
  return (
    <>
        <NavBar/>
     <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          Projects
          <div className="h-1 w-16 bg-yellow-400 mx-auto mt-2"></div>
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-yellow-500 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-yellow-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-yellow-500 transition-colors"
                  >
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          <Footer/>
    </div>
    </>
  );
}