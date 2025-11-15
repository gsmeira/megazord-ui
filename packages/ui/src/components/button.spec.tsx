import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './button';

test.describe('Button Component', () => {
  test.describe('Variants', () => {
    test('should render default variant', async ({ mount }) => {
      const component = await mount(<Button>Default Button</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveText('Default Button');
      await expect(component).toHaveClass(/bg-primary/);
    });

    test('should render destructive variant', async ({ mount }) => {
      const component = await mount(<Button variant="destructive">Destructive</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/bg-destructive/);
    });

    test('should render outline variant', async ({ mount }) => {
      const component = await mount(<Button variant="outline">Outline</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/border/);
    });

    test('should render secondary variant', async ({ mount }) => {
      const component = await mount(<Button variant="secondary">Secondary</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/bg-secondary/);
    });

    test('should render ghost variant', async ({ mount }) => {
      const component = await mount(<Button variant="ghost">Ghost</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/hover:bg-accent/);
    });

    test('should render link variant', async ({ mount }) => {
      const component = await mount(<Button variant="link">Link</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/underline-offset-4/);
    });
  });

  test.describe('Sizes', () => {
    test('should render default size', async ({ mount }) => {
      const component = await mount(<Button>Default Size</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/h-10/);
    });

    test('should render sm size', async ({ mount }) => {
      const component = await mount(<Button size="sm">Small</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/h-9/);
    });

    test('should render lg size', async ({ mount }) => {
      const component = await mount(<Button size="lg">Large</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/h-11/);
    });

    test('should render icon size', async ({ mount }) => {
      const component = await mount(<Button size="icon">🔥</Button>);
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/h-10/);
      await expect(component).toHaveClass(/w-10/);
    });
  });

  test.describe('States', () => {
    test('should handle disabled state', async ({ mount }) => {
      const component = await mount(<Button disabled>Disabled</Button>);
      await expect(component).toBeVisible();
      await expect(component).toBeDisabled();
      await expect(component).toHaveClass(/disabled:pointer-events-none/);
    });

    test('should handle click events', async ({ mount }) => {
      let clicked = false;
      const component = await mount(
        <Button onClick={() => { clicked = true; }}>
          Click Me
        </Button>
      );
      
      await component.click();
      await expect(clicked).toBe(true);
    });

    test('should not trigger click when disabled', async ({ mount }) => {
      let clicked = false;
      const component = await mount(
        <Button disabled onClick={() => { clicked = true; }}>
          Disabled Button
        </Button>
      );
      
      // Try to click (should not work)
      await component.click({ force: true });
      await expect(clicked).toBe(false);
    });
  });

  test.describe('Accessibility', () => {
    test('should have button role', async ({ mount }) => {
      const component = await mount(<Button>Button</Button>);
      await expect(component).toHaveRole('button');
    });

    test('should have type="button" by default', async ({ mount }) => {
      const component = await mount(<Button>Button</Button>);
      await expect(component).toHaveAttribute('type', 'button');
    });

    test('should support custom className', async ({ mount }) => {
      const component = await mount(
        <Button className="custom-class">Custom</Button>
      );
      await expect(component).toHaveClass(/custom-class/);
    });

    test('should be focusable', async ({ mount, page }) => {
      await mount(<Button>Focusable</Button>);
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement?.tagName);
      await expect(focused).toBe('BUTTON');
    });
  });

  test.describe('Interaction', () => {
    test('should handle keyboard navigation (Enter)', async ({ mount, page }) => {
      let clicked = false;
      await mount(
        <Button onClick={() => { clicked = true; }}>
          Press Enter
        </Button>
      );
      
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await expect(clicked).toBe(true);
    });

    test('should handle keyboard navigation (Space)', async ({ mount, page }) => {
      let clicked = false;
      await mount(
        <Button onClick={() => { clicked = true; }}>
          Press Space
        </Button>
      );
      
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await expect(clicked).toBe(true);
    });
  });
});
