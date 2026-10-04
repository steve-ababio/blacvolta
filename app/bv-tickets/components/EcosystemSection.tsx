'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Share2, FileText, CreditCard, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function EcosystemSection() {
  const cards = [
    {
      number: '01',
      title: 'EVENT DISCOVERY',
      description: "Put your event where people are looking for what's happening.",
      icon: Globe,
    },
    {
      number: '02',
      title: 'BV SOCIAL',
      description: "Create opportunities for your event to be surfaced through BV's social channels.",
      icon: Share2,
    },
    {
      number: '03',
      title: 'EDITORIAL',
      description: "Selected events can be featured across BV's editorial content.",
      icon: FileText,
    },
    {
      number: '04',
      title: 'BV CARD',
      description: 'Tap into BV Card opportunities where relevant to your event.',
      icon: CreditCard,
    },
  ];
  function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`mb-5 text-lg font-bold text-blacvolta-gold uppercase tracking-[0.24em]`}>{children}</p>;
  }
  return (
    <section className="relative overflow-hidden bg-[#0c0905] text-background">
      <img src="/assets/images/bv-tickets/social.jpg" alt="Friends enjoying an evening out together" className="absolute inset-0 size-full object-cover object-center opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0905]/90 via-[#0c0905]/65 to-[#0c0905]/10" />
      <div className="relative mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36"><Eyebrow light>Your event, amplified.</Eyebrow>
      <h2 className="max-w-3xl font-display text-6xl font-extrabold text-white uppercase leading-[0.9] tracking-normal md:text-8xl">More than<br />ticketing.</h2>
      <p className="mt-7 max-w-lg text-base leading-7 text-gray-100">Get your event in front of people across the BV world — from event discovery to social, editorial and more.</p>
        <div className="mt-16 grid max-w-5xl gap-px bg-[#f8f5ee]/25 border border-[#f8f5ee]/25 sm:grid-cols-2 lg:grid-cols-4">
          {[['01', 'Event discovery', "Put your event where people are looking for what's happening."], ['02', 'BV Social', "Create opportunities for your event to be surfaced through BV's social channels."], ['03', 'Editorial', "Selected events can be featured across BV's editorial content."], ['04', 'BV Card', "Tap into BV Card opportunities where relevant to your event."]].map(([n, t, b]) =>
          <div key={n} className="bg-[#0c0905]/75 p-6 backdrop-blur-sm">
            <span className="text-base text-blacvolta-gold">{n}</span>
            <h3 className="mt-10 font-display text-xl text-white uppercase">{t}</h3>
            <p className="mt-3 text-xs leading-5 text-gray-300">{b}</p>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
