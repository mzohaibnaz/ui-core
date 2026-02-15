import type { MotionToken } from "../types"

export default {
  base: {
    channel: "passive",
    config: { animate: { x: [0, -6, 6, -6, 6, 0] }, transition: { duration: 0.4, repeat: Infinity } }
  }
} satisfies Record<string, MotionToken>
