import { JobSection } from "../job-section/job-section";

interface ResponsibilityGroup {
  category: string;
  items: string[];
}

export const JobResponsibilities = ({ data }: { data: ResponsibilityGroup[] }) => (
  <JobSection title="Key Responsibilities">
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      {data.map((group) => (
        <div key={group.category} className="space-y-3">
          <h3 className="text-lg font-semibold text-white">{group.category}</h3>
          <ul className="space-y-2">
            {group.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[#EBE2D3] leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 text-sm md:text-base lg:text-lg rounded-full bg-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </JobSection>
);
