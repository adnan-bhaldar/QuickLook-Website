# 🤝 Contributing Guide — QuickLook Website

Thank you for your interest in contributing to the **QuickLook Website** 🎉

This guide will help you get started with contributing in a clean, consistent, and effective way.

> 🔗 **Main Project:** https://github.com/QL-Win/QuickLook

---

## 📌 What You Can Contribute

We welcome contributions of all kinds, including:

- 🐛 Bug fixes
- ✨ UI / UX improvements
- 📖 Documentation improvements
- 🎨 Design enhancements
- ⚡ Performance optimizations
- ♿ Accessibility improvements
- 🔧 Build & tooling improvements

If you're unsure where to start, check existing issues or open a discussion.

---

## 🧰 Tech Stack

The website is built using:

- **React 19**
- **Vite 6**
- **Tailwind CSS v4.1 (Vite plugin approach)**
- **Framer Motion** (animations)
- **Lucide React** (icons)

> ⚠️ No `tailwind.config.js` or `postcss.config.js` is used. All Tailwind configuration lives in CSS via `@theme`.

---

## 🚀 Getting Started

### 1️⃣ Fork the Repository

Click the **Fork** button on GitHub to create your own copy of the repository.

### 2️⃣ Clone Your Fork

```bash
git clone https://github.com/adnan-bhaldar/QuickLook-Website.git
cd QuickLook-Website
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Dev Server

```bash
npm run dev
```

The site should now be running at:

```
http://localhost:5173
```

---

## 🌿 Branching Strategy

Please follow this branching convention:

- `main` → Stable / production-ready code
- `feature/<short-description>` → New features
- `fix/<short-description>` → Bug fixes
- `docs/<short-description>` → Documentation changes

### Example

```bash
git checkout -b feature/hero-animation-improvements
```

---

## ✍️ Code Guidelines

### ✅ General Rules

- Keep components **small and reusable**
- Follow existing **project structure**
- Use **functional React components** only
- Prefer **composition over duplication**

### 🎨 Styling (Tailwind v4.1)

- Use utility classes first
- Reuse existing custom utilities
- Add new tokens inside `@theme` in `index.css`
- Avoid inline styles unless absolutely necessary

### 🧩 Components

- Components live in `src/components/`
- One main component per file
- Use clear, descriptive names

---

## 🎥 Animations

- Use **Framer Motion** for complex animations
- Keep animations subtle and performant
- Avoid unnecessary re-renders

---

## 🧪 Testing Checklist

Before submitting a PR, please verify:

- ✅ `npm run dev` works without errors
- ✅ No console errors or warnings
- ✅ Responsive layout works (mobile → desktop)
- ✅ Dark theme styles are intact
- ✅ Animations are smooth
- ✅ No unused imports or variables

---

## 📝 Commit Message Convention

Please use clear, descriptive commit messages:

```text
feat: add hero section animation
fix: correct navbar spacing on mobile
docs: update README installation steps
style: improve button hover states
```

---

## 🔁 Pull Request Process

1. Push your branch to your fork
2. Open a **Pull Request** to the main repository
3. Clearly describe:
   - What you changed
   - Why you changed it
   - Screenshots or recordings (if UI-related)
4. Wait for review and address feedback if needed

---

## 🐛 Reporting Bugs

If you find a bug:

- Check existing issues first
- If none exist, open a new issue
- Provide:
  - Clear reproduction steps
  - Expected vs actual behavior
  - Screenshots or console errors

---

## 💡 Feature Requests

Have an idea?

- Open an issue labeled **Feature Request**
- Clearly explain the use case and value
- Mockups or examples are highly appreciated

---

## 📜 Code of Conduct

Be respectful, inclusive, and constructive.
Harassment, discrimination, or toxic behavior will not be tolerated.

---

## ❤️ Thanks for Contributing

Every contribution—big or small—helps make **QuickLook** better for everyone.

Happy coding! 🚀

