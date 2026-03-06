# QuickLook – VitePress Documentation Site

Official documentation site for [QuickLook](https://github.com/QL-Win/QuickLook) built with **VitePress 1.x**.

## Quick Start

```bash
npm install
npm run docs:dev
# → http://localhost:5173
```

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Structure

```
docs/
├── .vitepress/
│   ├── config.ts              # Nav, sidebar, theme config
│   └── theme/
│       ├── index.ts           # Registers Vue components
│       ├── custom.css         # Brand colors, glassmorphism, animations
│       └── components/        # Vue SFCs used in markdown pages
│           ├── HomeHero.vue   # Stats + steps + format grid + CTA
│           ├── FeatureGrid.vue
│           ├── FormatTable.vue
│           ├── PluginCard.vue
│           ├── InstallTabs.vue
│           ├── ShortcutRow.vue
│           └── StatsBanner.vue
├── public/
│   ├── logo.webp
│   ├── favicon.ico
│   └── favicon.webp
├── index.md                   # Homepage (layout: home)
├── guide/
│   ├── introduction.md
│   ├── installation.md
│   └── quick-start.md
├── features/
│   ├── overview.md
│   ├── file-support.md
│   └── plugins.md
└── resources/
    ├── requirements.md
    └── troubleshooting.md
```

## Tech Stack

- **VitePress 1.x** — static site generator
- **Tailwind CSS 3** — utility styling in Vue components
- **Vue 3** — custom interactive components (InstallTabs, etc.)
- **Sora** + **JetBrains Mono** — fonts
- **Glassmorphism** — `backdrop-filter: blur` on nav, sidebar, cards
- **Scroll reveal** — IntersectionObserver animations

## License

GPL-3.0