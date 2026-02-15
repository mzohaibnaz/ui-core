import type { MotionToken } from "../types"

export default {
  base: {
    channel: "interaction",
    config: { whileFocus: { scale: 1.03 }, transition: { duration: 0.2 } }
  }
} satisfies Record<string, MotionToken>
