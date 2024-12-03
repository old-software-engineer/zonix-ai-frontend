import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { instance } = useMsal();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    const handleLogout = () => {
        const activeAccount = instance.getActiveAccount();
        localStorage.removeItem("token");
        console.log(
          "=========================== Active account : ",
          instance.getActiveAccount()
        );
        instance.logoutRedirect({
          account: activeAccount,
          postLogoutRedirectUri: "/",
        });
        // navigate('/')
      };

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">ZONIX AI</div>
        <button
          className="text-white lg:hidden block"
          onClick={toggleMenu}
        >
          <span className="text-2xl">☰</span>
        </button>
        <ul
          className={`lg:flex space-x-6 ${isOpen ? "block" : "hidden"} lg:block`}
        >
          <li><a href="/home" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-200">About</a></li>
          <li><a href="#services" className="text-white hover:text-gray-200">Services</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-200">Contact</a></li>
          <li><a href="#logout" className="text-white hover:text-gray-200" onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
