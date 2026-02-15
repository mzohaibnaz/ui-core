import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { x: -60, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true, amount: 0.3 },
      transition: { type: "spring", stiffness: 160, damping: 18 }
    }
  }
} satisfies Record<string, MotionToken>
