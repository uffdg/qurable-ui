import { useState } from "react";
import { Search } from "lucide-react";
import { ColorPaletteSection } from "../components/ColorPaletteSection";
import { primaryColorGroups } from "../data/colors";
import imgUnion from "figma:asset/3953c83e1a838d3b143cbd033328681b8ef65ef6.png";

export function PrimaryColorsPage() {
  const [search, setSearch] = useState("");

  const filtered = primaryColorGroups
    .map((group) => ({
      ...group,
      swatches: group.swatches.filter(
        (s) =>
          search === "" ||
          s.hex.toLowerCase().includes(search.toLowerCase()) ||
          String(s.scale).toLowerCase().includes(search.toLowerCase()) ||
          group.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((g) => g.swatches.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 mb-8 border border-[#E2E8F0] relative overflow-hidden">
        <div
          className="absolute right-[-100px] top-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(100,48,247,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative flex items-start justify-between gap-4 flex-wrap">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative shrink-0 size-[36px]">
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" fill="white" r="20" />
                  </svg>
                </div>
                <img
                  alt=""
                  className="absolute inset-0 max-w-none size-full object-cover"
                  src={imgUnion}
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <span className="font-semibold">Foundations</span>
                <span className="text-[#A9A8B2]">›</span>
                <span className="text-[#63626F]">Colors</span>
              </div>
            </div>
            <h1 className="text-[#3A3941] text-4xl font-bold tracking-tight mb-2">
              Primary Colors
            </h1>
            <p className="text-[#63626F] text-base leading-relaxed">
              The rockstars of the color wheel. These hues are the building blocks for all other
              colors. Mix them together and watch the magic happen.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#2D1C5D] text-white text-sm font-medium px-4 py-2.5 rounded-full">
            <span>Foundations</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A9A8B2]" />
        <input
          type="text"
          placeholder="Search by color name or hex value..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#3A3941] text-sm outline-none focus:border-[#9875FA] focus:ring-2 focus:ring-[#EBE4FF] transition-all"
        />
      </div>

      {/* Color sections */}
      <div className="space-y-12">
        {filtered.length > 0 ? (
          filtered.map((group) => (
            <ColorPaletteSection key={group.name} group={group} />
          ))
        ) : (
          <div className="text-center py-16 text-[#91909D]">
            <p className="text-lg">No colors found for "{search}"</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="relative shrink-0 size-[28px]">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="white" r="20" />
              </svg>
            </div>
            <img alt="" className="absolute inset-0 max-w-none size-full object-cover" src={imgUnion} />
          </div>
          <span className="text-[#63626F] text-sm">Qurable</span>
        </div>
        <a
          href="https://www.qurable.co"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2D1C5D] text-sm font-semibold hover:text-[#6430F7] transition-colors"
        >
          www.qurable.co
        </a>
      </div>
    </div>
  );
}
