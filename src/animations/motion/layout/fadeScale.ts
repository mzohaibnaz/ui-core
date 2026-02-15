import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    }
  }
} satisfies Record<string, MotionToken>
