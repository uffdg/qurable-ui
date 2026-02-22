export interface ColorSwatch {
  scale: number | string;
  hex: string;
}

export interface ColorGroup {
  name: string;
  description: string;
  swatches: ColorSwatch[];
}

// ─── PRIMARY COLORS ───────────────────────────────────────────────────────────

export const grayColors: ColorGroup = {
  name: "Gray",
  description:
    "Prominently displayed in interactive components like buttons, links, and inputs, this color sets the tone for user interaction and shapes the perception of your brand.",
  swatches: [
    { scale: "0 (White)", hex: "#FFFFFF" },
    { scale: 5, hex: "#FAFAFA" },
    { scale: 10, hex: "#EFEFF1" },
    { scale: 20, hex: "#D7D6DB" },
    { scale: 30, hex: "#BFBDC5" },
    { scale: 40, hex: "#A9A8B2" },
    { scale: 50, hex: "#91909D" },
    { scale: 60, hex: "#63626F" },
    { scale: 70, hex: "#504E59" },
    { scale: 80, hex: "#3A3941" },
    { scale: 90, hex: "#2F2E35" },
    { scale: "100 (Black)", hex: "#000000" },
  ],
};

export const primaryColors: ColorGroup = {
  name: "Primary",
  description:
    "Prominently displayed in interactive components like buttons, links, and inputs, this color sets the tone for user interaction and shapes the perception of your brand.",
  swatches: [
    { scale: 5, hex: "#EBE4FF" },
    { scale: 10, hex: "#CBBAFC" },
    { scale: 20, hex: "#B298FB" },
    { scale: 30, hex: "#9875FA" },
    { scale: 40, hex: "#6D49FF" },
    { scale: 50, hex: "#6430F7" },
    { scale: 60, hex: "#561EE3" },
    { scale: 70, hex: "#4320A5" },
    { scale: 80, hex: "#32187C" },
    { scale: 90, hex: "#2D1C5D" },
  ],
};

export const secondaryColors: ColorGroup = {
  name: "Secondary",
  description:
    "Prominently displayed in interactive components like buttons, links, and inputs, this color sets the tone for user interaction and shapes the perception of your brand.",
  swatches: [
    { scale: 5, hex: "#F8FFD5" },
    { scale: 10, hex: "#F2FFAB" },
    { scale: 20, hex: "#EBFF81" },
    { scale: 30, hex: "#E4FE57" },
    { scale: 40, hex: "#DEFE2D" },
    { scale: 50, hex: "#D7FE03" },
    { scale: 60, hex: "#CBF001" },
    { scale: 70, hex: "#ADCD01" },
    { scale: 80, hex: "#829A01" },
    { scale: 90, hex: "#576600" },
  ],
};

export const destructiveColors: ColorGroup = {
  name: "Destructive",
  description:
    "This color plays a critical role in highlighting destructive actions, ensuring users approach them with awareness and caution.",
  swatches: [
    { scale: 5, hex: "#FFF1F2" },
    { scale: 10, hex: "#FFE4E6" },
    { scale: 20, hex: "#FECDD3" },
    { scale: 30, hex: "#FDA4AF" },
    { scale: 40, hex: "#FB7185" },
    { scale: 50, hex: "#F43F5E" },
    { scale: 60, hex: "#E11D48" },
    { scale: 70, hex: "#BE123C" },
    { scale: 80, hex: "#9F1239" },
    { scale: 90, hex: "#881337" },
  ],
};

export const warningColors: ColorGroup = {
  name: "Warning",
  description:
    "The warning color palette reflects this by subtly highlighting potential issues without sending users into a state of panic.",
  swatches: [
    { scale: 5, hex: "#FFFBEB" },
    { scale: 10, hex: "#FEF3C7" },
    { scale: 20, hex: "#FDE68A" },
    { scale: 30, hex: "#FCD34D" },
    { scale: 40, hex: "#FBBF24" },
    { scale: 50, hex: "#F59E0B" },
    { scale: 60, hex: "#D97706" },
    { scale: 70, hex: "#B45309" },
    { scale: 80, hex: "#92400E" },
    { scale: 90, hex: "#78350F" },
  ],
};

export const successColors: ColorGroup = {
  name: "Success",
  description:
    "Green is key in highlighting positive outcomes with interactions and transactions, fostering a rewarding and delightful experience.",
  swatches: [
    { scale: 5, hex: "#F0FDF4" },
    { scale: 10, hex: "#DCFCE7" },
    { scale: 20, hex: "#BBF7D0" },
    { scale: 30, hex: "#86EFAC" },
    { scale: 40, hex: "#4ADE80" },
    { scale: 50, hex: "#22C55E" },
    { scale: 60, hex: "#16A34A" },
    { scale: 70, hex: "#15803D" },
    { scale: 80, hex: "#166534" },
    { scale: 90, hex: "#14532D" },
  ],
};

export const primaryColorGroups: ColorGroup[] = [
  grayColors,
  primaryColors,
  secondaryColors,
  destructiveColors,
  warningColors,
  successColors,
];

// ─── SECONDARY COLORS ─────────────────────────────────────────────────────────

