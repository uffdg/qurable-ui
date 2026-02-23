# DaysOfWeekSelector / md

Component set for selecting specific weekdays in Coupons and Campaigns scheduling settings.

## Component Hierarchy

```
DaysOfWeekSelector / md (Composed Component)
├─ Container (vertical auto-layout, gap-4)
│  ├─ Title + Subtitle (gap-1)
│  │  ├─ Title: "Days of the week"
│  │  └─ Subtitle: "Choose specific days or select all week days"
│  ├─ PillsRow (horizontal auto-layout, gap-2)
│  │  ├─ DayPill / md (Mon)
│  │  ├─ DayPill / md (Tue)
│  │  ├─ DayPill / md (Wed)
│  │  ├─ DayPill / md (Thu)
│  │  ├─ DayPill / md (Fri)
│  │  ├─ DayPill / md (Sat)
│  │  └─ DayPill / md (Sun)
│  └─ Hint (conditional: visible only when no selection)
│     └─ "No days selected — applies to all days by default."
```

## Component Set: DayPill / md

### Variants / Properties

| Property   | Values                                        |
|------------|-----------------------------------------------|
| **day**    | Mon, Tue, Wed, Thu, Fri, Sat, Sun             |
| **selected** | true, false                                 |
| **state**  | default, hover, pressed, focus                |
| **size**   | md (single size — matches DS md controls)     |

### Anatomy

```
DayPill Container (auto-layout horizontal, center aligned)
├─ Icon (check) — hidden unless selected
└─ Label (day short name)
```

### Visual Rules

#### Unselected State

| State     | Background      | Border          | Text            | Additional |
|-----------|-----------------|-----------------|-----------------|------------|
| Default   | `#FFFFFF`       | `#D7D6DB` (Gray 20) | `#63626F` (Gray 60) | — |
| Hover     | `#FAFAFA` (Gray 5) | `#BFBDC5` (Gray 30) | `#63626F` | — |
| Pressed   | `#EFEFF1` (Gray 10) | `#D7D6DB` | `#63626F` | — |
| Focus     | `#FFFFFF`       | `#D7D6DB`       | `#63626F`       | Ring: `#9875FA` (Primary 30) + offset |

#### Selected State

| State     | Background         | Border           | Text             | Icon | Additional |
|-----------|--------------------|------------------|------------------|------|------------|
| Default   | `#EBE4FF` (Primary 5) | `#6430F7` (Primary 50) | `#6430F7` | ✓    | — |
| Hover     | `#CBBAFC` (Primary 10) | `#6430F7` | `#6430F7` | ✓    | — |
| Pressed   | `#B298FB` (Primary 20) | `#6430F7` | `#6430F7` | ✓    | — |
| Focus     | `#EBE4FF`          | `#6430F7`        | `#6430F7`        | ✓    | Ring: `#9875FA` + offset |

### Sizing (md)

- **Height**: `py-2.5` (matches DS md controls)
- **Padding**: `px-4 py-2.5`
- **Gap**: `gap-1.5` (between icon and label)
- **Border**: `border` (1px)
- **Radius**: `rounded-full`
- **Font**: `text-sm font-semibold`

## Behavior

### Interaction

- **Click**: Toggles selected state (true ↔ false)
- **Multi-select**: Multiple pills can be selected simultaneously
- **Keyboard navigation**:
  - `Tab`: Navigate through each pill (each pill is individually focusable)
  - `Enter` / `Space`: Toggle selected state
  - Focus ring visible on currently focused pill

### Hint Logic

The hint text at the bottom of the selector follows this rule:

- **No pills selected** → Show hint: _"No days selected — applies to all days by default."_
- **1+ pills selected** → Hide hint

## DS Tokens Used

### Spacing

| Element              | Token   | Value     |
|----------------------|---------|-----------|
| Container gap        | `gap-4` | 16px      |
| Title/Subtitle gap   | `gap-1` | 4px       |
| Pills row gap        | `gap-2` | 8px       |
| Pill internal gap    | `gap-1.5` | 6px     |

### Typography

| Element   | Font Size  | Weight       | Line Height | Color                |
|-----------|------------|--------------|-------------|----------------------|
| Title     | `text-base` | `font-medium` | `leading-6` | `#3A3941` (Gray 80)  |
| Subtitle  | `text-sm`  | `font-normal` | `leading-5` | `#63626F` (Gray 60)  |
| Pill Label| `text-sm`  | `font-semibold` | `leading-none` | See visual rules |
| Hint      | `text-xs`  | `font-normal` | `leading-[18px]` | `#91909D` (Gray 50) |

### Colors

| Element               | Token Name       | Hex Value  |
|-----------------------|------------------|------------|
| Unselected bg         | White            | `#FFFFFF`  |
| Unselected border     | Gray 20          | `#D7D6DB`  |
| Unselected text       | Gray 60          | `#63626F`  |
| Unselected hover bg   | Gray 5           | `#FAFAFA`  |
| Unselected hover border | Gray 30        | `#BFBDC5`  |
| Unselected pressed bg | Gray 10          | `#EFEFF1`  |
| Selected bg           | Primary 5        | `#EBE4FF`  |
| Selected border       | Primary 50       | `#6430F7`  |
| Selected text         | Primary 50       | `#6430F7`  |
| Selected hover bg     | Primary 10       | `#CBBAFC`  |
| Selected pressed bg   | Primary 20       | `#B298FB`  |
| Focus ring            | Primary 30       | `#9875FA`  |

## Usage Context

This component is used in:

- **Coupon editor** — Validity tab (to set which days the coupon is valid)
- **Campaign editor** — Scheduling tab (to schedule campaign on specific days)

## Example Usage

### Uncontrolled (with default selection)

```tsx
<DSDaysOfWeekSelector defaultSelectedDays={["Mon", "Wed", "Fri"]} />
```

### Controlled (with state management)

```tsx
const [selectedDays, setSelectedDays] = useState<DayLabel[]>([]);

<DSDaysOfWeekSelector
  selectedDays={selectedDays}
  onSelectionChange={setSelectedDays}
/>
```

### No default selection (shows hint)

```tsx
<DSDaysOfWeekSelector />
```

## Accessibility

- **Role**: Each pill has `role="checkbox"` with `aria-checked` state
- **Labels**: Each pill has descriptive `aria-label` (e.g., "Mon, selected")
- **Keyboard**: Full keyboard navigation support (Tab, Enter, Space)
- **Focus**: Visible focus ring on focused pill (doesn't rely on color alone)
- **Group**: Pills row has `role="group"` with `aria-label="Days of the week"`
