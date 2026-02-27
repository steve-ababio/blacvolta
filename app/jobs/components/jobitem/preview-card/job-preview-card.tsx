import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { JobData } from "@/app/data/jobs/data";
import Link from "next/link";

interface JobPreviewCardProps {
  job: JobData;
}

export const JobPreviewCard = ({ job }: JobPreviewCardProps) => (
  <Link
    href={`/job-detail/${job.id}`}
    className="group block rounded-2xl bg-card p-6 sm:p-8 transition-all  hover:shadow-[0_0_30px_-10px_hsl(43_80%_58%/0.15)]"
  >
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="inline-block rounded-full bg-[#333] px-3 py-1 text-xs font-medium text-[white] font-[family-name:var(--font-display)]">
          {job.type}
        </span>
        <span className="text-black text-sm">{job.company}</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight group-hover:text-primary transition-colors">
        {job.title}
      </h3>

      <p className="text-[#9A8A7A] text-sm line-clamp-2 leading-relaxed">
        {job.overview}
      </p>

      <div className="flex items-center justify-between pt-2">
        <div className="flex flex-wrap gap-3 text-sm text-secondary-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            {job.type}
          </span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          View Role
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  </Link>
);
