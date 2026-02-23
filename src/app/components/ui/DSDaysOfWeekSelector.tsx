import { useState } from "react";
import { DSDayPill, type DayLabel } from "./DSDayPill";

const ALL_DAYS: DayLabel[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface DSDaysOfWeekSelectorProps {
  /** Controlled selected days */
  selectedDays?: DayLabel[];
  /** Callback when selection changes */
  onSelectionChange?: (days: DayLabel[]) => void;
  /** Default selected days (uncontrolled mode) */
  defaultSelectedDays?: DayLabel[];
}

/**
 * DaysOfWeekSelector / md
 * 
 * Composed component for selecting specific weekdays in scheduling settings.
 * Used in Coupons and Campaigns for validity/scheduling configuration.
 * 
 * Behavior:
 * - Multi-select allowed (multiple days can be selected simultaneously)
 * - Click on pill toggles selection
 * - Keyboard: Tab to navigate, Enter/Space to toggle
 * - If no days selected → hint "applies to all days by default"
 * - If any days selected → hint is hidden
 * 
 * Layer structure:
 * - Container (vertical auto-layout with DS spacing)
 *   - Title
 *   - Subtitle
 *   - PillsRow (horizontal auto-layout, consistent gap)
 *     - DayPill × 7 (Mon-Sun)
 *   - Hint (conditional)
 * 
 * DS Tokens used:
 * - Spacing: gap-4 (container), gap-2 (pills), gap-1 (title/subtitle)
 * - Typography: text-base (title), text-sm (subtitle), text-xs (hint)
 * - Colors: Gray 80 (title), Gray 60 (subtitle), Gray 50 (hint)
 */
export function DSDaysOfWeekSelector({
  selectedDays: controlledDays,
  onSelectionChange,
  defaultSelectedDays = [],
}: DSDaysOfWeekSelectorProps) {
  const [internalSelected, setInternalSelected] = useState<DayLabel[]>(defaultSelectedDays);

  // Use controlled value if provided, otherwise use internal state
  const selectedDays = controlledDays ?? internalSelected;

  const handleToggle = (day: DayLabel) => {
    const newSelection = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    // Update internal state if uncontrolled
    if (controlledDays === undefined) {
      setInternalSelected(newSelection);
    }

    // Notify parent
    onSelectionChange?.(newSelection);
  };

  const isSelected = (day: DayLabel) => selectedDays.includes(day);
  const hasSelection = selectedDays.length > 0;

  return (
    <div className="flex flex-col gap-4">
      {/* Title + Subtitle container */}
      <div className="flex flex-col gap-1">
        {/* Title */}
        <h3 className="text-[#3A3941] text-base font-medium leading-6">
          Days of the week
        </h3>
        {/* Subtitle */}
        <p className="text-[#63626F] text-sm leading-5">
          Choose specific days or select all week days
        </p>
      </div>

      {/* PillsRow: horizontal row of 7 DayPill instances */}
      <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Days of the week">
        {ALL_DAYS.map((day) => (
          <DSDayPill key={day} day={day} selected={isSelected(day)} onToggle={handleToggle} />
        ))}
      </div>

      {/* Hint: only visible when NO days selected */}
      {!hasSelection && (
        <p className="text-[#91909D] text-xs leading-[18px]">
          No days selected — applies to all days by default.
        </p>
      )}
    </div>
  );
}