import { useState, useRef, useEffect } from "react";
import {
  X,
  ChevronDown,
  Trash2,
  Plus,
  Blocks,
  Type,
  Code2,
  Tag,
  ToggleLeft,
  Hash,
  Check,
  Braces,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type AttributeType = "String" | "HTML" | "Tag" | "Boolean" | "Number";

const ATTRIBUTE_OPTIONS: {
  value: AttributeType;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    value: "String",
    icon: <Type size={14} />,
    description:
      "Text value used to pass labels, buttons, identifiers, or custom copy to the front-end.",
  },
  {
    value: "HTML",
    icon: <Code2 size={14} />,
    description: "Rich text or markup rendered directly by the front-end.",
  },
  {
    value: "Tag",
    icon: <Tag size={14} />,
    description:
      "Categorical value used for filtering, grouping, or conditional display logic.",
  },
  {
    value: "Boolean",
    icon: <ToggleLeft size={14} />,
    description:
      "True or false value used to enable or disable specific front-end behaviors.",
  },
  {
    value: "Number",
    icon: <Hash size={14} />,
    description:
      "Numeric value used for calculations, ordering, or conditional logic in the front-end.",
  },
];

interface AttributeRow {
  id: string;
  type: AttributeType;
  key: string;
  value: string;
}

// ─── Modal: New Custom Attribute ─────────────────────────────────────────────

interface NewAttributeModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (type: AttributeType) => void;
}

