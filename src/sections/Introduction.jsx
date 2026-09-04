import React from 'react';
import Container from '../components/Container';
import introEditorial from '../assets/images/intro-editorial.jpg';

export default function Introduction() {
  return (
    <section className="w-full py-space-3xl md:py-space-4xl bg-surface" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-center">
          {/* Left Column: Editorial Photo with Offset Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-space-md bg-surface-container-low shadow-sm">
              <div className="overflow-hidden aspect-[3/4] relative">
                <img 
                  alt="Haute couture bride in French chateau" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                  src={introEditorial}
                />
              </div>
              <div className="pt-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Editorial Monograph</span>
                <span className="font-body-sm text-body-sm italic text-on-surface-variant">Château de Villette, Île-de-France</span>
              </div>
            </div>
            {/* Decorative subtle offset block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container/40 -z-10 hidden sm:block"></div>
          </div>
          
          {/* Right Column: Evocative Storytelling */}
          <div className="lg:col-span-7 space-y-space-lg lg:pl-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-md text-label-md uppercase tracking-[0.22em] text-secondary block">The Atelier Philosophy</span>
              <h2 className="font-display-sm text-display-sm-mobile md:text-display-sm text-primary tracking-tight">
                More Than a Wedding. A Story to Remember.
              </h2>
            </div>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
              At L'Éternelle, we believe true luxury lies in unhurried presence. We choreograph celebrations where architecture, soft light, tactile linens, and scent harmoniously converge—capturing the intangible chemistry between two lives joining in quiet majesty.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              From the initial sensory sketchbook to the candlelit final waltz, our directors oversee architectural floristry, Michelin-caliber gastronomy, and discreet multi-day logistics. With our atelier handling every nuanced coordination, you and your guests remain enveloped in effortless joy and deep connection.
            </p>
            
            {/* Stat Indicators */}
            <div className="grid grid-cols-3 gap-space-md pt-space-md pb-space-sm">
              <div className="space-y-1">
                <span className="font-display-sm text-display-sm text-primary block">12+</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block">Years of Haute Artistry</span>
              </div>
              <div className="space-y-1">
                <span className="font-display-sm text-display-sm text-primary block">140+</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block">Celebrations in 14 Countries</span>
              </div>
              <div className="space-y-1">
                <span className="font-display-sm text-display-sm text-primary block">100%</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block">Bespoke Curation</span>
              </div>
            </div>
            
            <div className="pt-space-xs">
              <a className="inline-flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-[0.16em] text-primary hover:text-secondary transition-colors group" href="#services">
                <span>Discover Our Story &amp; Craft</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
