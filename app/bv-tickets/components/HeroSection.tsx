'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Play, Sparkles, ShieldCheck, TrendingUp, Users, Ticket, QrCode } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  onOpenOnboarding: () => void;
}

export default function HeroSection({ onOpenOnboarding }: HeroSectionProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative min-h-[95vh] pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-[#070709]">
      
      {/* Background Hero Image with Moody Dark Gradient Overlay (inspired by Veliqu) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/bv_tickets_hero_bg.jpg"
          alt="BV Tickets Afrobeats Venue"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform filter contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-[#070709]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/70 to-transparent" />
        {/* <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-blacvolta-gold/15 blur-[160px] rounded-full pointer-events-none" /> */}
        {/* <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" /> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Floating Pill */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl text-zinc-200 text-xs sm:text-sm font-medium mb-8 shadow-2xl"
        >
          <span className="flex h-2 w-2 rounded-full bg-blacvolta-gold animate-pulse" />
          <Sparkles className="w-4 h-4 text-blacvolta-gold" />
          <span className="font-semibold text-white">BV Tickets</span>
          <span className="text-zinc-400">• The Platform Behind Africa&apos;s Live Experiences</span>
        </motion.div> */}

        {/* Veliqu-Style Huge Display Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          <div className="lg:col-span-8 space-y-10 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tight text-white leading-[0.92] uppercase font-futura"
            >
              Sell tickets. <br />
              <span className="text-blacvolta-gold">
                Reach more people.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white font-normal max-w-2xl leading-relaxed"
            >
              All with BV Tickets. Make it easy to sell tickets, get your event discovered, and manage sales — all in one powerful merchant console.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
            <Link href="http://merchant.blacvolta.com/">
              <button
                onClick={onOpenOnboarding}
                className="bg-white text-black text-sm font-bold px-9 py-4 rounded-md flex items-center justify-center gap-3"
              >
                Become a BV Tickets Partner
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
              {/* <a
                href="#how-it-works"
                className="px-8 py-4 rounded-md border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.1] backdrop-blur-xl transition-all text-sm font-semibold text-center flex items-center justify-center gap-2"
              >
                Explore Console <ArrowUpRight className="w-4 h-4 text-blacvolta-gold" />
              </a> */}
            </motion.div>
          </div>

          {/* Right Floating Quick Metric Pill */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-4">
            
            {/* Veliqu-Style 80K+ Floating Card */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/[0.05] border border-white/15 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl w-full max-w-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2.5">
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-black object-cover" src="/assets/images/members/member-1.jpg" alt="Organiser" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-black object-cover" src="/assets/images/members/member-2.jpg" alt="Organiser" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-black object-cover" src="/assets/images/members/member-3.jpg" alt="Organiser" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tight">80K+</div>
                  <div className="text-[11px] text-zinc-400 font-medium">Active Ticket Buyers</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-medium">Average Sell-Out Speed</span>
                <span className="text-blacvolta-gold font-bold">3.4x Faster</span>
              </div>
            </motion.div> */}

          </div>

        </div>

        {/* Veliqu & Verve Interactive Hotspot Cards Showcase */}
        {/* <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        > */}
          {/* Card 1: Featured Event Showcase Banner (Veliqu style video/image preview) */}
          {/* <div className="md:col-span-7 relative group rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/80 min-h-[300px] sm:min-h-[360px] flex flex-col justify-between p-6 sm:p-8">
            <img
              src="/assets/images/bv_event_vip_party.jpg"
              alt="VIP Event Preview"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Top Badge */}
            {/* <div className="relative z-10 flex justify-between items-center">
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white text-black">
                LIVE EXPERIENCE PREVIEW
              </span>
              <span className="px-3 py-1 rounded-full text-xs text-white bg-black/60 border border-white/20 backdrop-blur-md">
                GHS 150 - GHS 2,500
              </span>
            </div>  */}

            {/* Pulsating Interactive Hotspot Dot */}
            {/* <div className="absolute top-1/3 left-1/3 z-10 flex items-center gap-2 group/dot cursor-pointer">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blacvolta-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blacvolta-gold border-2 border-black"></span>
              </span>
              <div className="hidden group-hover/dot:flex bg-black/90 border border-white/20 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md font-medium">
                Instant QR Check-In Enabled
              </div>
            </div> */}

            {/* Bottom Content overlay */}
            {/* <div className="relative z-10 space-y-2 pt-16">
              <div className="text-xs font-bold text-blacvolta-gold uppercase tracking-wider">
                BlacVolta Verified Venue
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Labadi Beach Afrobeats Sunset Gala
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
                Over 1,200 tickets sold seamlessly via BV Tickets merchant portal.
              </p>
            </div>
          </div> */}

          {/* Card 2: Verve-Style Analytics Card */}
          {/* <div className="md:col-span-5 bg-white/[0.04] border border-white/15 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blacvolta-gold/20 border border-blacvolta-gold/40 flex items-center justify-center text-blacvolta-gold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Merchant Payout Guarantee
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  5% FLAT FEE
                </span>
              </div> */}

              {/* Verve Mini Stat Widgets */}
              {/* <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#121217] border border-white/10 rounded-2xl p-4">
                  <span className="text-[11px] text-zinc-400 block font-medium">Total Payouts</span>
                  <span className="text-xl font-black text-white mt-1 block">GHS 4.2M+</span>
                  <span className="text-[10px] text-emerald-400 mt-1 block font-mono">↑ 34% this month</span>
                </div>
                <div className="bg-[#121217] border border-white/10 rounded-2xl p-4">
                  <span className="text-[11px] text-zinc-400 block font-medium">Ticket Check-In</span>
                  <span className="text-xl font-black text-blacvolta-gold mt-1 block">99.8%</span>
                  <span className="text-[10px] text-zinc-400 mt-1 block font-mono">Instant App Scan</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Supported Payout Channels</span>
              <span className="text-white font-bold">MoMo • Visa • Bank</span>
            </div>
          </div> */}

        {/* </motion.div> */}

      </div>
    </section>
  );
}
