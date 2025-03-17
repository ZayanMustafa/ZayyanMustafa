// Hero.js
"use client";

import { heroContent } from "../constant/hero-const";
import NavBar from "./nav-comp";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
        {/* Navigation */}
        <NavBar/>

      {/* Main Content */}
      <div className="relative overflow-hidden">
        {/* Yellow Background Shape */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-yellow-400 rounded-bl-[30%]"></div>

        {/* Main Content */}
        <main className="relative z-10 px-6 py-12 md:py-20 flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-10 md:mb-0">
            <p className="text-yellow-500 font-semibold mb-2">{heroContent.subtitle}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{heroContent.title}</h2>
            <p className="text-gray-600 mb-8">{heroContent.description}</p>
            <div className="flex space-x-4">
              {heroContent.buttons.map((button) => (
                <a
                  key={button.id}
                  href={button.href}
                  className={`px-6 py-2 text-black font-medium rounded transition-colors ${button.className}`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-80 md:h-96">
              <img src={heroContent.image}  />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}