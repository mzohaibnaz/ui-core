import type { MotionToken } from "../types"

export default {
  base: {
    channel: "interaction",
    config: { whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 300 } }
  },
  lift: {
    channel: "interaction",
    config: { whileHover: { y: -4, scale: 1.02 }, transition: { type: "spring", stiffness: 260 } }
  },
  glow: {
    channel: "interaction",
    config: { whileHover: { filter: "brightness(1.1)" }, transition: { duration: 0.25 } }
  }
} satisfies Record<string, MotionToken>
