import type { MotionToken } from "../types"

export default {
  base: {
    channel: "layout",
    config: {
      initial: { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: { duration: 0.3 }
    }
  }
} satisfies Record<string, MotionToken>
