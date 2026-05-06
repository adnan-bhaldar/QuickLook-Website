# Contributing to QuickLook Docs

Thank you for your interest in contributing! This guide will help you get started.

---

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Issue Templates](#issue-templates)
- [Code Style](#code-style)

---

## 🚀 Getting Started

1. **Fork** the repository
2. **Clone** your fork
   ```bash
   git clone https://github.com/YOUR_USERNAME/QuickLook-Website.git
   cd QuickLook-Website
   ```
3. **Install** dependencies
   ```bash
   npm install
   ```
4. **Start** the dev server
   ```bash
   npm run docs:dev
   ```

---

## 🛠️ Development Setup

| Requirement | Version |
|---|---|
| Node.js | 20.x or higher |
| npm | 9.x or higher |

The site runs on **VitePress** + **Tailwind CSS v4** + **Vue 3**. Hot reload is enabled by default during development.

---

## ✏️ Making Changes

- **Content changes** — edit the `.md` files inside `docs/`
- **Component changes** — edit `.vue` files inside `docs/.vitepress/theme/components/`
- **Style changes** — edit `docs/.vitepress/theme/custom.css`
- **Config changes** — edit `docs/.vitepress/config.ts`

Please keep changes focused — one fix or feature per PR.

---

## 📬 Submitting a Pull Request

1. Create a new branch from `main`
   ```bash
   git checkout -b fix/your-fix-name
   ```
2. Make your changes and commit
   ```bash
   git add .
   git commit -m "fix: describe your change"
   ```
3. Push to your fork
   ```bash
   git push origin fix/your-fix-name
   ```
4. Open a Pull Request against `main` on this repo

---

## 🐛 Issue Templates

Use the appropriate template when opening an issue:

| Type | Template |
|---|---|
| 🐛 Bug report | [bug_report.md](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=bug_report.md) |
| 💡 Feature request | [feature_request.md](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=feature_request.md) |
| 🎨 UI improvement | [ui_improvement.md](https://github.com/adnan-bhaldar/QuickLook-Website/issues/new?template=ui_improvement.md) |

---

## 🎨 Code Style

- Use **Sora** font classes and VitePress CSS variables — avoid hardcoded colors
- Follow existing component structure in `.vue` files
- Keep scoped styles inside `<style scoped>`
- Use `onMounted` for any browser API access (`document`, `window`)
- Commit messages follow the format: `type: short description`
  - `feat:` new feature
  - `fix:` bug fix
  - `style:` CSS/design changes
  - `docs:` content or README changes
  - `refactor:` code restructure

---

<!-- <div align="center">

Made with ❤️ by [Adnan Bhaldar](https://github.com/adnan-bhaldar)

</div> -->
