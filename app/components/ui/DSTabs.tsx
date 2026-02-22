import { useState } from "react";

interface DSTabsProps {
  tabs: string[];
  defaultTab?: string;
}

export function DSTabs({ tabs, defaultTab }: DSTabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]);
  return (
    <div className="flex gap-0 border-b border-[#E2E8F0]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2.5 text-sm transition-all border-b-2 -mb-px whitespace-nowrap
            ${active === tab
              ? "border-[#6430F7] text-[#6430F7] font-semibold"
              : "border-transparent text-[#3A3941] hover:text-[#6430F7]"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
