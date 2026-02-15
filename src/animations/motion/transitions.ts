export const springs = {
  smooth: { type: "spring", stiffness: 260, damping: 20 },
  snappy: { type: "spring", stiffness: 400, damping: 12 },
  gentle: { type: "spring", stiffness: 120, damping: 18 },
} as const

export const easings = {
  easeOut: { duration: 0.25, ease: "easeOut" },
  easeInOut: { duration: 0.35, ease: "easeInOut" },
  quick: { duration: 0.18, ease: "easeOut" },
} as const
