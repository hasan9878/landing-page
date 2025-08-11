import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section
      className="py-16 bg-gray-800 "
      id="contact"
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-indigo-600">
          Connect with Me
        </h2>
        <div className="flex justify-center gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full 
                       shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-700"
          >
            <FaFacebookF size={20} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full 
                       shadow-lg transform transition duration-300 hover:scale-110 hover:bg-sky-600"
          >
            <FaTwitter size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-full 
                       shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-800"
          >
            <FaLinkedinIn size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full 
                       shadow-lg transform transition duration-300 hover:scale-110 hover:bg-black"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
