// ContactPage.js
"use client";
// import ContactForm from "./ContactForm"; // Import your ContactForm component
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // React Icons
import ContactForm from "../component/form-comp";
import NavBar from "../component/nav-comp";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
     <Head>
      <title>Contact Me</title>
      <meta name="description" content="Contact me page" />
     </Head>
     
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <NavBar/>
      <div className="bg-yellow-400 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-700">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex-grow container mx-auto px-4 py-12">
        <ContactForm/>
      </div>

      {/* Social Media Links */}
      {/* <div className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div> */}
    </div>
    </>
  );
}
