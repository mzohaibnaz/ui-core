import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: { initial: { scale: 0.6, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { type: "spring", stiffness: 320 } }
  }
} satisfies Record<string, MotionToken>
