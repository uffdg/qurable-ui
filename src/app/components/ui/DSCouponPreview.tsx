import { ChevronRight, Percent, User, Ticket, Hash, CalendarDays, CalendarRange, UserRoundCheck, Copy } from "lucide-react";

interface DSCouponPreviewProps {
  title?: string;
  subtitle?: string;
  description?: string;
  discount?: string;
  maxPerMember?: number;
  maxPerCoupon?: number;
  code?: string;
  audienceLabel?: string;
  couponBookKey?: string;
}

// ─── Day-of-week badge row ────────────────────────────────────────────────────
const DAYS = ["D", "L", "M", "M", "J", "V", "S"];

function DayBadges() {
  return (
    <div className="flex items-center gap-[3px] flex-wrap">
      {DAYS.map((d, i) => (
        <span
          key={i}
          className="inline-flex items-center justify-center rounded-[4px] size-[18px] bg-[#6430F7] text-white"
          style={{ fontSize: 9, fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
        >
          {d}
        </span>
      ))}
    </div>
  );
}

// ─── Stat row ─────────────────────────────────────────────────────────────────
function StatRow({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[6px] min-w-0">
      <span className="text-[#9875FA] shrink-0">{icon}</span>
      <span
        className="text-[#63626F] text-[11px] leading-[16px] truncate"
        style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function DSCouponPreview({
  title          = "Name",
  subtitle       = "Coupon subtitle",
  description    = "Coupon description",
  discount       = "Not set",
  maxPerMember   = 1,
  maxPerCoupon   = 1,
  code           = "Generated",
  audienceLabel  = "All members",
  couponBookKey  = "ADG-12345679 00",
}: DSCouponPreviewProps) {
  // Fallback copy for browsers that block Clipboard API
  const handleCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = couponBookKey;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Copy failed:', err);
    }
    document.body.removeChild(textarea);
  };

  return (
    <div
      className="bg-white rounded-[24px] overflow-hidden w-full max-w-[340px]"
      style={{ boxShadow: "0 0 0 1px #E8E6EF, 0 2px 12px rgba(30,23,49,0.06)" }}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="px-[16px] pt-[16px] pb-[12px] flex items-start justify-between gap-2">
        <div className="flex flex-col gap-[2px]">
          <p
            className="text-[#1E1731] text-[15px] leading-[20px]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 700 }}
          >
            {title}
          </p>
          <p
            className="text-[#91909D] text-[13px] leading-[18px]"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
          >
            {subtitle}
          </p>
          <p
            className="text-[#91909D] text-[13px] leading-[18px] mt-[4px]"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
          >
            {description}
          </p>
        </div>
        <button className="flex items-center gap-[3px] text-[#6430F7] text-[13px] whitespace-nowrap hover:opacity-80 transition-opacity shrink-0 pt-[1px]"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
        >
          Edit media <ChevronRight size={14} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Image placeholder ──────────────────────────────────────────────── */}
      <div className="mx-[16px] mb-[10px] rounded-[16px] border border-dashed border-[#BFBDC5] bg-white py-[20px] px-[12px] flex flex-col items-center gap-[4px]">
        <p
          className="text-[#6430F7] text-[14px] leading-[20px]"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 600 }}
        >
          No image set yet
        </p>
        <p
          className="text-[#A9A8B2] text-[11px] leading-[16px] text-center"
          style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
        >
          Add an image to make it more attractive
        </p>
      </div>

      {/* ── Stats grid ─────────────────────────────────────────────────────── */}
      <div className="mx-[16px] mb-[12px] bg-[#EBE4FF] rounded-[16px] px-[12px] py-[12px]">
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-[8px]">
          {/* Column A */}
          <StatRow icon={<Percent size={13} strokeWidth={2} />} label={discount} />
          <StatRow icon={<CalendarDays size={13} strokeWidth={2} />} label="Not set" />

          <StatRow icon={<User size={13} strokeWidth={2} />} label={`Max. per member: ${maxPerMember}`} />
          <div className="flex items-center gap-[6px]">
            <CalendarRange size={13} strokeWidth={2} className="text-[#9875FA] shrink-0" />
            <DayBadges />
          </div>

          <StatRow icon={<Ticket size={13} strokeWidth={2} />} label={`Max. per coupon: ${maxPerCoupon}`} />
          <StatRow icon={<UserRoundCheck size={13} strokeWidth={2} />} label="Assignment points: none" />

          <StatRow icon={<Hash size={13} strokeWidth={2} />} label={`Code: ${code}`} />
          {/* empty right cell on last row */}
          <div />
        </div>
      </div>

      {/* ── Audience ───────────────────────────────────────────────────────── */}
      <div className="px-[16px] pb-[14px] flex items-start justify-between gap-2">
        <div className="flex flex-col gap-[2px]">
          <p
            className="text-[#1E1731] text-[15px] leading-[20px]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 700 }}
          >
            Impacted audience
          </p>
          <p
            className="text-[#63626F] text-[13px] leading-[18px]"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
          >
            {audienceLabel}
          </p>
          <p
            className="text-[#A9A8B2] text-[11px] leading-[16px]"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
          >
            Last update 22 November, 2025
          </p>
        </div>
        <button
          className="flex items-center gap-[3px] text-[#6430F7] text-[13px] whitespace-nowrap hover:opacity-80 transition-opacity shrink-0 pt-[1px]"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
        >
          Edit audience <ChevronRight size={14} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Coupon book key ────────────────────────────────────────────────── */}
      <div className="px-[16px] pb-[16px] flex flex-col gap-[6px]">
        <p
          className="text-[#3A3941] text-[13px] leading-[18px]"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 500 }}
        >
          Coupon book key
        </p>
        <div
          className="flex items-center justify-between gap-2 rounded-full border border-[#D7D6DB] bg-white px-[16px] py-[11px]"
        >
          <span
            className="text-[#3A3941] text-[14px] leading-[20px] flex-1 truncate"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: 400 }}
          >
            {couponBookKey}
          </span>
          <button
            className="text-[#A9A8B2] hover:text-[#6430F7] transition-colors shrink-0"
            onClick={handleCopy}
            title="Copy key"
          >
            <Copy size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}