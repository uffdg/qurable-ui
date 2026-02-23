import { Ticket, LayoutDashboard, Handshake, Users, Gift, Settings } from "lucide-react";

export type NavItemVariant = "active" | "inactive";

interface DSNavItemProps {
  label: string;
  icon: React.ReactNode;
  variant?: NavItemVariant;
}

export function DSNavItem({ label, icon, variant = "inactive" }: DSNavItemProps) {
  const base =
    "flex items-center gap-3 px-3 py-2.5 rounded-full text-sm transition-all w-[220px] cursor-pointer select-none";
  const active =
    "bg-[#32187C] text-white font-semibold shadow-[0_0_0_4px_rgba(100,48,247,0.25)]";
  const inactive = "text-[#FAFAFA] hover:bg-white/10";

  return (
    <div className={`${base} ${variant === "active" ? active : inactive}`}>
      <span className="shrink-0 opacity-90">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
