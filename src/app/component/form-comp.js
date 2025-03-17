"use client"; 

import { useState } from "react";
import emailjs from "emailjs-com";
import { contactData } from "../constant/constant";
import Footer from "./footer-comp.js";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email.js configuration
    const serviceID = "service_alfs33s"; 
    const templateID = "your_template_id"; 
    const userID = "your_user_id"; 

    // Send email using Email.js
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to submit form. Please try again.");
      });
  };

  // Get current year for the footer
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col relative max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Contact
          <span className="block h-1 w-16 bg-yellow-400 mx-auto mt-2"></span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {contactData.formLabels.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {contactData.formLabels.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {contactData.formLabels.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-1 block w-full border-gray-300 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              {contactData.formLabels.sendButton}
            </button>
          </div>
        </form>
      </main>

    <Footer/>
    </div>
    
  );
}