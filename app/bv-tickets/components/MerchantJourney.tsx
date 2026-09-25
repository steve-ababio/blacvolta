'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, CalendarPlus, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Ticket, Users, DollarSign, Bell, Search, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface MerchantJourneyProps {
  onOpenOnboarding: () => void;
}

export default function MerchantJourney({ onOpenOnboarding }: MerchantJourneyProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Create your account',
      subtitle: 'Register as a BV Tickets Partner and set up your merchant account.',
      icon: UserPlus,
      badge: 'Step 1 • Onboarding',
    },
    {
      id: 2,
      number: '02',
      title: 'List your event',
      subtitle: 'Add your event details, ticket types and pricing through your merchant dashboard.',
      icon: CalendarPlus,
      badge: 'Step 2 • Event Setup',
    },
    {
      id: 3,
      number: '03',
      title: 'Sell & manage',
      subtitle: "Once your account is approved, you're ready to sell. Track your ticket sales and manage your event from your dashboard.",
      icon: BarChart3,
      badge: 'Step 3 • Live Control',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#060608] relative overflow-hidden border-t border-white/10">
      
      {/* Subtle background ambient blur */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blacvolta-gold/10 blur-[170px] rounded-full pointer-events-none" /> */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-blacvolta-gold text-xs font-bold uppercase tracking-wider mb-4 shadow-xl"
          >
            {/* <Sparkles className="w-3.5 h-3.5" /> */}
            Merchant Console Overview
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-futura"
          >
            Get listed. Get discovered. Get selling.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-200 mt-4 font-normal"
          >
            A simple 3-step journey designed for event organizers to set up ticketing, track live revenue, and control attendee check-in.
          </motion.p>
        </div>

        {/* 3 Step Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <button
                key={step.id}
                // onClick={() => setActiveStep(step.id)}
                className={`text-left p-6 sm:p-8 rounded-3xl border border-blacvolta-gold  transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
              >
                {/* {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1.5" />
                )} */}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl font-black text-blacvolta-gold`}>
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-blacvolta-gold`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 tracking-tight ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {step.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">{step.badge}</span>
                  {/* <span className={`font-bold flex items-center gap-1 ${isActive ? 'text-blacvolta-gold' : 'text-zinc-500'}`}>
                    {isActive ? 'Live View' : 'Click to preview'}
                  </span> */}
                </div>
              </button>
            );
          })}
        </div>

        {/* Verve-Style Dribbble Dashboard Mockup Container (Image 1 Inspiration) */}

      </div>
    </section>
  );
}
