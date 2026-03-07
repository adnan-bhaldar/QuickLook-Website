# QuickLook Docs

Official documentation website for [QuickLook](https://github.com/adnan-bhaldar/QuickLook-Website) — bringing macOS Quick Look to Windows.

Built with [VitePress](https://vitepress.dev) + [Tailwind CSS v4](https://tailwindcss.com) + Vue 3.

🌐 **Live site:** [https://quicklookapp.vercel.app](https://https://quicklookapp.vercel.app)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

---

## 📁 File Structure

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md           # Bug report template
│   │   ├── feature_request.md      # Feature request template
│   │   └── ui_improvement.md       # UI/UX improvement template
│   ├── workflows/
│   │   └── labeler.yml             # Auto-label workflow
│   ├── labeler.yml                 # Label rules config
│   └── PULL_REQUEST_TEMPLATE.md    # PR template
│
├── docs/
│   ├── .vitepress/
│   │   ├── theme/
│   │   │   ├── components/
│   │   │   │   ├── ChangelogViewer.vue   # Fetches live changelog from GitHub
│   │   │   │   ├── FeatureGrid.vue       # Features overview grid
│   │   │   │   ├── FormatTable.vue       # Supported file formats table
│   │   │   │   ├── HomeHero.vue          # Homepage hero with stats & CTA
│   │   │   │   ├── InstallTabs.vue       # Installation method tabs
│   │   │   │   ├── PluginCard.vue        # Plugin gallery cards
│   │   │   │   ├── ShortcutRow.vue       # Keyboard shortcuts display
│   │   │   │   └── StatsBanner.vue       # GitHub stars/forks stats
│   │   │   ├── composables/
│   │   │   │   ├── useRelease.ts         # Fetches latest GitHub release
│   │   │   │   └── useRepoStats.ts       # Fetches repo stars & forks
│   │   │   ├── custom.css               # Custom theme styles
│   │   │   └── index.ts                 # Theme entry — registers components
│   │   └── config.ts                    # VitePress site config
│   │
│   ├── features/
│   │   ├── file-support.md          # Supported file formats
│   │   ├── overview.md              # Features overview
│   │   └── plugins.md               # Plugin system & gallery
│   │
│   ├── guide/
│   │   ├── installation.md          # Installation guide
│   │   ├── introduction.md          # What is QuickLook?
│   │   └── quick-start.md           # Quick start guide
│   │
│   ├── resources/
│   │   ├── changelog.md             # Live changelog (fetched from GitHub)
│   │   ├── requirements.md          # System requirements
│   │   └── troubleshooting.md       # Common issues & fixes
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── favicon.webp
│   │   └── logo.webp
│   │
│   └── index.md                     # Homepage
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [VitePress](https://vitepress.dev) | Static site generator |
| [Vue 3](https://vuejs.org) | Component framework |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS |
| [Sora](https://fonts.google.com/specimen/Sora) | UI font |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Code font |
| [Vercel](https://vercel.com) | Hosting & deployment |

---

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guidelines](.github/PULL_REQUEST_TEMPLATE.md) and use the appropriate issue template.

- 🐛 [Report a bug](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=feature_request.md)
- 🎨 [Suggest a UI improvement](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=ui_improvement.md)

---

## 📄 License

This documentation site is open source. QuickLook itself is licensed under [GPL-3.0](https://github.com/QL-Win/QuickLook?tab=GPL-3.0-1-ov-file#readme).