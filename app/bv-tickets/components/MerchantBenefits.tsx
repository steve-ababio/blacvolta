'use client';

import React, { useState } from 'react';
interface MerchantBenefitsProps {
  onOpenOnboarding?: () => void;
}

export default function MerchantBenefits({ onOpenOnboarding }: MerchantBenefitsProps) {
  function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`mb-5 text-lg font-bold uppercase tracking-[0.24em] text-zinc-700`}>{children}</p>;
  }
  return (
       <section id="why" className="px-5 py-20 md:px-10 md:py-28 bg-white">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 border-b border-[#c4b9a9] pb-12 lg:grid-cols-[0.8fr_1.5fr] lg:items-end">
            <Eyebrow>Why BV Tickets?</Eyebrow>
            <div><h2 className="font-display text-black text-balance text-5xl font-bold uppercase leading-[0.95] tracking-normal md:text-7xl">A simpler way to<br />sell your event.</h2><p className="mt-6 max-w-xl text-zinc-600">Everything you need to sell tickets, get discovered and manage your event.</p></div>
          </div>
          <div className="grid md:grid-cols-3">
            {[
              ["01", "Event discovery", "Reach a new audience", "Give your event a place to be discovered by people looking for what to do."],
              ["02", "Ticketing", "Simple ticket sales", "Create your event, set up your ticket types and give customers a simple way to buy."],
              ["03", "You choose who pays", "Flexible pricing", "A 5% service fee gives you the flexibility to either absorb the fee or pass it on to your customers."],
            ].map(([number, pill, title, body]) => (
              <article key={number} className="border-b border-[#c4b9a9] py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="mb-16 flex items-start justify-between"><span className="font-display text-3xl text-blacvolta-gold">{number}</span><span className="text-black/90 border border-zinc-700 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">{pill}</span></div>
                <h3 className="font-display text-3xl font-semibold uppercase text-black tracking-normal">{title}</h3><p className="mt-4 max-w-sm text-sm leading-6 text-zinc-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
