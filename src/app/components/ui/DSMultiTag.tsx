import { ChevronDown, X, Check } from "lucide-react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

const DEFAULT_OPTIONS = [
  "Birthday folks",
  "All tiers",
  "Recently onboarded",
  "VIP members",
  "New users",
  "High spenders",
  "Inactive users",
  "Gold tier",
];

interface DSMultiTagProps {
  label?: string;
  options?: string[];
  defaultSelected?: string[];
  defaultOpen?: boolean;
}

export function DSMultiTag({
  label,
  options = DEFAULT_OPTIONS,
  defaultSelected = ["Birthday folks", "All tiers", "Recently onboarded", "VIP members", "New users"],
  defaultOpen = false,
}: DSMultiTagProps) {
  const [selected, setSelected] = useState<string[]>(defaultSelected);
  const [open, setOpen] = useState(defaultOpen);
  const [visibleCount, setVisibleCount] = useState(selected.length);

  const containerRef = useRef<HTMLDivElement>(null);
  const pillsRowRef = useRef<HTMLDivElement>(null);

  // ── Close on outside click ─────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Measure how many pills actually fit in one row ─────────────────────
  useLayoutEffect(() => {
    if (!pillsRowRef.current) return;

    const row = pillsRowRef.current;
    const rowWidth = row.clientWidth;
    // Reserve space for chevron (20px) + overflow badge (~44px) + gap
    const reserved = 72;
    const available = rowWidth - reserved;

    let used = 0;
    let count = 0;
    const children = Array.from(row.children) as HTMLElement[];

    for (const child of children) {
      const w = child.scrollWidth + 6; // +6 for gap
      if (used + w > available) break;
      used += w;
      count++;
    }

    setVisibleCount(count);
  }, [selected]);

  // ── Recalculate on resize ──────────────────────────────────────────────
  useEffect(() => {
    const obs = new ResizeObserver(() => {
      if (!pillsRowRef.current) return;
      const row = pillsRowRef.current;
      const available = row.clientWidth - 72;
      let used = 0;
      let count = 0;
      for (const child of Array.from(row.children) as HTMLElement[]) {
        const w = child.scrollWidth + 6;
        if (used + w > available) break;
        used += w;
        count++;
      }
      setVisibleCount(count);
    });
    if (pillsRowRef.current) obs.observe(pillsRowRef.current);
    return () => obs.disconnect();
  }, [selected]);

  const toggle = (opt: string) =>
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((s) => s !== opt) : [...prev, opt]
    );

  const remove = (opt: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected((prev) => prev.filter((s) => s !== opt));
  };

  const visible = selected.slice(0, visibleCount);
  const overflow = selected.length - visibleCount;

  return (
    <div className="flex flex-col gap-1.5 relative" ref={containerRef}>
      {label && (
        <label className="text-sm font-['PP_Neue_Montreal:Medium',sans-serif] text-[#2F2E35]">
          {label}
        </label>
      )}

      {/* ── Trigger ───────────────────────────────────────────────────────── */}
      <div
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center h-[48px] px-4 rounded-full border bg-white cursor-pointer transition-all
          ${open
            ? "border-[#9875FA] ring-2 ring-[#EBE4FF]"
            : "border-[#D7D6DB] hover:border-[#9875FA]"
          }`}
      >
        {/* Pills measurement row (invisible, full set, used only for sizing) */}
        <div
          ref={pillsRowRef}
          className="absolute flex gap-1.5 opacity-0 pointer-events-none overflow-hidden"
          style={{ maxWidth: "calc(100% - 72px)" }}
          aria-hidden
        >
          {selected.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 bg-[#EBE4FF] text-[#6430F7] text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap"
            >
              {tag}
              <X size={10} />
            </span>
          ))}
        </div>

        {/* Visible pills */}
        <div className="flex items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
          {selected.length === 0 ? (
            <span className="text-[#A9A8B2] text-sm leading-none">
              Select options…
            </span>
          ) : (
            <>
              {visible.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 bg-[#EBE4FF] text-[#6430F7] text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap shrink-0"
                >
                  {tag}
                  <button
                    onClick={(e) => remove(tag, e)}
                    className="opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
              {overflow > 0 && (
                <span className="bg-[#EBE4FF] text-[#6430F7] text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap shrink-0">
                  +{overflow}
                </span>
              )}
            </>
          )}
        </div>

        <ChevronDown
          size={16}
          className={`shrink-0 text-[#91909D] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* ── Dropdown ──────────────────────────────────────────────────────── */}
      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 bg-white border border-[#D7D6DB] rounded-2xl shadow-[0px_4px_16px_rgba(23,23,23,0.12)] overflow-hidden">
          <div className="max-h-52 overflow-y-auto py-1.5">
            {options.map((opt) => {
              const checked = selected.includes(opt);
              return (
                <button
                  key={opt}
                  onClick={() => toggle(opt)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#F5F3FF] transition-colors text-left"
                >
                  {/* Checkbox */}
                  <span
                    className={`w-[16px] h-[16px] rounded-[4px] shrink-0 border flex items-center justify-center transition-all
                      ${checked
                        ? "bg-[#6430F7] border-[#6430F7]"
                        : "border-[#BFBDC5] bg-white"
                      }`}
                  >
                    {checked && (
                      <Check size={10} className="text-white" strokeWidth={3} />
                    )}
                  </span>
                  <span
                    className={`text-sm leading-[20px] tracking-[-0.084px] ${
                      checked
                        ? "text-[#3A3941] font-['PP_Neue_Montreal:Medium',sans-serif]"
                        : "text-[#63626F] font-['Neue_Montreal:Regular',sans-serif]"
                    }`}
                  >
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}