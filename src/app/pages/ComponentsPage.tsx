import { useState } from "react";
import {
  Search, Gift, Tag, Handshake, CircleDollarSign, SlidersHorizontal,
  Ticket, LayoutDashboard, MousePointerClick, BadgeCheck, Users,
  Crosshair, Trophy, Banknote, QrCode, LayoutTemplate, FileText,
  Settings, MessageCircle, Star, Sparkles, Plus, ArrowRight, ArrowLeft,
} from "lucide-react";

import { ComponentCard } from "../components/ComponentCard";
import { DSButton } from "../components/ui/DSButton";
import { DSBadge } from "../components/ui/DSBadge";
import { DSNavItem } from "../components/ui/DSNavItem";
import { DSSearchInput, DSTextInput } from "../components/ui/DSInput";
import { DSTabs } from "../components/ui/DSTabs";
import { DSMultiTag } from "../components/ui/DSMultiTag";
import { DSPagination } from "../components/ui/DSPagination";
import { DSTemplateCard } from "../components/ui/DSTemplateCard";
import { DSCouponPreview } from "../components/ui/DSCouponPreview";
import { DSStepNav } from "../components/ui/DSStepNav";
import { DSTable } from "../components/ui/DSTable";
import { DSStepperBarPreview } from "../components/ui/DSStepperBar";
import { DSImageUploadPreview } from "../components/ui/DSImageUpload";
import { DSDaysOfWeekSelector } from "../components/ui/DSDaysOfWeekSelector";
import { DSCustomAttributeRowPreview } from "../components/ui/DSCustomAttributeRow";

type FilterCategory = "All" | "Navigation" | "Buttons" | "Feedback" | "Inputs" | "Data Display" | "Forms" | "Cards";

const FILTER_CATEGORIES: FilterCategory[] = [
  "All", "Navigation", "Buttons", "Feedback", "Inputs", "Data Display", "Forms", "Cards",
];

interface ComponentDef {
  name: string;
  description: string;
  category: Exclude<FilterCategory, "All">;
  tokens?: string[];
  usedIn?: string[];
  previewBg?: string;
  wide?: boolean;
  allowOverflow?: boolean;
  preview: React.ReactNode;
}

