import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-2 text-center md:flex-row justify-center space-x-6 ">
          <Link to="/" className="hover:underline text-white">
            Home
          </Link>
          <Link to="/terms" className="hover:underline text-white">
            Terms & Conditions
          </Link>
          <Link to="/about" className="hover:underline text-white">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline text-white">
            Contact
          </Link>
          <Link to="/faq" className="hover:underline text-white">
            FAQ
          </Link>
          <Link to="/tutorials" className="hover:underline text-white">
            Tutorials
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;