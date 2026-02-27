import { ArrowRight } from "lucide-react";
import { JobApplicationForm } from "../job-application-form/job-application-form";
interface JobCTAProps {
    jobTitle?: string;
  }

  
export const JobCTA = ({ jobTitle = "This Role" }: JobCTAProps) => (
  <section className="rounded-2xl bg-card border border-border p-8 sm:p-10 text-center space-y-5">
    <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
      Ready to shape culture?
    </h2>
    <p className="text-muted-foreground max-w-md mx-auto">
      If you thrive at the intersection of brands, creativity, and commerce — we want to hear from you.
    </p>
    {/* <a
      href="mailto:careers@bvsocial.com"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-primary-foreground font-semibold font-[family-name:var(--font-display)] transition-all hover:brightness-110 hover:gap-3"
    >
      Apply Now
      <ArrowRight className="w-4 h-4" />
    </a> */}
    <JobApplicationForm jobTitle={jobTitle} />
  </section>
);
