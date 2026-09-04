import React from 'react';

export default function SectionTitle({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`max-w-2xl mx-auto mb-space-2xl space-y-space-xs ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display-sm text-display-sm-mobile md:text-display-sm text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
