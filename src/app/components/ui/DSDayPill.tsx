import { Check } from "lucide-react";
import { useState } from "react";

export type DayLabel = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

interface DSDayPillProps {
  day: DayLabel;
  selected?: boolean;
  onToggle?: (day: DayLabel) => void;
}

/**
 * DayPill / md
 * 
 * Individual day selector pill component for the DaysOfWeekSelector.
 * 
 * Variants:
 * - day: Mon, Tue, Wed, Thu, Fri, Sat, Sun
 * - selected: true, false
 * - state: default, hover, pressed, focus (interactive)
 * - size: md (fixed control height matching DS md controls)
 * 
 * Anatomy:
 * - Container: auto-layout horizontal, center aligned
 *   - Icon (check): hidden unless selected
 *   - Label: day short label
 * 
 * Visual rules:
 * - Unselected: white bg, Gray 20 border, Gray 60 text
 * - Selected: Primary 5 bg, Primary 50 border/text, check icon visible
 * - Hover/Pressed: subtle bg changes per DS patterns
 * - Focus: visible focus ring (Primary 30) with offset
 */
export function DSDayPill({ day, selected = false, onToggle }: DSDayPillProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    onToggle?.(day);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle?.(day);
    }
  };

  // Base classes - md size control height (py-2.5) matching DS inputs/buttons
  const baseClasses =
    "inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all cursor-pointer outline-none select-none";

  // State-based styling using DS tokens
  const stateClasses = selected
    ? // Selected: Primary 5 bg + Primary 50 border/text
      "bg-[#EBE4FF] border border-[#6430F7] text-[#6430F7] hover:bg-[#CBBAFC] active:bg-[#B298FB]"
    : // Unselected: White bg + Gray 20 border + Gray 60 text
      "bg-white border border-[#D7D6DB] text-[#63626F] hover:bg-[#FAFAFA] hover:border-[#BFBDC5] active:bg-[#EFEFF1]";

  // Focus ring using Primary 30 with offset
  const focusClasses = isFocused
    ? "ring-2 ring-[#9875FA] ring-offset-2"
    : "";

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`${baseClasses} ${stateClasses} ${focusClasses}`}
      role="checkbox"
      aria-checked={selected}
      aria-label={`${day}${selected ? ", selected" : ""}`}
      tabIndex={0}
    >
      {/* Icon: check mark - only visible when selected */}
      {selected && (
        <Check size={14} strokeWidth={2.5} className="shrink-0" aria-hidden="true" />
      )}
      {/* Label: day short name */}
      <span className="whitespace-nowrap leading-none">{day}</span>
    </button>
  );
}