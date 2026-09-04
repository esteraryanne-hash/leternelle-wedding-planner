import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-[1440px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop ${className}`}>
      {children}
    </div>
  );
}
