import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
export type StepperBarVariant = "first" | "middle" | "last" | "last-disabled";

interface DSStepperBarProps {
  /** Which state to show: first (no back), middle, last (Save), last-disabled */
  variant?: StepperBarVariant;
  onBack?: () => void;
  onContinue?: () => void;
  onSave?: () => void;
  /**
   * Ref to the stepper content container.
   * When provided, the bar positions itself 20 px below the content
   * if the content doesn't fill the viewport; otherwise it stays at bottom: 20px.
   */
  stepperRef?: React.RefObject<HTMLElement | null>;
  /** Horizontal offset from right when inside a layout that has a sidebar */
  offsetLeft?: number;
  /** Extra right offset (px) */
  offsetRight?: number;
  /** Render in static/preview mode (no fixed positioning) */
  preview?: boolean;
}

// ─── Bar shell ────────────────────────────────────────────────────────────────
function BarShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-between gap-4 bg-white rounded-[100px] px-[16px] py-[12px]"
      style={{ boxShadow: "0 2px 16px 0 rgba(30,23,49,0.10), 0 0 0 1px rgba(30,23,49,0.06)" }}
    >
      {children}
    </div>
  );
}

// ─── Buttons ──────────────────────────────────────────────────────────────────
function BackBtn({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[8px] px-[20px] py-[10px] rounded-full border border-[#6430F7] text-[#6430F7] text-sm font-medium hover:bg-[#F5F0FF] transition-colors"
    >
      <ArrowLeft size={16} strokeWidth={2} />
      Back
    </button>
  );
}

function ContinueBtn({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[8px] px-[20px] py-[10px] rounded-full bg-[#6430F7] text-white text-sm font-medium hover:bg-[#561EE3] transition-colors"
    >
      Continue
      <ArrowRight size={16} strokeWidth={2} />
    </button>
  );
}

function SaveBtn({ disabled, onClick }: { disabled?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`flex items-center gap-[8px] px-[20px] py-[10px] rounded-full text-sm font-medium transition-colors ${
        disabled
          ? "bg-[#C4B0F9] text-white cursor-not-allowed"
          : "bg-[#6430F7] text-white hover:bg-[#561EE3]"
      }`}
    >
      Save
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function DSStepperBar({
  variant = "middle",
  onBack,
  onContinue,
  onSave,
  stepperRef,
  offsetLeft = 0,
  offsetRight = 0,
  preview = false,
}: DSStepperBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  /**
   * Smart positioning:
   * – If stepper content bottom + 20 px < viewport height → place bar 20 px below content.
   * – Otherwise → fixed at bottom: 20px.
   */
  const recalc = useCallback(() => {
    if (preview || !stepperRef?.current) return;

    const vh = window.innerHeight;
    const rect = stepperRef.current.getBoundingClientRect();
    const belowContent = rect.bottom + 20; // desired top when content is short

    if (belowContent + (barRef.current?.offsetHeight ?? 52) < vh) {
      // Content shorter than viewport → anchor just below it
      setStyle({ top: rect.bottom + 20, bottom: "auto" });
    } else {
      // Content fills / overflows viewport → fixed to bottom
      setStyle({ top: "auto", bottom: 20 });
    }
  }, [preview, stepperRef]);

  useEffect(() => {
    if (preview) return;
    recalc();
    window.addEventListener("resize", recalc);
    window.addEventListener("scroll", recalc, true);
    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", recalc, true);
    };
  }, [recalc, preview]);

  const inner = (
    <BarShell>
      {/* Left side – Back (hidden on first step) */}
      <div>
        {variant !== "first" && <BackBtn onClick={onBack} />}
      </div>

      {/* Right side – action button */}
      <div>
        {(variant === "first" || variant === "middle") && (
          <ContinueBtn onClick={onContinue} />
        )}
        {variant === "last" && <SaveBtn onClick={onSave} />}
        {variant === "last-disabled" && <SaveBtn disabled />}
      </div>
    </BarShell>
  );

  if (preview) {
    return <div className="w-full max-w-[600px]">{inner}</div>;
  }

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed",
        left: offsetLeft + 20,
        right: offsetRight + 20,
        bottom: 20,
        zIndex: 50,
        ...style,
      }}
    >
      {inner}
    </div>
  );
}

// ─── Static preview: shows all 4 states ──────────────────────────────────────
export function DSStepperBarPreview() {
  const variants: { v: StepperBarVariant; label: string }[] = [
    { v: "first",        label: "Step 1 — no Back" },
    { v: "middle",       label: "Step 2+ — Back + Continue" },
    { v: "last",         label: "Last step — Back + Save" },
    { v: "last-disabled", label: "Last step — Save disabled" },
  ];

  return (
    <div className="flex flex-col gap-[12px] w-full px-2 py-2">
      {variants.map(({ v, label }) => (
        <div key={v} className="flex flex-col gap-[4px]">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2] px-1">
            {label}
          </span>
          <DSStepperBar variant={v} preview />
        </div>
      ))}
    </div>
  );
}
