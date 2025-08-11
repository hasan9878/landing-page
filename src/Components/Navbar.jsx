import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-brand">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><a href="#hero" className="hover:text-brand">Home</a></li>
          <li><a href="#skills" className="hover:text-brand">Skills</a></li>
          <li><a href="#services" className="hover:text-brand">Services</a></li>
          <li><a href="#portfolio" className="hover:text-brand">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-brand">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold text-brand mb-6">MyPortfolio</h1>
          <ul className="flex flex-col gap-6 text-gray-700">
            <li><a href="#hero" className="hover:text-brand" onClick={toggleMenu}>Home</a></li>
            <li><a href="#skills" className="hover:text-brand" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#services" className="hover:text-brand" onClick={toggleMenu}>Services</a></li>
            <li><a href="#portfolio" className="hover:text-brand" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#contact" className="hover:text-brand" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay background when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
