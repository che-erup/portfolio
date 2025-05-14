import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Broadcasting from "../components/Projects_Broadcasting/Broadcasting";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

{/* import FixSocialIcon from "../components/SocialIcon/FixSocialIcon"; */}
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      {/*
      <Broadcasting/>
      */}
      <About />
      <Contact />
      <Footer />
      {/*
        <FixSocialIcon />
      */}
    </>
  );
}

export default Home;
