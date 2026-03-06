import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'QuickLook',
  description: 'Bring macOS Quick Look to Windows — instant file previews with Space.',
  lang: 'en-US',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
  ],

  themeConfig: {
    logo: '/favicon.webp',
    siteTitle: 'QuickLook',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features/overview' },
      { text: 'Installation', link: '/guide/installation' },
      {
        text: 'GitHub',
        items: [
          { text: 'Repository', link: 'https://github.com/QL-Win/QuickLook' },
          { text: 'Releases', link: 'https://github.com/QL-Win/QuickLook/releases' },
          { text: 'Issues', link: 'https://github.com/QL-Win/QuickLook/issues' },
          { text: 'Discussions', link: 'https://github.com/QL-Win/QuickLook/discussions' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Overview', link: '/features/overview' },
          { text: 'File Support', link: '/features/file-support' },
          { text: 'Plugins', link: '/features/plugins' },
        ],
      },
      {
        text: 'Resources',
        items: [
          { text: 'System Requirements', link: '/resources/requirements' },
          { text: 'Troubleshooting', link: '/resources/troubleshooting' },
          { text: 'GitHub Repository', link: 'https://github.com/QL-Win/QuickLook', target: '_blank' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QL-Win/QuickLook' },
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: `© ${new Date().getFullYear()} QL-Win · Designed by <a href="https://github.com/adnan-bhaldar" target="_blank" rel="noopener">Adnan Bhaldar</a>`,
    },

    editLink: {
      pattern: 'https://github.com/QL-Win/QuickLook/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})