import { Link } from "react-router";
import { Palette, Box, ArrowRight, Layers } from "lucide-react";
import imgUnion from "figma:asset/3953c83e1a838d3b143cbd033328681b8ef65ef6.png";
import { primaryColorGroups, secondaryColorGroups } from "../data/colors";

function QuickCard({
  to,
  icon,
  title,
  description,
  count,
  countLabel,
  accentColor,
  preview,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  count: number;
  countLabel: string;
  accentColor: string;
  preview: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group block bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-md hover:border-[#9875FA] transition-all"
    >
      <div className="h-32 flex items-center justify-center px-4 overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentColor}12, ${accentColor}06)` }}>
        {preview}
      </div>
      <div className="p-5 border-t border-[#F0F0F0]">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: accentColor }}>{icon}</span>
          <span className="text-[#3A3941] font-bold text-base">{title}</span>
        </div>
        <p className="text-[#63626F] text-sm leading-relaxed mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#91909D]">
            <strong className="text-[#3A3941]">{count}</strong> {countLabel}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold transition-all" style={{ color: accentColor }}>
            Browse <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function Overview() {
  const totalColors =
    primaryColorGroups.reduce((a, g) => a + g.swatches.length, 0) +
    secondaryColorGroups.reduce((a, g) => a + g.swatches.length, 0);

  const totalPalettes = primaryColorGroups.length + secondaryColorGroups.length;

  // Palette strip preview
  const PaletteStrip = ({ groups }: { groups: typeof primaryColorGroups }) => (
    <div className="flex flex-col gap-1 w-full px-2">
      {groups.slice(0, 4).map((g) => (
        <div key={g.name} className="flex gap-0.5">
          {g.swatches.map((s) => (
            <div key={String(s.scale)} className="flex-1 h-3 first:rounded-l-sm last:rounded-r-sm" style={{ backgroundColor: s.hex }} />
          ))}
        </div>
      ))}
    </div>
  );

  // Component preview strip
  const ComponentStrip = () => (
    <div className="flex flex-wrap gap-2 items-center justify-center px-3">
      {[
        { label: "Button", bg: "#6430F7", text: "#fff" },
        { label: "Badge", bg: "#DCFCE7", text: "#16A34A" },
        { label: "Input", bg: "#fff", text: "#3A3941", border: "#D7D6DB" },
        { label: "Tab", bg: "#fff", text: "#6430F7", border: "#6430F7" },
        { label: "Card", bg: "#F5F3FF", text: "#6430F7", border: "#EBE4FF" },
        { label: "Table", bg: "#fff", text: "#63626F", border: "#E2E8F0" },
      ].map((c) => (
        <span
          key={c.label}
          className="px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: c.bg, color: c.text, border: c.border ? `1px solid ${c.border}` : undefined }}
        >
          {c.label}
        </span>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="mb-10 bg-white rounded-3xl p-8 border border-[#E2E8F0] relative overflow-hidden">
        <div
          className="absolute right-[-120px] top-[-120px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(100,48,247,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative flex items-center gap-4 mb-5">
          <div className="relative shrink-0 size-[52px]">
            <svg className="absolute inset-0 block size-full" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" fill="white" r="20" />
            </svg>
            <img alt="Qurable" className="absolute inset-0 max-w-none size-full object-cover" src={imgUnion} />
          </div>
          <div>
            <p className="text-[#3A3941] text-2xl font-bold leading-tight">Qurable Design System</p>
            <p className="text-[#63626F] text-sm">Component & Color Repository · v1.0</p>
          </div>
        </div>
        <p className="text-[#63626F] text-base leading-relaxed max-w-2xl">
          A single source of truth for Qurable's UI language — covering color palettes, isolated
          component previews, token references, and usage context. Built so your team can ship
          faster with consistency.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: <Palette size={18} />, value: totalPalettes, label: "Color palettes" },
            { icon: <Layers size={18} />, value: `${totalColors}+`, label: "Color tokens" },
            { icon: <Box size={18} />, value: "21", label: "UI components" },
            { icon: <Box size={18} />, value: "7", label: "Categories" },
          ].map((s) => (
            <div key={s.label} className="bg-[#F8F5FF] rounded-xl px-4 py-3 flex items-center gap-2.5">
              <span className="text-[#6430F7] shrink-0">{s.icon}</span>
              <div>
                <p className="text-[#3A3941] text-sm font-bold">{s.value}</p>
                <p className="text-[#91909D] text-xs">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick nav cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <QuickCard
          to="/colors/primary"
          icon={<Palette size={18} />}
          title="Primary Colors"
          description="Gray, Primary, Secondary, Destructive, Warning & Success palettes."
          count={primaryColorGroups.reduce((a, g) => a + g.swatches.length, 0)}
          countLabel="tokens"
          accentColor="#6430F7"
          preview={<PaletteStrip groups={primaryColorGroups} />}
        />
        <QuickCard
          to="/colors/secondary"
          icon={<Palette size={18} />}
          title="Secondary Colors"
          description="Blue, Cyan, Teal, Lime, Purple, Pink & Orange palettes."
          count={secondaryColorGroups.reduce((a, g) => a + g.swatches.length, 0)}
          countLabel="tokens"
          accentColor="#0891B2"
          preview={<PaletteStrip groups={secondaryColorGroups} />}
        />
        <QuickCard
          to="/components"
          icon={<Box size={18} />}
          title="Components"
          description="Buttons, Badges, Tables, Cards, Forms & more — all isolated."
          count={21}
          countLabel="components"
          accentColor="#6430F7"
          preview={<ComponentStrip />}
        />
      </div>

      {/* All palettes at a glance */}
      <div className="mb-2">
        <h2 className="text-[#3A3941] text-xl font-bold mb-4">All Palettes at a Glance</h2>
        <div className="grid gap-2">
          {[...primaryColorGroups, ...secondaryColorGroups].map((group) => (
            <div key={group.name} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#E2E8F0]">
              <span className="w-24 shrink-0 text-[#3A3941] text-sm font-semibold">{group.name}</span>
              <div className="flex gap-0.5 flex-1 overflow-hidden">
                {group.swatches.map((s) => (
                  <div
                    key={String(s.scale)}
                    className="h-6 flex-1 first:rounded-l-md last:rounded-r-md"
                    style={{ backgroundColor: s.hex }}
                    title={`${s.scale}: ${s.hex}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}