interface JobListProps {
    items: string[];
    accent?: boolean;
  }
  
  export const JobList = ({ items, accent }: JobListProps) => (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-sm md:text-base text-[#ababab] leading-relaxed"
        >
          <span
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
             "bg-white"
            }`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
  