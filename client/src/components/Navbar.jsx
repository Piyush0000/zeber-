import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">ZeberAI</Link>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
        <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium">Team</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</Link>
      </div>
      
      <div>
        <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Schedule a Demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;