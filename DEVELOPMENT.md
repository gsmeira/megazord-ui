# Development Guide

This guide provides step-by-step instructions for setting up and running the Megazord UI monorepo locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 (verify with `node --version`)
- **pnpm** >= 8.0.0 (verify with `pnpm --version`)
  - Install pnpm: `npm install -g pnpm` or visit [pnpm.io](https://pnpm.io/installation)

## Initial Setup

Follow these steps to set up the project for the first time:

### 1. Clone the Repository

```bash
git clone https://github.com/gsmeira/megazord-ui.git
cd megazord-ui
```

### 2. Install Dependencies

Install dependencies for all packages in the monorepo:

```bash
pnpm install
```

This will install dependencies for:
- The root workspace
- `packages/ui` (the UI component library)
- `apps/playground` (the Next.js documentation app)

pnpm uses a content-addressable storage system, which means packages are stored once globally and linked to projects, saving disk space.

### 3. Build the UI Package

**Important:** You must build the UI package before running the playground app.

```bash
pnpm --filter @megazord-ui/ui build
```

Or use the shorthand:

```bash
cd packages/ui
pnpm build
cd ../..
```

This creates the `packages/ui/dist` folder with:
- `index.js` - Compiled component library
- `style.css` - Compiled TailwindCSS styles
- Type definition files (`.d.ts`)

**Why is this necessary?**

The playground app imports `@megazord-ui/ui/styles.css` and components from `@megazord-ui/ui`. These imports resolve to the built files in the `dist` folder, not the source files. Without building first, you'll get the error:

```
Can't resolve '@megazord-ui/ui/styles.css'
```

### 4. Run the Playground Development Server

Now you can start the Next.js playground app:

```bash
pnpm dev
```

This will:
- Start the Next.js dev server on [http://localhost:3000](http://localhost:3000)
- Enable hot module replacement (HMR) for the playground app

Open [http://localhost:3000](http://localhost:3000) in your browser to view the component documentation.

## Development Workflow

### Making Changes to the UI Package

When you make changes to components in `packages/ui/src`:

1. **Rebuild the package:**
   ```bash
   pnpm --filter @megazord-ui/ui build
   ```

2. **Restart the playground dev server** (Ctrl+C, then `pnpm dev`)

Alternatively, you can use watch mode for automatic rebuilding:

```bash
cd packages/ui
pnpm dev
```

This runs Vite in watch mode, automatically rebuilding when source files change.

### Making Changes to the Playground

Changes to files in `apps/playground` will automatically hot-reload without rebuilding the UI package.

## Available Scripts

### Root Level

Run from the repository root:

```bash
# Install all dependencies
pnpm install

# Build all packages
pnpm build

# Run tests for all packages
pnpm test

# Lint all packages
pnpm lint

# Format all code
pnpm format

# Start playground dev server
pnpm dev

# Start Storybook
pnpm storybook
```

### UI Package (`packages/ui`)

Run from `packages/ui` directory or use filters:

```bash
# Build the library
pnpm --filter @megazord-ui/ui build

# Build in watch mode (auto-rebuild on changes)
pnpm --filter @megazord-ui/ui dev

# Run tests
pnpm --filter @megazord-ui/ui test

# Run tests in watch mode
pnpm --filter @megazord-ui/ui test:watch

# Start Storybook
pnpm --filter @megazord-ui/ui storybook

# Lint the code
pnpm --filter @megazord-ui/ui lint
```

### Playground App (`apps/playground`)

Run from `apps/playground` directory or use filters:

```bash
# Start development server
pnpm --filter playground dev

# Build for production
pnpm --filter playground build

# Start production server
pnpm --filter playground start

# Lint the code
pnpm --filter playground lint
```

## Common Issues

### Issue: Can't resolve '@megazord-ui/ui/styles.css'

**Solution:** Build the UI package first:

```bash
pnpm --filter @megazord-ui/ui build
```

### Issue: Changes to UI components not appearing

**Solution:** Rebuild the UI package after making changes:

```bash
pnpm --filter @megazord-ui/ui build
# Then restart the dev server
```

### Issue: Button styles not showing properly in playground

**Solution:** This is already fixed! The playground's `globals.css` uses TailwindCSS v4's `@source` directive to scan both the playground files and the UI package source files. If you encounter this issue:

1. Make sure you've built the UI package first
2. Restart the dev server
3. Clear your browser cache

The configuration in `apps/playground/app/globals.css` includes:
```css
@source "../**/*.{js,ts,jsx,tsx,mdx}";
@source "../../../packages/ui/src/**/*.{js,ts,jsx,tsx}";
```

This tells Tailwind to scan for utility classes in both locations.

### Issue: Type errors in the playground

**Solution:** Ensure the UI package is built, as it generates TypeScript declaration files:

```bash
pnpm --filter @megazord-ui/ui build
```

### Issue: Module not found errors

**Solution:** Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
rm -rf packages/*/node_modules
rm -rf apps/*/node_modules
npm install
npm run build --workspace=@megazord-ui/ui
```

## Architecture Notes

### TailwindCSS v4 Setup

The project uses a specific architecture for TailwindCSS v4:

- **UI Package (`packages/ui/src/styles.css`)**: Contains ONLY theme configuration (@theme directive with CSS variables). It does NOT import Tailwind.
- **Playground (`apps/playground/app/globals.css`)**: Imports Tailwind first, then imports the UI package styles, and uses @source directives to scan for classes.

This separation ensures:
- No duplicate Tailwind imports
- Proper utility class generation
- Clean library architecture (theme config separate from framework)

## Project Structure

```
megazord-ui/
├── packages/
│   └── ui/                    # UI component library
│       ├── src/
│       │   ├── components/    # React components
│       │   ├── lib/          # Utility functions
│       │   ├── test/         # Test setup
│       │   ├── styles.css    # Theme config ONLY (no Tailwind import)
│       │   └── index.ts      # Main entry point
│       ├── dist/             # Built files (generated)
│       ├── vite.config.ts    # Vite configuration
│       ├── vitest.config.ts  # Vitest configuration
│       └── package.json
│
├── apps/
│   └── playground/           # Next.js documentation app
│       ├── app/
│       │   ├── components/   # Component docs (MDX)
│       │   ├── layout.tsx    # Root layout
│       │   ├── page.tsx      # Home page
│       │   └── globals.css   # Global styles
│       ├── components/       # Playground components
│       ├── mdx-components.tsx # MDX component overrides
│       ├── next.config.ts    # Next.js configuration
│       └── package.json
│
├── README.md                 # Project overview
├── DEVELOPMENT.md            # This file
├── THEMING.md               # Theming guide
└── package.json             # Root workspace configuration
```

## Quick Reference

### First-time Setup

```bash
# Clone, install, build, and run
git clone https://github.com/gsmeira/megazord-ui.git
cd megazord-ui
npm install
npm run build --workspace=@megazord-ui/ui
npm run dev
```

### Daily Development

```bash
# Terminal 1: Watch and rebuild UI package
cd packages/ui
npm run dev

# Terminal 2: Run playground
cd ../..
npm run dev
```

### Before Committing

```bash
# Run from root
npm run build      # Build all packages
npm test          # Run all tests
npm run lint      # Lint all code
npm run format    # Format all code
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests for UI package only
npm test --workspace=@megazord-ui/ui

# Run tests in watch mode
cd packages/ui
npm run test:watch
```

### Writing Tests

Tests are located in `packages/ui/src/components/*.test.tsx` and use:
- **Vitest** for test running
- **React Testing Library** for component testing
- **@testing-library/jest-dom** for DOM matchers

Example test:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});
```

## Building for Production

### Build All Packages

```bash
npm run build
```

This builds:
- `packages/ui` → `packages/ui/dist`
- `apps/playground` → `apps/playground/.next`

### Build Individual Packages

```bash
# UI package only
npm run build --workspace=@megazord-ui/ui

# Playground only
npm run build --workspace=playground
```

## Troubleshooting

### Clear All Build Artifacts

```bash
# Remove all build outputs
rm -rf packages/ui/dist
rm -rf apps/playground/.next

# Rebuild
npm run build
```

### Reset Everything

```bash
# Remove all dependencies and build artifacts
rm -rf node_modules package-lock.json
rm -rf packages/*/node_modules packages/*/dist
rm -rf apps/*/node_modules apps/*/.next

# Reinstall and rebuild
npm install
npm run build --workspace=@megazord-ui/ui
```

## Getting Help

- Check the [README](./README.md) for project overview
- Check the [THEMING](./THEMING.md) guide for theme customization
- Visit the [playground](http://localhost:3000) for component examples
- Open an issue on GitHub for bugs or questions
