import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    }
  }
} satisfies Record<string, MotionToken>
