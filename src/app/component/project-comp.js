'use client';
import Link from "next/link";
import { projects } from "../constant/project-const";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-12">
        Projects
        <div className="h-1 w-16 bg-yellow-400 mx-auto mt-2"></div>
      </h1>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Flex container for image and text */}
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Project Details */}
              <div className="flex-1 p-8 flex flex-col justify-center md:w-2/3">
                <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <button
                      className="inline-block px-6 py-2 border border-gray-300 rounded-full text-sm bg-white text-black hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      View Project
                    </button>
                  </Link>
                </div>
              </div>

              {/* Project Image */}
              <div className="flex-1 md:w-1/3">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.imageAlt}
                  className="w-full h-64 md:h-auto object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push("/projects")}
          className="px-8 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
        >
          View all Projects
        </button>
      </div>
    </div>
  );
}