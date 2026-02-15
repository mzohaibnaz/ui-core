# @mzohaibnaz/ui-core

Framework-agnostic design system foundation.

This package provides motion tokens, Tailwind variants, themes, and utilities used by framework adapters.

## Ecosystem

| Package | Description |
|---|---|
| [@mzohaibnaz/ui-core](https://github.com/mzohaibnaz/ui-core) | Design tokens, motion system, themes, utilities |
| [@mzohaibnaz/ui-react](https://github.com/mzohaibnaz/ui-react) | React components powered by ui-core |
| [@mzohaibnaz/ui-vue](https://github.com/mzohaibnaz/ui-vue) | Vue components powered by ui-core |

---

## Architecture

```
ui-core/
├─ animations/
│  └─ motion/        # Motion tokens grouped by category
├─ components/       # Tailwind class generators (CVA)
├─ themes/           # CSS variable themes
└─ utils/            # Shared helpers
```

---

## Motion System

```ts
import { hover, press } from "@mzohaibnaz/ui-core/animations/motion/interactions"
import { slideReveal } from "@mzohaibnaz/ui-core/animations/motion/scroll"
```

Example:

```tsx
import { AnimatorMotion, Button } from "@mzohaibnaz/ui-react"
import { hover, press } from "@mzohaibnaz/ui-core/animations/motion/interactions"

<AnimatorMotion animation={[hover.lift, press.base]}>
  <Button>Click me</Button>
</AnimatorMotion>
```

---

## Installation

```bash
npm install @mzohaibnaz/ui-core
```

---

## Related Repositories

- Core: https://github.com/mzohaibnaz/ui-core  
- React: https://github.com/mzohaibnaz/ui-react  
- Vue: https://github.com/mzohaibnaz/ui-vue  

---

## License

MIT
