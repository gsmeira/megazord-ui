# Theming Guide

Megazord UI uses TailwindCSS v4's `@theme` directive for easy theme customization.

## How It Works

The theming system uses CSS variables defined in the `@theme` block. These variables can be easily customized to change the look and feel of all components.

## Available Theme Variables

### Colors

All colors use the HSL color space format: `hue saturation lightness`

```css
@theme {
  /* Background & Foreground */
  --color-background: 0 0% 100%;
  --color-foreground: 222.2 84% 4.9%;

  /* Card */
  --color-card: 0 0% 100%;
  --color-card-foreground: 222.2 84% 4.9%;

  /* Popover */
  --color-popover: 0 0% 100%;
  --color-popover-foreground: 222.2 84% 4.9%;

  /* Primary */
  --color-primary: 222.2 47.4% 11.2%;
  --color-primary-foreground: 210 40% 98%;

  /* Secondary */
  --color-secondary: 210 40% 96.1%;
  --color-secondary-foreground: 222.2 47.4% 11.2%;

  /* Muted */
  --color-muted: 210 40% 96.1%;
  --color-muted-foreground: 215.4 16.3% 46.9%;

  /* Accent */
  --color-accent: 210 40% 96.1%;
  --color-accent-foreground: 222.2 47.4% 11.2%;

  /* Destructive */
  --color-destructive: 0 84.2% 60.2%;
  --color-destructive-foreground: 210 40% 98%;

  /* Borders & Inputs */
  --color-border: 214.3 31.8% 91.4%;
  --color-input: 214.3 31.8% 91.4%;
  --color-ring: 222.2 84% 4.9%;
}
```

### Border Radius

```css
@theme {
  --radius-sm: 0.125rem;
  --radius: 0.5rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
}
```

## Customizing Your Theme

### Method 1: Override in Your CSS File

Create a CSS file in your project and import it after the Megazord UI styles:

```css
@import "@megazord/ui/styles.css";

@theme {
  /* Your custom colors */
  --color-primary: 220 90% 56%;
  --color-primary-foreground: 0 0% 100%;
}
```

### Method 2: Using TailwindCSS Configuration

You can also extend the theme in your `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary))',
        // ... other colors
      }
    }
  }
}
```

## Dark Mode

The library includes automatic dark mode support using the `prefers-color-scheme` media query:

```css
@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: 222.2 84% 4.9%;
    --color-foreground: 210 40% 98%;
    /* ... other dark mode colors */
  }
}
```

### Custom Dark Mode Colors

Override the dark mode colors by adding your own `@media` query:

```css
@media (prefers-color-scheme: dark) {
  @theme {
    --color-primary: 240 100% 70%;
    --color-primary-foreground: 0 0% 10%;
  }
}
```

## Example: Brand Colors

Here's an example of customizing the theme with your brand colors:

```css
@import "@megazord/ui/styles.css";

@theme {
  /* Brand primary color: Blue */
  --color-primary: 220 90% 56%;
  --color-primary-foreground: 0 0% 100%;

  /* Brand secondary color: Purple */
  --color-secondary: 280 70% 60%;
  --color-secondary-foreground: 0 0% 100%;

  /* Accent color: Orange */
  --color-accent: 30 95% 55%;
  --color-accent-foreground: 0 0% 10%;

  /* Rounded corners */
  --radius: 0.75rem;
  --radius-lg: 1rem;
}
```

## Color Format

Colors use the HSL format without the `hsl()` wrapper:

- **H** (Hue): 0-360 degrees
- **S** (Saturation): 0-100%
- **L** (Lightness): 0-100%

Example: `220 90% 56%` = `hsl(220, 90%, 56%)`

This format allows easy manipulation in CSS using `hsl(var(--color-primary))`.

## Tips

1. **Contrast**: Ensure sufficient contrast between foreground and background colors for accessibility
2. **Consistency**: Use the same saturation and lightness values across similar colors for a cohesive look
3. **Testing**: Test your theme in both light and dark modes
4. **Preview**: Use the playground app to preview your theme changes in real-time
