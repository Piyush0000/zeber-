import React, { useState } from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  type = 'button',
  className = '',
  disabled = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCrazyMode, setIsCrazyMode] = useState(false);

  // Define base classes
  let baseClasses = 'font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 transform hover:-translate-y-1 active:translate-y-0 ';
  
  // Variant classes with professional blue theme and colorful animations
  const variantClasses = {
    primary: `bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700 text-white focus:ring-blue-300 shadow-2xl hover:shadow-blue-500/30 ${isHovered ? 'animate-pulse' : ''}`,
    secondary: `bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 to-cyan-600 text-white focus:ring-cyan-300 shadow-2xl hover:shadow-cyan-500/30 ${isHovered ? 'animate-bounce' : ''}`,
    outline: `bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-500/20 focus:ring-blue-300 ${isHovered ? 'animate-shake' : ''}`
  };
  
  // Size classes
  const sizeClasses = {
    small: 'py-3 px-5 text-sm',
    medium: 'py-4 px-8 text-lg',
    large: 'py-5 px-10 text-xl'
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none' : '';
  
  // Combine all classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className} ${isCrazyMode ? 'animate-gradient-shift' : ''}`;
  
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  const toggleCrazyMode = () => {
    setIsCrazyMode(!isCrazyMode);
  };

  return (
    <div className="relative inline-block">
      <button
        type={type}
        className={combinedClasses}
        onClick={handleClick}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={isCrazyMode ? 'crazy-rainbow-text' : ''}>{children}</span>
      </button>
      <button 
        onClick={toggleCrazyMode}
        className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full w-6 h-6 text-xs animate-pulse"
        title="Toggle Crazy Mode"
      >
        !
      </button>
    </div>
  );
};

export default Button;