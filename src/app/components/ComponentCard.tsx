import { useState } from "react";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

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

type Category =
  | "Navigation"
  | "Buttons"
  | "Feedback"
  | "Inputs"
  | "Data Display"
  | "Forms"
  | "Cards";

const CATEGORY_COLORS: Record<Category, { bg: string; text: string }> = {
  Navigation: { bg: "#EBE4FF", text: "#6430F7" },
  Buttons: { bg: "#DCFCE7", text: "#16A34A" },
  Feedback: { bg: "#FEF3C7", text: "#D97706" },
  Inputs: { bg: "#DBEAFE", text: "#2563EB" },
  "Data Display": { bg: "#F5F3FF", text: "#6430F7" },
  Forms: { bg: "#FFE4E6", text: "#E11D48" },
  Cards: { bg: "#ECFEFF", text: "#0891B2" },
};

interface ComponentCardProps {
  name: string;
  description: string;
  category: Category;
  tokens?: string[];
  usedIn?: string[];
  children: React.ReactNode;
  previewBg?: string;
  wide?: boolean;
  allowOverflow?: boolean;
}

export function ComponentCard({
  name,
  description,
  category,
  tokens = [],
  usedIn = [],
  children,
  previewBg = "#F8F8FA",
  wide,
  allowOverflow,
}: ComponentCardProps) {
  const [showMeta, setShowMeta] = useState(false);
  const [copied, setCopied] = useState(false);

  const catStyle = CATEGORY_COLORS[category];

  const handleCopyName = () => {
    try {
      navigator.clipboard.writeText(name).catch(() => fallbackCopy(name));
    } catch {
      fallbackCopy(name);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-[#E2E8F0] flex flex-col transition-shadow hover:shadow-md ${wide ? "col-span-2" : ""} ${allowOverflow ? "overflow-visible" : "overflow-hidden"}`}
    >
      {/* Preview area */}
      <div
        className={`flex items-start justify-center p-6 ${allowOverflow ? "rounded-t-2xl overflow-visible" : "min-h-[160px] overflow-hidden"}`}
        style={{ backgroundColor: previewBg }}
      >
        <div className="flex items-center justify-center w-full">{children}</div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[#F0F0F0]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold shrink-0"
              style={{ backgroundColor: catStyle.bg, color: catStyle.text }}
            >
              {category}
            </span>
            <span className="text-[#3A3941] text-sm font-bold truncate">{name}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleCopyName}
              className="p-1.5 rounded-lg text-[#A9A8B2] hover:text-[#6430F7] hover:bg-[#F5F3FF] transition-all"
              title="Copy component name"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
            <button
              onClick={() => setShowMeta((v) => !v)}
              className="p-1.5 rounded-lg text-[#A9A8B2] hover:text-[#6430F7] hover:bg-[#F5F3FF] transition-all"
            >
              {showMeta ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        <p className="text-[#63626F] text-xs mt-1 leading-relaxed">{description}</p>

        {/* Expandable meta */}
        {showMeta && (
          <div className="mt-3 space-y-2 border-t border-[#F0F0F0] pt-3">
            {tokens.length > 0 && (
              <div>
                <p className="text-[9px] font-bold tracking-widest text-[#A9A8B2] uppercase mb-1">Color tokens</p>
                <div className="flex flex-wrap gap-1">
                  {tokens.map((t) => (
                    <span key={t} className="bg-[#F5F3FF] text-[#6430F7] text-[10px] px-2 py-0.5 rounded-md font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {usedIn.length > 0 && (
              <div>
                <p className="text-[9px] font-bold tracking-widest text-[#A9A8B2] uppercase mb-1">Used in</p>
                <div className="flex flex-wrap gap-1">
                  {usedIn.map((p) => (
                    <span key={p} className="bg-[#F0F0F5] text-[#63626F] text-[10px] px-2 py-0.5 rounded-md">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}