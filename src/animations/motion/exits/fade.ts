import type { MotionToken } from "../types"

export default {
  base: {
    channel: "lifecycle",
    config: { exit: { opacity: 0 }, transition: { duration: 0.2 } }
  }
} satisfies Record<string, MotionToken>
