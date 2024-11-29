import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <button className="bg-blue-500 text-white px-4 py-4">
        Manage Project
      </button>
        <Footer />
    </div>
  );
};

export default HomePage;
