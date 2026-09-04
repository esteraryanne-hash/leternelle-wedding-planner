import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

export default function Services() {
  return (
    <section className="w-full py-space-3xl md:py-space-4xl bg-surface-container-low" id="services">
      <Container>
        {/* Section Header */}
        <SectionTitle
          eyebrow="Artistry & Offerings"
          title="How We Bring Your Vision to Life"
          description="Bespoke offerings tailored to the nuance, scale, and poetry of your journey."
        />
        
        {/* 4 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {/* Card 1 */}
          <div className="bg-surface p-space-xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-headline-md text-headline-md italic font-normal">I</span>
                <span className="material-symbols-outlined text-[24px]">architecture</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary tracking-wide">Full Wedding Planning</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                From the first idea to the final celebration, we manage every detail. Comprehensive architectural design, venue acquisition, budget stewardship, and artisan vendor curation.
              </p>
            </div>
            <div className="pt-space-lg">
              <a className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors" href="#contact">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-surface p-space-xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-headline-md text-headline-md italic font-normal">II</span>
                <span className="material-symbols-outlined text-[24px]">palette</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary tracking-wide">Partial Planning</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Professional guidance and support to help you complete your wedding plans. Design refinement, logistical harmonization, tabletop curation, and contract auditing.
              </p>
            </div>
            <div className="pt-space-lg">
              <a className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors" href="#contact">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-surface p-space-xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-headline-md text-headline-md italic font-normal">III</span>
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary tracking-wide">Day-Of Coordination</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Enjoy your wedding day while we take care of the timeline, vendors, and details. Flawless on-site production, discreet master management, and guest orchestration.
              </p>
            </div>
            <div className="pt-space-lg">
              <a className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors" href="#contact">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="bg-surface p-space-xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-headline-md text-headline-md italic font-normal">IV</span>
                <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary tracking-wide">Destination Weddings</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Beautiful celebrations designed in unforgettable locations. Specializing in Lake Como villas, Provence estates, Amalfi Coast terraces, and private European sanctuaries.
              </p>
            </div>
            <div className="pt-space-lg">
              <a className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors" href="#contact">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
