import React from "react";
// Sections
// import TopNavbar from "../components/Nav/TopNavbar";
// import Header from "../components/Sections/Header";
import Services from "../components/homePage/Sections/Services";
import Projects from "../components/homePage/Sections/Projects";
import Blog from "../components/homePage/Sections/Blog";
import Pricing from "../components/homePage/Sections/Pricing";
import Contact from "../components/homePage/Sections/Contact";
import Footer from "../components/homePage/Sections/Footer"

import TopNavbar from '../components/homePage/Nav/TopNavbar';
import Header from '../components/homePage/Sections/Header';

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


