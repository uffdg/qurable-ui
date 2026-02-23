import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DSPaginationProps {
  total?: number;
  initialPage?: number;
}

export function DSPagination({ total = 99, initialPage = 5 }: DSPaginationProps) {
  const [current, setCurrent] = useState(initialPage);

  const pages = [1, 2, 3, 4, 5, "...", total];

  return (
    <div className="flex items-center gap-1 justify-center">
      <button
        onClick={() => setCurrent((p) => Math.max(1, p - 1))}
        className="p-1.5 rounded-lg text-[#63626F] hover:bg-[#F5F5F7] disabled:opacity-30 transition-colors"
        disabled={current === 1}
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((page, i) => (
        <button
          key={i}
          onClick={() => typeof page === "number" && setCurrent(page)}
          className={`w-8 h-8 rounded-lg text-sm transition-colors ${
            page === current
              ? "bg-[#6430F7] text-white font-semibold"
              : page === "..."
              ? "text-[#A9A8B2] cursor-default"
              : "text-[#3A3941] hover:bg-[#F5F5F7]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrent((p) => Math.min(total, p + 1))}
        className="p-1.5 rounded-lg text-[#63626F] hover:bg-[#F5F5F7] disabled:opacity-30 transition-colors"
        disabled={current === total}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
