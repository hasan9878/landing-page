import React from "react";

const services = [
  { title: "Responsive Web Design", desc: "Pixel-perfect, mobile-friendly websites." },
  { title: "Landing Pages", desc: "High-converting landing pages for your business." },
  { title: "React & Next.js Apps", desc: "Modern, dynamic web applications." }
];

export default function Services() {
  return (
    <section className="py-16 bg-white text-white dark:bg-black"id="services" data-aos="fade-left">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-indigo-600">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
