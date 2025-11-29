import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Bar */}
      <div className="bg-blue-600 py-4 px-6 text-center">
        <div className="container mx-auto">
          <p className="text-lg">
            Have a question? Reach out! | 
            <span className="mx-2">📞 +91 XXXXXXXXXX</span> | 
            <span className="mx-2">✉️ contact@zeberai.com</span>
          </p>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ZeberAI</h3>
            <p className="text-gray-400 mb-4">
              Near-gen AI automation solutions that help businesses scale operations 2× faster with cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Team</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">📍 123 AI Street, Tech City</p>
              <p className="mb-2">📞 +91 XXXXXXXXXX</p>
              <p className="mb-2">✉️ contact@zeberai.com</p>
            </address>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 px-6 text-center text-gray-500">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} ZeberAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;