import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-2 text-center md:flex-row justify-center text-lg space-x-6 ">
          <Link to="/" className="hover:underline hover:text-gray-200 text-white">
            Home
          </Link>
          <Link to="/terms" className="hover:underline hover:text-gray-200 text-white">
            Terms & Conditions
          </Link>
          <Link to="/about" className="hover:underline hover:text-gray-200 text-white">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline hover:text-gray-200 text-white">
            Contact
          </Link>
          <Link to="/faq" className="hover:underline hover:text-gray-200 text-white">
            FAQ
          </Link>
          <Link to="/tutorials" className="hover:underline hover:text-gray-200 text-white">
            Tutorials
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;