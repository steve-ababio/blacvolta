'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import Link from 'next/link';

interface TicketsCTAProps {
  onOpenOnboarding?: () => void;
}

export default function TicketsCTA({ onOpenOnboarding }: TicketsCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0905]/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-16 text-center relative bg-black/85 backdrop-blur-2xl shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-8xl font-black text-white uppercase tracking-tight mb-4 font-futura"
          >
            HAVE AN EVENT TO SELL?
          </motion.h2>

          {/* Supporting Copy - Exact PDF Specs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed"
          >
            Put it on BV Tickets and give people another way to discover it.
          </motion.p>

          {/* Standardized Primary Merchant CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="http://merchant.blacvolta.com/" target="_blank" rel="noopener noreferrer">
              <button
                onClick={onOpenOnboarding}
                className="w-full sm:w-auto bg-blacvolta-gold hover:bg-blacvolta-gold/90 text-black text-base font-extrabold px-12 py-5 rounded-none transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-3 group"
              >
                <span>List your event.</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Footer Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-zinc-400 mt-8 flex items-center justify-center gap-2 font-medium"
          >
            <ShieldCheck className="w-4 h-4 text-blacvolta-gold" /> Quick merchant setup • Transparent 5% service fee • Fast payouts
          </motion.p>

        </div>

      </div>
    </section>
  );
}
