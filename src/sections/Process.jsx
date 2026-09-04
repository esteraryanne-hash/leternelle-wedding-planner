import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

export default function Process() {
  return (
    <section className="w-full py-space-3xl md:py-space-4xl bg-surface-container-low">
      <Container>
        <SectionTitle
          eyebrow="The Proven Journey"
          title="From Dream to Celebration"
          description="A seamless four-movement symphony ensuring tranquility and effortless precision."
        />
        
        {/* 4 Horizontal Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {/* Step 1 */}
          <div className="bg-surface p-space-lg flex flex-col justify-between shadow-sm relative group">
            <div>
              <span className="font-display-sm text-display-sm text-secondary/60 block mb-space-sm">01</span>
              <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider mb-space-xs">Discover</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We get to know your story, vision, and dreams. An intimate conversation over champagne to understand your aesthetic affinities, priorities, and celebration scale.
              </p>
            </div>
            <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-widest">
              Phase 01 • Consultation
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-surface p-space-lg flex flex-col justify-between shadow-sm relative group">
            <div>
              <span className="font-display-sm text-display-sm text-secondary/60 block mb-space-sm">02</span>
              <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider mb-space-xs">Design</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We create a personalized wedding concept. Spatial 3D layouts, floral compositions, lighting schematics, stationery suites, and curated tactile tablescapes.
              </p>
            </div>
            <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-widest">
              Phase 02 • Conceptual Art
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-surface p-space-lg flex flex-col justify-between shadow-sm relative group">
            <div>
              <span className="font-display-sm text-display-sm text-secondary/60 block mb-space-sm">03</span>
              <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider mb-space-xs">Plan</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We organize every detail and coordinate trusted vendors. Flawless logistics, master production calendars, guest hospitality, and negotiations with world-class artisans.
              </p>
            </div>
            <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-widest">
              Phase 03 • Production
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="bg-surface p-space-lg flex flex-col justify-between shadow-sm relative group">
            <div>
              <span className="font-display-sm text-display-sm text-secondary/60 block mb-space-sm">04</span>
              <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider mb-space-xs">Celebrate</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                You enjoy your unforgettable day while our team discreetly commands the entire operation. Immersed in warmth, presence, and everlasting memories with loved ones.
              </p>
            </div>
            <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-widest">
              Phase 04 • Perfection
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
