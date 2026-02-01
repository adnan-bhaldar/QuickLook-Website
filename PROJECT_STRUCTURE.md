# QuickLook Landing Page - Project Structure

## 📁 Complete Directory Structure

```
QuickLook-Website/
│
│
├── 📂 node_modules/                   # Dependencies (auto-generated)
│
├── 📂 public/                         # Static assets (empty initially)
│
├── 📂 src/
│   │
│   ├── 📂 components/
│   │   ├── 📄 Navbar.jsx              # Navigation bar
│   │   ├── 📄 Hero.jsx                # Hero section
│   │   ├── 📄 Features.jsx            # Features grid
│   │   ├── 📄 Installation.jsx        # Installation guide
│   │   └── 📄 Footer.jsx              # Footer
│   │
│   ├── 📂 context/
│   │   └── 📄 VersionContext.jsx      # React Context for version data
│   │
│   ├── 📂 data/
│   │   └── 📄 index.js                # NEW - All static content
│   │
│   ├── 📂 hooks/
│   │   └── 📄 useGitHubRelease.js     # Custom hook for GitHub API
│   │
│   ├── 📂 services/
│   │   └── 📄 githubService.js        # GitHub API service
│   │
│   ├── 📄 main.jsx                    # React entry point
│   ├── 📄 App.jsx                     # Main app component
│   └── 📄 index.css                   # Global styles
│
│
├── 📄 .gitignore                      # Git ignore rules
├── 📄 package.json                    # Dependencies and scripts
├── 📄 package-lock.json               # Lock file (auto-generated)
├── 📄 index.html                      # HTML entry point
├── 📄 README.md                       # Project documentation
├── 📄 PROJECT_STRUCTURE.md            # Architecture guide
├── 📄 QUICKSTART.md                   # Quick start guide
└── 📄 CSS_GUIDE.md                    # CSS Guide guide

```

## 🎯 Component Responsibilities

### App.jsx

**Purpose**: Main orchestrator component

- Provides `VersionContext` to all child components
- Uses `useGitHubRelease` hook to fetch release data
- Renders page structure (Navbar, Hero, Features, Installation, Footer)

### Navbar.jsx

**Purpose**: Top navigation bar

- Sticky positioning with glassmorphism effect
- Displays logo and navigation links
- Shows download button with live version number
- Responsive design (collapses on mobile)

### Hero.jsx

**Purpose**: Above-the-fold hero section

- Attention-grabbing headline and value proposition
- Animated preview window showcase
- Primary CTA (download button) with live GitHub data
- Release information (date, size, download count)

### Features.jsx

**Purpose**: Feature showcase grid

- 9 feature cards with icons and descriptions
- Animated entrance effects (staggered)
- Hover effects with gradient borders
- Link to plugins documentation

### Installation.jsx

**Purpose**: Installation guide

- 4-step visual installation process
- System requirements checklist
- Troubleshooting links
- Responsive card layout

### Footer.jsx

**Purpose**: Site footer

- Multiple link columns (Product, Resources, Community)
- Social links and GitHub repository
- Copyright and license information
- Responsive multi-column layout

## 🔧 Services & Utilities

### githubService.js

**Functions**:

- `fetchLatestRelease()`: Fetches release data from GitHub API
- `getPrimaryInstaller()`: Extracts .msi or .exe installer from assets
- `formatFileSize()`: Converts bytes to human-readable format
- `formatRelativeTime()`: Converts date to "X days ago" format

**API Endpoint**: `https://api.github.com/repos/QL-Win/QuickLook/releases/latest`

**Response Structure**:

```javascript
{
  version: "4.4.0",           // Cleaned version number
  tagName: "v4.4.0",          // Original tag
  publishedAt: "2024-01-15",  // Release date
  body: "Release notes...",   // Markdown changelog
  assets: [                   // Download files
    {
      name: "QuickLook-4.4.0.msi",
      url: "https://...",
      size: 15728640,
      downloadCount: 12543,
      contentType: "application/x-msi"
    }
  ]
}
```

