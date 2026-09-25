'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Ticket, CreditCard, Smartphone, CheckCircle2, ShieldCheck, Sparkles, QrCode } from 'lucide-react';
import Link from 'next/link';

export default function CustomerJourney() {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Explore events and experiences on BlacVolta.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Choose',
      description: "Find the event and ticket that's right for you.",
      icon: Ticket,
    },
    {
      step: '03',
      title: 'Pay',
      description: 'Purchase your ticket through a simple checkout.',
      icon: CreditCard,
    },
    {
      step: '04',
      title: 'Access',
      description: 'Keep all your BV Tickets in one place and access them easily through the BlacVolta app.',
      icon: Smartphone,
    },
    {
      step: '05',
      title: 'Go',
      description: 'Show up, scan your ticket and enjoy the experience.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#050507] relative overflow-hidden border-t border-white/10">
      {/* Ambient background blur */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" /> */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-blacvolta-gold text-xs font-bold uppercase tracking-wider mb-4 shadow-xl"
          >
            {/* <Sparkles className="w-3.5 h-3.5" /> */}
            For Ticket Buyers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-futura"
          >
            Discover. Book. Go.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 mt-4 max-w-xl mx-auto font-normal"
          >
            Find something worth going to, book your ticket and get ready for the experience.
          </motion.p>
        </div>

        {/* 5-Step Customer Cards Bento Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-black border border-blacvolta-gold hover:border-blacvolta-gold/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xl font-black font-mono text-blacvolta-gold">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-blacvolta-gold group-hover:bg-blacvolta-gold group-hover:text-black transition-colors shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blacvolta-gold transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-[10px] text-zinc-200 font-mono">
                  Buyer Step #{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile App & EventShield Feature Spotlight */}

      </div>
    </section>
  );
}
