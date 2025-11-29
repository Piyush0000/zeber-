import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCrazyMode, setIsCrazyMode] = useState(false);
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

  const toggleCrazyMode = () => {
    setIsCrazyMode(!isCrazyMode);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-blue-900/90 backdrop-blur-lg py-2 shadow-2xl' : 'bg-gradient-to-r from-blue-800/80 via-blue-700/80 to-blue-900/80 backdrop-blur-sm py-4'} ${isCrazyMode ? 'animate-gradient-shift' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold animate-float">
              <span className={`text-white ${isCrazyMode ? 'animate-spin-slow' : ''}`}>Zeber</span>
              <span className="text-blue-300 ml-1 animate-pulse">AI</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-bold text-lg transition-all duration-300 hover:text-blue-300 transform hover:scale-110 ${location.pathname === '/' ? 'text-blue-300 animate-pulse' : 'text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-bold text-lg transition-all duration-300 hover:text-blue-400 transform hover:scale-110 ${location.pathname === '/services' ? 'text-blue-400 animate-bounce' : 'text-white'}`}
            >
              Services
            </Link>
            <Link 
              to="/team" 
              className={`font-bold text-lg transition-all duration-300 hover:text-blue-300 transform hover:scale-110 ${location.pathname === '/team' ? 'text-blue-300 animate-shake' : 'text-white'}`}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className={`font-bold text-lg transition-all duration-300 hover:text-blue-200 transform hover:scale-110 ${location.pathname === '/contact' ? 'text-blue-200 animate-float' : 'text-white'}`}
            >
              Contact Us
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleCrazyMode}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 animate-pulse"
            >
              {isCrazyMode ? 'CRAZY MODE ON!' : 'GO CRAZY!'}
            </button>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce"
            >
              Schedule a Demo
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleCrazyMode}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-1 px-3 rounded-full text-sm animate-pulse"
            >
              {isCrazyMode ? 'CRAZY!' : 'GO!'}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none animate-spin"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden mt-4 pb-4 animate-fade-in-down">
            <div className="flex flex-col space-y-4 bg-black/50 backdrop-blur-lg rounded-2xl p-6">
              <Link to="/" className="font-bold text-white hover:text-blue-300 transition-colors duration-300 text-lg">Home</Link>
              <Link to="/services" className="font-bold text-white hover:text-blue-400 transition-colors duration-300 text-lg">Services</Link>
              <Link to="/team" className="font-bold text-white hover:text-blue-300 transition-colors duration-300 text-lg">Team</Link>
              <Link to="/contact" className="font-bold text-white hover:text-blue-200 transition-colors duration-300 text-lg">Contact Us</Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-2xl animate-bounce"
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