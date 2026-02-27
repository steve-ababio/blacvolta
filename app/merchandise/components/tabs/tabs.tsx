"use client";
import { motion } from 'framer-motion';
import { categories } from '@/app/data/product';


interface SegmentedTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function SegmentedTabs({ activeCategory, onCategoryChange }: SegmentedTabsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto flex justify-center px-4">
      <div className="inline-flex w-full p-1 bg-[#1f1f1f] mb-10 rounded-full overflow-x-auto">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => onCategoryChange(tab)}
            className={`category-pill ${
              activeCategory === tab 
                ? 'category-pill-active' 
                : 'category-pill-inactive'
            }`}
          >
            <span className="relative text-xs sm:text-base z-[7] whitespace-nowrap">{tab}</span>

            {activeCategory === tab && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-[#262626] rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
