import { Plus, Sparkles, QrCode, ArrowRight, ArrowLeft, Trash2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "success" | "ai" | "dark";
type ButtonSize = "sm" | "md";

interface DSButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  icon?: "plus" | "arrow-right" | "arrow-left" | "qr" | "sparkle" | "trash";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
}

const ICONS: Record<string, React.ReactNode> = {
  plus: <Plus size={16} />,
  "arrow-right": <ArrowRight size={16} />,
  "arrow-left": <ArrowLeft size={16} />,
  qr: <QrCode size={16} />,
  sparkle: <Sparkles size={16} />,
  trash: <Trash2 size={16} />,
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-[#6430F7] text-white hover:bg-[#561EE3] border border-[#6430F7]",
  secondary: "bg-white text-[#63626F] hover:bg-[#F8F8F8] border border-[#BFBDC5]",
  ghost: "bg-transparent text-[#63626F] hover:bg-[#F5F5F7] border border-transparent",
  destructive: "bg-[#F43F5E] text-white hover:bg-[#E11D48] border border-[#F43F5E]",
  success: "bg-[#22C55E] text-white hover:bg-[#16A34A] border border-[#22C55E]",
  ai: "bg-white text-[#2F2E35] hover:bg-[#FAF5FF] border border-[#D394FD]",
  dark: "bg-[#2D1C5D] text-white hover:bg-[#32187C] border border-[#2D1C5D]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
};

export function DSButton({
  variant = "primary",
  size = "md",
  label,
  icon,
  iconPosition = "right",
  disabled,
  onClick,
}: DSButtonProps) {
  const iconEl = icon ? ICONS[icon] : null;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center rounded-full font-semibold transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed
        ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]}`}
    >
      {iconEl && iconPosition === "left" && iconEl}
      <span>{label}</span>
      {iconEl && iconPosition === "right" && iconEl}
    </button>
  );
}
