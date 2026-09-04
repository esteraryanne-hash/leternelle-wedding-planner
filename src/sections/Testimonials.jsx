import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

export default function Testimonials() {
  return (
    <section className="w-full py-space-3xl md:py-space-4xl bg-surface" id="testimonials">
      <Container>
        <SectionTitle
          eyebrow="Kind Words"
          title="Love Notes From Our Couples"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Testimonial 1 */}
          <div className="bg-surface-container-low p-space-xl flex flex-col justify-between shadow-sm">
            <div className="space-y-space-md">
              <div className="flex text-secondary gap-1">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-headline-sm text-headline-sm italic text-on-surface leading-relaxed font-normal">
                “Every detail felt like us. L'Éternelle turned our dream into a celebration we will never forget. Walking into our reception under the olive trees brought us to tears of sheer joy.”
              </p>
            </div>
            <div className="pt-space-lg mt-space-lg border-t border-surface-container-high">
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary">Charlotte &amp; Liam</h4>
              <p className="font-body-sm text-body-sm text-secondary">Villa Cimbrone, Ravello • Amalfi Coast</p>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-surface-container-low p-space-xl flex flex-col justify-between shadow-sm">
            <div className="space-y-space-md">
              <div className="flex text-secondary gap-1">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-headline-sm text-headline-sm italic text-on-surface leading-relaxed font-normal">
                “Working with L'Éternelle was the greatest decision we made. Their poise, impeccable taste, and calm mastery allowed us to truly be guests at our own wedding.”
              </p>
            </div>
            <div className="pt-space-lg mt-space-lg border-t border-surface-container-high">
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary">Madeleine &amp; Antoine</h4>
              <p className="font-body-sm text-body-sm text-secondary">Château de Chantilly • France</p>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-surface-container-low p-space-xl flex flex-col justify-between shadow-sm">
            <div className="space-y-space-md">
              <div className="flex text-secondary gap-1">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-headline-sm text-headline-sm italic text-on-surface leading-relaxed font-normal">
                “They transformed our vision of a modern Lake Como weekend into pure poetry. Our guests are still raving that it was the single most breathtaking event of their lives.”
              </p>
            </div>
            <div className="pt-space-lg mt-space-lg border-t border-surface-container-high">
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary">Victoria &amp; Sebastian</h4>
              <p className="font-body-sm text-body-sm text-secondary">Villa Balbiano • Lake Como</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
