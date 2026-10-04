'use client';

import React, { useState } from 'react';
import NavBar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer/footer';

import HeroSection from './components/HeroSection';
import MerchantBenefits from './components/MerchantBenefits';
import MerchantJourney from './components/MerchantJourney';
import EcosystemSection from './components/EcosystemSection';
import BuiltForYourNextEvent from './components/BuiltForYourNextEvent';
import CustomerJourney from './components/CustomerJourney';
import TicketsFAQ from './components/TicketsFAQ';
import TicketsCTA from './components/TicketsCTA';
import MerchantOnboardingModal from './components/MerchantOnboardingModal';
import Calculator from './components/calculator';

export default function BVTicketsPage() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const handleOpenOnboarding = () => {
    setIsOnboardingOpen(true);
  };

  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#050507] text-white selection:bg-blacvolta-gold selection:text-black">
      <NavBar />
      <HeroSection onOpenOnboarding={handleOpenOnboarding} />
      <div className="overflow-hidden border-y border-black bg-black py-3 text-blacvolta-gold">
        <div className="flex w-max animate-marquee gap-9 whitespace-nowrap text-white font-display text-base font-semibold uppercase tracking-[0.08em]">
          {[...Array(2)].flatMap((_, copy) => ["Concerts", "Nightlife", "Food", "Culture", "Wellness", "Community", "Experiences"].map((item) => <span key={`${copy}-${item}`} className="flex items-center gap-9">{item}</span>))}
        </div>
      </div>

      <MerchantBenefits/>
      <MerchantJourney />
      <Calculator />
      <EcosystemSection />
      <BuiltForYourNextEvent />
      <CustomerJourney />
      <TicketsFAQ />
      <TicketsCTA onOpenOnboarding={handleOpenOnboarding} />
      <Footer />
    </main>
  );
}
