import React from "react";


interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'body' | 'small' | 'caption';
    as?: 'p' | 'span' | 'div';
}


const variantClasses: Record<NonNullable<ParagraphProps['variant']>, string> = {
    body: 'text-[16px] leading-[1.5] font-normal text-[#1E293B]',
    small: 'text-[14px] leading-[1.5] font-normal text-[#64748B]',
    caption: 'text-[12px] leading-[1.5] font-normal text-[#94A3B8]',
};

const Paragraph: React.FC<ParagraphProps> = ({
    children,
    className = '',
    variant = 'body',
    as = 'p',
}) => {
    const Tag = as;
    return React.createElement(
        Tag,
        { className: `${variantClasses[variant]} font-inter ${className}`.trim() },
        children
    );
};

export default Paragraph;