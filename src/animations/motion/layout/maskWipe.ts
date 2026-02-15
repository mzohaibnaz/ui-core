import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { clipPath: "inset(0 100% 0 0)" },
      animate: { clipPath: "inset(0 0% 0 0)" },
      transition: { duration: 0.45, ease: "easeOut" }
    }
  }
} satisfies Record<string, MotionToken>