## 🪝 Custom Hooks

### useGitHubRelease.js

**Purpose**: Manages GitHub release data fetching and state

**State**:

```javascript
{
  version: string | null,        // "4.4.0"
  releaseData: object | null,    // Full release object
  installer: object | null,      // Primary installer asset
  isLoading: boolean,            // Loading state
  error: string | null           // Error message
}
```

**Features**:

- Automatic fetching on mount
- Cleanup to prevent memory leaks
- Error handling
- Loading states

## 🔄 Context

### VersionContext.jsx

**Purpose**: Share version data across components without prop drilling

**Provides**:

- Version string for display
- Full release data for metadata
- Primary installer for download button
- Loading and error states

**Usage**:

```javascript
import { useVersion } from "../context/VersionContext";

function Component() {
  const { version, installer, isLoading } = useVersion();
  // Use the data...
}
```

## 🎨 Styling System

### Tailwind Configuration

- **Colors**: Custom `primary` and `dark` palettes
- **Fonts**: System font stack (SF Pro inspired)
- **Animations**: Custom keyframes for fade-in, slide-up, float, glow
- **Utilities**: Glass effects, gradient text, custom scrollbars

## 🚀 Build Process

### Development

```bash
npm run dev
```

- Starts Vite dev server on port 5173
- Hot module replacement (HMR)
- Fast refresh for React components

### Production

```bash
npm run build
```

- Minifies JavaScript and CSS
- Optimizes assets
- Generates sourcemaps
- Output to `dist/` folder

## 📊 Data Flow

```
GitHub API
    ↓
githubService.js (fetch + transform)
    ↓
useGitHubRelease.js (state management)
    ↓
VersionContext (global state)
    ↓
Components (consume data)
    → Navbar (download button)
    → Hero (version display, CTA)
    → Installation (release info)
```

## 🎯 Key Features Implementation

### 1. Live Version Display

- Fetched from GitHub on page load
- Displayed in navbar and hero
- Automatic fallback to "Loading..." state

### 2. Download Button

- Direct link to latest .msi/.exe file
- Shows version number dynamically
- Displays file size and download count

### 3. Animations

- Framer Motion for entrance effects
- CSS animations for hover states
- Staggered delays for grid items
- Smooth transitions throughout

### 4. Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid layouts
- Collapsible navigation

### 5. Responsive Design

- Decoupled Content
- Easy Maintenance
- Scalability
- Clean Codebase

## 🔐 Security Considerations

1. **API Calls**: All GitHub API calls use HTTPS
2. **No Secrets**: No API keys required (public repo)
3. **Input Validation**: File sizes and dates are validated
4. **XSS Prevention**: React auto-escapes content
5. **External Links**: Use `rel="noopener noreferrer"`

## ⚡ Performance Optimizations

1. **Code Splitting**: Automatic by Vite
2. **Tree Shaking**: Removes unused code
3. **Asset Optimization**: Images and fonts optimized
4. **Lazy Loading**: Components load on demand
5. **Caching**: Browser caching for static assets

## 🧪 Testing Recommendations

1. **Unit Tests**: Test service functions (formatFileSize, etc.)
2. **Hook Tests**: Test useGitHubRelease with mock data
3. **Component Tests**: Test each component in isolation
4. **Integration Tests**: Test data flow from API to UI
5. **E2E Tests**: Test user flows (download, navigation)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Future Enhancements

1. **Analytics**: Track downloads and user interactions
2. **Internationalization**: Multi-language support
3. **Dark/Light Toggle**: User preference for theme
4. **Search**: Search functionality for features
5. **Blog**: Integration with a blog for updates
6. **Changelog**: Display full release notes
7. **Screenshots**: Add carousel of app screenshots

---

**Last Updated**: January 2026  
**Maintainer**: Adnan Bhaldar & QuickLook Community
