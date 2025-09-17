import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  let variantClass = '';
  
  switch (variant) {
    case 'primary':
      variantClass = 'bg-blue-600 text-white hover:bg-blue-700';
      break;
    case 'secondary':
      variantClass = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
      break;
    case 'outline':
      variantClass = 'bg-red-600 text-white hover:bg-red-700';
      break;
    default:
      variantClass = '';
  }
  
  return (
    <button
      className={`px-4 py-2 rounded ${variantClass} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;