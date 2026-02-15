import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { type: "spring", stiffness: 220, damping: 20 }
    }
  }
} satisfies Record<string, MotionToken>
