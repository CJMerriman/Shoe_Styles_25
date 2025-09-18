import React from "react";

interface CardProps {
    title: string;
    image: string;
    description: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    image,
    description,
    className = ''
}) => {
    return(
        <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
            <div className="aspect-video w-full overflow-hidden">
                <img 
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
};


export default Card;