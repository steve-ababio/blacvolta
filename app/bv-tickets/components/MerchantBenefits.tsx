'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Ticket, Percent, LayoutDashboard, Megaphone, Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface MerchantBenefitsProps {
  onOpenOnboarding: () => void;
}

export default function MerchantBenefits({ onOpenOnboarding }: MerchantBenefitsProps) {
  // Fee calculator state
  const [ticketPrice, setTicketPrice] = useState<number>(200);
  const [passFeeToCustomer, setPassFeeToCustomer] = useState<boolean>(true);

  const feeRate = 0.05;
  const serviceFee = ticketPrice * feeRate;
  
  const customerPays = passFeeToCustomer ? ticketPrice + serviceFee : ticketPrice;
  const merchantReceives = passFeeToCustomer ? ticketPrice : ticketPrice - serviceFee;

  const benefits = [
    {
      icon: Users,
      title: 'Reach a new audience',
      description: 'Give your event a place to be discovered by the BlacVolta audience.',
      tag: 'Targeted Demographics',
      bgGlow: 'from-amber-500/20 to-yellow-600/10',
    },
    {
      icon: Ticket,
      title: 'Simple ticket sales',
      description: 'Create your event, set up your ticket types and give customers a simple way to buy.',
      tag: 'Instant Checkout',
      bgGlow: 'from-yellow-500/20 to-amber-600/10',
    },
    {
      icon: Percent,
      title: 'Flexible pricing',
      description: 'A 5% service fee gives you the flexibility to either absorb the fee or pass it on to your customers.',
      tag: '5% Service Fee',
      bgGlow: 'from-amber-400/20 to-orange-500/10',
    },
    {
      icon: LayoutDashboard,
      title: 'Easy event management',
      description: 'Manage your events, ticket sales and attendees from your merchant dashboard.',
      tag: 'Real-time Console',
      bgGlow: 'from-amber-500/20 to-yellow-500/10',
    },
    {
      icon: Megaphone,
      title: 'More visibility',
      description: "Give your event opportunities to be featured across BlacVolta's website, app, content and social channels.",
      tag: 'Media Push',
      bgGlow: 'from-yellow-400/20 to-amber-500/10',
    },
  ];

  return (
    <section id="why-bv-tickets" className="py-24 lg:py-32 bg-[#09090b] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-blacvolta-gold/10 blur-[170px] rounded-full pointer-events-none" />

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
            Why BV Tickets?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-futura"
          >
            A simpler way to sell your event.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 mt-4 font-normal"
          >
            Highlighting the core merchant benefits of listing your experiences on BlacVolta.
          </motion.p>
        </div>

        {/* 5 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black  border border-blacvolta-gold hover:border-blacvolta-gold/60  rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Card Glow */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-full opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 flex items-center justify-center text-blacvolta-gold group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-white bg-white/[0.06] px-3.5 py-1 rounded-full border border-white/10">
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blacvolta-gold transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span>Merchant Advantage #{index + 1}</span>
                  {/* <span className="text-blacvolta-gold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-bold">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span> */}
                </div>
              </motion.div>
            );
          })}

          {/* Special CTA Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-blacvolta-gold/25 via-zinc-900 to-black rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-blacvolta-gold text-black flex items-center justify-center font-black text-2xl mb-6">
                5%
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Transparent 5% Service Fee
              </h3>
              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Choose whether to absorb the 5% service fee or pass it on to your customers. Zero hidden costs or set-up fees.
              </p>
            </div>

            <Button
              onClick={onOpenOnboarding}
              className="w-full bg-blacvolta-gold text-black hover:bg-blacvolta-gold/90 font-bold py-6 rounded-lg flex items-center justify-center gap-2"
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Interactive 5% Fee Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto lg:mx-0 bg-white/[0.03]  rounded-2xl p-8 sm:p-12  relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 flex items-center justify-center text-blacvolta-gold">
              <Calculator className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">Interactive 5% Fee Estimator</h3>
              <p className="text-xs sm:text-sm text-zinc-300">See exact payout figures before you list your tickets</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls Left */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    Ticket Base Price (GHS)
                  </label>
                  <div className="flex items-center gap-1.5 bg-black/60 px-4 py-1.5 rounded-md">
                    <span className="text-xs text-zinc-400 font-bold">GHS</span>
                    <input
                      type="number"
                      min={10}
                      max={3000}
                      value={ticketPrice}
                      onChange={(e) => setTicketPrice(Math.max(1, Number(e.target.value)))}
                      className="w-24 bg-transparent text-right font-black text-white text-lg focus:outline-none"
                    />
                  </div>
                </div>

                <input
                  type="range"
                  min={20}
                  max={1500}
                  step={10}
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full accent-blacvolta-gold cursor-pointer h-2 bg-zinc-400 rounded-md"
                />
                <div className="flex justify-between text-[11px] text-zinc-300 mt-2">
                  <span>GHS 20</span>
                  <span>GHS 750</span>
                  <span>GHS 1,500+</span>
                </div>
              </div>

              {/* Fee Strategy Toggle */}
              <div className="bg-black/60 rounded-2xl p-5 space-y-3">
                <span className="text-xs font-bold text-white block uppercase tracking-wider">
                  Select Fee Allocation Mode:
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPassFeeToCustomer(true)}
                    className={`py-3.5 px-4 rounded-md text-sm font-semibold transition-all flex items-center justify-between border ${
                      passFeeToCustomer
                        ? 'bg-blacvolta-gold text-black border-blacvolta-gold shadow-lg'
                        : 'bg-white/[0.04] text-zinc-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>Pass Fee to Buyer</span>
                    {passFeeToCustomer && <Check className="w-4 h-4 text-black" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setPassFeeToCustomer(false)}
                    className={`py-3.5 px-4 rounded-md text-sm font-bold transition-all flex items-center justify-between border ${
                      !passFeeToCustomer
                        ? 'bg-blacvolta-gold text-black border-blacvolta-gold shadow-lg'
                        : 'bg-white/[0.04] text-zinc-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>Absorb 5% Fee</span>
                    {!passFeeToCustomer && <Check className="w-4 h-4 text-black" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Calculations Output Right */}
            <div className="lg:col-span-5 bg-black/80 rounded-xl p-6 space-y-4 shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-blacvolta-gold pb-3 border-b border-white/10 flex justify-between">
                <span>Payout Breakdown</span>
                <span>5.0% Rate</span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between text-white">
                  <span>Ticket Face Value:</span>
                  <span className="font-semibold text-white ">GHS {ticketPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-white text-xs">
                  <span>BV Tickets 5% Fee:</span>
                  <span className="font-semibold text-amber-400">GHS {serviceFee.toFixed(2)}</span>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-white font-medium">Buyer Checkout Price:</span>
                  <span className="text-lg font-bold text-white">
                    GHS {customerPays.toFixed(2)}
                  </span>
                </div>

                <div className="p-4 bg-blacvolta-gold/15 rounded-lg flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-blacvolta-gold block">Organizer Net Payout</span>
                    <span className="text-[10px] text-zinc-200">Paid to MoMo or Bank</span>
                  </div>
                  <span className="text-2xl font-black text-white font-mono">
                    GHS {merchantReceives.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
