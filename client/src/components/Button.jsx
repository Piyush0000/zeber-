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
  let baseClasses = 'font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 transform hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-xl ';
  
  // Variant classes with dark theme and Gen Z animations
  const variantClasses = {
    primary: `bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white focus:ring-purple-300 shadow-2xl hover:shadow-purple-500/30 ${isHovered ? 'animate-pulse animate-neon-glow' : ''}`,
    secondary: `bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 to-blue-600 text-white focus:ring-cyan-300 shadow-2xl hover:shadow-cyan-500/30 ${isHovered ? 'animate-bounce animate-wave' : ''}`,
    outline: `bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 focus:ring-purple-300 ${isHovered ? 'animate-shake animate-glitch' : ''}`
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
        className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-full w-6 h-6 text-xs animate-pulse animate-wave"
        title="Toggle Crazy Mode"
      >
        !
      </button>
    </div>
  );
};

export default Button;