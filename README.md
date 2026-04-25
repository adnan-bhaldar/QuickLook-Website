<div align="center">

<img src="docs/public/favicon.webp" width="90" alt="QuickLook Logo" />

# QuickLook Docs

**Official homepage for QuickLook — macOS Quick Look for Windows.**

<br/>

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-quicklookapp.vercel.app-2563eb?style=for-the-badge&logoColor=white)](https://quicklookapp.vercel.app)

<br/>

[![VitePress](https://img.shields.io/badge/VitePress-1.5-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitepress.dev)
[![Vue](https://img.shields.io/badge/Vue-3-42b883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-GPL--3.0-22c55e?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](https://github.com/QL-Win/QuickLook?tab=GPL-3.0-1-ov-file)

</div>

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
│   │   ├── og-image.png
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

| | Tool | Purpose |
|---|---|---|
| <img src="https://vitepress.dev/vitepress-logo-mini.svg" width="20"/> | [VitePress](https://vitepress.dev) | Static site generator |
| <img src="https://vuejs.org/logo.svg" width="20"/> | [Vue 3](https://vuejs.org) | Component framework |
| <img src="https://tailwindcss.com/favicons/favicon-32x32.png" width="20"/> | [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS |
| <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" width="20"/> | [Sora](https://fonts.google.com/specimen/Sora) | UI font |
| <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" width="20"/> | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Code font |
| <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" width="20"/> | [Vercel](https://vercel.com) | Hosting & deployment |

---

## 🤝 Contributing

Contributions are welcome! Please use the appropriate issue template.

| Type | Link |
|---|---|
| 🐛 Bug report | [Report a bug](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=bug_report.md) |
| 💡 Feature request | [Request a feature](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=feature_request.md) |
| 🎨 UI improvement | [Suggest a UI improvement](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=ui_improvement.md) |
