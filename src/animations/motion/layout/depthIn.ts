import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { opacity: 0, y: 24, scale: 0.97 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { type: "spring", stiffness: 180, damping: 18 }
    }
  }
} satisfies Record<string, MotionToken>
