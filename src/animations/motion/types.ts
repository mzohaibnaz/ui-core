export type MotionChannel =
  | "lifecycle"
  | "interaction"
  | "passive"
  | "layout"

export type MotionConfig = Record<string, unknown>

export type MotionToken<T = MotionConfig> = {
  channel: MotionChannel
  config: T
}

export type AnimationPropType = MotionToken | MotionToken[]
