export function mergeMotionProps<T>(list: Partial<T>[]): Partial<T> {
  return list.reduce<Partial<T>>((acc, current) => {
    for (const key in current) {
      const k = key as keyof T

      const value = current[k]
      const existing = acc[k]

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value) &&
        typeof existing === "object" &&
        existing !== null &&
        !Array.isArray(existing)
      ) {
        acc[k] = { ...existing, ...value } as T[typeof k]
      } else {
        acc[k] = value as T[typeof k]
      }
    }
    return acc
  }, {})
}
