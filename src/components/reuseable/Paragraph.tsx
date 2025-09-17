import React from "react";

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'base' | 'lg';
    color?: 'gray' | 'blue' | 'red' | 'green';
}

const Paragraph: React.FC<ParagraphProps> = ({
    children,
    className = '',
    size = 'base',
    color = 'gray'
})  => {

    const sizeClasses: Record<NonNullable<ParagraphProps['size']>, string> = {
     sm: 'text-sm',
     base: 'text-base',
     lg: 'text-lg'
    };

   const colorClasses: Record<NonNullable<ParagraphProps['color']>, string> = {
    gray: 'text-gray-700',
    blue: 'text-blue-600',
    red: 'text-red-600',
    green: 'text-green-600'
   };

   return (
    <p className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
     {children}
    </p>
   )
}

export default Paragraph;