import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { clipPath: "inset(0 0 100% 0)" },
      animate: { clipPath: "inset(0 0 0% 0)" },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }
} satisfies Record<string, MotionToken>
