// import { Instagram, Linkedin, Mail } from "react-feather";
import { contactData } from "../constant/constant";
// import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer(){
const currentYear = new Date().getFullYear();

    return (
     
      <footer className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {contactData.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-600 hover:text-black"
              >
                {link.icon === "YouTube" && <FaYoutube size={20} />}
                {link.icon === "Linkedin" && <FaLinkedin size={20} />}
                {link.icon === "GitHub" && <FaGithub size={20} />}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {contactData.name} {currentYear}
          </div>
        </div>
      </footer>
    )
}