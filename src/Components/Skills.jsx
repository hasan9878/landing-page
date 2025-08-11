import React from "react";

const skills = [
  "HTML", "CSS", "Bootstrap", "TailwindCSS", "JavaScript", "TypeScript", "React", "Next.js"
];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-white font-semibold"id="skills"  data-aos="fade-right">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-indigo-600">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