const COMPONENTS: ComponentDef[] = [
  // ── Navigation ────────────────────────────────────────────────────────────
  {
    name: "Sidebar Item — Active",
    description: "Highlighted nav item shown when the user is on the current page. Uses Primary 80 as background with a purple ring shadow.",
    category: "Navigation",
    tokens: ["Primary 80 (#32187C)", "Primary 50 (#6430F7)", "Gray 5 (#FAFAFA)"],
    usedIn: ["Coupons", "Campaigns", "Partnerships"],
    previewBg: "#1E1731",
    preview: (
      <DSNavItem label="Coupons" icon={<Ticket size={18} />} variant="active" />
    ),
  },
  {
    name: "Sidebar Item — Inactive",
    description: "Default navigation item in rest state. Appears on the dark sidebar with muted text.",
    category: "Navigation",
    tokens: ["Gray 5 (#FAFAFA)", "Gray 30 (#BFBDC5)"],
    usedIn: ["All pages"],
    previewBg: "#1E1731",
    preview: (
      <div className="flex flex-col gap-1">
        <DSNavItem label="Dashboard" icon={<LayoutDashboard size={18} />} variant="inactive" />
        <DSNavItem label="Partnerships" icon={<Handshake size={18} />} variant="inactive" />
        <DSNavItem label="Members" icon={<Users size={18} />} variant="inactive" />
      </div>
    ),
  },
  {
    name: "Breadcrumb",
    description: "Shows the user's current location within the page hierarchy. Uses Gray 60 and Gray 50 for visual hierarchy.",
    category: "Navigation",
    tokens: ["Gray 60 (#63626F)", "Gray 40 (#A9A8B2)"],
    usedIn: ["Coupons", "Coupon editor", "Campaigns"],
    previewBg: "#FFFFFF",
    preview: (
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold text-[#475569]">Foundations</span>
        <span className="text-[#A9A8B2]">›</span>
        <span className="text-[#63626F]">Colors</span>
        <span className="text-[#A9A8B2]">›</span>
        <span className="text-[#3A3941] font-semibold">Primary</span>
      </div>
    ),
  },
  {
    name: "Step Navigation",
    description: "Left-rail tab stepper for multi-step forms (campaign builder). Active step shows a purple left border and purple icon; inactive steps show a gray left border. Sourced from BuilderNavigation in Figma.",
    category: "Navigation",
    tokens: ["Primary 50 (#6430F7) border", "Gray 30 (#BFBDC5) border", "Gray 90 (#3A3941)", "Gray 60 (#63626F)"],
    usedIn: ["Campaign editor", "Coupon editor"],
    previewBg: "#FFFFFF",
    wide: true,
    preview: <DSStepNav />,
  },
  {
    name: "Stepper Navigation Bar",
    description: "Fixed bottom bar with Back / Continue / Save actions. position: fixed — anchored at bottom: 20px. If the stepper content is shorter than the viewport, the bar positions itself 20px below the content instead. Four states: first step (Continue only), middle step (Back + Continue), last step (Back + Save), last step disabled.",
    category: "Navigation",
    tokens: ["Primary 50 (#6430F7)", "Primary 30 (#C4B0F9) disabled", "White"],
    usedIn: ["Campaign editor", "Coupon editor"],
    previewBg: "#F5F5F7",
    wide: true,
    preview: <DSStepperBarPreview />,
  },

  // ── Buttons ───────────────────────────────────────────────────────────────
  {
    name: "Button — Primary",
    description: "Main CTA button. Filled with Primary 50 (#6430F7). Use for the most important action on a screen.",
    category: "Buttons",
    tokens: ["Primary 50 (#6430F7)", "Primary 60 (#561EE3)"],
    usedIn: ["All pages"],
    previewBg: "#F8F8FA",
    preview: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <DSButton label="Send campaign" icon="plus" variant="primary" />
        <DSButton label="Continue" icon="arrow-right" variant="primary" />
        <DSButton label="Save" variant="primary" size="md" />
      </div>
    ),
  },
  {
    name: "Button — Secondary",
    description: "Outlined button for secondary actions. Transparent background with a Gray 30 border.",
    category: "Buttons",
    tokens: ["Gray 30 (#BFBDC5)", "Gray 60 (#63626F)"],
    usedIn: ["Coupon editor", "Campaign manager"],
    previewBg: "#F8F8FA",
    preview: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <DSButton label="Redeem campaign" icon="qr" variant="secondary" iconPosition="left" />
        <DSButton label="Publish" variant="secondary" />
        <DSButton label="Back" icon="arrow-left" variant="secondary" iconPosition="left" />
      </div>
    ),
  },
  {
    name: "Button — AI Assistant",
    description: "Special variant with a purple sparkle border. Indicates AI-powered actions.",
    category: "Buttons",
    tokens: ["#D394FD (AI border)", "Gray 90 (#2F2E35)"],
    usedIn: ["Campaign manager", "Coupon editor"],
    previewBg: "#F8F8FA",
    preview: (
      <div className="flex gap-3 items-center">
        <DSButton label="AI assistant" icon="sparkle" variant="ai" />
      </div>
    ),
  },
  {
    name: "Button — States",
    description: "Full range of semantic button variants for different action contexts.",
    category: "Buttons",
    tokens: ["Primary 50", "Destructive 50", "Success 50", "Gray 90"],
    usedIn: ["Various"],
    previewBg: "#F8F8FA",
    wide: true,
    preview: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <DSButton label="Primary" variant="primary" />
        <DSButton label="Secondary" variant="secondary" />
        <DSButton label="Ghost" variant="ghost" />
        <DSButton label="Dark" variant="dark" />
        <DSButton label="Destructive" icon="trash" variant="destructive" iconPosition="left" />
        <DSButton label="Success" variant="success" />
        <DSButton label="Disabled" variant="primary" disabled />
      </div>
    ),
  },

  // ── Feedback ──────────────────────────────────────────────────────────────
  {
    name: "Status Badge",
    description: "Pill-shaped status indicators. Each semantic state has its own background and text color from the palette.",
    category: "Feedback",
    tokens: ["Success 10/60", "Warning 10/60", "Destructive 10/60", "Gray 90"],
    usedIn: ["Coupons", "Campaigns"],
    previewBg: "#F8F8FA",
    preview: (
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <DSBadge variant="published" />
        <DSBadge variant="pending" />
        <DSBadge variant="paused" />
        <DSBadge variant="draft" />
        <DSBadge variant="primary" />
        <DSBadge variant="info" />
      </div>
    ),
  },

  // ── Inputs ────────────────────────────────────────────────────────────────
  {
    name: "Search Input",
    description: "Rounded search field with a leading search icon. Focus state activates a Primary 30 ring.",
    category: "Inputs",
    tokens: ["Gray 20 (#D7D6DB)", "Primary 30 (#9875FA)", "Primary 5 (#EBE4FF)"],
    usedIn: ["Coupons", "Campaigns"],
    previewBg: "#FFFFFF",
    preview: (
      <div className="w-64">
        <DSSearchInput placeholder="Search coupons by name" />
      </div>
    ),
  },
  {
    name: "Text Input",
    description: "Standard labeled form input. Shows helper text and error state variants.",
    category: "Inputs",
    tokens: ["Gray 20 (#D7D6DB)", "Primary 30 (#9875FA)", "Destructive 50 (#F43F5E)"],
    usedIn: ["Coupon editor — Media", "Coupon editor — Basic"],
    previewBg: "#FFFFFF",
    preview: (
      <div className="flex flex-col gap-3 w-64">
        <DSTextInput label="Title" placeholder="20% of discount V-Power" />
        <DSTextInput label="Subtitle (Optional)" placeholder="Coupon subtitle" />
        <DSTextInput label="Error state" placeholder="Invalid value" error helperText="This field is required" />
      </div>
    ),
  },
  {
    name: "Days of Week Selector",
    description: "Multi-select pill selector for choosing specific weekdays. If no day is selected, applies to all days by default. Each pill has a check icon when selected. Supports keyboard navigation (Tab to focus, Enter/Space to toggle).",
    category: "Inputs",
    tokens: ["Primary 5 (#EBE4FF)", "Primary 50 (#6430F7)", "Gray 20 (#D7D6DB)", "Gray 60 (#63626F)"],
    usedIn: ["Coupon editor — Validity", "Campaign editor — Scheduling"],
    previewBg: "#FFFFFF",
    wide: true,
    preview: (
      <div className="w-full max-w-xl">
        <DSDaysOfWeekSelector defaultSelectedDays={["Mon", "Wed", "Fri"]} />
      </div>
    ),
  },
  {
    name: "Multi-tag Selector",
    description: "Multi-select pill input for choosing segments, locations, or payment methods. Fixed single-line height — pills that fit are shown, the rest collapse to +N. Opens a checkbox dropdown.",
    category: "Inputs",
    tokens: ["Primary 5 (#EBE4FF)", "Primary 50 (#6430F7)", "Gray 20 (#D7D6DB)"],
    usedIn: ["Coupon editor — Eligibility"],
    previewBg: "#FFFFFF",
    allowOverflow: true,
    preview: (
      <div className="w-full max-w-xs pb-[260px]">
        <DSMultiTag label="Segments" defaultOpen />
      </div>
    ),
  },

  // ── Data Display ──────────────────────────────────────────────────────────
  {
    name: "Tabs",
    description: "Horizontal tab navigation. Active tab has a Primary 50 underline indicator.",
    category: "Data Display",
    tokens: ["Primary 50 (#6430F7)", "Gray 80 (#3A3941)"],
    usedIn: ["Campaigns", "Coupons"],
    previewBg: "#FFFFFF",
    wide: true,
    preview: (
      <div className="w-full">
        <DSTabs tabs={["All", "My campaigns", "From partners", "Sent"]} defaultTab="Sent" />
      </div>
    ),
  },
  {
    name: "Data Table",
    description: "Full-featured data table with thumbnail, sortable columns, status badge and row actions.",
    category: "Data Display",
    tokens: ["Gray 5 (#FAFAFA)", "Gray 20 (#E2E8F0)", "Primary 50 (#6430F7)"],
    usedIn: ["Coupons", "Campaigns"],
    previewBg: "#F8F8FA",
    wide: true,
    preview: (
      <div className="w-full overflow-hidden">
        <DSTable />
      </div>
    ),
  },
  {
    name: "Pagination",
    description: "Numbered page navigation. Active page uses Primary 50 fill. Ellipsis for large ranges.",
    category: "Data Display",
    tokens: ["Primary 50 (#6430F7)", "Gray 80 (#3A3941)", "Gray 20 (#E2E8F0)"],
    usedIn: ["Coupons"],
    previewBg: "#FFFFFF",
    preview: (
      <DSPagination total={99} initialPage={5} />
    ),
  },

  // ── Forms ─────────────────────────────────────────────────────────────────
  {
    name: "Rich Text Toolbar",
    description: "Formatting toolbar for description fields. Provides font size, bold, italic, underline, alignment, and list options.",
    category: "Forms",
    tokens: ["Gray 20 (#D7D6DB)", "Gray 60 (#63626F)", "Gray 80 (#3A3941)"],
    usedIn: ["Coupon editor — Media"],
    previewBg: "#FFFFFF",
    preview: (
      <div className="w-full border border-[#D7D6DB] rounded-xl overflow-hidden">
        <div className="flex items-center gap-1 px-3 py-2 border-b border-[#E2E8F0] flex-wrap">
          {["16 ↕", "A", "S̶", "B", "I", "U", "S", "≡", "≡≡", "☰"].map((f) => (
            <button key={f} className="px-1.5 py-1 text-xs text-[#63626F] hover:bg-[#F5F5F7] rounded transition-colors font-mono">
              {f}
            </button>
          ))}
        </div>
        <div className="px-3 py-3">
          <p className="text-sm text-[#A9A8B2]">Enter your main text here...</p>
          <p className="text-xs text-[#D7D6DB] mt-6 text-right">0/300</p>
        </div>
      </div>
    ),
  },
  {
    name: "Image Upload Zones",
    description: "Dashed-border upload slots (Label, Secondary, CustomImage, Logo). Empty slots show a purple upload icon. Filled slots reveal an overlay on hover with re-upload + dots menu. Dots opens an Edit / Delete context menu. The + button opens the Image Attribute modal (key name + alt text) to add new custom slots.",
    category: "Forms",
    tokens: ["#cbbafc upload bg", "Gray 20 (#BFBDC5) dashed border", "Primary 50 (#6430F7)", "Gray 5 (#fafafa)"],
    usedIn: ["Coupon editor — Media"],
    previewBg: "#FFFFFF",
    wide: true,
    preview: <DSImageUploadPreview />,
  },
  {
    name: "Custom Attribute Row",
    description: "Key-value pair input row for adding structured metadata to coupons. Supports String, HTML, Tag, Boolean and Number types via a modal selector. Each row shows type-labelled inputs + trash delete. 'Add custom attribute' opens the type picker modal.",
    category: "Forms",
    tokens: ["Primary 5 (#EBE4FF)", "Primary 50 (#6430F7)", "Destructive 50 (#F43F5E)", "Gray 20 (#A9A8B2)"],
    usedIn: ["Coupon editor — Attributes"],
    previewBg: "#FFFFFF",
    wide: true,
    allowOverflow: true,
    preview: <DSCustomAttributeRowPreview />,
  },

  // ── Cards ─────────────────────────────────────────────────────────────────
  {
    name: "Template Card",
    description: "Coupon type selection card. Shows template metadata: icon, title, configurations, and customizable fields.",
    category: "Cards",
    tokens: ["Primary 5 (#EBE4FF)", "Primary 50 (#6430F7)", "Gray 20 (#E2E8F0)"],
    usedIn: ["Coupon Templates"],
    previewBg: "#F8F8FA",
    preview: (
      <DSTemplateCard
        icon={<Tag size={18} />}
        title="Price discount"
        subtitle="Percentage or fixed amount off"
        whatItIs="A standard discount applied at checkout."
        whenToUse="For sales, seasonal promotions, or general marketing campaigns."
        alreadyConfigured={["Auto-generated codes", "1 use per member", "Redeemable online & in-store", "Not stackable"]}
        youCustomize={["Discount type (% or fixed)", "Discount value & cap", "Minimum purchase", "Validity period"]}
      />
    ),
  },
  {
    name: "Template Card Grid",
    description: "Full set of 5 coupon type templates shown in context. Includes Partner benefit, Price discount, Coupon cash, Product reward, Advanced coupon.",
    category: "Cards",
    tokens: ["Primary 5", "Primary 50", "Gray 20", "Gray 80"],
    usedIn: ["Coupon Templates — Create new"],
    previewBg: "#F5F5F7",
    wide: true,
    preview: (
      <div className="grid grid-cols-3 gap-3 w-full">
        {[
          {
            icon: <Handshake size={16} />,
            title: "Partner benefit",
            subtitle: "Co-branded or partner-funded",
            whatItIs: "A benefit funded or co-branded with an external partner.",
            whenToUse: "When running partner campaigns, B2B deals, or externally-funded promotions.",
            configured: ["Auto-generated codes", "1 use per member", "Redeemable online & in-store", "Not trackable"],
            customize: ["Partner name & audience", "Benefit type & value", "Validity period"],
          },
          {
            icon: <Tag size={16} />,
            title: "Price discount",
            subtitle: "Percentage or fixed amount off",
            whatItIs: "A standard discount applied at checkout.",
            whenToUse: "For sales, seasonal promotions, or general marketing campaigns.",
            configured: ["Auto-generated codes", "1 use per member", "Redeemable online & in-store", "Not stackable"],
            customize: ["Discount type (% or fixed)", "Discount value & cap", "Minimum purchase", "Validity period"],
          },
          {
            icon: <CircleDollarSign size={16} />,
            title: "Coupon cash",
            subtitle: "Store credit or cashback",
            whatItIs: "Grants cashback or points to member accounts.",
            whenToUse: "For loyalty rewards, compensation, or wallet-based incentives.",
            configured: ["Auto-generated codes", "1 use per member", "Available for future purchases", "Not stackable"],
            customize: ["Cash value", "Minimum purchase requirement", "Validity period", "Audience"],
          },
          {
            icon: <Gift size={16} />,
            title: "Product reward",
            subtitle: "Free product or BOGO",
            whatItIs: "Grants a free product or buy-one-get-one deal.",
            whenToUse: "Grants a free product or buy-one-get-one deal.",
            configured: ["Auto-generated codes", "1 use per member", "Applied to specific SKUs", "Not stackable"],
            customize: ["Product SKU & quantity", "Reward type (free / BOGO)", "Minimum purchase", "Validity"],
          },
          {
            icon: <SlidersHorizontal size={16} />,
            title: "Advanced coupon",
            subtitle: "Full control & custom configuration",
            whatItIs: "Exposes all system options for complex use cases.",
            whenToUse: "For SLT tracking, code pools, multi-party billing, or non-standard mechanics.",
            configured: ["Nothing — you configure everything"],
            customize: ["Code strategy & pools", "Usage limits & redemption logic", "Financial tracking & reporting", "Validity"],
          },
        ].map((t) => (
          <DSTemplateCard
            key={t.title}
            icon={t.icon}
            title={t.title}
            subtitle={t.subtitle}
            whatItIs={t.whatItIs}
            whenToUse={t.whenToUse}
            alreadyConfigured={t.configured}
            youCustomize={t.customize}
          />
        ))}
      </div>
    ),
  },
  {
    name: "Coupon Preview Card",
    description: "Right-panel live preview of a coupon being edited. Shows title, image placeholder, stats, and impacted audience.",
    category: "Cards",
    tokens: ["Primary 5 (#EBE4FF)", "Primary 50 (#6430F7)", "Gray 5 (#F5F3FF)"],
    usedIn: ["Coupon editor — all tabs"],
    previewBg: "#F8F8FA",
    preview: <DSCouponPreview />,
  },
];

