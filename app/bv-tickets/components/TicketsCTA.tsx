'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Ticket, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

interface TicketsCTAProps {
  onOpenOnboarding: () => void;
}

export default function TicketsCTA({ onOpenOnboarding }: TicketsCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-[#050507] relative overflow-hidden border-t border-white/10">
      {/* Background Hero Image with Moody Dusk Gradient Overlay */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="max-w-5xl mx-auto rounded-[5px] p-8 sm:p-16 text-center relative overflow-hidden">
          
          {/* Top Badge Icon */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-18 h-18 w-16 h-16 rounded-3xl bg-blacvolta-gold/20 border border-blacvolta-gold/50 flex items-center justify-center text-blacvolta-gold mx-auto mb-6 shadow-2xl"
          >
            {/* <Ticket className="w-8 h-8" /> */}
          {/* </motion.div> */}

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4 font-futura"
          >
            Ready to sell with BV Tickets?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-zinc-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed"
          >
            Become a BV Tickets Partner and start selling your tickets with BlacVolta.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="http://merchant.blacvolta.com/">
            <Button
              className="w-full sm:w-auto bg-blacvolta-gold text-black hover:bg-blacvolta-gold/90 text-base font-extrabold px-10 py-7 rounded-md transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-3"
            >
              Become a BV Tickets Partner
              <ArrowRight className="w-5 h-5" />
            </Button>
            </Link>
          </motion.div>

          {/* Footer badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-zinc-400 mt-8 flex items-center justify-center gap-2 font-medium"
          >
            <ShieldCheck className="w-4 h-4 text-blacvolta-gold" /> Fast verification • Transparent 5% service fee model • Verified payouts
          </motion.p>
        </div>

      </div>
    </section>
  );
}
