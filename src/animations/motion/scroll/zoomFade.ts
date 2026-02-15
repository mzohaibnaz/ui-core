import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { scale: 0.9, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.4 }
    }
  }
} satisfies Record<string, MotionToken>
