import { useState } from "react";
import { DSDaysOfWeekSelector } from "./DSDaysOfWeekSelector";
import { type DayLabel } from "./DSDayPill";
import { DSButton } from "./DSButton";

/**
 * Example: Days of Week Selector in Coupon Editor Context
 * 
 * This example shows how the DaysOfWeekSelector would be used
 * in a real coupon/campaign scheduling form.
 */
export function CouponValidityExample() {
  const [selectedDays, setSelectedDays] = useState<DayLabel[]>([]);
  const [savedDays, setSavedDays] = useState<DayLabel[] | null>(null);

  const handleSave = () => {
    setSavedDays(selectedDays);
    console.log("Saved validity days:", selectedDays.length === 0 ? "All days" : selectedDays);
  };

  const handleReset = () => {
    setSelectedDays([]);
    setSavedDays(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
      {/* Form Section Header */}
      <div className="flex flex-col gap-2 mb-8 pb-6 border-b border-[#E2E8F0]">
        <h2 className="text-[#3A3941] text-2xl font-semibold">Validity Settings</h2>
        <p className="text-[#63626F] text-sm">
          Configure when this coupon can be redeemed by members.
        </p>
      </div>

      {/* Days of Week Selector */}
      <div className="mb-8">
        <DSDaysOfWeekSelector
          selectedDays={selectedDays}
          onSelectionChange={setSelectedDays}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-6 border-t border-[#E2E8F0]">
        <DSButton
          label="Save settings"
          variant="primary"
          onClick={handleSave}
        />
        <DSButton
          label="Reset"
          variant="secondary"
          onClick={handleReset}
        />
      </div>

      {/* Saved State Display */}
      {savedDays !== null && (
        <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#86EFAC] rounded-xl">
          <p className="text-[#15803D] text-sm font-medium">
            ✓ Validity days saved:{" "}
            {savedDays.length === 0 ? (
              <span className="font-semibold">All days (no restriction)</span>
            ) : (
              <span className="font-semibold">{savedDays.join(", ")}</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Example: Weekdays vs Weekend Presets
 * 
 * This example shows how you might implement preset buttons
 * for common selections (Weekdays, Weekend, Clear).
 */
export function DaysOfWeekWithPresetsExample() {
  const [selectedDays, setSelectedDays] = useState<DayLabel[]>([]);

  const weekdays: DayLabel[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const weekend: DayLabel[] = ["Sat", "Sun"];

  const setWeekdays = () => setSelectedDays(weekdays);
  const setWeekend = () => setSelectedDays(weekend);
  const clearAll = () => setSelectedDays([]);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
      {/* Form Section Header */}
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-[#3A3941] text-xl font-semibold">Campaign Schedule</h2>
        <p className="text-[#63626F] text-sm">
          Choose which days this campaign should be active.
        </p>
      </div>

      {/* Preset Buttons */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#91909D] text-xs font-medium mr-2">Quick select:</span>
        <button
          onClick={setWeekdays}
          className="px-3 py-1.5 text-xs font-semibold text-[#6430F7] bg-[#EBE4FF] hover:bg-[#CBBAFC] rounded-full transition-colors"
        >
          Weekdays
        </button>
        <button
          onClick={setWeekend}
          className="px-3 py-1.5 text-xs font-semibold text-[#6430F7] bg-[#EBE4FF] hover:bg-[#CBBAFC] rounded-full transition-colors"
        >
          Weekend
        </button>
        <button
          onClick={clearAll}
          className="px-3 py-1.5 text-xs font-semibold text-[#63626F] bg-white border border-[#D7D6DB] hover:bg-[#FAFAFA] rounded-full transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Days of Week Selector */}
      <DSDaysOfWeekSelector
        selectedDays={selectedDays}
        onSelectionChange={setSelectedDays}
      />

      {/* Summary */}
      <div className="mt-6 p-4 bg-[#F8F8FA] rounded-xl">
        <p className="text-[#3A3941] text-sm">
          <span className="font-semibold">Current selection:</span>{" "}
          {selectedDays.length === 0 ? (
            <span className="text-[#91909D]">All days (no restriction)</span>
          ) : (
            <span className="text-[#6430F7] font-semibold">
              {selectedDays.length} day{selectedDays.length > 1 ? "s" : ""} selected
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

/**
 * Example: Validation with Error State
 * 
 * This example shows how you might handle validation
 * if at least one weekend day is required.
 */
export function DaysOfWeekWithValidationExample() {
  const [selectedDays, setSelectedDays] = useState<DayLabel[]>([]);
  const [showError, setShowError] = useState(false);

  const hasWeekendDay = selectedDays.some(day => day === "Sat" || day === "Sun");

  const handleSave = () => {
    if (selectedDays.length > 0 && !hasWeekendDay) {
      setShowError(true);
    } else {
      setShowError(false);
      alert(`Saved: ${selectedDays.length === 0 ? "All days" : selectedDays.join(", ")}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-[#3A3941] text-xl font-semibold">Weekend Promotion</h2>
        <p className="text-[#63626F] text-sm">
          This promotion must include at least one weekend day (Saturday or Sunday).
        </p>
      </div>

      <DSDaysOfWeekSelector
        selectedDays={selectedDays}
        onSelectionChange={(days) => {
          setSelectedDays(days);
          setShowError(false); // Clear error on change
        }}
      />

      {/* Error Message */}
      {showError && (
        <div className="mt-4 p-4 bg-[#FFF1F2] border border-[#F43F5E] rounded-xl flex items-start gap-3">
          <span className="text-[#F43F5E] text-lg leading-none">⚠</span>
          <p className="text-[#E11D48] text-sm font-medium">
            Please select at least one weekend day (Saturday or Sunday) for this weekend promotion.
          </p>
        </div>
      )}

      <div className="flex items-center gap-3 mt-6">
        <DSButton
          label="Save promotion"
          variant="primary"
          onClick={handleSave}
        />
      </div>
    </div>
  );
}