export function ComponentsPage() {
  const [filter, setFilter] = useState<FilterCategory>("All");
  const [search, setSearch] = useState("");

  const visible = COMPONENTS.filter((c) => {
    const matchCat = filter === "All" || c.category === filter;
    const matchSearch =
      search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Group by category for display
  const grouped = FILTER_CATEGORIES.filter((cat) => cat !== "All").reduce<
    Record<string, ComponentDef[]>
  >((acc, cat) => {
    const items = visible.filter((c) => c.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#3A3941] text-4xl font-bold tracking-tight mb-1">Components</h1>
        <p className="text-[#63626F] text-base">
          Individual UI components extracted from Qurable's product. Click the expand icon on any card to see color tokens and origin pages.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A9A8B2]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#3A3941] outline-none focus:border-[#9875FA] focus:ring-2 focus:ring-[#EBE4FF] transition-all"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-[#6430F7] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#63626F] hover:border-[#9875FA] hover:text-[#6430F7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 mb-8 text-sm text-[#91909D]">
        <span>
          Showing <strong className="text-[#3A3941]">{visible.length}</strong> of{" "}
          <strong className="text-[#3A3941]">{COMPONENTS.length}</strong> components
        </span>
        {search && (
          <button onClick={() => setSearch("")} className="text-[#6430F7] hover:underline">
            Clear search
          </button>
        )}
      </div>

      {/* Component Grid by Category */}
      {Object.keys(grouped).length === 0 ? (
        <div className="text-center py-20 text-[#91909D]">
          <p className="text-lg">No components found for "{search}"</p>
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(grouped).map(([category, items]) => (
            <section key={category} id={category.toLowerCase().replace(" ", "-")}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-[#3A3941] text-xl font-bold">{category}</h2>
                <span className="text-[#A9A8B2] text-sm">{items.length} component{items.length > 1 ? "s" : ""}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 [&>*]:min-w-0">
                {items.map((comp) => (
                  <ComponentCard
                    key={comp.name}
                    name={comp.name}
                    description={comp.description}
                    category={comp.category as any}
                    tokens={comp.tokens}
                    usedIn={comp.usedIn}
                    previewBg={comp.previewBg}
                    wide={comp.wide}
                    allowOverflow={comp.allowOverflow}
                  >
                    {comp.preview}
                  </ComponentCard>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}