export const blueColors: ColorGroup = {
  name: "Blue",
  description:
    "Blue represents serenity, stability, or wisdom - it guides users through the design process with a sense of clarity and direction.",
  swatches: [
    { scale: 5, hex: "#EFF6FF" },
    { scale: 10, hex: "#DBEAFE" },
    { scale: 20, hex: "#BFDBFE" },
    { scale: 30, hex: "#93C5FD" },
    { scale: 40, hex: "#60A5FA" },
    { scale: 50, hex: "#3B82F6" },
    { scale: 60, hex: "#2563EB" },
    { scale: 70, hex: "#1D4ED8" },
    { scale: 80, hex: "#1E40AF" },
    { scale: 90, hex: "#1E3A8A" },
  ],
};

export const cyanColors: ColorGroup = {
  name: "Cyan",
  description:
    "Cyan offers a unique position in the color palette. It injects a touch of modernity while retaining a sense of tranquility.",
  swatches: [
    { scale: 5, hex: "#ECFEFF" },
    { scale: 10, hex: "#CFFAFE" },
    { scale: 20, hex: "#A5F3FC" },
    { scale: 30, hex: "#67E8F9" },
    { scale: 40, hex: "#22D3EE" },
    { scale: 50, hex: "#06B6D4" },
    { scale: 60, hex: "#0891B2" },
    { scale: 70, hex: "#0E7490" },
    { scale: 80, hex: "#155E75" },
    { scale: 90, hex: "#164E63" },
  ],
};

export const tealColors: ColorGroup = {
  name: "Teal",
  description:
    "Serene and refreshing, teal embodies a sense of calm clarity.",
  swatches: [
    { scale: 5, hex: "#F0FDFA" },
    { scale: 10, hex: "#CCFBF1" },
    { scale: 20, hex: "#99F6E4" },
    { scale: 30, hex: "#5EEAD4" },
    { scale: 40, hex: "#2DD4BF" },
    { scale: 50, hex: "#14B8A6" },
    { scale: 60, hex: "#0D9488" },
    { scale: 70, hex: "#0F766E" },
    { scale: 80, hex: "#115E59" },
    { scale: 90, hex: "#134E4A" },
  ],
};

export const limeColors: ColorGroup = {
  name: "Lime",
  description:
    "Bold and energizing, lime injects a burst of energy into UI design.",
  swatches: [
    { scale: 5, hex: "#F7FEE7" },
    { scale: 10, hex: "#ECFCCB" },
    { scale: 20, hex: "#D9F99D" },
    { scale: 30, hex: "#BEF264" },
    { scale: 40, hex: "#A3E635" },
    { scale: 50, hex: "#84CC16" },
    { scale: 60, hex: "#65A30D" },
    { scale: 70, hex: "#4D7C0F" },
    { scale: 80, hex: "#3F6212" },
    { scale: 90, hex: "#365314" },
  ],
};

export const purpleColors: ColorGroup = {
  name: "Purple",
  description:
    "Associated with royalty and elegance, purple conveys a sense of luxury and sophistication.",
  swatches: [
    { scale: 5, hex: "#FAF5FF" },
    { scale: 10, hex: "#F3E8FF" },
    { scale: 20, hex: "#E9D5FF" },
    { scale: 30, hex: "#D8B4FE" },
    { scale: 40, hex: "#C084FC" },
    { scale: 50, hex: "#A855F7" },
    { scale: 60, hex: "#9333EA" },
    { scale: 70, hex: "#7E22CE" },
    { scale: 80, hex: "#6B21A8" },
    { scale: 90, hex: "#581C87" },
  ],
};

export const pinkColors: ColorGroup = {
  name: "Pink",
  description:
    "Pink symbolizes warmth and compassion, touches all of content's warmth and charm.",
  swatches: [
    { scale: 5, hex: "#FDF4FF" },
    { scale: 10, hex: "#FAE8FF" },
    { scale: 20, hex: "#F5D0FE" },
    { scale: 30, hex: "#F0ABFC" },
    { scale: 40, hex: "#E879F9" },
    { scale: 50, hex: "#D946EF" },
    { scale: 60, hex: "#C026D3" },
    { scale: 70, hex: "#A21CAF" },
    { scale: 80, hex: "#86198F" },
    { scale: 90, hex: "#701A75" },
  ],
};

export const orangeColors: ColorGroup = {
  name: "Orange",
  description:
    "Orange radiates warmth and enthusiasm, encourages positivity to ignite your mood.",
  swatches: [
    { scale: 5, hex: "#FFF7ED" },
    { scale: 10, hex: "#FFEDD5" },
    { scale: 20, hex: "#FED7AA" },
    { scale: 30, hex: "#FDBA74" },
    { scale: 40, hex: "#FB923C" },
    { scale: 50, hex: "#F97316" },
    { scale: 60, hex: "#EA580C" },
    { scale: 70, hex: "#C2410C" },
    { scale: 80, hex: "#9A3412" },
    { scale: 90, hex: "#7C2D12" },
  ],
};

export const secondaryColorGroups: ColorGroup[] = [
  blueColors,
  cyanColors,
  tealColors,
  limeColors,
  purpleColors,
  pinkColors,
  orangeColors,
];
