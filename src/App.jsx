  
  import React, { useEffect } from "react";

  

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, //animation speed
      once: true, 
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
