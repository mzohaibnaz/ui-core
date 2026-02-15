import type { MotionToken } from "../types"

export default {
  base: {
    channel: "interaction",
    config: { whileTap: { scale: 0.94 }, transition: { type: "spring", stiffness: 350 } }
  },
  dip: {
    channel: "interaction",
    config: { whileTap: { y: 2 }, transition: { duration: 0.2 } }
  }
} satisfies Record<string, MotionToken>
