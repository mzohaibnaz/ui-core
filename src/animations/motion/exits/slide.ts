import type { MotionToken } from "../types"

export default {
  down: {
    channel: "lifecycle",
    config: { exit: { y: 20, opacity: 0 }, transition: { duration: 0.2 } }
  }
} satisfies Record<string, MotionToken>
