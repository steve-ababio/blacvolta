'use client';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
export default function BuiltForYourNextEvent() {
  // const categories = [
  //   {
  //     id: 'concerts',
  //     name: 'Concerts',
  //     subtitle: 'Live performances, festivals & stadium shows',
  //     icon: Music,
  //     image: '/assets/images/bv_event_stage_festival.jpg',
  //     tag: 'Live Music',
  //   },
  //   {
  //     id: 'nightlife',
  //     name: 'Parties & nightlife',
  //     subtitle: 'DJs, rooftops, club nights & late experiences',
  //     icon: Moon,
  //     image: '/assets/images/bv_event_vip_party.jpg',
  //     tag: 'Nightlife',
  //   },
  //   {
  //     id: 'brunches',
  //     name: 'Brunches & dinners',
  //     subtitle: 'Culinary events, food festivals & dining',
  //     icon: UtensilsCrossed,
  //     image: '/assets/images/blacout.jpg',
  //     tag: 'Dining & Food',
  //   },
  //   {
  //     id: 'wellness',
  //     name: 'Wellness & fitness',
  //     subtitle: 'Yoga retreats, run clubs & fitness sessions',
  //     icon: HeartPulse,
  //     image: '/assets/images/about-hero-bg.jpg',
  //     tag: 'Lifestyle & Health',
  //   },
  //   {
  //     id: 'creative',
  //     name: 'Creative events',
  //     subtitle: 'Art exhibitions, fashion shows & workshops',
  //     icon: Palette,
  //     image: '/assets/images/merch.jpg',
  //     tag: 'Culture & Art',
  //   },
  //   {
  //     id: 'networking',
  //     name: 'Networking & conferences',
  //     subtitle: 'Panels, creator summits & business meets',
  //     icon: Briefcase,
  //     image: '/assets/images/bv-social/branded-content-and-documentary.png',
  //     tag: 'Professional',
  //   },
  //   {
  //     id: 'popups',
  //     name: 'Pop-ups & experiences',
  //     subtitle: 'Brand activations, flea markets & pop-up shops',
  //     icon: ShoppingBag,
  //     image: '/assets/images/bv-social/experential-market.png',
  //     tag: 'Pop-Ups',
  //   },
  // ];

  const eventCategories = [
  { title: "Concerts", image: '/assets/images/bv-tickets/party.jpg', className: "md:col-span-2 md:row-span-2" },
  { title: "Parties & nightlife", image: '/assets/images/bv-tickets/ticket.jfif' },
  { title: "Brunches & dinners", image: '/assets/images/bv-tickets/brunch.jpg' },
  { title: "Wellness & fitness", image: '/assets/images/bv-tickets/wellness.jpg' },
  { title: "Networking & conferences", image:'/assets/images/bv-tickets/conference.JPG' },
  { title: "Pop-ups & experiences", image: '/assets/images/bv-tickets/social.jpg', className: "md:col-span-2" },
];

  function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`mb-5 text-lg font-bold text-blacvolta-gold uppercase tracking-[0.24em]`}>{children}</p>;
  }
  return (
    <section id="events" className="px-5 py-20 md:px-10 md:py-28 bg-[#0c0905]/10">
      <div className="mx-auto max-w-[1320px]">
      <Eyebrow>Built for your next event.</Eyebrow>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
        <h2 className="font-display text-balance text-5xl text-gray-200 font-bold uppercase leading-[0.95] tracking-normal md:text-7xl">From big nights out to intimate experiences.</h2>
        <p className="max-w-md text-muted-foreground lg:justify-self-end">BV Tickets is built for the events, experiences and gatherings that bring Accra together.</p>
      </div>
        <div className="mt-14 grid auto-rows-[260px] gap-3 md:grid-cols-4 md:auto-rows-[230px]">
          {eventCategories.map((item) =>
            <article key={item.title} className={`group relative overflow-hidden bg-[#0c0905] ${item.className ?? ''}`}>
              <img src={item.image} alt="" className="size-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0905]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-[#f8f5ee]">
                <h3 className="font-display text-xl uppercase">{item.title}</h3>
              </div></article>
            )}
          </div>
      </div>
    </section>
  );
}
