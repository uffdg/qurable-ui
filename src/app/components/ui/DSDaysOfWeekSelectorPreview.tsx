import { DSDaysOfWeekSelector } from "./DSDaysOfWeekSelector";
import { DSDayPill } from "./DSDayPill";

/**
 * Preview component showing different states and variants
 * of the DaysOfWeekSelector component set for the design system.
 * 
 * Demonstrates:
 * 1. Component set: DayPill/md (all states)
 * 2. Composed component: DaysOfWeekSelector/md (various configurations)
 */
export function DSDaysOfWeekSelectorPreview() {
  return (
    <div className="flex flex-col gap-10 w-full">
      {/* ═══ COMPONENT SET: DayPill / md ═══ */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 border-b border-[#E2E8F0] pb-3">
          <h4 className="text-[#3A3941] text-sm font-semibold">
            Component Set: DayPill / md
          </h4>
          <p className="text-[#91909D] text-xs">
            Individual pill variants — Size: md | States: default, hover, pressed, focus
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Unselected pills */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2]">
              Unselected Pills
            </span>
            <div className="flex flex-wrap gap-2">
              <DSDayPill day="Mon" selected={false} />
              <DSDayPill day="Tue" selected={false} />
              <DSDayPill day="Wed" selected={false} />
              <DSDayPill day="Thu" selected={false} />
              <DSDayPill day="Fri" selected={false} />
              <DSDayPill day="Sat" selected={false} />
              <DSDayPill day="Sun" selected={false} />
            </div>
          </div>

          {/* Selected pills */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2]">
              Selected Pills (with check icon)
            </span>
            <div className="flex flex-wrap gap-2">
              <DSDayPill day="Mon" selected={true} />
              <DSDayPill day="Tue" selected={true} />
              <DSDayPill day="Wed" selected={true} />
              <DSDayPill day="Thu" selected={true} />
              <DSDayPill day="Fri" selected={true} />
              <DSDayPill day="Sat" selected={true} />
              <DSDayPill day="Sun" selected={true} />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ═══ COMPOSED COMPONENT: DaysOfWeekSelector / md ═══ */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 border-b border-[#E2E8F0] pb-3">
          <h4 className="text-[#3A3941] text-sm font-semibold">
            Composed Component: DaysOfWeekSelector / md
          </h4>
          <p className="text-[#91909D] text-xs">
            Full selector with title, subtitle, pills row, and conditional hint
          </p>
        </div>

        {/* State 1: No selection (shows hint) */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2] px-1">
            State: No selection — hint visible
          </span>
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
            <DSDaysOfWeekSelector />
          </div>
        </div>

        {/* State 2: Weekdays selected */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2] px-1">
            State: Weekdays selected (Mon-Fri) — hint hidden
          </span>
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
            <DSDaysOfWeekSelector defaultSelectedDays={["Mon", "Tue", "Wed", "Thu", "Fri"]} />
          </div>
        </div>

        {/* State 3: Weekend selected */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2] px-1">
            State: Weekend selected (Sat-Sun) — hint hidden
          </span>
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
            <DSDaysOfWeekSelector defaultSelectedDays={["Sat", "Sun"]} />
          </div>
        </div>

        {/* State 4: Custom selection */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2] px-1">
            State: Custom selection (Mon, Wed, Fri) — hint hidden
          </span>
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
            <DSDaysOfWeekSelector defaultSelectedDays={["Mon", "Wed", "Fri"]} />
          </div>
        </div>
      </section>
    </div>
  );
}