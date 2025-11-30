import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  type = 'button',
  className = '',
  disabled = false 
}) => {
  // Define base classes with professional styling
  let baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg ';
  
  // Professional dark blue theme variants
  const variantClasses = {
    primary: 'bg-blue-700 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-blue-200 focus:ring-slate-500',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-300 hover:bg-blue-900/30 focus:ring-blue-500'
  };
  
  // Size classes
  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg'
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none' : '';
  
  // Combine all classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;