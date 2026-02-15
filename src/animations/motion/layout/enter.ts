import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: {
      initial: {
        opacity: 0,
        y: 18,
        filter: "blur(8px)"
      },
      animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      },
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] // smooth deceleration curve
      }
    }
  },

  soft: {
    channel: "lifecycle",
    config: {
      initial: {
        opacity: 0,
        y: 12,
        filter: "blur(4px)"
      },
      animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      },
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    }
  }
} satisfies Record<string, MotionToken>
