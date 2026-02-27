import { ReactNode } from "react";

interface JobSectionProps {
  title: string;
  children: ReactNode;
}

export const JobSection = ({ title, children }: JobSectionProps) => (
  <section className="space-y-2  lg:space-y-5 ">
    <h2 className="text-2xl font-bold text-[white] tracking-tight">{title}</h2>
    {children}
  </section>
);
