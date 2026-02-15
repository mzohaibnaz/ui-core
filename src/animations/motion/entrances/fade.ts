import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.25 } }
  },
  soft: {
    channel: "lifecycle",
    config: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4 } }
  }
} satisfies Record<string, MotionToken>
