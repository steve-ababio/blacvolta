import { MapPin, Briefcase } from "lucide-react";

interface JobHeroProps {
  title: string;
  company: string;
  parent: string;
  location: string;
}
//border - #312c26]
//primary - #e8b346
export const JobHero = ({ title, company, parent, location }: JobHeroProps) => (
  <header className="relative overflow-hidden border-b border-[#312c26]">
    {/* Subtle gradient glow */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-[#e8b346]/10 blur-[120px] pointer-events-none" />

    <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-16 space-y-6">
      <div className="flex items-center gap-3">
        <span className="inline-block rounded-full bg-[#e8b346]/15 px-4 py-1.5 text-sm font-medium text-[#e8b346] ">
          We are Hiring
        </span>
        <span className="text-[#9A8B7C] text-sm">{company}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#ECEBE9] leading-[1.1]">
        {title}
      </h1>

      <p className="text-[#9A8B7C] text-lg">{parent}</p>

      <div className="flex flex-wrap gap-4 text-sm text-[#EBE4D6]">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-[#E6B34D]" />
          {location}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase className="w-4 h-4 text-primary" />
          Full-time
        </span>
      </div>
    </div>
  </header>
);
