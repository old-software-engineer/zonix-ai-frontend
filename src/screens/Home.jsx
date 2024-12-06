import React, { useEffect, useState } from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Projects from "../components/Sections/Projects";
import Footer from '../components//Footer'
import ManagementCarousel from "../components/Teams/ManagementCarousel";







export default function Home() {
  return (
    <>
      <TopNavbar />
      <Projects />
      {/* <CreateTeam/> */}
      {/* <Creativity/> */}
      <div className="mt-10">
          {/* <h1 className="text-2xl text-center font-bold mt-10 pt-10">
            Importance of Project Management
          </h1> */}
          <ManagementCarousel />
        </div>
      <Footer />
    </>
  );
}


