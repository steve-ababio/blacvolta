'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';

function ProcessCard({ number, title, body, image }: { number: string; title: string; body: string; image: string }) {
  return (
    <article>
      <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <span className="text-base font-bold uppercase tracking-[0.16em] text-blacvolta-gold">Step {number}</span>
        <ArrowRight size={16} />
      </div>
      <img src={image} alt="merchant dashboard" className="w-auto h-[220px] rounded-lg shadow-lg" />
      <h3 className="mt-6 font-display text-3xl font-semibold text-black uppercase tracking-normal">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{body}</p>
    </article>
  );
}
export default function MerchantJourney() {
  function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`mb-5 text-lg font-bold text-zinc-700 uppercase tracking-[0.24em]`}>{children}</p>;
  }
  return (
    <section id="how" className="px-5 py-20 md:px-10 md:py-28 bg-white">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-2"><div><Eyebrow>How it works</Eyebrow><h2 className="font-display text-5xl font-bold uppercase text-black leading-[0.95] tracking-normal md:text-7xl">Get listed.<br />Get discovered.<br /><span className="text-blacvolta-gold">Get selling.</span></h2></div><p className="max-w-md self-end text-base leading-7 text-muted-foreground">A simple 3-step journey to set up your event, sell tickets and manage your attendees.</p></div>
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <ProcessCard number="01" title="Create your account" body="Register as a BV Tickets Partner and set up your merchant account." image="/assets/images/merchant/merchant-1.JPG" />
          <ProcessCard number="02" title="List your event" body="Add your event details, ticket types and pricing through your merchant dashboard." image="/assets/images/merchant/merchant-3.JPG" />
          <ProcessCard number="03" title="Sell & manage" body="Track ticket sales, monitor your event and manage attendees from your dashboard." image="/assets/images/merchant/merchant-2.JPG" />
        </div>
      </div>
    </section>
  );
}
