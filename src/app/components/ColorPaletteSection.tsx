import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { ColorGroup } from "../data/colors";

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try { document.execCommand("copy"); } catch (_) {}
  document.body.removeChild(textarea);
}

interface ColorSwatchCardProps {
  scale: number | string;
  hex: string;
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
}

function ColorSwatchCard({ scale, hex }: ColorSwatchCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      // Try modern Clipboard API first
      navigator.clipboard.writeText(hex).catch(() => fallbackCopy(hex));
    } catch {
      fallbackCopy(hex);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const light = isLightColor(hex);

  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden cursor-pointer group transition-transform hover:-translate-y-1 hover:shadow-lg"
      style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
      onClick={handleCopy}
      title={`Copy ${hex}`}
    >
      {/* Color block */}
      <div
        className="h-[80px] sm:h-[100px] w-full relative flex items-center justify-center"
        style={{ backgroundColor: hex }}
      >
        <div
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md"
          style={{ backgroundColor: light ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)" }}
        >
          {copied ? (
            <Check size={16} style={{ color: light ? "#000" : "#fff" }} />
          ) : (
            <Copy size={16} style={{ color: light ? "#000" : "#fff" }} />
          )}
        </div>
      </div>
      {/* Info block */}
      <div className="bg-white px-2.5 py-2 flex items-center justify-between gap-2">
        <span className="text-[#3A3941] text-sm font-semibold whitespace-nowrap">{scale}</span>
        <span className="text-[#A9A8B2] text-xs font-mono">{hex.toUpperCase()}</span>
      </div>
    </div>
  );
}

interface ColorPaletteSectionProps {
  group: ColorGroup;
}

export function ColorPaletteSection({ group }: ColorPaletteSectionProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-1.5">
        <h2 className="text-[#3A3941] text-2xl font-bold tracking-tight">{group.name}</h2>
        <p className="text-[#63626F] text-sm leading-relaxed max-w-2xl">{group.description}</p>
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-10 gap-3">
        {group.swatches.map((s) => (
          <ColorSwatchCard key={String(s.scale)} scale={s.scale} hex={s.hex} />
        ))}
      </div>
    </section>
  );
}