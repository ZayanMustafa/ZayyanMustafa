'use client';
import Image from "next/image";
import Link from "next/link";
import { saveAs } from "file-saver";
import { portfolioData } from "../constant/about-const";
import Footer from "../component/footer-comp.js";
import NavBar from "../component/nav-comp";

export default function PortfolioPage() {
  // Function to handle resume download
  const handleDownloadResume = () => {
    saveAs(portfolioData.about.resumeUrl, "resume.pdf");
  };

  // Function to open resume in a new tab
  const handleViewResume = () => {
    window.open(portfolioData.about.resumeUrl, "_blank");
  };

  // Get current year for the footer
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header/Navigation */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - About Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold">{portfolioData.about.title}</h1>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {portfolioData.about.description}
            </p>
            <div className="flex space-x-4">
              {/* View Resume Button */}
              <button
                onClick={handleViewResume}
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                View Resume
              </button>

              {/* Download Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 rounded-full bg-yellow-400 overflow-hidden">
              <Image
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                width={400}
                height={900}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}