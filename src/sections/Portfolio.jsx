import React from 'react';
import Container from '../components/Container';
import portfolioProvence from '../assets/images/portfolio-provence.jpg';
import introEditorial from '../assets/images/intro-editorial.jpg';
import heroBg from '../assets/images/hero-bg.jpg';
import portfolioNy from '../assets/images/portfolio-ny.jpg';
import Button from '../components/Button';

export default function Portfolio() {
  return (
    <section className="w-full py-space-3xl md:py-space-4xl bg-surface" id="weddings">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div className="space-y-space-2xs">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">Selected Works</span>
            <h2 className="font-display-sm text-display-sm-mobile md:text-display-sm text-primary">
              Celebrations We've Brought to Life
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light">
              A curated glimpse into recent unforgettable celebrations across the world's most romantic vistas.
            </p>
          </div>
          <Button href="#contact" className="self-start md:self-auto px-space-lg py-space-sm bg-primary-container text-on-primary hover:bg-primary tracking-widest">
            Commission Atelier
          </Button>
        </div>
        
        {/* Asymmetrical Editorial Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg lg:gap-space-xl">
          {/* Item 1: Provence Garden Dinner (Landscape - 7 cols) */}
          <div className="md:col-span-7 group cursor-pointer">
            <div className="relative overflow-hidden aspect-[16/10] bg-surface-container-high mb-space-sm">
              <img 
                alt="Provence outdoor candlelit dinner under olive trees" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={portfolioProvence}
              />
              <div className="absolute top-4 left-4 bg-surface/85 backdrop-blur-md px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Provence, France
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Camille &amp; Alexandre
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                Luberon Olive Grove • 120 Guests • 3-Day Celebration of Provençal Gastronomy &amp; Strings
              </p>
            </div>
          </div>
          
          {/* Item 2: Chateau Bride Portrait (Portrait - 5 cols) */}
          <div className="md:col-span-5 group cursor-pointer md:mt-12">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-high mb-space-sm">
              <img 
                alt="Sophisticated Paris Chateau wedding celebration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={introEditorial}
              />
              <div className="absolute top-4 left-4 bg-surface/85 backdrop-blur-md px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Paris, France
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Sophia &amp; Julian
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                Grand Salon Haussmannien • Editorial Black-Tie Soirée &amp; Haute Couture
              </p>
            </div>
          </div>
          
          {/* Item 3: Lake Como Destination (5 cols) */}
          <div className="md:col-span-5 group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-high mb-space-sm">
              <img 
                alt="Lake Como lakeside floral ceremony" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={heroBg}
              />
              <div className="absolute top-4 left-4 bg-surface/85 backdrop-blur-md px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Lake Como, Italy
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Elena &amp; Matteo
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                Villa Balbianello Terraces • Cascading White Florals &amp; Sunset Wooden Boat Arrival
              </p>
            </div>
          </div>
          
          {/* Item 4: Modern Minimalist Rooftop (7 cols) */}
          <div className="md:col-span-7 group cursor-pointer md:-mt-8">
            <div className="relative overflow-hidden aspect-[16/10] bg-surface-container-high mb-space-sm">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Sophisticated modern wedding dinner on a stylish New York rooftop in Tribeca at twilight" 
                src={portfolioNy}
              />
              <div className="absolute top-4 left-4 bg-surface/85 backdrop-blur-md px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                New York, USA
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Claire &amp; Harrison
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                Tribeca Private Penthouse • Modernist Architecture &amp; Architectural Jazz Trio
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-space-2xl text-center">
          <Button href="#contact" className="px-10 py-4 bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary shadow-sm">
            View Full Wedding Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
