# 🚀 QuickLook Landing Page - Quick Start Guide

## 1️⃣ Setup (2 minutes)

```bash
# Navigate to the project directory
cd QuickLook-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

## 2️⃣ What You'll See

The landing page automatically:

- ✅ Fetches the latest QuickLook version from GitHub
- ✅ Gets the download link for the .msi installer
- ✅ Shows release date and download count
- ✅ Displays all features in an animated grid

## 3️⃣ Key Files to Customize

### Update Content

Edit the components in `src/components/`:

- `Hero.jsx` - Main headline and tagline
- `Features.jsx` - Feature descriptions
- `Installation.jsx` - Setup instructions
- `Footer.jsx` - Links and credits

### Modify API Source

Edit `src/services/githubService.js`:

```javascript
const REPO_OWNER = "QL-Win"; // Change repo owner
const REPO_NAME = "QuickLook"; // Change repo name
```

## 4️⃣ Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

The build outputs to `dist/` folder.

## 5️⃣ Deploy

### Option A: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option B: Netlify

1. Drag `dist/` folder to https://app.netlify.com/drop
2. Done!

### Option C: GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📁 Project Structure Overview

```
src/
├── components/        → UI components (Hero, Features, etc.)
├── hooks/             → useGitHubRelease custom hook
├── context/           → VersionContext for state
├── data/              → All static content
├── services/          → GitHub API integration
├── App.jsx            → Main orchestrator
└── main.jsx           → Entry point
```

## 🎨 Design System

### Colors

- **Primary**: `#0ea5e9` (Blue)
- **Background**: `#020617` (Dark Navy)
- **Text**: `#ffffff` (White)

### Typography

- **Display**: SF Pro Display (System font fallback)
- **Body**: SF Pro Text (System font fallback)
- **Mono**: SF Mono (Code font fallback)

### Spacing

- Uses Tailwind's 4px base unit
- Generous whitespace (py-32 for sections)

## 🔧 Common Customizations

### Add a New Feature Card

Edit `src/components/Features.jsx`:

```javascript
{
  icon: YourIcon,
  title: 'Your Feature',
  description: 'Your description',
  gradient: 'from-blue-500 to-cyan-500',
}
```

### Change Download Button Text

Edit `src/components/Hero.jsx`:

```jsx
<span>Download v{version}</span>
// Change to:
<span>Get QuickLook v{version}</span>
```

### Add Social Links

Edit `src/components/Footer.jsx`:

```javascript
// Add to footerLinks object
Social: [{ name: "Twitter", href: "https://twitter.com/...", external: true }];
```

## 🐛 Troubleshooting

### API Not Loading?

- Check internet connection
- GitHub API has rate limits (60 requests/hour unauthenticated)
- Check browser console for errors

### Styles Not Applying?

- Run `npm run dev` again
- Clear browser cache
- Check Tailwind config syntax

### Build Errors?

- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (needs 18+)

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React 19 Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

## 💡 Tips

1. **Performance**: Images should be optimized (use WebP)
2. **SEO**: Update meta tags in `index.html`
3. **Analytics**: Add Google Analytics to `index.html`
4. **Fonts**: Use system fonts for best performance
5. **Testing**: Test on mobile devices

## 🎯 Next Steps

1. ✅ Customize colors and content
2. ✅ Add your own screenshots/images
3. ✅ Update meta tags for SEO
4. ✅ Test on different devices
5. ✅ Deploy to production

---

**Need Help?** Check the full `README.md` and `PROJECT_STRUCTURE.md` for detailed documentation.
