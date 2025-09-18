import React from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

const headingStyles = {
  1: "text-[48px] md:text-[32px] font-bold leading-[1.1] text-[#1E293B]",
  2: "text-[36px] md:text-[28px] font-bold leading-[1.2] text-[#1E293B]",
  3: "text-[24px] md:text-[20px] font-semibold leading-[1.3] text-[#1E293B]",
  4: "text-[20px] md:text-[18px] font-semibold leading-[1.4] text-[#1E293B]",
};


const Heading: React.FC<HeadingProps> = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}`;
  return React.createElement(
    Tag,
    { className: `${headingStyles[level]} font-inter ${className}`.trim() },
    children
  );
};

export default Heading;
