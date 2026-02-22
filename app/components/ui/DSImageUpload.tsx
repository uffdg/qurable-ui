import { useState, useRef, useEffect } from "react";
import svgIconsUpload from "../../../imports/svg-eko69kcdxk";
import svgIconsDots   from "../../../imports/svg-zdk4eizbc9";
import svgIconsEdit   from "../../../imports/svg-xgkeozt4ri";
import svgIconsModal  from "../../../imports/svg-v1k64neoie";
import imgLogo        from "figma:asset/a8dfd8f18cd87b454a3799adcd11a7483d605eaf.png";

// ─── Atomic SVG icons ─────────────────────────────────────────────────────────

function IconUpload({ size = 20, color = "#6430F7" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <path d={svgIconsUpload.p5d2f680} fill={color} stroke={color} strokeWidth="0.09375" />
    </svg>
  );
}

function IconPlus({ size = 24, color = "#63626F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path d={svgIconsUpload.p22abd200} fill={color} stroke={color} strokeWidth="0.09375" />
    </svg>
  );
}

function IconDots({ color = "#63626F" }: { color?: string }) {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 20 20">
      <path d={svgIconsDots.p27a01580} fill={color} stroke={color} strokeWidth="0.09375" />
    </svg>
  );
}

function IconPencil({ color = "#3A3941" }: { color?: string }) {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 20 20">
      <path d={svgIconsEdit.p3deca300} fill={color} />
    </svg>
  );
}

function IconTrash({ color = "#F43F5E" }: { color?: string }) {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 20 20">
      <path d={svgIconsEdit.p1f1b2500} fill={color} />
    </svg>
  );
}

function IconImageSquare({ color = "#4320A5" }: { color?: string }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path d={svgIconsModal.p2161b400} fill={color} />
    </svg>
  );
}

