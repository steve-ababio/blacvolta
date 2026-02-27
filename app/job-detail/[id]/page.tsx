import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { jobsList } from "../../data/jobs/data";
import { JobHero } from "../../components/job-hero/job-hero";
import { JobSection } from "../../components/job-section/job-section";
import { JobResponsibilities } from "../../components/job-responsibilities/job-responsibilities";
import { JobList } from "../../components/job-list/job-list";
import Link from "next/link";
import NavBar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import { JobCTA } from "@/app/components/job-cta/job-cta";
const JobDetail = ({ params }: { params: { id: string } }) => {
  const {id} = params;
  const job = jobsList.find((j) => j.id === id);
  
  if (!job) {
    return (
      <div className="min-h-screen bg-[#110F0D] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-[white]">Job not found</h1>
          <Link href="/" className="text-[#e8b346] hover:underline">
            ← Back to all jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
       <NavBar />
       <div className="min-h-screen mt-16 md:mt-20 bg-[#110F0D]">
       {/* <div className="mx-auto max-w-3xl px-6 pt-6">
        <Link
          href="/jobs"
          className="inline-flex absolute top-16 z-50 left-3 items-center gap-1.5 text-sm text-[#9A9188] hover:text-[#e8b346] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Jobs
        </Link>
      </div> */}
      <JobHero
        title={job.title}
        company={job.company}
        parent={job.parent}
        location={job.location}
      />
      <main className="mx-auto max-w-3xl px-6 py-16 space-y-20">
        <JobSection title="Role Overview">
          <p className="text-[#EBE2D3] leading-relaxed text-sm md:text-base lg:text-lg">
            {job.overview}
          </p>
        </JobSection>

        <JobResponsibilities data={job.responsibilities} />

        <JobSection title="What Success Looks Like">
          <JobList items={job.success} accent />
        </JobSection>

        <JobSection title="Required Skills & Experience">
          <JobList items={job.requirements} />
        </JobSection>

        <JobSection title="Nice to Have">
          <JobList items={job.niceToHave} />
        </JobSection>

        <JobCTA jobTitle={job.title} />
      </main>

      <Footer />
    </div>
    </main>
  );
};

export default JobDetail;
