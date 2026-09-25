'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Share2, CreditCard, Sparkles, ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';

export default function EcosystemSection() {
  const ecosystemPillars = [
    {
      icon: Globe,
      title: 'Event Discovery',
      description: "Your event becomes an integral part of BlacVolta's premier events directory and culture guide.",
      highlight: 'Featured Directory Listing',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
    {
      icon: Users,
      title: 'Audience Reach',
      description: 'Connect directly with thousands of trendsetters, young professionals, and cultural enthusiasts across Ghana & the diaspora.',
      highlight: 'High-Intent Demographic',
      badgeColor: 'bg-blacvolta-gold/20 text-blacvolta-gold border-blacvolta-gold/30',
    },
    {
      icon: Share2,
      title: 'Content & Social',
      description: "Gain additional visibility through BlacVolta's high-engagement social channels, editorial highlights, and newsletter features.",
      highlight: 'Social & Editorial Boosts',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    },
    {
      icon: CreditCard,
      title: 'BV Card Opportunities',
      description: 'Offer exclusive ticket discounts or VIP fast-track access to BlacVolta Lifestyle Card members to drive premium sales.',
      highlight: 'Lifestyle Card Integration',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#070709] relative overflow-hidden">
      {/* Background Radial Glow */}
      {/* <div className="absolute top-0 right-1/3 w-[600px] h-[500px] bg-amber-600/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[450px] bg-blacvolta-gold/15 blur-[160px] rounded-full pointer-events-none" /> */}

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
            Ecosystem & Brand Proposition
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-futura"
          >
            More Than Ticketing.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed font-normal"
          >
            Communicating the wider BlacVolta ecosystem merchants can tap into through BV Tickets — including event discovery, editorial/content, social, audience access, and BV Card opportunities.
          </motion.p>
        </div>

        {/* 4 Bento Ecosystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ecosystemPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-black border border-blacvolta-gold  hover:border-blacvolta-gold/60 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between backdrop-blur-xl overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl  flex items-center justify-center text-blacvolta-gold group-hover:scale-110 group-hover:bg-blacvolta-gold group-hover:text-black transition-all duration-300 shadow-xl">
                      <Icon className="w-7 h-7" />
                    </div>
                    {/* <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.highlight}
                    </span> */}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-blacvolta-gold transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span>BlacVolta Ecosystem Pillar</span>
                  {/* <span className="text-zinc-300 group-hover:text-blacvolta-gold transition-colors flex items-center gap-1 font-bold">
                    Explore network benefits <ArrowRight className="w-3.5 h-3.5" />
                  </span> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Veliqu-Style Ecosystem Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[36px] overflow-hidden bg-zinc-900  p-8 sm:p-12"
        >
          <img
            src="/assets/images/bv_event_stage_festival.jpg"
            alt="Festival Ecosystem"
            className="absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-blacvolta-gold text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                Cross-Ecosystem Synergy
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-futura">
                Tap into the BV Cardholder Community
              </h3>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-2xl font-normal">
                Offer exclusive ticket tier discounts or VIP skip-the-queue perks to BlacVolta Lifestyle Card holders to instantly boost high-value ticket sales.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/bv-card"
                className="inline-flex items-center justify-center gap-2 bg-blacvolta-gold text-black hover:bg-blacvolta-gold/90 font-extrabold text-sm px-8 py-4 rounded-lg transition-all duration-300 shadow-2xl"
              >
                Learn About BV Card <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
