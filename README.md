# @mzohaibnaz/ui-core

Framework-agnostic **TypeScript-first** foundation for the UI ecosystem.

Provides:
- Motion tokens
- Tailwind component style generators (CVA)
- Theme variables
- Shared utilities
- Strong type inference for framework adapters

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
└─ utils/            # Shared helpers & types
```

## Creating a New Component

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

Export from `./index.ts`.

---


## Usage

ui-core does not render UI.
It provides framework-agnostic style tokens and type-safe variants that can be used in any framework (React, Vue, Svelte, or custom rendering).

Below is an example using JSX (React), but the same pattern applies to any framework.

```ts
import * as React from "react"
import { cn, type VariantProps } from "@mzohaibnaz/ui-core/utils"
import { cardVariants } from "@mzohaibnaz/ui-core/components/card"

export type cardProps = {
  children: React.ReactNode,
  className?: string,
} & VariantProps<typeof cardVariants>

export const Card = ({
  children,
  variant,
  className,
}: cardProps) => {
  return (
    <div className={cn(cardVariants({ variant}), className)}>
      {children}
    </div>
  )
}
```


# Motion System

Motion is exported as composable tokens.

## Creating a New Motion Token

Example: `animations/motion/interactions/fade.ts`

```ts
import type { MotionToken } from "../types"

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


### Usage
ui-core provides framework-agnostic motion tokens.

It does not apply animations directly.
Framework adapters like:

 - https://github.com/mzohaibnaz/ui-react
 - https://github.com/mzohaibnaz/ui-vue

use these tokens through their AnimatorMotion component.

```ts
import { Button, AnimatorMotion } from "@mzohaibnaz/ui-react"
import { hover, press } from '@zohaibnaz/ui-core/animations/motion/interactions'

<AnimatorMotion animation={[hover.lift, press.base]}>
  <Button>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Button>
</AnimatorMotion>
```

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
