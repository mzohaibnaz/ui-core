import type { MotionToken } from "../types"

export default {
  up: {
    channel: "lifecycle",
    config: { initial: { y: 24, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: "spring", stiffness: 260 } }
  },
  right: {
    channel: "lifecycle",
    config: { initial: { x: -24, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { type: "spring", stiffness: 260 } }
  }
} satisfies Record<string, MotionToken>
