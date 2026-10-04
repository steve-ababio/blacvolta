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
    <section id="faq" className="px-5 py-20 md:px-10 md:py-28 bg-[#0c0905]/10 font-kamerik">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 border-b border-[#f8f5ee]/40 pb-12 lg:grid-cols-[0.8fr_1.5fr] lg:items-end">
          <Eyebrow>Questions, answered</Eyebrow>
          <div>
            <h2 className="font-display text-balance text-5xl text-white font-black uppercase leading-[0.95] tracking-normal md:text-8xl">Frequently<br />asked questions.</h2>
            <p className="mt-6 max-w-xl text-white/75 font-medium">Everything organizers and ticket buyers ask us most. Still stuck? We&apos;re here to help.</p>
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
            <p className="mt-5 font-display text-2xl font-black uppercase leading-tight">We&apos;d love to<br />hear about<br />your event.</p>
            <p className="mt-4 text-sm leading-6 text-black font-semibold">Tell us what you&apos;re planning and we&apos;ll help you get it listed.</p>
            <Button asChild size="sm" className="mt-7 bg-blacvolta-gold font-base text-base px-12 py-6 hover:bg-blacvolta-gold/80 rounded-none text-black"><Link href="#list">List your event <ArrowRight size={15} /></Link></Button>
          </aside>
        </div>
      </div>
    </section>
  );
}
