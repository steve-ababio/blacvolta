'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Ticket, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface MerchantOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MerchantOnboardingModal({ isOpen, onClose }: MerchantOnboardingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    organizerName: '',
    email: '',
    phone: '',
    eventCategory: 'Concert & Music',
    estimatedAttendees: '100 - 500',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl bg-[#0f0f11] border border-zinc-800/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Gradient bar */}
          <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-blacvolta-gold to-yellow-300" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8">
            {!submitted ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider text-black bg-blacvolta-gold rounded-full uppercase">
                    Merchant Onboarding
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blacvolta-gold" /> BlacVolta Partner Network
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                  Become a BV Tickets Partner
                </h2>
                <p className="text-zinc-400 text-sm mt-1 mb-6">
                  Fill in your details to set up your merchant account and start selling tickets to the BlacVolta audience.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Organiser / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Accra Beach Club Events"
                      value={formData.organizerName}
                      onChange={(e) => setFormData({ ...formData, organizerName: e.target.value })}
                      className="w-full bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blacvolta-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="organizer@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blacvolta-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+233 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blacvolta-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Primary Event Category
                      </label>
                      <select
                        value={formData.eventCategory}
                        onChange={(e) => setFormData({ ...formData, eventCategory: e.target.value })}
                        className="w-full bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blacvolta-gold transition-colors"
                      >
                        <option value="Concert & Music">Concert & Music</option>
                        <option value="Nightlife & Party">Nightlife & Party</option>
                        <option value="Festival & Cultural">Festival & Cultural</option>
                        <option value="Food & Dining">Food & Dining</option>
                        <option value="Conference & Business">Conference & Business</option>
                        <option value="Other Experiences">Other Experiences</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Est. Attendees per Event
                      </label>
                      <select
                        value={formData.estimatedAttendees}
                        onChange={(e) => setFormData({ ...formData, estimatedAttendees: e.target.value })}
                        className="w-full bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blacvolta-gold transition-colors"
                      >
                        <option value="Under 100">Under 100</option>
                        <option value="100 - 500">100 - 500</option>
                        <option value="500 - 2,000">500 - 2,000</option>
                        <option value="2,000+">2,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Upcoming Event Details (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us a little about your next event or ticketing needs..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blacvolta-gold transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-6 text-base font-semibold bg-blacvolta-gold text-black hover:bg-blacvolta-gold/90 transition-all rounded-lg flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Application <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-[11px] text-zinc-500 text-center mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" /> Fast verification within 24 hours. Standard 5% fee model applies.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blacvolta-gold/10 border border-blacvolta-gold/30 flex items-center justify-center text-blacvolta-gold mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
                  Thank you for registering <span className="text-blacvolta-gold font-semibold">{formData.organizerName || 'your business'}</span> as a BV Tickets Partner. Our team will review your application and send dashboard access credentials to <span className="text-white font-medium">{formData.email}</span>.
                </p>
                <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs text-zinc-400 max-w-md text-left mb-6 space-y-1">
                  <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <Ticket className="w-4 h-4 text-blacvolta-gold" /> What happens next?
                  </div>
                  <p>1. Account review & verification (usually within 2-24 hours).</p>
                  <p>2. Merchant Dashboard activation code sent via email/WhatsApp.</p>
                  <p>3. Create your first event & publish tickets live!</p>
                </div>
                <Button
                  onClick={handleReset}
                  className="bg-blacvolta-gold text-black hover:bg-blacvolta-gold/90 font-medium px-8 py-2.5 rounded-lg"
                >
                  Done
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
