import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { type: "spring", stiffness: 260 } }
  }
} satisfies Record<string, MotionToken>
