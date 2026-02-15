# @mzohaibnaz/ui-core

Framework-agnostic foundation for the UI ecosystem.

Provides:
- Motion tokens
- Tailwind component style generators (CVA)
- Theme variables
- Shared utilities

Used by:
- https://github.com/mzohaibnaz/ui-react
- https://github.com/mzohaibnaz/ui-vue

---

## Ecosystem

| Package | Description |
|---|---|
| [ui-core](https://github.com/mzohaibnaz/ui-core) | Design tokens, motion, themes, utilities |
| [ui-react](https://github.com/mzohaibnaz/ui-react) | React adapter |
| [ui-vue](https://github.com/mzohaibnaz/ui-vue) | Vue adapter |

---

## Architecture

```
ui-core/
├─ animations/
│  └─ motion/        # Motion tokens
├─ components/       # Tailwind class generators (CVA)
├─ themes/           # CSS variable themes
└─ utils/            # Shared helpers
```

---

# Components (Tailwind Tokens)

Components here are **style generators**, not UI elements.

### Using a component token

```ts
import { buttonVariants } from "@mzohaibnaz/ui-core/components/button"

const className = buttonVariants({
  variant: "primary",
  size: "md"
})
```

Framework adapters use these classes to render actual components.

---

## Creating a New Component

Example: `components/card.ts`

```ts
import { cva } from "class-variance-authority"

export const cardVariants = cva(
  "rounded-lg border bg-background shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        elevated: "shadow-md"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
```

Export it in `components/index.ts`.

Adapters (React/Vue) will consume this.

---

# Motion System

Motion is exported as composable tokens.

### Usage

```ts
import { hover, press } from "@mzohaibnaz/ui-core/animations/motion/interactions"
```

---

## Creating a New Motion Token

Example: `animations/motion/interactions/fade.ts`

```ts
import type { MotionToken } from "../../types"

export default {
  subtle: {
    channel: "interaction",
    config: {
      whileHover: { opacity: 0.8 },
      transition: { duration: 0.2 }
    }
  }
} satisfies Record<string, MotionToken>
```

Export it in the folder index.

---

## Installation

```
npm install @mzohaibnaz/ui-core
```

---

## Related Repositories

- https://github.com/mzohaibnaz/ui-react
- https://github.com/mzohaibnaz/ui-vue

---

## License

MIT

