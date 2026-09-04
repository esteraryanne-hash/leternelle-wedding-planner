import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-[0.2em] transition-all duration-300";
  
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = "px-space-md py-space-sm bg-primary-container text-on-primary hover:bg-primary shadow-md hover:shadow-lg";
      break;
    case 'secondary':
      variantClasses = "px-8 py-4 bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed-dim shadow-lg hover:shadow-xl hover:-translate-y-0.5";
      break;
    case 'outline':
      variantClasses = "px-8 py-4 bg-surface-container-lowest/15 backdrop-blur-sm text-surface-bright hover:bg-surface-container-lowest hover:text-primary border border-surface-bright/40";
      break;
    case 'ghost':
      variantClasses = "text-primary hover:text-secondary";
      break;
    default:
      variantClasses = "px-space-md py-space-sm bg-primary-container text-on-primary hover:bg-primary";
  }

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={finalClasses} {...props}>
      {children}
    </button>
  );
}
