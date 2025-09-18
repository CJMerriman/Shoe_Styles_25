import React from "react";


interface CardProps {
    title: string;
    image?: string;
    icon?: React.ReactNode;
    description: string;
    className?: string;
}


const Card: React.FC<CardProps> = ({
    title,
    image,
    icon,
    description,
    className = ""
}) => {
    return (
        <div
            className={`bg-white border border-[#E2E8F0] p-6 rounded-[12px] shadow transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center ${className}`}
            style={{ minHeight: 320 }}
        >
            {icon ? (
                <div className="mb-4 text-4xl">{icon}</div>
            ) : image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-20 h-20 object-cover rounded-full mb-4 border border-[#E2E8F0]"
                />
            ) : null}
            <h3 className="text-[24px] font-semibold text-[#1E293B] mb-2 leading-[1.3]">{title}</h3>
            <p className="text-[16px] font-normal text-[#1E293B] leading-[1.5]">{description}</p>
        </div>
    );
};


export default Card;