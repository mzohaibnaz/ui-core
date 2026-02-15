import type { MotionToken } from "../types"

export default {
  base: {
    channel: "passive",
    config: { animate: { scale: [1, 1.08, 1] }, transition: { duration: 0.6, repeat: Infinity } }
  }
} satisfies Record<string, MotionToken>
