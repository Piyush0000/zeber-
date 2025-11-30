import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Contact Bar */}
      <div className="bg-blue-900 py-4 px-6 text-center">
        <div className="container mx-auto">
          <p className="text-lg font-medium">
            Have a question? Reach out! | 
            <span className="mx-3">📞 +91 XXXXXXXXXX</span> | 
            <span className="mx-3">✉️ contact@zeberai.com</span>
          </p>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">ZeberAI</span>
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              AI automation solutions that help businesses scale operations with cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Quick Links</span>
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/team" className="text-slate-300 hover:text-white transition-colors duration-300">Team</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Contact Info</span>
            </h4>
            <address className="not-italic text-slate-300">
              <p className="mb-3 flex items-start">
                <svg className="h-5 w-5 mr-2 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>123 AI Street, Tech City<br />Bangalore, India 560001</span>
              </p>
              <p className="mb-3 flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 XXXXXXXXXX</span>
              </p>
              <p className="mb-3 flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>contact@zeberai.com</span>
              </p>
            </address>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800 py-6 px-6 text-center text-slate-400">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} <span className="font-medium bg-gradient-to-r from-slate-300 to-amber-300 bg-clip-text text-transparent">ZeberAI</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;