function IconX({ color = "#63626F" }: { color?: string }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path d={svgIconsModal.p1d5e2c80} fill={color} />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ImageSlot {
  id: string;
  label: string;
  image?: string;    // data-url or src
  keyName?: string;
  alt?: string;
}

// ─── Context Menu ─────────────────────────────────────────────────────────────

interface ContextMenuProps {
  x: number;
  y: number;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

function ContextMenu({ x, y, onEdit, onDelete, onClose }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      style={{ position: "fixed", top: y, left: x, zIndex: 200, boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-[24px] p-[16px] w-[160px] flex flex-col gap-[8px]"
    >
      <div className="absolute border border-[#d7d6db] inset-0 rounded-[24px] pointer-events-none" />

      {/* Edit row */}
      <button
        onClick={() => { onEdit(); onClose(); }}
        className="flex items-center gap-[8px] p-[8px] rounded-xl w-full text-left hover:bg-[#F5F5F7] transition-colors"
      >
        <IconPencil />
        <span
          className="leading-[22px] text-[#475569] text-[16px] tracking-[-0.112px]"
          style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
        >
          Edit
        </span>
      </button>

      {/* Divider */}
      <div className="h-px bg-[#BFBDC5] mx-1" />

      {/* Delete row */}
      <button
        onClick={() => { onDelete(); onClose(); }}
        className="flex items-center gap-[8px] p-[8px] rounded-xl w-full text-left hover:bg-[#FFF1F2] transition-colors"
      >
        <IconTrash />
        <span
          className="leading-[22px] text-[#F43F5E] text-[16px] tracking-[-0.112px]"
          style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
        >
          Delete
        </span>
      </button>
    </div>
  );
}

// ─── Image Attribute Modal ────────────────────────────────────────────────────

interface ImageModalProps {
  initialKeyName?: string;
  initialAlt?: string;
  onConfirm: (keyName: string, alt: string) => void;
  onCancel: () => void;
}

function ImageModal({ initialKeyName = "", initialAlt = "", onConfirm, onCancel }: ImageModalProps) {
  const [keyName, setKeyName] = useState(initialKeyName);
  const [altText, setAltText] = useState(initialAlt);

  return (
    /* Overlay */
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-[32px] p-[24px] w-[480px] max-w-[calc(100vw-32px)] relative shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)]">

        {/* Close */}
        <button
          onClick={onCancel}
          className="absolute right-[24px] top-[24px] hover:opacity-70 transition-opacity"
        >
          <IconX />
        </button>

        <div className="flex flex-col gap-[32px]">
          {/* Header */}
          <div className="flex flex-col gap-[24px]">
            {/* Icon */}
            <div className="bg-[#ebe4ff] flex items-center justify-center rounded-[123px] size-[48px] shrink-0">
              <IconImageSquare />
            </div>

            {/* Title + desc */}
            <div className="flex flex-col gap-[8px]">
              <p
                className="leading-[28px] text-[#3a3941] text-[20px] tracking-[-0.2px]"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 700 }}
              >
                Image attribute
              </p>
              <p
                className="leading-[1.6] text-[#63626f] text-[16px]"
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
              >
                Internal key used by the front-end to reference this image. Not visible to end users.
              </p>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-[12px]">
              {/* Key name */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className="leading-[20px] text-[#2f2e35] text-[14px] tracking-[-0.084px]"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
                >
                  Key name
                </label>
                <div className="relative">
                  <input
                    value={keyName}
                    onChange={e => setKeyName(e.target.value)}
                    placeholder="Image key name"
                    className="w-full bg-white min-h-[48px] rounded-[123px] px-[16px] py-[12px] text-[16px] text-[#3a3941] border border-[#bfbdc5] outline-none focus:border-[#9875FA] focus:ring-2 focus:ring-[#EBE4FF] transition-all"
                    style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                  />
                </div>
              </div>

              {/* Image Alt */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className="leading-[20px] text-[#2f2e35] text-[14px] tracking-[-0.084px]"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
                >
                  Image Alt
                </label>
                <div className="relative">
                  <input
                    value={altText}
                    onChange={e => setAltText(e.target.value)}
                    placeholder="Describe image for accessibility"
                    className="w-full bg-white min-h-[48px] rounded-[123px] px-[16px] py-[12px] text-[16px] text-[#3a3941] border border-[#bfbdc5] outline-none focus:border-[#9875FA] focus:ring-2 focus:ring-[#EBE4FF] transition-all"
                    style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-[8px]">
            <button
              onClick={onCancel}
              className="px-[16px] py-[10px] rounded-[1234px] border border-[#bfbdc5] text-[#63626f] text-[14px] hover:bg-[#F5F5F7] transition-colors"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(keyName, altText)}
              className="px-[16px] py-[10px] rounded-[1234px] bg-[#6430f7] text-white text-[14px] hover:bg-[#561EE3] transition-colors"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Single upload slot ───────────────────────────────────────────────────────

interface SlotProps {
  slot: ImageSlot;
  onDotsClick: (e: React.MouseEvent, id: string) => void;
  onUploadClick: (id: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

function UploadSlot({ slot, onDotsClick, onUploadClick }: SlotProps) {
  const [hovered, setHovered] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUploadClick(slot.id);
    // In the DS preview we just toggle state via parent
  };

  return (
    <div
      className="h-[128px] relative shrink-0 w-[100px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label above */}
      <p
        className="absolute top-0 left-0 leading-[20px] text-[#2f2e35] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
      >
        {slot.label}
      </p>

      {/* Dropzone — occupies bottom 78% */}
      <div className="absolute bg-white rounded-[32px]" style={{ inset: "21.88% 0 0 0" }}>

        {/* ── Filled state ── */}
        {slot.image ? (
          <>
            {/* Image */}
            <img
              src={slot.image}
              alt={slot.alt || slot.label}
              className="absolute inset-0 size-full object-cover rounded-[32px]"
            />
            {/* Hover overlay */}
            {hovered && (
              <div className="absolute inset-0 rounded-[32px] bg-[rgba(58,57,65,0.6)] flex items-center justify-center gap-[10px]">
                {/* Re-upload */}
                <button
                  onClick={() => fileRef.current?.click()}
                  className="bg-[#cbbafc] flex items-center justify-center rounded-[123px] size-[32px] hover:scale-105 transition-transform"
                >
                  <IconUpload size={20} color="#6430F7" />
                </button>
                {/* Dots / more */}
                <button
                  onClick={e => onDotsClick(e, slot.id)}
                  className="bg-[#fafafa] flex items-center justify-center rounded-[123px] size-[32px] hover:scale-105 transition-transform"
                >
                  <IconDots />
                </button>
              </div>
            )}
          </>
        ) : (
          /* ── Empty state ── */
          <button
            onClick={() => fileRef.current?.click()}
            className="flex flex-col items-center justify-center size-full rounded-[inherit] hover:bg-[#F5F0FF] transition-colors"
          >
            <div className="bg-[#cbbafc] flex items-center justify-center rounded-[123px] size-[32px]">
              <IconUpload size={20} color="#6430F7" />
            </div>
          </button>
        )}

        {/* Dashed border overlay */}
        <div
          aria-hidden
          className="absolute border border-[#bfbdc5] border-dashed inset-0 pointer-events-none rounded-[32px]"
        />
      </div>

      {/* Hidden file input */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

// ─── Add-slot button (+) ─────────────────────────────────────────────────────

function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#fafafa] flex items-center justify-center rounded-[123px] size-[48px] hover:bg-[#EBEBEB] transition-colors mt-[54px]"
    >
      <IconPlus size={24} color="#63626F" />
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface DSImageUploadProps {
  /** Initial slots (Label + Secondary are always present by default) */
  initialSlots?: ImageSlot[];
}

const DEFAULT_SLOTS: ImageSlot[] = [
  { id: "label",     label: "Label" },
  { id: "secondary", label: "Secondary" },
];

export function DSImageUpload({ initialSlots = DEFAULT_SLOTS }: DSImageUploadProps) {
  const [slots, setSlots] = useState<ImageSlot[]>(initialSlots);

  // Context menu state
  const [ctxMenu, setCtxMenu] = useState<{ x: number; y: number; slotId: string } | null>(null);

  // Modal state: null = closed, "add" = new slot, string = editing existing slot id
  const [modal, setModal] = useState<null | { mode: "add" | "edit"; slotId?: string }>(null);

  const handleDotsClick = (e: React.MouseEvent, slotId: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setCtxMenu({ x: rect.left, y: rect.bottom + 6, slotId });
  };

  const handleUploadClick = (slotId: string) => {
    // In real usage a file picker would fire; here we just toggle a demo image
    setSlots(prev =>
      prev.map(s =>
        s.id === slotId
          ? { ...s, image: s.image ? undefined : imgLogo }
          : s
      )
    );
  };

  const handleDeleteSlot = (slotId: string) => {
    // If it's a built-in slot, just clear image; otherwise remove it
    const builtIn = ["label", "secondary"];
    if (builtIn.includes(slotId)) {
      setSlots(prev => prev.map(s => s.id === slotId ? { ...s, image: undefined } : s));
    } else {
      setSlots(prev => prev.filter(s => s.id !== slotId));
    }
  };

  const handleEditSlot = (slotId: string) => {
    setModal({ mode: "edit", slotId });
  };

  const handleModalConfirm = (keyName: string, alt: string) => {
    if (!modal) return;
    if (modal.mode === "add") {
      const newId = `custom-${Date.now()}`;
      setSlots(prev => [...prev, { id: newId, label: keyName || "Custom", alt, image: undefined }]);
    } else if (modal.slotId) {
      setSlots(prev =>
        prev.map(s => s.id === modal.slotId ? { ...s, keyName, alt, label: keyName || s.label } : s)
      );
    }
    setModal(null);
  };

  const editingSlot = modal?.mode === "edit" ? slots.find(s => s.id === modal.slotId) : undefined;

  return (
    <div className="relative">
      {/* Slot row */}
      <div className="flex flex-wrap gap-[8px] items-start">
        {slots.map(slot => (
          <UploadSlot
            key={slot.id}
            slot={slot}
            onDotsClick={handleDotsClick}
            onUploadClick={handleUploadClick}
            fileInputRef={{ current: null }}
          />
        ))}

        {/* Add new slot */}
        <AddButton onClick={() => setModal({ mode: "add" })} />
      </div>

      {/* Context menu */}
      {ctxMenu && (
        <ContextMenu
          x={ctxMenu.x}
          y={ctxMenu.y}
          onEdit={() => handleEditSlot(ctxMenu.slotId)}
          onDelete={() => handleDeleteSlot(ctxMenu.slotId)}
          onClose={() => setCtxMenu(null)}
        />
      )}

      {/* Modal */}
      {modal && (
        <ImageModal
          initialKeyName={editingSlot?.keyName ?? ""}
          initialAlt={editingSlot?.alt ?? ""}
          onConfirm={handleModalConfirm}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  );
}

// ─── Preview variant: shows empty + with-image side by side ───────────────────

const PREVIEW_SLOTS_EMPTY: ImageSlot[] = [
  { id: "label",     label: "Label" },
  { id: "secondary", label: "Secondary" },
];

const PREVIEW_SLOTS_FILLED: ImageSlot[] = [
  { id: "label",       label: "Label" },
  { id: "secondary",   label: "Secondary" },
  { id: "customimage", label: "CustomImage" },
  { id: "logo",        label: "Logo",   image: imgLogo },
];

export function DSImageUploadPreview() {
  return (
    <div className="flex flex-col gap-[24px] w-full">
      {/* Row 1: empty */}
      <div className="flex flex-col gap-[6px]">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2]">
          Empty state — Label + Secondary
        </span>
        <DSImageUpload initialSlots={[...PREVIEW_SLOTS_EMPTY]} />
      </div>

      {/* Divider */}
      <div className="h-px bg-[#F0F0F5]" />

      {/* Row 2: partially filled */}
      <div className="flex flex-col gap-[6px]">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A9A8B2]">
          With image — hover the Logo slot to see overlay + context menu
        </span>
        <DSImageUpload initialSlots={[...PREVIEW_SLOTS_FILLED]} />
      </div>
    </div>
  );
}