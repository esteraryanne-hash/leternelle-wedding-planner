import React from 'react';
import Container from './Container';
import logoLeternelle from '../assets/images/logo-leternelle.png';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-space-3xl pb-space-2xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img 
                alt="L'Éternelle Logo" 
                className="h-9 w-auto object-contain" 
                src={logoLeternelle}
              />
              <span className="font-headline-md text-headline-md text-primary tracking-wide">
                L'Éternelle
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm italic text-secondary font-normal">
              Turning Your Love Story Into an Unforgettable Celebration
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              A bespoke couture wedding atelier crafting timeless editorial experiences, architectural floral installations, and reverent celebrations globally.
            </p>
          </div>

          {/* Studios */}
          <div className="lg:col-span-2 space-y-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">Studios</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>18 Place Vendôme, Paris</li>
              <li>Via Regina 42, Lake Como</li>
              <li>640 Madison Ave, New York</li>
              <li className="pt-space-xs text-secondary font-label-sm text-label-sm uppercase">Available Worldwide</li>
            </ul>
          </div>

          {/* Directory */}
          <div className="lg:col-span-2 space-y-space-sm">
            <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">Directory</h4>
            <ul className="space-y-space-xs font-label-md text-label-md uppercase">
              <li className="py-space-2xs"><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#about">The Atelier</a></li>
              <li className="py-space-2xs"><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#services">Services &amp; Artistry</a></li>
              <li className="py-space-2xs"><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#weddings">Weddings Portfolio</a></li>
              <li className="py-space-2xs"><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#testimonials">Kind Words</a></li>
              <li className="py-space-2xs"><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#contact">Private Inquiries</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-space-md">
            <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">Private Gazette</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Subscribe for seasonal bridal monographs, venue reveals, and destination inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-space-xs">
              <input className="bg-surface px-space-md py-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none flex-1" placeholder="Your email address" type="email"/>
              <button className="bg-primary-container text-on-primary font-label-md text-label-md uppercase px-space-md py-space-sm hover:bg-primary transition-colors tracking-widest" type="button">
                Inquire
              </button>
            </form>
            <div className="pt-space-xs">
              <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest block mb-space-2xs">Featured In Editorial Press</span>
              <p className="font-headline-sm text-headline-sm italic text-on-surface-variant text-[17px] tracking-wide">
                Vogue Weddings • Over The Moon • The Lane • Harper's Bazaar
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm uppercase text-on-surface-variant">
          <div>© {new Date().getFullYear()} L'Éternelle Atelier de Mariage. All Rights Reserved.</div>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-surface transition-colors tracking-widest" href="#/">Instagram</a>
            <a className="hover:text-on-surface transition-colors tracking-widest" href="#/">Pinterest Atelier</a>
            <a className="hover:text-on-surface transition-colors tracking-widest" href="#/">Privacy &amp; Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
