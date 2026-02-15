import type { MotionToken } from "../types"

export default {
  base: {
    channel: "layout",
    config: {
      initial: { scaleY: 0.8, opacity: 0 },
      animate: { scaleY: 1, opacity: 1 },
      transition: { type: "spring", stiffness: 260 }
    }
  }
} satisfies Record<string, MotionToken>
