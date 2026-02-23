/**
 * ╔════════════════════════════════════════════════════════════════════════╗
 * ║  COMPONENT SPECIFICATION                                               ║
 * ║  DaysOfWeekSelector / md                                              ║
 * ╚════════════════════════════════════════════════════════════════════════╝
 * 
 * COMPONENT SET NAME: DaysOfWeekSelector / md
 * 
 * CONTEXT:
 * This selector is used in Coupons and Campaigns scheduling settings.
 * It allows selecting specific weekdays. If no day is selected, it means
 * "applies to all days by default".
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * COMPONENT HIERARCHY:
 * 
 * DaysOfWeekSelector / md (Composed Component)
 * └─ Container (vertical auto-layout)
 *    ├─ Title: "Days of the week"
 *    ├─ Subtitle: "Choose specific days or select all week days"
 *    ├─ PillsRow (horizontal auto-layout, no wrap)
 *    │  ├─ DayPill / md (Mon)
 *    │  ├─ DayPill / md (Tue)
 *    │  ├─ DayPill / md (Wed)
 *    │  ├─ DayPill / md (Thu)
 *    │  ├─ DayPill / md (Fri)
 *    │  ├─ DayPill / md (Sat)
 *    │  └─ DayPill / md (Sun)
 *    └─ Hint: "No days selected — applies to all days by default."
 *       (conditional: visible only when no days are selected)
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * COMPONENT SET: DayPill / md
 * 
 * ANATOMY:
 * - Pill container (auto-layout horizontal, center aligned)
 *   - Leading Icon (check) slot: hidden unless selected
 *   - Label text: day short label
 * 
 * VARIANTS / PROPERTIES:
 * - day = [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
 * - selected = [true, false]
 * - state = [default, hover, pressed, focus]  (NO disabled)
 * - size = [md] (single size)
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * VISUAL RULES (Design System Tokens)
 * 
 * UNSELECTED STATE:
 * ┌──────────┬────────────────┬────────────────┬────────────────┬──────────────┐
 * │  State   │   Background   │     Border     │      Text      │  Additional  │
 * ├──────────┼────────────────┼────────────────┼────────────────┼──────────────┤
 * │ default  │ #FFFFFF (White)│ #D7D6DB (G-20) │ #63626F (G-60) │      —       │
 * │ hover    │ #FAFAFA (G-5)  │ #BFBDC5 (G-30) │ #63626F (G-60) │      —       │
 * │ pressed  │ #EFEFF1 (G-10) │ #D7D6DB (G-20) │ #63626F (G-60) │      —       │
 * │ focus    │ #FFFFFF        │ #D7D6DB        │ #63626F        │ Ring: #9875FA│
 * └──────────┴────────────────┴────────────────┴────────────────┴──────────────┘
 * 
 * SELECTED STATE:
 * ┌──────────┬────────────────┬────────────────┬────────────────┬──────────────┐
 * │  State   │   Background   │     Border     │      Text      │     Icon     │
 * ├──────────┼────────────────┼────────────────┼────────────────┼──────────────┤
 * │ default  │ #EBE4FF (P-5)  │ #6430F7 (P-50) │ #6430F7 (P-50) │   ✓ Check    │
 * │ hover    │ #CBBAFC (P-10) │ #6430F7 (P-50) │ #6430F7 (P-50) │   ✓ Check    │
 * │ pressed  │ #B298FB (P-20) │ #6430F7 (P-50) │ #6430F7 (P-50) │   ✓ Check    │
 * │ focus    │ #EBE4FF (P-5)  │ #6430F7 (P-50) │ #6430F7 (P-50) │ ✓ + Ring     │
 * └──────────┴────────────────┴────────────────┴────────────────┴──────────────┘
 * 
 * Legend:
 * - G = Gray color scale
 * - P = Primary (brand purple) color scale
 * - Ring = Focus ring using Primary 30 (#9875FA) with offset
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * LAYOUT TOKENS:
 * 
 * Container:
 *   - Layout: vertical auto-layout
 *   - Gap: gap-4 (16px between title/subtitle/pills/hint)
 * 
 * Title + Subtitle:
 *   - Gap: gap-1 (4px between title and subtitle)
 * 
 * PillsRow:
 *   - Layout: horizontal auto-layout
 *   - Wrap: flex-wrap (allows wrapping on small screens)
 *   - Gap: gap-2 (8px between pills)
 * 
 * Pills (md size):
 *   - Height: py-2.5 (fixed control height matching DS md controls)
 *   - Width: content-based (label + padding)
 *   - Padding: px-4 py-2.5
 *   - Border: border (1px solid)
 *   - Radius: rounded-full
 *   - Gap: gap-1.5 (6px between icon and label)
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * TYPOGRAPHY TOKENS:
 * 
 * Title:
 *   - Font size: text-base (16px)
 *   - Weight: font-medium (500)
 *   - Line height: leading-6 (24px)
 *   - Color: #3A3941 (Gray 80)
 * 
 * Subtitle:
 *   - Font size: text-sm (14px)
 *   - Weight: font-normal (400)
 *   - Line height: leading-5 (20px)
 *   - Color: #63626F (Gray 60)
 * 
 * Pill Label:
 *   - Font size: text-sm (14px)
 *   - Weight: font-semibold (600)
 *   - Line height: leading-none
 *   - Color: varies by state (see visual rules)
 * 
 * Hint:
 *   - Font size: text-xs (12px)
 *   - Weight: font-normal (400)
 *   - Line height: leading-[18px] (18px)
 *   - Color: #91909D (Gray 50)
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * BEHAVIOR RULES:
 * 
 * Click Interaction:
 *   - Click on a pill toggles selected true/false
 *   - Multi-select is allowed (multiple days can be selected simultaneously)
 * 
 * Keyboard Navigation:
 *   - Tab: navigates through each pill (each pill is a focusable element)
 *   - Enter/Space: toggles selected state
 *   - Focus ring: visible on the currently focused pill
 * 
 * Hint Logic:
 *   - If NO pills are selected → show hint text
 *   - If ONE OR MORE pills are selected → hide hint text
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * ACCESSIBILITY:
 * 
 * - Each pill: role="checkbox", aria-checked={selected}
 * - Descriptive labels: aria-label="Mon, selected" / "Mon"
 * - Pills group: role="group", aria-label="Days of the week"
 * - Focus indicators: visible focus ring (doesn't rely on color alone)
 * - Keyboard support: full navigation with Tab/Enter/Space
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * LAYER NAMING (for Figma):
 * 
 * - Container
 *   - Title
 *   - Subtitle
 *   - PillsRow
 *     - DayPill (Mon)
 *       - Icon
 *       - Label
 *     - DayPill (Tue)
 *       - Icon
 *       - Label
 *     - ... (Wed, Thu, Fri, Sat, Sun)
 *   - Hint
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * USAGE CONTEXT:
 * 
 * Used in:
 *   - Coupon editor → Validity tab
 *   - Campaign editor → Scheduling tab
 * 
 * Purpose:
 *   - Select specific weekdays for coupon/campaign validity
 *   - If no days selected → applies to all days by default
 * 
 * ────────────────────────────────────────────────────────────────────────
 * 
 * FILES:
 * 
 * Implementation:
 *   - /src/app/components/ui/DSDayPill.tsx
 *   - /src/app/components/ui/DSDaysOfWeekSelector.tsx
 * 
 * Preview/Documentation:
 *   - /src/app/components/ui/DSDaysOfWeekSelectorPreview.tsx
 *   - /src/app/components/ui/DSDaysOfWeekSelector.md
 *   - /src/app/components/ui/COMPONENT_SPEC_DaysOfWeekSelector.tsx (this file)
 * 
 * Integration:
 *   - /src/app/pages/ComponentsPage.tsx (added to Inputs category)
 * 
 * ╚════════════════════════════════════════════════════════════════════════╝
 */

// This file serves as visual specification documentation.
// The actual implementation is in DSDayPill.tsx and DSDaysOfWeekSelector.tsx

export {};
