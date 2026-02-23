import { ChevronsUpDown, Pause, Play, MoreVertical, TrendingDown } from "lucide-react";
import { DSBadge } from "./DSBadge";
import imgCoupon1 from "figma:asset/b8581a3a8f9a19b6eec05845c18e07081f487330.png";
import imgCoupon2 from "figma:asset/34b8d8bf0fd69fff53e4789b7e8df430a75d8ec6.png";
import imgCoupon3 from "figma:asset/f675a4a9e2455e0bcfabd0075ad110c3db7ef022.png";
import imgCoupon4 from "figma:asset/66bd15810c6e628853ebed41f1ca1a848a463dc9.png";
import imgCoupon5 from "figma:asset/d5f87808ba14359b80fe22e9ad9e2fbe0f6a8997.png";
import imgCoupon6 from "figma:asset/7cf9eb0ae092a5e93196335fc1bf397f7e16ada3.png";

type RowStatus = "published" | "pending" | "paused";

interface CouponRow {
  id: number;
  img: string;
  name: string;
  assigned: number;
  used: number;
  status: RowStatus;
}

const ROWS: CouponRow[] = [
  { id: 1, img: imgCoupon1, name: "Enjoy a delicious breakfast at Spot with 50% off", assigned: 400, used: 400, status: "pending" },
  { id: 2, img: imgCoupon2, name: "Get 5% cashback all March with your Cashi payment", assigned: 4853, used: 4853, status: "published" },
  { id: 3, img: imgCoupon3, name: "20% Off pantry essentials", assigned: 100, used: 100, status: "published" },
  { id: 4, img: imgCoupon4, name: "15% Off school shoes", assigned: 7000, used: 7000, status: "published" },
  { id: 5, img: imgCoupon5, name: "$300 Bonus on select smartphones", assigned: 7000, used: 7000, status: "published" },
  { id: 6, img: imgCoupon6, name: "Up to 30% off cleaning products", assigned: 1000, used: 1000, status: "paused" },
];

export function DSTable() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-[#E2E8F0] bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E2E8F0]">
            {["Coupon", "Assigned", "Used", "Status", "Actions"].map((col) => (
              <th key={col} className="px-4 py-3 text-left text-xs font-semibold text-[#63626F] whitespace-nowrap">
                <span className="flex items-center gap-1">
                  {col}
                  {col !== "Actions" && <ChevronsUpDown size={11} className="text-[#BFBDC5]" />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id} className="border-b border-[#F5F5F7] hover:bg-[#FAFAFA] transition-colors">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <img src={row.img} alt="" className="w-9 h-9 rounded-lg object-cover shrink-0" />
                  <span className="text-[#3A3941] text-sm max-w-[240px]">{row.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-[#3A3941] text-sm">{row.assigned.toLocaleString()}</td>
              <td className="px-4 py-3 text-[#3A3941] text-sm">{row.used.toLocaleString()}</td>
              <td className="px-4 py-3">
                <DSBadge variant={row.status} />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-lg hover:bg-[#F5F5F7] text-[#63626F] transition-colors">
                    {row.status === "paused" ? <Play size={15} /> : <Pause size={15} />}
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-[#F5F5F7] text-[#63626F] transition-colors">
                    <MoreVertical size={15} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
