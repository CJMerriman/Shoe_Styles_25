import React from 'react';


type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'link';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string })
);


const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  href,
  ...props
}) => {
  // Ticket 01: Variants, color, font, radius, hover, focus
  let variantClass = '';
  switch (variant) {
    case 'primary':
      variantClass = 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-700'; // #0D9488, darken 10% #0C827A
      break;
    case 'link':
      variantClass = 'bg-transparent text-teal-600 underline hover:text-teal-700 focus:ring-2 focus:ring-teal-700';
      break;
    default:
      variantClass = '';
  }

  // Ticket 01: Sizes
  let sizeClass = '';
  switch (size) {
    case 'sm':
      sizeClass = 'px-2 py-1 text-[16px] h-8';
      break;
    case 'md':
      sizeClass = 'px-3 py-2 text-[16px] h-10';
      break;
    case 'lg':
      sizeClass = 'px-4 py-3 text-[16px] h-12';
      break;
    default:
      sizeClass = 'px-3 py-2 text-[16px] h-10';
  }

  // Ticket 01: Font, radius
  const baseClass = 'font-inter font-medium rounded-[8px] transition-colors duration-150 outline-none focus:outline-none';

  if (as === 'a' && href) {
    // Only pass anchor-allowed props
    const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {};
    for (const key in props) {
      if ([
        'download', 'href', 'hrefLang', 'media', 'ping', 'rel', 'target', 'type', 'referrerPolicy',
        'className', 'id', 'style', 'tabIndex', 'title', 'role', 'aria-label', 'aria-current',
        'onClick', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onKeyDown', 'onKeyUp',
      ].includes(key)) {
        // @ts-ignore
        anchorProps[key] = props[key];
      }
    }
    return (
      <a
        href={href}
  className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  // Only pass button-allowed props
  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {};
  for (const key in props) {
    if ([
      'autoFocus', 'disabled', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate',
      'formTarget', 'name', 'type', 'value', 'className', 'id', 'style', 'tabIndex', 'title', 'role',
      'aria-label', 'aria-pressed', 'onClick', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur',
      'onKeyDown', 'onKeyUp',
    ].includes(key)) {
      // @ts-ignore
      buttonProps[key] = props[key];
    }
  }
  return (
    <button
      type={buttonProps.type as 'button' | 'submit' | 'reset' || 'button'}
  className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;