function NewAttributeModal({ open, onClose, onAdd }: NewAttributeModalProps) {
  const [selected, setSelected] = useState<AttributeType | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    if (open) {
      setSelected(null);
      setDropdownOpen(false);
    }
  }, [open]);

  if (!open) return null;

  const selectedOption = ATTRIBUTE_OPTIONS.find((o) => o.value === selected);

  const handleAdd = () => {
    if (selected) {
      onAdd(selected);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-[32px] shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)] p-6 w-[480px] max-w-[92vw] flex flex-col gap-8 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#63626F] hover:text-[#3A3941] transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-6">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-[#EBE4FF] flex items-center justify-center shrink-0">
            <Blocks size={22} className="text-[#4320A5]" strokeWidth={1.75} />
          </div>

          {/* Title + subtitle */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[#3A3941] text-xl font-bold leading-7 tracking-[-0.2px]">
              New custom attribute
            </h2>
            <p className="text-[#63626F] text-base leading-relaxed">
              Add structured data that can be consumed by the front-end.
            </p>
          </div>

          {/* Dropdown */}
          <div className="flex flex-col gap-0.5">
            <label className="text-[#2F2E35] text-sm font-medium leading-5 tracking-[-0.084px]">
              Attribute
            </label>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="w-full min-h-[48px] bg-white border border-[#A9A8B2] rounded-full px-3 flex items-center gap-3 outline-none hover:border-[#6430F7] focus:border-[#6430F7] focus:ring-2 focus:ring-[#EBE4FF] transition-all"
              >
                <span className="flex-1 text-left text-base leading-[22px] text-[#2F2E35] tracking-[-0.112px]">
                  {selected ? (
                    <span className="flex items-center gap-2">
                      <span className="text-[#6430F7]">
                        {ATTRIBUTE_OPTIONS.find((o) => o.value === selected)?.icon}
                      </span>
                      {selected}
                    </span>
                  ) : (
                    <span className="text-[#A9A8B2]">Select an attribute</span>
                  )}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#63626F] shrink-0 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-10 bg-white border border-[#E2E8F0] rounded-2xl shadow-lg overflow-hidden py-1">
                  {ATTRIBUTE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSelected(opt.value);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left ${
                        selected === opt.value
                          ? "bg-[#F5F0FF] text-[#6430F7]"
                          : "text-[#2F2E35] hover:bg-[#F8F8FA]"
                      }`}
                    >
                      <span
                        className={
                          selected === opt.value
                            ? "text-[#6430F7]"
                            : "text-[#63626F]"
                        }
                      >
                        {opt.icon}
                      </span>
                      <span className="flex-1 font-medium">{opt.value}</span>
                      {selected === opt.value && (
                        <Check size={14} className="text-[#6430F7] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Type description card */}
          {selectedOption && (
            <div className="bg-[#EFEFF1] rounded-lg p-3">
              <p className="text-[#63626F] text-sm leading-relaxed">
                <span className="font-semibold text-[#3A3941]">
                  {selectedOption.value}{" "}
                </span>
                {selectedOption.description}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full border border-[#BFBDC5] text-[#63626F] text-sm font-medium leading-5 tracking-[-0.084px] hover:bg-[#F5F5F7] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!selected}
            className="px-4 py-2.5 rounded-full bg-[#6430F7] text-white text-sm font-medium leading-5 tracking-[-0.084px] hover:bg-[#561EE3] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

interface CustomAttributesEmptyStateProps {
  /** Called when the primary CTA is clicked */
  onAdd: () => void;
}

export function CustomAttributesEmptyState({
  onAdd,
}: CustomAttributesEmptyStateProps) {
  return (
    // EmptyPanel — dashed bordered container, light fill, centered content
    <div
      data-layer="EmptyPanel"
      className="w-full rounded-2xl border border-dashed border-[#BFBDC5] bg-[#FAFAFA] px-6 py-10 flex flex-col items-center gap-5"
    >
      {/* EmptyIcon — icon wrapped in brand pill */}
      <div
        data-layer="EmptyIcon"
        className="w-10 h-10 rounded-full bg-[#EBE4FF] flex items-center justify-center shrink-0"
        aria-hidden="true"
      >
        <Braces size={18} className="text-[#6430F7]" strokeWidth={1.75} />
      </div>

      {/* EmptyHeadline + EmptyText */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <p
          data-layer="EmptyHeadline"
          className="text-[#3A3941] text-sm font-semibold leading-5 tracking-[-0.084px]"
        >
          No custom attributes yet
        </p>
        <p
          data-layer="EmptyText"
          className="text-[#63626F] text-sm leading-5 tracking-[-0.07px] max-w-[240px]"
        >
          Add one to include structured data for this coupon.
        </p>
      </div>

      {/* PrimaryCTA */}
      <button
        data-layer="PrimaryCTA"
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#6430F7] text-white text-sm font-medium leading-5 tracking-[-0.084px] hover:bg-[#561EE3] active:bg-[#4320A5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6430F7] focus-visible:ring-offset-2"
      >
        <Plus size={14} strokeWidth={2.5} aria-hidden="true" />
        Add custom attribute
      </button>

      {/* Hint */}
      <p
        data-layer="Hint"
        className="text-[#A9A8B2] text-xs leading-[18px] tracking-[-0.06px] text-center"
      >
        You'll choose an attribute type in the next step.
      </p>
    </div>
  );
}

// ─── Single attribute row ─────────────────────────────────────────────────────

interface AttributeRowItemProps {
  row: AttributeRow;
  onChange: (id: string, field: "key" | "value", val: string) => void;
  onDelete: (id: string) => void;
}

function AttributeRowItem({ row, onChange, onDelete }: AttributeRowItemProps) {
  const typeOption = ATTRIBUTE_OPTIONS.find((o) => o.value === row.type);

  const valuePlaceholder =
    row.type === "Boolean"
      ? "true / false"
      : row.type === "Number"
      ? "0"
      : row.type === "HTML"
      ? "<p>...</p>"
      : "";

  return (
    <div className="flex items-end gap-3">
      {/* Key input */}
      <div className="flex-1 flex flex-col gap-0.5">
        <label className="text-[#2F2E35] text-sm font-medium leading-5 tracking-[-0.084px] flex items-center gap-1.5">
          {typeOption && (
            <span className="text-[#6430F7]">{typeOption.icon}</span>
          )}
          {row.type} key
        </label>
        <input
          type="text"
          value={row.key}
          onChange={(e) => onChange(row.id, "key", e.target.value)}
          placeholder="attribute_key"
          className="w-full min-h-[48px] bg-white border border-[#A9A8B2] rounded-full px-3 text-base text-[#2F2E35] placeholder:text-[#A9A8B2] outline-none focus:border-[#6430F7] focus:ring-2 focus:ring-[#EBE4FF] transition-all tracking-[-0.112px] leading-[22px]"
        />
      </div>

      {/* Value input */}
      <div className="flex-1 flex flex-col gap-0.5">
        <label className="text-[#2F2E35] text-sm font-medium leading-5 tracking-[-0.084px]">
          {row.type} value
        </label>
        <input
          type={row.type === "Number" ? "number" : "text"}
          value={row.value}
          onChange={(e) => onChange(row.id, "value", e.target.value)}
          placeholder={valuePlaceholder}
          className="w-full min-h-[48px] bg-white border border-[#A9A8B2] rounded-full px-3 text-base text-[#2F2E35] placeholder:text-[#A9A8B2] outline-none focus:border-[#6430F7] focus:ring-2 focus:ring-[#EBE4FF] transition-all tracking-[-0.112px] leading-[22px]"
        />
      </div>

      {/* Delete */}
      <div className="pb-0.5">
        <button
          onClick={() => onDelete(row.id)}
          className="flex items-center justify-center w-8 h-8 rounded-full text-[#F43F5E] hover:bg-[#FFF1F2] transition-colors"
          aria-label="Remove attribute"
        >
          <Trash2 size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

// ─── Main composed component ──────────────────────────────────────────────────

interface DSCustomAttributeRowProps {
  defaultRows?: AttributeRow[];
}

let rowCounter = 0;
function newId() {
  return `attr-${++rowCounter}`;
}

export function DSCustomAttributeRow({
  defaultRows,
}: DSCustomAttributeRowProps) {
  const [rows, setRows] = useState<AttributeRow[]>(defaultRows ?? []);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (id: string, field: "key" | "value", val: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: val } : r))
    );
  };

  const handleDelete = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleAdd = (type: AttributeType) => {
    setRows((prev) => [...prev, { id: newId(), type, key: "", value: "" }]);
  };

  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        {/* Empty state */}
        {rows.length === 0 && (
          <CustomAttributesEmptyState onAdd={() => setModalOpen(true)} />
        )}

        {/* Populated list */}
        {rows.length > 0 && (
          <>
            <div className="bg-[#FAFAFA] rounded-3xl w-full">
              <div className="flex flex-col gap-3 px-4 py-5">
                {rows.map((row) => (
                  <AttributeRowItem
                    key={row.id}
                    row={row}
                    onChange={handleChange}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>

            {/* Secondary add link — only visible when rows exist */}
            
          </>
        )}
      </div>

      <NewAttributeModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAdd}
      />
    </>
  );
}

// ─── Preview wrapper ──────────────────────────────────────────────────────────

export function DSCustomAttributeRowPreview() {
  return (
    <div className="w-full max-w-lg flex flex-col gap-6">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[#3A3941] text-lg font-bold leading-6 tracking-[-0.144px]">
          Custom attributes
        </h3>
        <p className="text-[#63626F] text-sm leading-relaxed">
          Custom attributes allow you to add extra structured data to this
          coupon. These attributes can be used by the front-end to control
          content, behavior, or layout.
        </p>
      </div>

      {/* Component — starts empty, add button opens modal */}
      <DSCustomAttributeRow
        defaultRows={[
          { id: "demo-1", type: "String", key: "promo_label", value: "SUMMER25" },
          { id: "demo-2", type: "Boolean", key: "show_badge", value: "true" },
        ]}
      />
    </div>
  );
}