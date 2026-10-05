'use client';

import React, { useState } from 'react';
import { ArrowRight,MousePointer2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { openApp } from '@/app/utils/utils';

// export default function CustomerJourney() {
//   function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
//     return <p className={`mb-5 text-lg font-bold text-blacvolta-gold uppercase tracking-[0.24em]`}>{children}</p>;
//   }
//   return (
//     <section id="buyers" className="overflow-hidden bg-ink text-background">
//       <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
//         <div className="flex items-center px-5 py-20 md:px-10 lg:py-28">
//           <div className="max-w-xl">
//             <Eyebrow light>For ticket buyers</Eyebrow>
//             <h2 className="font-display text-6xl text-white font-extrabold uppercase leading-[0.9] tracking-normal md:text-8xl">Discover.<br />Book.
//               <span className="text-blacvolta-gold">Go.</span></h2>
//             <p className="mt-7 max-w-md text-gray-300">Find something worth going to, book your ticket and get ready for the experience.</p>
//             <Button asChild size="lg" onClick={()=>openApp()} className="mt-8 bg-white cursor-pointer text-black px-16 py-7 hover:bg-white rounded-none hover:text-blacvolta-gold">
//               <span>Explore BV Tickets <ArrowRight size={17} /></span>
//             </Button>
//           </div>
//         </div>
//         <div className="relative min-h-[590px]">
//           <img src="/assets/images/bv-tickets/concert.jpg" alt="Live concert atmosphere" className="absolute inset-0 size-full object-cover opacity-75" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0c0905] via-transparent to-transparent" />
//           <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 py-3  bg-transparent">
//             <img src='/assets/images/bv-tickets/iphone-ticket.png' alt="Phone" className='size-full object-cover' />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function CustomerJourney() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: "/assets/images/bv-tickets/iphone-ticket-1.png",
      alt: "Step 1 - Discover an event",
      // Position of the clickable area
      hotspot: {
        top: "89%",
        left: "30%",
        width: "70%",
        height: "20%",
      },
    },
    {
      image: "/assets/images/bv-tickets/iphone-ticket-2.png",
      alt: "Step 2 - Select your ticket",
      hotspot: {
        top: "18%",
        left: "48%",
        width: "70%",
        height: "15%",
      },
    },
    {
      image: "/assets/images/bv-tickets/iphone-ticket-3.png",
      alt: "Step 3 - Complete payment",
      hotspot: {
        top: "31%",
        left: "50%",
        width: "70%",
        height: "12%",
      },
    },
    {
      image: "/assets/images/bv-tickets/iphone-ticket-4.png",
      alt: "Step 4 - Get your ticket",
      hotspot: null,
    },
  ];

  function handleNextStep() {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }

  function Eyebrow({
    children,
    light = false,
  }: {
    children: React.ReactNode;
    light?: boolean;
  }) {
    return (
      <p className="mb-5 text-lg font-bold text-blacvolta-gold uppercase tracking-[0.24em]">
        {children}
      </p>
    );
  }

  return (
    <section
      id="buyers"
      className="overflow-hidden bg-ink text-background"
    >
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex items-center px-5 py-20 md:px-10 lg:py-28">
          <div className="max-w-xl">
            <Eyebrow light>For ticket buyers</Eyebrow>

            <h2 className="font-display text-6xl text-white font-extrabold uppercase leading-[0.9] tracking-normal md:text-8xl">
              Discover.
              <br />
              Book.
              <span className="text-blacvolta-gold">Go.</span>
            </h2>

            <p className="mt-7 max-w-md text-gray-300">
              Find something worth going to, book your ticket and get ready
              for the experience.
            </p>

            <Button
              asChild
              size="lg"
              onClick={() => openApp()}
              className="mt-8 cursor-pointer rounded-none bg-white px-16 py-7 text-black hover:bg-white hover:text-blacvolta-gold"
            >
              <span>
                Explore BV Tickets
                <ArrowRight size={17} />
              </span>
            </Button>

            {/* STEP INDICATOR */}
            <div className="mt-10 flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`h-2 transition-all duration-300 rounded-md ${
                    index === currentStep
                      ? "w-10 bg-blacvolta-gold"
                      : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative min-h-[590px]">
              
          {/* Background */}
          <img
            src="/assets/images/bv-tickets/concert.jpg"
            alt="Live concert atmosphere"
            className="absolute inset-0 size-full object-cover opacity-75"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0905] via-transparent to-transparent" />

          {/* PHONE */}
          <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2">

            <div className="relative">
              <div className={`absolute inset-0 rounded-[48px] w-full h-full ${currentStep === 3 ?'':'bg-black opacity-45'}`}></div>
              <img
                key={currentStep}
                src={steps[currentStep].image}
                alt={steps[currentStep].alt}
                className="size-full object-cover transition-opacity duration-300"
              />
              {steps[currentStep].hotspot && (
                <button
                  onClick={handleNextStep}
                  aria-label={`Continue to step ${currentStep + 2}`}
                  className="absolute z-10 cursor-pointer shadow-2xl"
                  style={{
                    top: steps[currentStep].hotspot.top,
                    left: steps[currentStep].hotspot.left,
                    width: steps[currentStep].hotspot.width,
                    height: steps[currentStep].hotspot.height,
                  }}
                >
                  {/* Optional visual indicator */}
                  <span className="absolute shadow-2xl inset-0 animate-pulse rounded-full border-4 h-8 w-8 border-white" />
                  <div className='absolute animate-pulse inset-0 rounded-full bg-white h-8 w-8'></div>
                  {/* <MousePointer2  className='absolute inset-0 rounded-full text-white h-8 w-8 ' size={24} /> */}
                </button>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}