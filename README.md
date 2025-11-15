# Megazord UI

A modern React UI component library built with TailwindCSS v4 and inspired by shadcn/ui design principles.

## 📦 Packages

This monorepo contains:

- **[@megazord-ui/ui](./packages/ui)** - The core UI component library
- **[playground](./apps/playground)** - Next.js app for component documentation and testing

## ✨ Features

- 🎨 Built with TailwindCSS v4
- 🔧 Customizable theme with CSS variables
- 📦 Tree-shakeable
- 🎯 TypeScript support
- ✅ Tested with Vitest
- 🎭 Multiple variants and sizes
- 📚 MDX documentation

## 🚀 Quick Start

### Installation

```bash
pnpm add @megazord-ui/ui
# or
npm install @megazord-ui/ui
# or
yarn add @megazord-ui/ui
```

### Usage

Import the styles and components:

```tsx
import '@megazord-ui/ui/styles.css';
import { Button } from '@megazord-ui/ui';

function App() {
  return <Button>Click me</Button>;
}
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Quick Start (Running Locally)

```bash
# 1. Clone the repository
git clone https://github.com/gsmeira/megazord-ui.git
cd megazord-ui

# 2. Install dependencies
pnpm install

# 3. Build the UI package (REQUIRED before running playground)
pnpm --filter @megazord-ui/ui build

# 4. Start the playground development server
pnpm dev
```

**Important:** You must build the UI package before running the playground app, otherwise you'll see errors like `Can't resolve '@megazord-ui/ui/styles.css'`.

For detailed development instructions, troubleshooting, and workflows, see the [Development Guide](./DEVELOPMENT.md).

### Common Commands

```bash
# Build all packages
pnpm build

# Run tests
pnpm test

# Run linting
pnpm lint

# Format code
pnpm format

# Start playground (after building UI package)
pnpm dev

# Start Storybook
pnpm storybook

# Clean install (removes lockfile and node_modules, then reinstalls)
pnpm fresh
```

### Project Structure

```
megazord-ui/
├── packages/
│   └── ui/              # UI component library
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── lib/        # Utilities
│       │   └── styles.css  # Theme & styles
│       └── package.json
├── apps/
│   └── playground/      # Next.js documentation app
│       ├── app/
│       │   ├── components/ # Component docs (MDX)
│       │   └── page.tsx
│       └── package.json
└── package.json
```

## 🎨 Theming

The library uses CSS variables for theming. Customize the theme by overriding variables:

```css
@theme {
  --color-primary: 220 90% 56%;
  --color-primary-foreground: 0 0% 100%;
  /* ... other colors */
}
```

See the [theme configuration](./packages/ui/src/styles.css) for all available variables.

## 📚 Components

Currently available components:

- **Button** - Versatile button with multiple variants and sizes

More components coming soon!

## 🧪 Testing

Tests are written using Vitest and React Testing Library:

```bash
# Run tests
pnpm test

# Watch mode in UI package
pnpm --filter @megazord-ui/ui test:watch
```

## 📖 Documentation

Visit the playground app to see live examples and documentation:

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a PR.

## 📄 License

MIT