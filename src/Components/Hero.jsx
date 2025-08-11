import React, { useEffect, useState } from "react";

export default function Hero() {
  const roles = ["Web Developer", "Frontend Specialist", "Freelancer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing Effect
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ];

  return (
    <section
      id="hero"
      data-aos="fade-up"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4"
    >
      {/* Profile Image */}
      <img
        src="Profile.png" 
        alt="Profile"
        className="w-56 h-58 rounded-full shadow-lg border-4 border-white mb-6 hover:scale-105 transition-transform duration-300"
      />

      {/* Name and typing text */}
      <h1 className="text-4xl md:text-6xl font-bold mb-2">Hi, I am Hasan Ali</h1>
      <h2 className="text-2xl md:text-4xl font-semibold h-10">{text}</h2>

      {/* Hire Me button */}
      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-gray-100">
        Hire Me
      </button>

      {/* সSkills logo animation */}
      <div className="mt-10 flex overflow-hidden space-x-8 animate-scroll">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.img}
            alt={skill.name}
            title={skill.name}
            className="w-12 h-12 hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>

      {/* scrolling animation by CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
