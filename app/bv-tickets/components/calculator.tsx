import { Button } from "@/app/components/ui/button";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Calculator() {
  const [ticketPrice, setTicketPrice] = useState(250);
  const [quantity, setQuantity] = useState(100);
  const [absorbFee, setAbsorbFee] = useState(false);

  const estimate = useMemo(() => {
    const gross = ticketPrice * quantity;
    const fee = gross * 0.05;
    return { gross, fee, payout: absorbFee ? gross - fee : gross };
  }, [ticketPrice, quantity, absorbFee]);

  const money = (value: number) => new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS", maximumFractionDigits: 0 }).format(value);
  function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`mb-5 text-lg font-bold text-blacvolta-gold uppercase tracking-[0.24em]`}>{children}</p>;
  }
  return (
    <section className="bg-[#0c0905] text-background">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[740px]">
          <div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0905]/90 via-[#0c0905]/65 to-[#0c0905]/10" />
            <img src="/assets/images/bv-tickets/ticket.jfif" alt="Friends sharing a vibrant dining experience" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0c0905]/65 to-transparent" /><p className="absolute bottom-8 left-8 max-w-xs font-display text-3xl text-blacvolta-gold font-semibold uppercase leading-tight">Good experiences deserve a full house.</p></div>
          </div>
          
        <div className="flex items-center px-5 py-16 md:px-14 lg:py-20">
          <div className="w-full max-w-xl">
            <Eyebrow light>Interactive 5% fee estimator</Eyebrow>
            <h2 className="font-display text-5xl font-extrabold uppercase text-white leading-[0.95] tracking-normal md:text-6xl">Know what<br />you'll make.</h2>
            <p className="mt-4 text-sm text-zinc-400">See exact payout figures before you list your tickets.</p>
            <div className="mt-10 border-y border-[#f8f5ee]/20 py-7">
              <label htmlFor="price" className="flex items-end justify-between text-white text-xs font-extrabold uppercase tracking-[0.16em]"><span>Ticket price</span><span className="font-display text-3xl text-white">{money(ticketPrice)}</span></label>
              <input id="price" type="range" min="20" max="1000" step="10" value={ticketPrice} onChange={(e) => setTicketPrice(Number(e.target.value))} className="mt-5 w-full accent-blacvolta-gold" />
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-white tracking-[0.16em]">Tickets available</span>
                <div className="flex items-center border border-[#f8f5ee]/50">
                  <Button variant="ghost" size="icon" aria-label="Decrease tickets" onClick={() => setQuantity(Math.max(10, quantity - 10))}>
                    <Minus size={15} className="text-white" /></Button><span className="w-16 text-center text-white font-display text-xl">{quantity}</span>
                  <Button variant="ghost" size="icon" aria-label="Increase tickets" onClick={() => setQuantity(Math.min(5000, quantity + 10))}>
                    <Plus size={15} className="text-white" />
                  </Button>
                </div></div>
              <div className="mt-8 flex items-center justify-between gap-4">
                <div><p className="text-xs text-white font-extrabold uppercase tracking-[0.16em]">Absorb the fee</p>
                  <p className="mt-1 text-xs text-white">Otherwise customers pay it</p>
                </div>
                <button type="button" role="switch" aria-checked={absorbFee} onClick={() => setAbsorbFee(!absorbFee)} className={`relative h-7 w-12 rounded-full border border-[#f8f5ee] transition-colors ${absorbFee ? "border-[#f8f5ee] " : "border-[#f8f5ee] bg-transparent"}`}>
                  <span className={`absolute top-1 size-5 rounded-full bg-white transition-transform ${absorbFee ? "translate-x-5" : "translate-x-1"}`} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#f8f5ee]/20 border-b border-[#f8f5ee]/20">
              <div className="bg-[#0c0905] py-6 pr-4"><p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-bold">Service fee</p><p className="mt-2 font-display font-bold text-2xl text-white">{money(estimate.fee)}</p></div>
              <div className="bg-[#0c0905] py-6 pl-5"><p className="text-[10px]  uppercase tracking-[0.16em] text-zinc-400 font-bold">Your payout</p><p className="mt-2 font-display font-bold text-3xl text-blacvolta-gold">{money(estimate.payout)}</p></div>
            </div>
            <Button asChild size="lg" className="mt-8 bg-blacvolta-gold text-black rounded-none px-10 py-5 font-bold hover:bg-blacvolta-gold"><Link href="http://merchant.blacvolta.com">List your event <ArrowRight size={17} /></Link></Button>
          </div>
        </div>
      </div>
    </section>
  )
}