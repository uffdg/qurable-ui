type BadgeVariant = "published" | "pending" | "paused" | "draft" | "primary" | "info";

interface DSBadgeProps {
  variant: BadgeVariant;
  label?: string;
}

const BADGE_CONFIG: Record<BadgeVariant, { label: string; bg: string; text: string }> = {
  published: { label: "Published", bg: "#DCFCE7", text: "#16A34A" },
  pending: { label: "Pending", bg: "#FEF3C7", text: "#D97706" },
  paused: { label: "Paused", bg: "#FFE4E6", text: "#E11D48" },
  draft: { label: "Draft", bg: "#2F2E35", text: "#FAFAFA" },
  primary: { label: "Primary", bg: "#EBE4FF", text: "#6430F7" },
  info: { label: "Info", bg: "#DBEAFE", text: "#2563EB" },
};

export function DSBadge({ variant, label }: DSBadgeProps) {
  const cfg = BADGE_CONFIG[variant];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{ backgroundColor: cfg.bg, color: cfg.text }}
    >
      {label ?? cfg.label}
    </span>
  );
}
