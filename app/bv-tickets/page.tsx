'use client';

import React, { useState } from 'react';
import NavBar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer/footer';

import HeroSection from './components/HeroSection';
import MerchantBenefits from './components/MerchantBenefits';
import MerchantJourney from './components/MerchantJourney';
import EcosystemSection from './components/EcosystemSection';
import CustomerJourney from './components/CustomerJourney';
import TicketsFAQ from './components/TicketsFAQ';
import TicketsCTA from './components/TicketsCTA';
import MerchantOnboardingModal from './components/MerchantOnboardingModal';

export default function BVTicketsPage() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const handleOpenOnboarding = () => {
    setIsOnboardingOpen(true);
  };

  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blacvolta-gold selection:text-black">
      {/* Global Navigation */}
      <NavBar />

      {/* Hero Banner */}
      <HeroSection onOpenOnboarding={handleOpenOnboarding} />

      {/* Why BV Tickets? Merchant Benefits + Interactive 5% Fee Calculator */}
      <MerchantBenefits onOpenOnboarding={handleOpenOnboarding} />

      {/* How It Works - 3-Step Merchant Journey */}
      <MerchantJourney onOpenOnboarding={handleOpenOnboarding} />

      {/* More Than Ticketing - Ecosystem Proposition */}
      <EcosystemSection />

      {/* For Customers - Discover. Book. Go. */}
      <CustomerJourney />

      {/* Frequently Asked Questions (Dual Tabbed + Searchable) */}
      <TicketsFAQ />

      {/* Final Call to Action */}
      <TicketsCTA onOpenOnboarding={handleOpenOnboarding} />

      {/* Partner Registration Onboarding Modal */}
      {/* <MerchantOnboardingModal
        isOpen={isOnboardingOpen}
        onClose={handleCloseOnboarding}
      /> */}

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
