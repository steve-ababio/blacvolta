'use client';

import { useState } from "react";
import { UtensilsCrossed, GlassWater, Ticket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SavingsCalculator() {
  const [dinners, setDinners] = useState(2);
  const [cocktails, setCocktails] = useState(2);
  const [tickets, setTickets] = useState(2);

  const dinnerSavings = dinners * 40;
  const cocktailSavings = cocktails * 30;
  const ticketSavings = tickets * 60;
  const totalMonthlySavings = dinnerSavings + cocktailSavings + ticketSavings;
  const totalAnnualSavings = totalMonthlySavings * 12;

  // Let's assume the card costs $100 (~GHS 1,500)
  const cardCostGHS = 1000;
  const monthsToPayback = totalMonthlySavings > 0 
    ? (cardCostGHS / totalMonthlySavings).toFixed(1) 
    : "0.0";

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-20 bg-black/30 border-t border-b border-zinc-900 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blacvolta-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blacvolta-gold text-2xl md:text-3xl lg:text-4xl font-semibold leading-[160%] mb-4">
            Member Savings Calculator
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            See how much you can save with your BlacVolta Lifestyle Card based on your monthly outings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-[#0b0b0b] border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-center gap-8 shadow-premium">
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Your Monthly Activities</h3>
              <p className="text-zinc-500 text-xs">Adjust the sliders to match your typical lifestyle</p>
            </div>

            {/* Dinner Outings */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-zinc-900/80 border border-zinc-800 rounded-lg flex items-center justify-center text-blacvolta-gold">
                    <UtensilsCrossed className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Dinner & Dining</h4>
                    <p className="text-zinc-500 text-xs">Save avg. GHS 40 per dinner</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-blacvolta-gold text-xl font-bold">{dinners}</span>
                  <span className="text-zinc-400 text-xs ml-1">times</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={dinners}
                onChange={(e) => setDinners(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blacvolta-gold"
              />
              <div className="flex justify-between text-[10px] text-zinc-600">
                <span>0 times</span>
                <span>5 times</span>
                <span>10 times</span>
              </div>
            </div>

            {/* Cocktail Outings */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-zinc-900/80 border border-zinc-800 rounded-lg flex items-center justify-center text-blacvolta-gold">
                    <GlassWater className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Cocktails & Lounges</h4>
                    <p className="text-zinc-500 text-xs">Save avg. GHS 30 per outing</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-blacvolta-gold text-xl font-bold">{cocktails}</span>
                  <span className="text-zinc-400 text-xs ml-1">times</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={cocktails}
                onChange={(e) => setCocktails(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blacvolta-gold"
              />
              <div className="flex justify-between text-[10px] text-zinc-600">
                <span>0 times</span>
                <span>7 times</span>
                <span>15 times</span>
              </div>
            </div>

            {/* Event Tickets */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-zinc-900/80 border border-zinc-800 rounded-lg flex items-center justify-center text-blacvolta-gold">
                    <Ticket className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Event Tickets</h4>
                    <p className="text-zinc-500 text-xs">Save avg. GHS 60 per ticket</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-blacvolta-gold text-xl font-bold">{tickets}</span>
                  <span className="text-zinc-400 text-xs ml-1">tickets</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                value={tickets}
                onChange={(e) => setTickets(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blacvolta-gold"
              />
              <div className="flex justify-between text-[10px] text-zinc-600">
                <span>0 tickets</span>
                <span>4 tickets</span>
                <span>8 tickets</span>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900/90 to-black border border-blacvolta-gold rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-premium relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blacvolta-gold/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Your Monthly Savings
              </h3>

              {/* Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blacvolta-gold"></span>
                    Dinner Savings
                  </span>
                  <span className="text-white font-semibold">GHS {dinnerSavings}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blacvolta-gold"></span>
                    Cocktails Savings
                  </span>
                  <span className="text-white font-semibold">GHS {cocktailSavings}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-3">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blacvolta-gold"></span>
                    Event Tickets Savings
                  </span>
                  <span className="text-white font-semibold">GHS {ticketSavings}</span>
                </div>
              </div>

              {/* Monthly Total */}
              <div className="mb-6 bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider block mb-1">
                  Total Monthly Savings
                </span>
                <div className="text-blacvolta-gold text-4xl md:text-5xl font-black tracking-tight">
                  GHS {totalMonthlySavings}
                </div>
              </div>

              {/* Annual Total */}
              <div className="mb-6">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider block mb-1">
                  Total Yearly Savings
                </span>
                <div className="text-white text-2xl font-bold tracking-tight">
                  GHS {totalAnnualSavings}
                </div>
              </div>
            </div>

            {/* Payback Info & Call to action */}
            <div className="pt-6 border-t border-zinc-800 relative z-10">
              {totalMonthlySavings > 0 ? (
                <div className="flex items-start gap-2.5 text-zinc-400 text-xs mb-6">
                  {/* <Sparkles className="h-4 w-4 text-blacvolta-gold shrink-0 mt-0.5" /> */}
                  <span>
                    Your card pays for itself ( {
                      new Intl.NumberFormat("en-GH",{
                        style:"currency",
                        currency:"GHS",
                      }).format(cardCostGHS)
                    }) in just{" "}
                    <strong className="text-white font-semibold">{monthsToPayback} months</strong>!
                  </span>
                </div>
              ) : (
                <div className="text-zinc-500 text-xs mb-6">
                  Adjust the sliders to estimate your lifestyle savings.
                </div>
              )}

              <Link href='/download' className="w-full bg-blacvolta-gold hover:bg-blacvolta-gold/90 text-black font-bold text-sm py-3.5 px-4 rounded-xl transition-all duration-300 shadow-premium active:scale-95">
                Get Your Card
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom input range styling */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: hsl(var(--blacvolta-gold));
          border: 2px solid #000;
          cursor: pointer;
          transition: transform 0.1s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.25);
        }
        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border: 2px solid #000;
          border-radius: 50%;
          background: hsl(var(--blacvolta-gold));
          cursor: pointer;
          transition: transform 0.1s ease;
        }
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.25);
        }
      `}</style>
    </section>
  );
}
