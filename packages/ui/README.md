# @megazord/ui

A React UI component library built with TailwindCSS v4 and inspired by shadcn/ui design principles.

## Features

- 🎨 Built with TailwindCSS v4
- 🔧 Customizable theme with CSS variables
- 📦 Tree-shakeable
- 🎯 TypeScript support
- ✅ Tested with Vitest
- 🎭 Multiple variants and sizes

## Installation

```bash
npm install @megazord/ui
```

## Usage

Import the styles in your app:

```tsx
import '@megazord/ui/styles.css';
```

Use the components:

```tsx
import { Button } from '@megazord/ui';

function App() {
  return (
    <Button variant="default" size="default">
      Click me
    </Button>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

**Variants:**
- `default` - Primary button style
- `destructive` - For destructive actions
- `outline` - Outlined button
- `secondary` - Secondary button style
- `ghost` - Ghost button (transparent)
- `link` - Link-styled button

**Sizes:**
- `default` - Standard size
- `sm` - Small
- `lg` - Large
- `icon` - Square button for icons

## Theming

The library uses CSS variables for theming. You can customize the theme by overriding the CSS variables in your app:

```css
@theme {
  --color-primary: 220 90% 56%;
  --color-primary-foreground: 0 0% 100%;
  /* ... other colors */
}
```

## Development

```bash
# Install dependencies (from monorepo root)
pnpm install

# Run tests
pnpm test

# Build
pnpm build

# Build in watch mode
pnpm dev

# Lint
pnpm lint

# Storybook
pnpm storybook          # Start Storybook dev server
pnpm build-storybook    # Build static Storybook
```

## Storybook

Interactive component documentation is available via Storybook. Run `pnpm storybook` to explore components with live examples, interactive controls, and auto-generated documentation.

Visit http://localhost:6006 after starting Storybook to see:
- Component variations and examples
- Interactive prop controls
- Auto-generated documentation
- Code snippets
