import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur py-2 shadow-lg' : 'bg-slate-900 py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-blue-400">Zeber</span>
              <span className="text-blue-300 ml-1">AI</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-200 ${location.pathname === '/' ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-all duration-200 ${location.pathname === '/services' ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              Services
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-all duration-200 ${location.pathname === '/team' ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-all duration-200 ${location.pathname === '/contact' ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              Contact Us
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/contact" 
              className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 shadow hover:shadow-md"
            >
              Schedule a Demo
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-4 animate-fade-in-down">
            <div className="flex flex-col space-y-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <Link to="/" className="font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2">Home</Link>
              <Link to="/services" className="font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2">Services</Link>
              <Link to="/team" className="font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2">Team</Link>
              <Link to="/contact" className="font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2">Contact Us</Link>
              <Link 
                to="/contact" 
                className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center mt-2"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;