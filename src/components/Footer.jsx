import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link to="/tutorials" className="hover:underline">
            Tutorials
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;