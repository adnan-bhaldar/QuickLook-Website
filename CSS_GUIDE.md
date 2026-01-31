# 🎨 Tailwind CSS v4.1 Configuration Guide

## Complete `index.css` Structure Explained

This guide explains every section of the `src/index.css` file for Tailwind CSS v4.1.

---

## 📋 Table of Contents

1. [Import Statement](#import-statement)
2. [Theme Configuration](#theme-configuration)
3. [Keyframe Animations](#keyframe-animations)
4. [Base Layer](#base-layer)
5. [Components Layer](#components-layer)
6. [Utilities Layer](#utilities-layer)
7. [Usage Examples](#usage-examples)

---

## 1. Import Statement

```css
@import "tailwindcss";
```

**What it does:**

- Replaces ALL old `@tailwind` directives
- Single line imports everything you need
- No more `@tailwind base`, `@tailwind components`, `@tailwind utilities`

**Old way (v3):**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**New way (v4.1):**

```css
@import "tailwindcss";
```

---

## 2. Theme Configuration

### @theme Block

```css
@theme {
  /* Your custom design tokens */
}
```

**Purpose:** Define all custom colors, fonts, spacing, animations, etc.

### Custom Colors

```css
@theme {
  --color-primary-500: #0ea5e9;
  --color-dark-950: #020617;
}
```

**Usage in JSX:**

```jsx
<div className="bg-primary-500 text-dark-950">Hello</div>
```

**Color Naming Convention:**

- `--color-{name}-{shade}`
- Shade: 50 (lightest) to 950 (darkest)
- Examples: `primary-500`, `dark-700`, `accent-300`

### Full Color Palette

```css
@theme {
  /* Primary color (50-950) */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9; /* Main shade */
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;
  --color-primary-950: #082f49;
}
```

### Custom Fonts

```css
@theme {
  --font-display: ui-sans-serif, system-ui, sans-serif;
  --font-body: ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, "Courier New", monospace;
}
```

**Usage:**

```jsx
<h1 className="font-display">Heading</h1>
<p className="font-body">Body text</p>
<code className="font-mono">Code</code>
```

### Custom Animations

```css
@theme {
  --animate-fade-in: fade-in 0.6s ease-out;
  --animate-slide-up: slide-up 0.6s ease-out;
  --animate-float: float 6s ease-in-out infinite;
}
```

**Usage:**

```jsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-up">Slides up</div>
<div className="animate-float">Floats</div>
```

### Custom Spacing

```css
@theme {
  --spacing-18: 4.5rem; /* 72px */
  --spacing-88: 22rem; /* 352px */
  --spacing-100: 25rem; /* 400px */
}
```

**Usage:**

```jsx
<div className="p-18">Padding 72px</div>
<div className="mt-88">Margin top 352px</div>
```

### Custom Border Radius

```css
@theme {
  --radius-4xl: 2rem; /* 32px */
  --radius-5xl: 2.5rem; /* 40px */
}
```

**Usage:**

```jsx
<div className="rounded-4xl">Very rounded</div>
```

### Custom Shadows

```css
@theme {
  --shadow-glow: 0 0 20px rgba(14, 165, 233, 0.5);
  --shadow-glow-lg: 0 0 40px rgba(14, 165, 233, 0.6);
}
```

**Usage:**

```jsx
<div className="shadow-glow">Glowing box</div>
```

---

## 3. Keyframe Animations

Define reusable animations:

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

**Connect to theme:**

```css
@theme {
  --animate-fade-in: fade-in 0.6s ease-out;
  --animate-slide-up: slide-up 0.6s ease-out;
  --animate-float: float 6s ease-in-out infinite;
}
```

**Usage:**

```jsx
<div className="animate-fade-in">I fade in</div>
<div className="animate-slide-up">I slide up</div>
<div className="animate-float">I float forever</div>
```

---

## 4. Base Layer

Apply styles to HTML elements globally:

```css
@layer base {
  * {
    border-color: theme("colors.dark.700");
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-dark-950 text-white font-body;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-display;
  }

  ::selection {
    background-color: rgba(14, 165, 233, 0.3);
    color: white;
  }
}
```

**What it does:**

- Applies to ALL instances of elements
- Sets default styles
- No class names needed

---

## 5. Components Layer

Reusable component classes:

```css
@layer components {
  .glass-card {
    background: rgba(15, 23, 42, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .gradient-text {
    background: linear-gradient(to right, #38bdf8, #0ea5e9);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .btn-primary {
    @apply px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600
           hover:from-primary-600 hover:to-primary-700
           text-white font-semibold rounded-xl
           shadow-lg transition-all duration-200;
  }
}
```

**Usage:**

```jsx
<div className="glass-card">Glassmorphism</div>
<h1 className="gradient-text">Gradient Text</h1>
<button className="btn-primary">Click Me</button>
```

---

## 6. Utilities Layer

One-off utility classes:

```css
@layer utilities {
  .glass {
    background: rgba(15, 23, 42, 0.7);
    backdrop-filter: blur(12px);
  }

  .text-gradient {
    background: linear-gradient(to right, #38bdf8, #0ea5e9);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    @apply bg-dark-900 rounded-full;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    @apply bg-dark-700 rounded-full hover:bg-dark-600;
  }
}
```

**Usage:**

```jsx
<div className="glass">Glassmorphism effect</div>
<h1 className="text-gradient">Gradient text</h1>
<div className="custom-scrollbar overflow-y-auto">
  Scrollable content
</div>
```

---

## 7. Usage Examples

### Example 1: Custom Color

**Define:**

```css
@theme {
  --color-brand-500: #ec4899;
}
```

**Use:**

```jsx
<button className="bg-brand-500 hover:bg-brand-600">Click</button>
```

### Example 2: Custom Font

**Define:**

```css
@theme {
  --font-heading: "Poppins", sans-serif;
}
```

**Use:**

```jsx
<h1 className="font-heading text-4xl">Big Heading</h1>
```

### Example 3: Custom Animation

**Define animation:**

```css
@keyframes bounce-in {
  0% {
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
```

**Connect to theme:**

```css
@theme {
  --animate-bounce-in: bounce-in 0.5s ease-out;
}
```

**Use:**

```jsx
<div className="animate-bounce-in">I bounce in!</div>
```

### Example 4: Glassmorphism Card

**Define component:**

```css
@layer components {
  .card-glass {
    @apply backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6;
  }
}
```

**Use:**

```jsx
<div className="card-glass">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

---

## 🎨 Complete Template

Here's a complete `index.css` template you can customize:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-primary-500: #0ea5e9;
  --color-accent-500: #ec4899;

  /* Fonts */
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;

  /* Animations */
  --animate-fade-in: fade-in 0.6s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@layer base {
  body {
    @apply bg-gray-950 text-white font-body;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-semibold transition-all;
  }

  .btn-primary {
    @apply btn bg-primary-500 hover:bg-primary-600 text-white;
  }
}

@layer utilities {
  .glass {
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.1);
  }
}
```

---

## 📚 Quick Reference

### Theme Variables

| Type      | Format                   | Example               |
| --------- | ------------------------ | --------------------- |
| Color     | `--color-{name}-{shade}` | `--color-primary-500` |
| Font      | `--font-{name}`          | `--font-display`      |
| Animation | `--animate-{name}`       | `--animate-fade-in`   |
| Spacing   | `--spacing-{size}`       | `--spacing-18`        |
| Radius    | `--radius-{size}`        | `--radius-4xl`        |

### Layers

| Layer        | Purpose             | Example      |
| ------------ | ------------------- | ------------ |
| `base`       | Element defaults    | `body { }`   |
| `components` | Reusable components | `.btn { }`   |
| `utilities`  | One-off utilities   | `.glass { }` |

---

## ✅ Best Practices

1. **Use HEX colors** - They're easier than OKLCH for most developers
2. **Define colors in complete palettes** - 50-950 shades
3. **Use system fonts** - Better performance
4. **Group related properties** - Keep theme organized
5. **Comment your code** - Future you will thank you
6. **Use @apply sparingly** - Prefer utility classes in JSX

---

## 🚀 Next Steps

1. Copy the template above
2. Customize colors, fonts, animations
3. Add your own components
4. Create utility classes as needed
5. Test in browser

**Ready to customize?** Edit `src/index.css` and start building! 🎨
