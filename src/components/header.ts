import { cva } from "../utils/cva"

export const headerBaseStyle = `
  w-full flex items-center justify-between
  bg-background text-foreground border-border

  [&>div:first-child]:flex
  [&>div:first-child]:items-center
  [&>div:first-child]:shrink-0

  [&>div:last-child]:flex
  [&>div:last-child]:items-center
  [&>div:last-child]:justify-end
  [&>div:last-child]:flex-1
  [&>div:last-child]:min-w-0
  [&>div:last-child]:gap-4
`

export const headerVariants = cva(
  headerBaseStyle,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        card: "bg-card text-card-foreground",
        popover: "bg-popover text-popover-foreground",
        sidebar: "bg-sidebar text-sidebar-foreground",
      },
      size: {
        sm: "h-12 px-3",
        md: "h-14 px-4",
        lg: "h-16 px-6",
      },
      bordered: {
        true: "border-b",
        false: "",
      },
      elevated: {
        true: "shadow-sm",
        false: "",
      },
      sticky: {
        true: "sticky top-0 z-40",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      bordered: true,
      elevated: false,
      sticky: false,
    },
  }
)
