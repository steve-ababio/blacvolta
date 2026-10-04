'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, MessageCircle, Mail, Phone, ChevronDown, ArrowRight, Minus, Plus } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

 const organiserFAQs = [
    {
      question: 'What is BV Tickets?',
      answer: "BV Tickets is BlacVolta's ticketing platform, helping event organisers sell tickets and connect their events with the BlacVolta audience.",
    },
    {
      question: 'Who can become a BV Tickets Partner?',
      answer: 'BV Tickets is available to eligible event organisers, businesses and creators looking to sell tickets for events and experiences.',
    },
    {
      question: 'How do I become a BV Tickets Partner?',
      answer: 'Register through the BV Tickets merchant portal and complete your account setup. Your account will then be reviewed by the BlacVolta team before you can sell paid tickets.',
    },
    {
      question: 'How do I list an event?',
      answer: 'Once your merchant account is set up, you can create and manage your event through your merchant dashboard.',
    },
    {
      question: 'How does the 5% service fee work?',
      answer: 'You can choose whether to absorb the 5% service fee or pass it on to your customers.',
    },
    {
      question: 'Can I create different ticket types?',
      answer: 'Yes. You can set up different ticket types, prices and quantities through your merchant dashboard.',
    },
    {
      question: 'What’s the difference between an RSVP and a paid event?',
      answer: "RSVPs allow customers to register and reserve their place without purchasing a ticket, giving you an easy way to keep track of who's coming through your merchant dashboard. Paid events require customers to purchase a ticket to secure their place, with ticket sales and attendees managed through the same dashboard.",
    },
    {
      question: 'How do I manage my event?',
      answer: 'Your merchant dashboard allows you to manage your event, track ticket sales and manage attendees.',
    },
    {
      question: 'Can I offer EventShield with my event?',
      answer: 'EventShield is an optional paid add-on available for eligible events. Customers can choose to add EventShield to their ticket purchase for additional accident-related cover.',
    },
    {
      question: 'Who provides EventShield?',
      answer: 'EventShield is provided by emPLE Life Insurance Ghana Ltd.',
    },
    {
      question: 'Can BlacVolta help promote my event?',
      answer: "Events listed on BV Tickets may have opportunities for additional visibility through BlacVolta's website, app, content and social channels.",
    },
    {
      question: 'Who do I contact if I need help?',
      answer: 'Our support team is available to help with questions about your BV Tickets account, event or ticket sales.',
    },
  ];

  const buyerFAQs = [
    {
      question: 'How do I buy a ticket?',
      answer: "Find an event or experience you’re interested in and select the ticket you’d like to purchase. Complete payment and your ticket will automatically be added to your profile under ‘My Tickets’.",
    },
    {
      question: 'How do I receive my ticket?',
      answer: "Once your purchase is complete, you’ll receive a confirmation email and your ticket will also be available in the BlacVolta app under ‘My Tickets’.",
    },
    {
      question: 'Where do I find my ticket?',
      answer: "Open the menu on the left-hand side of the app and select ‘My Tickets’.",
    },
    {
      question: 'Can I transfer/refund my ticket?',
      answer: "Ticket transfers and refunds are subject to the individual event’s cancellation and refund policy. Please check the event listing before purchasing.",
    },
    {
      question: 'What happens if an event is cancelled?',
      answer: "Each event has its own cancellation and refund policy, which will be displayed on the event listing. If you’re eligible for a refund, this will be processed in line with the event’s policy and the payment method used.",
    },
    {
      question: 'Who do I contact if there’s a problem?',
      answer: 'If you’re experiencing an issue with purchasing or accessing your ticket, please contact our customer support team.',
    },
    {
      question: 'Do I need an account/app?',
      answer: 'Yes. You’ll need a BlacVolta account and the app to purchase tickets and access your tickets.',
    },
    {
      question: 'What payment methods can I use?',
      answer: 'You can purchase tickets using Mobile Money (MoMo), debit or credit card, or bank transfer.',
    },
    {
      question: 'What’s the difference between RSVP and purchasing a ticket?',
      answer: 'RSVP allows you to register for an event and reserve your place. If an event is ticketed, you’ll need to purchase a ticket to attend.',
    },
    {
      question: 'What is EventShield?',
      answer: 'EventShield is an optional paid add-on available on eligible events. It provides accident-related cover for eligible incidents occurring at the event.',
    },
    {
      question: 'What does EventShield cover?',
      answer: 'EventShield provides cover for eligible accident-related incidents, including accidental injuries, accident-induced disability and hospitalisation, subject to the policy terms and conditions.',
    },
    {
      question: 'Who provides EventShield?',
      answer: 'EventShield is provided by emPLE Life Insurance Ghana Ltd.',
    },
];
export default function TicketsFAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'organisers' | 'buyers'>('organisers');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = activeTab === "organisers" ? organiserFAQs : buyerFAQs;
  const tabs: { id: "organisers" | "buyers"; label: string }[] = [
    { id: "organisers", label: "For organisers" },
    { id: "buyers", label: "For buyers" },
  ];
 

  const currentList = activeTab === 'organisers' ? organiserFAQs : buyerFAQs;

  const filteredFAQs = currentList.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return <p className={`mb-5 text-lg font-bold text-blacvolta-gold uppercase tracking-[0.24em]`}>{children}</p>;
  }
  return (
    // <section id="faqs" className="py-20 lg:py-28 bg-[#09090b] relative">
    //   <div className="mx-auto max-w-[1320px]">
    //     <Eyebrow>Frequently Asked Questions</Eyebrow>
    //       <div className="text-center mb-12">
    //       <h2 className="text-4xl sm:text-8xl font-black text-white uppercase tracking-tight mb-4 font-futura">
    //         Everything You Need to Know.
    //       </h2>
    //       <p className="text-base sm:text-lg text-gray-200">
    //         Everything you need to know about selling tickets and purchasing passes on BV Tickets.
    //       </p>
    //     </div>

    //     {/* Tab Switcher */}
    //     <div className="flex justify-center mb-8">
    //       <div className="bg-black border border-white/15 p-1.5 rounded-[28px] flex items-center gap-2 w-full max-w-md backdrop-blur-xl">
    //         <button
    //           onClick={() => setActiveTab('organisers')}
    //           className={`flex-1 py-3 px-4 rounded-3xl text-xs sm:text-sm font-bold transition-all ${
    //             activeTab === 'organisers'
    //               ? 'bg-blacvolta-gold text-black shadow-lg'
    //               : 'text-white hover:text-white'
    //           }`}
    //         >
    //           For Event Organisers
    //         </button>
    //         <button
    //           onClick={() => setActiveTab('buyers')}
    //           className={`flex-1 py-3 px-4 rounded-3xl text-xs sm:text-sm font-bold transition-all ${
    //             activeTab === 'buyers'
    //               ? 'bg-blacvolta-gold text-black shadow-lg'
    //               : 'text-white hover:text-white'
    //           }`}
    //         >
    //           For Ticket Buyers
    //         </button>
    //       </div>
    //     </div>

    //     {/* Search Bar */}
    //     <div className="relative mb-10">
    //       <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />
    //       <Input
    //         placeholder={`Search ${activeTab === 'organisers' ? 'organiser' : 'ticket buyer'} questions...`}
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //         className="pl-12 py-6 text-sm sm:text-base bg-black border-white/15 text-white rounded-3xl focus-visible:ring-blacvolta-gold  placeholder:text-zinc-500 shadow-xl backdrop-blur-xl"
    //       />
    //     </div>

    //     {/* Accordion list */}
    //     {filteredFAQs.length === 0 ? (
    //       <div className="text-center py-12 bg-white/[0.03] rounded-md border border-white/10">
    //         <HelpCircle className="mx-auto h-10 w-10 text-zinc-500 mb-3" />
    //         <h3 className="text-lg font-bold text-white mb-1">No matching questions found</h3>
    //         <p className="text-xs text-zinc-400">Try searching for other keywords like fee, payout, app, or EventShield.</p>
    //       </div>
    //     ) : (
    //       <div className="bg-black border border-white/15 rounded-md overflow-hidden backdrop-blur-xl divide-y divide-white/10">
    //         <Accordion type="single" collapsible className="w-full">
    //           {filteredFAQs.map((faq, idx) => (
    //             <AccordionItem key={idx} value={`faq-${idx}`} className="border-b-0 px-6 py-2">
    //               <AccordionTrigger className="hover:no-underline text-left py-5 text-white text-base sm:text-lg font-semibold hover:text-blacvolta-gold transition-colors">
    //                 <span>{faq.question}</span>
    //               </AccordionTrigger>
    //               <AccordionContent className="pb-5 text-zinc-300 text-sm leading-relaxed">
    //                 {faq.answer}
    //               </AccordionContent>
    //             </AccordionItem>
    //           ))}
    //         </Accordion>
    //       </div>
    //     )}

    //     {/* Contact Support Pill */}
    //     <div className="mt-12 text-center p-6 bg-black border border-white/15 rounded-xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
    //       <div className="text-left">
    //         <div className="text-sm font-bold text-white">Have additional questions?</div>
    //         <div className="text-xs text-zinc-400">Our support team is ready to assist you anytime.</div>
    //       </div>
    //       <div className="flex gap-3">
    //         <a
    //           href="mailto:blacvolta@gmail.com"
    //           className="px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white rounded-3xl text-xs font-semibold flex items-center gap-2 transition-colors"
    //         >
    //           <Mail className="w-4 h-4 text-blacvolta-gold" /> Email Support
    //         </a>
    //         <a
    //           href="tel:+233540973552"
    //           className="px-5 py-2.5 bg-blacvolta-gold text-black hover:bg-blacvolta-gold/90 rounded-3xl text-xs font-extrabold flex items-center gap-2 transition-colors shadow-lg"
    //         >
    //           <Phone className="w-4 h-4" /> Call Hotline
    //         </a>
    //       </div>
    //     </div>

    //   </div>
    // </section>
    <section id="faq" className="px-5 py-20 md:px-10 md:py-28 bg-[#0c0905]/10 font-kamerik">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 border-b border-[#f8f5ee]/40 pb-12 lg:grid-cols-[0.8fr_1.5fr] lg:items-end">
          <Eyebrow>Questions, answered</Eyebrow>
          <div>
            <h2 className="font-display text-balance text-5xl text-white font-black uppercase leading-[0.95] tracking-normal md:text-8xl">Frequently<br />asked questions.</h2>
            <p className="mt-6 max-w-xl text-white/75 font-medium">Everything organizers and ticket buyers ask us most. Still stuck? We're here to help.</p>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.9fr]">
          <div>
            <div role="tablist" aria-label="FAQ categories" className="mb-2 flex gap-3 border-b border-[#c4b9a9]">
              {tabs.map(({ id, label }) => {
                const active = activeTab === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => { setActiveTab(id); setOpenIndex(0); }}
                    className={`-mb-px border-b-2 px-4 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-colors md:text-sm ${active ? "border-blacvolta-gold text-blacvolta-gold" : "border-transparent text-white hover:text-white/75"}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div>
              {faqs.map((item, index) => {
                const open = openIndex === index;
                return (
                  <div key={item.question} className="border-b border-[#c4b9a9]">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`faq-panel-${index}`}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className={`font-display text-xl font-bold uppercase text-white tracking-normal transition-colors md:text-2xl ${open ? "text-blacvolta-gold" : "group-hover:text-blacvolta-gold"}`}>{item.question}</span>
                        <span className={`flex size-9 shrink-0 items-center justify-center border transition-colors ${open ? "border-blacvolta-gold bg-blacvolta-gold text-white" : "border-[#c4b9a9]"}`} aria-hidden="true">
                          {open ? <Minus size={15} className='text-white font-bold'/> : <Plus size={15} className='text-white font-bold' />}
                        </span>
                      </button>
                    </h3>
                    <div id={`faq-panel-${index}`} hidden={!open}>
                      <p className="max-w-2xl pb-7 text-sm leading-6 text-gray-300">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <aside className="self-start bg-white p-8 text-black lg:mt-12">
            <p className="text-base font-bold uppercase tracking-[0.24em] text-blacvolta-gold">Still have questions?</p>
            <p className="mt-5 font-display text-2xl font-black uppercase leading-tight">We'd love to<br />hear about<br />your event.</p>
            <p className="mt-4 text-sm leading-6 text-black font-semibold">Tell us what you're planning and we'll help you get it listed.</p>
            <Button asChild size="sm" className="mt-7 bg-blacvolta-gold font-base text-base px-12 py-6 hover:bg-blacvolta-gold/80 rounded-none text-black"><Link href="#list">List your event <ArrowRight size={15} /></Link></Button>
          </aside>
        </div>
      </div>
    </section>
  );
}
