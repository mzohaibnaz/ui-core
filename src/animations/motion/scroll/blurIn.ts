import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: { opacity: 0, filter: "blur(10px)" },
      whileInView: { opacity: 1, filter: "blur(0px)" },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }
} satisfies Record<string, MotionToken>
