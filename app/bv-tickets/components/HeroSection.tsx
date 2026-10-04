'use client';

import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

interface HeroSectionProps {
  onOpenOnboarding?: () => void;
}

export default function HeroSection({ onOpenOnboarding }: HeroSectionProps) {
  return (
     <section className="relative flex min-h-[760px] items-end overflow-hidden bg-ink text-background md:min-h-[820px]">
        <img src='/assets/images/hero.jpeg' alt="Crowd enjoying a live music event" className="absolute inset-0 size-full object-cover md:object-[25%_12%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/50 via-[#070709]/15 to-[#070709]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/50 via-[#070709]/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-20">
          <div className="max-w-4xl animate-rise">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-blacvolta-gold">The city is waiting</p>
            <h1 className="font-display text-white text-balance text-[clamp(4rem,9vw,7.5rem)] font-black uppercase leading-[0.86] tracking-normal">Sell tickets.<br /><span className="text-blacvolta-gold">Reach more people.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white md:text-lg">All with BV Tickets. Make it easy to sell tickets, get your event discovered, and manage sales — all in one powerful merchant console.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button className='bg-blacvolta-gold py-7 px-16 hover:bg-blacvolta-gold-muted text-black rounded-none' asChild size="lg"><Link href="http://merchant.blacvolta.com">List your event <ArrowRight size={17} /></Link></Button>
              <Link href="#why" className="inline-flex items-center gap-2 text-xs text-white font-bold uppercase tracking-[0.16em]">See how it works <ArrowDown size={15} /></Link>
            </div>
          </div>
          <div className="absolute bottom-8 right-10 hidden items-center gap-3 text-right text-[10px] font-bold uppercase tracking-[0.18em] text-background/65 md:flex"><span>Made for Accra<br />Built for experiences</span><span className="size-2 bg-primary" /></div>
        </div>
      </section>
  );
}
