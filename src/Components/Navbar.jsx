import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brand">MyPortfolio</h1>
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><a href="#hero" className="hover:text-brand">Home</a></li>
          <li><a href="#skills" className="hover:text-brand">Skills</a></li>
          <li><a href="#services" className="hover:text-brand">Services</a></li>
          <li><a href="#portfolio" className="hover:text-brand">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-brand">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
