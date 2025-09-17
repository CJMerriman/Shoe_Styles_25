import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary', className = '' }) => {
  let variantClass = '';
  switch (variant) {
    case 'primary':
      variantClass = 'bg-blue-600 text-white hover:bg-blue-700';
      break;
    case 'secondary':
      variantClass = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
      break;
    case 'danger':
      variantClass = 'bg-red-600 text-white hover:bg-red-700';
      break;
    default:
      variantClass = '';
  }
  return (
    <button
      className={`px-4 py-2 rounded ${variantClass} ${className}`.trim()}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
