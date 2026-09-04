import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import heroBg from '../assets/images/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="relative w-full -mt-20 overflow-hidden min-h-[92vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Editorial Lake Como Wedding at Sunset" 
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out" 
          src={heroBg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/35 to-primary/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[0.5px]"></div>
      </div>
      
      <Container className="relative z-10 w-full pt-32 pb-20 flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface/20 backdrop-blur-md text-on-primary rounded-full mb-space-lg shadow-sm border border-outline-variant/30">
          <span className="material-symbols-outlined text-secondary-fixed text-[14px]">diamond</span>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-surface-bright">Atelier de Mariage — Paris &amp; Worldwide</span>
          <span className="material-symbols-outlined text-secondary-fixed text-[14px]">diamond</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-surface-bright max-w-4xl tracking-tight leading-[1.08] mb-space-md drop-shadow-sm">
          Your Love Story Deserves an Extraordinary Celebration
        </h1>
        
        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl font-light mb-space-xl tracking-wide opacity-95">
          We create timeless, meaningful, and beautifully curated weddings designed around your unique story and enduring romance.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto mb-space-2xl">
          <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
            Start Planning
          </Button>
          <Button href="#weddings" variant="outline" className="w-full sm:w-auto">
            Explore Our Weddings
          </Button>
        </div>
        
        {/* Subtle Editorial Floating Badge */}
        <div className="pt-space-md border-t border-surface-bright/20 flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs text-surface-container-low/90">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed-dim">Featured in</span>
          <span className="font-headline-sm text-headline-sm italic text-surface-bright text-[17px]">Vogue Weddings</span>
          <span className="w-1 h-1 rounded-full bg-surface-bright/40"></span>
          <span className="font-headline-sm text-headline-sm italic text-surface-bright text-[17px]">Harper's Bazaar Bride</span>
          <span className="w-1 h-1 rounded-full bg-surface-bright/40"></span>
          <span className="font-headline-sm text-headline-sm italic text-surface-bright text-[17px]">The Lane</span>
          <span className="w-1 h-1 rounded-full bg-surface-bright/40"></span>
          <span className="font-headline-sm text-headline-sm italic text-surface-bright text-[17px]">Over The Moon</span>
        </div>
      </Container>
    </section>
  );
}
