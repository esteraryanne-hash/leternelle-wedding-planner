import React, { useState } from 'react';
import Button from './Button';
import Container from './Container';
import logoLeternelle from '../assets/images/logo-leternelle.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <Container className="h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-space-sm relative z-50">
          <img 
            alt="L'Éternelle Logo" 
            className="h-8 w-auto object-contain" 
            src={logoLeternelle}
          />
          <a className="flex flex-col text-left group" href="#top" onClick={closeMobileMenu}>
            <span className="font-headline-sm text-headline-sm tracking-wide text-primary transition-colors group-hover:text-secondary">
              L'Éternelle
            </span>
            <span className="font-label-sm text-label-sm uppercase text-secondary -mt-1">
              Atelier de Mariage
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          <a className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1" href="#about">About</a>
          <a className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1" href="#services">Services</a>
          <a className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1" href="#weddings">Weddings</a>
          <a className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1" href="#testimonials">Testimonials</a>
          <a className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1" href="#contact">Contact</a>
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-space-md relative z-50">
          <Button href="#contact" className="hidden sm:inline-flex" onClick={closeMobileMenu}>
            Let's Plan Your Wedding
          </Button>
          <div className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button 
            aria-label="Open Navigation Menu" 
            aria-expanded={isMobileMenuOpen}
            className="xl:hidden p-space-2xs text-on-surface hover:text-primary transition-colors" 
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="material-symbols-outlined text-[26px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-surface shadow-md border-t border-surface-container-high py-space-md px-gutter-mobile flex flex-col gap-space-md z-40 animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-space-sm">
            <a className="font-label-md text-label-md uppercase text-on-surface hover:text-primary transition-colors py-2 border-b border-surface-container-high" href="#about" onClick={closeMobileMenu}>About</a>
            <a className="font-label-md text-label-md uppercase text-on-surface hover:text-primary transition-colors py-2 border-b border-surface-container-high" href="#services" onClick={closeMobileMenu}>Services</a>
            <a className="font-label-md text-label-md uppercase text-on-surface hover:text-primary transition-colors py-2 border-b border-surface-container-high" href="#weddings" onClick={closeMobileMenu}>Weddings</a>
            <a className="font-label-md text-label-md uppercase text-on-surface hover:text-primary transition-colors py-2 border-b border-surface-container-high" href="#testimonials" onClick={closeMobileMenu}>Testimonials</a>
            <a className="font-label-md text-label-md uppercase text-on-surface hover:text-primary transition-colors py-2 border-b border-surface-container-high" href="#contact" onClick={closeMobileMenu}>Contact</a>
          </nav>
          <div className="pt-space-sm pb-space-sm flex justify-center sm:hidden">
            <Button href="#contact" className="w-full justify-center" onClick={closeMobileMenu}>
              Let's Plan Your Wedding
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
