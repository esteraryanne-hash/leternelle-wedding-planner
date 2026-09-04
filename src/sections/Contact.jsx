import React, { useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      e.target.reset();
    }, 900);
  };

  return (
    <>
      {/* SECTION 7: FINAL CALL TO ACTION BANNER */}
      <section className="w-full relative py-space-3xl md:py-space-4xl bg-primary-container text-on-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-tertiary to-primary-container opacity-90"></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-gutter-mobile md:px-gutter-tablet text-center space-y-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary-fixed">Private Commissions</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-surface-bright tracking-tight leading-tight">
            Let's Create Something Unforgettable
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim font-light max-w-2xl mx-auto">
            Your wedding journey begins with an intimate conversation. We accept a limited number of commissions each season to ensure undivided dedication.
          </p>
          <div className="pt-space-sm">
            <Button href="#contact" variant="secondary" className="px-10 py-4 shadow-xl hover:shadow-2xl">
              Start Planning Your Wedding
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT / CONSULTATION FORM */}
      <section className="w-full py-space-3xl md:py-space-4xl bg-surface" id="contact">
        <Container className="max-w-[1040px]">
          <SectionTitle
            eyebrow="Private Inquiry"
            title="Tell Us About Your Love Story"
            description="Please share a few initial details about your upcoming celebration. Our atelier will respond with personal discretion within 24 hours."
          />
          
          {/* Luxury Consultation Form Card */}
          <div className="bg-surface-container-low p-space-lg md:p-space-2xl shadow-sm">
            <form className="space-y-space-lg" id="weddingInquiryForm" onSubmit={handleSubmit}>
              {/* Row 1: Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="clientName">Your Name *</label>
                  <input className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="clientName" placeholder="e.g. Eleanor Vance" required type="text" />
                </div>
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="partnerName">Partner's Name *</label>
                  <input className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="partnerName" placeholder="e.g. Julian Hayes" required type="text" />
                </div>
              </div>
              
              {/* Row 2: Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="clientEmail">Email Address *</label>
                  <input className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="clientEmail" placeholder="eleanor@example.com" required type="email" />
                </div>
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="clientPhone">Phone / WhatsApp *</label>
                  <input className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="clientPhone" placeholder="+1 (555) 019-2834" required type="tel" />
                </div>
              </div>
              
              {/* Row 3: Date & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="weddingDate">Wedding Date (or Preferred Season) *</label>
                  <input className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="weddingDate" placeholder="e.g. September 2025 or Late Autumn" required type="text" />
                </div>
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="weddingLocation">Destination / Desired Location *</label>
                  <input className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="weddingLocation" placeholder="e.g. Lake Como, Tuscany, Provence, or Paris" required type="text" />
                </div>
              </div>
              
              {/* Row 4: Guest Count & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="guestCount">Estimated Guest Count</label>
                  <input className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="guestCount" placeholder="e.g. 100 — 150 guests" type="text" />
                </div>
                <div className="space-y-space-2xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="estimatedBudget">Estimated Investment Range</label>
                  <select className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" id="estimatedBudget" defaultValue="">
                    <option disabled value="">Select anticipated budget tier</option>
                    <option value="75k-150k">$75,000 — $150,000</option>
                    <option value="150k-300k">$150,000 — $300,000</option>
                    <option value="300k-500k">$300,000 — $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
              </div>
              
              {/* Row 5: Story & Visions */}
              <div className="space-y-space-2xs">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block" htmlFor="weddingStory">Tell Us About Your Vision &amp; Love Story</label>
                <textarea className="w-full bg-surface px-space-md py-3.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary" id="weddingStory" placeholder="Describe your aesthetic inspirations, venue hopes, musical style, or any unique architectural elements you envision..." rows="4"></textarea>
              </div>
              
              {/* Submit Button & Feedback */}
              <div className="pt-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-10 py-4 shadow-md hover:shadow-lg ${isSubmitting || isSuccess ? 'opacity-80' : ''}`}
                >
                  {isSubmitting ? (
                    <><span className="material-symbols-outlined animate-spin text-[18px] mr-2">progress_activity</span> Transmitting...</>
                  ) : isSuccess ? (
                    'Sent with Grace'
                  ) : (
                    'Request Private Consultation'
                  )}
                </Button>
                <div className="flex items-center gap-space-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                  <span className="font-body-sm text-body-sm italic">Discreet and confidential. Inquiries for 2025 &amp; 2026 are open.</span>
                </div>
              </div>
              
              {isSuccess && (
                <div className="p-space-md bg-secondary-container text-on-secondary-fixed text-center font-body-md text-body-md">
                  Thank you dearly. Your bespoke inquiry has been received. Our managing director will reach out within 24 hours.
                </div>
              )}
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
