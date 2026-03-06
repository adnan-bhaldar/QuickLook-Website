```

quicklook-docs/
│
├── package.json                          # npm scripts + dependencies (vitepress, tailwind, etc.)
├── tailwind.config.cjs                   # Tailwind content paths + dark mode config
├── README.md                             # Setup & run instructions
│
└── docs/
    │
    ├── index.md                          # 🏠 Homepage (layout: home — hero + features grid)
    │
    ├── .vitepress/
    │   │
    │   ├── config.ts                     # ⚙️  VitePress config (nav, sidebar, TOC, head tags)
    │   │
    │   └── theme/
    │       ├── index.ts                  # Theme entry — extends DefaultTheme, registers components
    │       ├── custom.css                # Brand colors, glassmorphism, fonts, animations, overrides
    │       │
    │       └── components/              # Vue 3 components embedded in markdown pages
    │           ├── HomeHero.vue          # Stats banner + 3-step how-it-works + format chips + CTA
    │           ├── StatsBanner.vue       # 4-stat glass cards (stars, forks, formats, free)
    │           ├── FeatureGrid.vue       # 6-card feature grid with icons
    │           ├── FormatTable.vue       # File format categories grid with extensions
    │           ├── InstallTabs.vue       # Tabbed install panel (Store / GitHub / WinGet/Scoop)
    │           ├── PluginCard.vue        # Plugin gallery grid cards with links
    │           └── ShortcutRow.vue       # Keyboard shortcuts two-column grid
    │
    ├── guide/                            # "Getting Started" sidebar section
    │   ├── introduction.md               # What is QuickLook, why use it, feature highlights
    │   ├── installation.md               # InstallTabs component + system requirements table
    │   └── quick-start.md                # First preview steps + ShortcutRow + customisation
    │
    ├── features/                         # "Features" sidebar section
    │   ├── overview.md                   # Core/advanced features, comparison table, shortcuts
    │   ├── file-support.md               # FormatTable component + plugin-extended formats
    │   └── plugins.md                    # PluginCard gallery + install steps + build guide
    │
    ├── resources/                        # "Resources" sidebar section
    │   ├── requirements.md               # Min/recommended specs + codec requirements
    │   └── troubleshooting.md            # Common issues and fixes
    │
    └── public/                           # Static assets served at root
        ├── logo.webp                      # QuickLook logo (cobalt blue, used in nav)
        ├── favicon.ico
        └── favicon.webp                  # Browser tab favicon

        ```