# Storybook Configuration

This directory contains the Storybook configuration for the Megazord UI component library.

## Running Storybook

To start the Storybook development server:

```bash
npm run storybook
```

This will start Storybook on http://localhost:6006

## Building Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

This will create a `storybook-static` directory that can be deployed.

## Configuration Files

- `main.ts` - Main Storybook configuration
- `preview.ts` - Preview configuration and global decorators

## Writing Stories

Stories are located alongside components in the `src/components` directory with the `.stories.tsx` extension.

Example story structure:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './your-component';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Your props here
  },
};
```

## Features

- **Auto-generated documentation**: Using the `autodocs` tag
- **Interactive controls**: Modify props in real-time
- **TailwindCSS support**: Full styling support via preview.ts
- **TypeScript**: Full type safety
