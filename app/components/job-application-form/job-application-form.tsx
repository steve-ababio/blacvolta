'use client'
import { useState } from "react";

import { ArrowRight, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/text-area";
import { toast } from "@/app/hooks/use-toast";


interface JobApplicationFormProps {
  jobTitle: string;
}

export const JobApplicationForm = ({ jobTitle }: JobApplicationFormProps) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Application submitted!",
        description: `Your application for ${jobTitle} has been received.`,
      });
    }, 1200);
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-primary-foreground font-semibold font-[family-name:var(--font-display)] transition-all hover:brightness-110 hover:gap-3">
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">Application Sent!</h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              We will review your application and get back to you soon.
            </p>
            <Button variant="outline" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground font-[family-name:var(--font-display)]">
                Apply — {jobTitle}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required className="bg-white" maxLength={100} placeholder="Kwame" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" className="bg-white" required maxLength={100} placeholder="Asante" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" className="bg-white" required maxLength={255} placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" className="bg-white" maxLength={20} placeholder="+233 XX XXX XXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn / Portfolio URL</Label>
                <Input id="linkedin" className="bg-white" type="url" maxLength={500} placeholder="https://" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cover">Why are you a great fit? *</Label>
                <Textarea
                  id="cover"
                  required
                  maxLength={2000}
                  rows={4}
                  className="bg-white"
                  placeholder="Tell us about your experience and what excites you about this role..."
                />
              </div>
              <Button type="submit" className="w-full rounded-full" disabled={loading}>
                {loading ? "Submitting…" : "Submit Application"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
