import { useState } from "react";
import svgPaths from "../../../imports/svg-wvtzow6xkb";

// ── Icons straight from svg-wvtzow6xkb ────────────────────────────────────────
function IconDetails({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[7.81%_14.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 13.5">
          <path d={svgPaths.p35638700} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function IconTrigger({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[1.55%_14.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5003 15.5048">
          <path d={svgPaths.p30deb200} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function IconValidity({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[4.69%_10.94%_10.94%_10.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 13.5">
          <path d={svgPaths.p1b2c4f2} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function IconConditions({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[14.06%_7.81%_7.81%_7.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 12.5002">
          <path d={svgPaths.p35f93000} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function IconLimits({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[14.06%_10.94%_4.69%_10.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 13">
          <path d={svgPaths.p921e700} fill={color} />
        </svg>
      </div>
    </div>
  );
}

// ── Step definitions ───────────────────────────────────────────────────────────
const STEPS = [
  { id: "details",    Icon: IconDetails,    label: "Details",    sub: "Basic campaign info" },
  { id: "trigger",    Icon: IconTrigger,    label: "Trigger",    sub: "What activate" },
  { id: "validity",   Icon: IconValidity,   label: "Validity",   sub: "When it's activated" },
  { id: "conditions", Icon: IconConditions, label: "Conditions", sub: "Rules of application" },
  { id: "limits",     Icon: IconLimits,     label: "Limits",     sub: "Controls and budget" },
];

interface DSStepNavProps {
  activeStep?: string;
  onStepChange?: (id: string) => void;
}

export function DSStepNav({ activeStep: controlledStep, onStepChange }: DSStepNavProps) {
  const [internalStep, setInternalStep] = useState("details");
  const activeStep = controlledStep ?? internalStep;

  const handleClick = (id: string) => {
    if (!controlledStep) setInternalStep(id);
    onStepChange?.(id);
  };

  return (
    <div className="bg-white flex flex-col items-start w-[200px]">
      {STEPS.map(({ id, Icon, label, sub }) => {
        const isActive = id === activeStep;
        const iconColor  = isActive ? "#6430F7" : "#3A3941";
        const labelColor = isActive ? "#3a3941" : "#63626f";
        const borderColor = isActive ? "#6430f7" : "#bfbdc5";

        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className="relative w-full text-left bg-white"
          >
            {/* Content row */}
            <div className="flex gap-[8px] items-center px-[12px] py-[8px]">
              <Icon color={iconColor} />
              <div className="flex flex-col">
                <span
                  className="leading-[20px] not-italic text-[14px] tracking-[-0.084px] whitespace-nowrap"
                  style={{
                    fontFamily: "'PP Neue Montreal', sans-serif",
                    fontWeight: 500,
                    color: labelColor,
                  }}
                >
                  {label}
                </span>
                <span
                  className="leading-[20px] not-italic text-[14px] tracking-[-0.084px] whitespace-nowrap"
                  style={{
                    fontFamily: "'PP Neue Montreal', sans-serif",
                    fontWeight: 400,
                    color: isActive ? "#63626f" : "#63626f",
                  }}
                >
                  {sub}
                </span>
              </div>
            </div>

            {/* Left-border overlay — matches Figma border-l-2 */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none border-solid border-l-2"
              style={{ borderColor }}
            />
          </button>
        );
      })}
    </div>
  );
}
