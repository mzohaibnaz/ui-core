import type { MotionToken } from "../types"

export default {
  base: {
    channel: "passive",
    config: { animate: { scale: [1, 1.1, 1] }, transition: { duration: 0.5, repeat: Infinity } }
  }
} satisfies Record<string, MotionToken>
