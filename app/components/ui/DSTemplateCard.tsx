import { Check } from "lucide-react";

interface DSTemplateCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  whatItIs: string;
  whenToUse: string;
  alreadyConfigured: string[];
  youCustomize: string[];
  selected?: boolean;
  onClick?: () => void;
}

export function DSTemplateCard({
  icon,
  title,
  subtitle,
  whatItIs,
  whenToUse,
  alreadyConfigured,
  youCustomize,
  selected,
  onClick,
}: DSTemplateCardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border p-5 flex flex-col gap-3 cursor-pointer transition-all bg-white hover:shadow-md
        ${selected ? "border-[#6430F7] ring-2 ring-[#EBE4FF]" : "border-[#E2E8F0] hover:border-[#9875FA]"}`}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#3A3941]">
        {icon}
      </div>

      {/* Title */}
      <div>
        <p className="text-[#3A3941] text-sm font-bold">{title}</p>
        <p className="text-[#63626F] text-xs mt-0.5">{subtitle}</p>
      </div>

      {/* What it is */}
      <div>
        <p className="text-[9px] font-bold tracking-widest text-[#A9A8B2] uppercase mb-1">What it is</p>
        <p className="text-xs text-[#63626F] leading-relaxed">{whatItIs}</p>
      </div>

      {/* When to use */}
      <div>
        <p className="text-[9px] font-bold tracking-widest text-[#A9A8B2] uppercase mb-1">When to use</p>
        <p className="text-xs text-[#63626F] leading-relaxed">{whenToUse}</p>
      </div>

      {/* Already configured */}
      <div>
        <p className="text-[9px] font-bold tracking-widest text-[#A9A8B2] uppercase mb-1.5">Already configured</p>
        <div className="flex flex-col gap-1">
          {alreadyConfigured.map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Check size={10} className="text-[#6430F7] shrink-0" />
              <span className="text-xs text-[#63626F]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* You customize */}
      <div>
        <p className="text-[9px] font-bold tracking-widest text-[#A9A8B2] uppercase mb-1.5">You customize</p>
        <div className="flex flex-wrap gap-1">
          {youCustomize.map((tag) => (
            <span
              key={tag}
              className="bg-[#EBE4FF] text-[#6430F7] text-[10px] font-medium px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
