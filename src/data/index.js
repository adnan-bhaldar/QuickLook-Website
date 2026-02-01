import {
    Eye,
    FileImage,
    FileVideo,
    FileText,
    Puzzle,
    Monitor,
    Zap,
    Layers,
    FileCode,
    Download,
    Play,
    Settings,
    CheckCircle
} from 'lucide-react';

// ============================================
// FEATURES DATA
// ============================================

export const features = [
    {
        icon: Eye,
        title: 'Instant Preview',
        description: 'Press spacebar to preview any file instantly, just like macOS Quick Look. No waiting, no launching heavy applications.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: FileImage,
        title: 'Images & Photos',
        description: 'Support for all common image formats including PNG, JPEG, GIF, WebP, TIFF, and RAW formats with EXIF data display.',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: FileVideo,
        title: 'Video Playback',
        description: 'Preview videos with native controls. Supports MP4, MKV, AVI, and many other formats with hardware acceleration.',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        icon: FileText,
        title: 'Documents',
        description: 'View PDFs, Markdown, plain text, HTML, and source code with syntax highlighting. Perfect for developers and writers.',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        icon: Puzzle,
        title: 'Plugin System',
        description: 'Extensible architecture with plugins for Office documents, EPUB books, archives, and more. Community-driven support.',
        gradient: 'from-yellow-500 to-amber-500',
    },
    {
        icon: Monitor,
        title: 'HiDPI Support',
        description: 'Crystal-clear rendering on high-resolution displays. Optimized for 4K monitors and modern Windows scaling.',
        gradient: 'from-indigo-500 to-blue-500',
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Optimized for performance with minimal resource usage. Preview files in milliseconds without slowing down your system.',
        gradient: 'from-pink-500 to-rose-500',
    },
    {
        icon: Layers,
        title: 'Archive Support',
        description: 'Browse ZIP, RAR, 7Z, and other archive formats without extracting. Navigate through folders with ease.',
        gradient: 'from-teal-500 to-cyan-500',
    },
    {
        icon: FileCode,
        title: 'Code Highlighting',
        description: 'Syntax highlighting for 100+ programming languages. Perfect for quickly reviewing code files.',
        gradient: 'from-violet-500 to-purple-500',
    },
];

// ============================================
// FOOTER LINKS
// ============================================

export const footerLinks = {
    Product: [
        { name: 'Features', href: '#features' },
        { name: 'Installation', href: '#install' },
        { name: 'Plugins', href: 'https://github.com/QL-Win/QuickLook/wiki/Available-Plugins', external: true },
    ],
    Resources: [
        { name: 'Documentation', href: 'https://github.com/QL-Win/QuickLook/wiki', external: true },
        { name: 'GitHub', href: 'https://github.com/QL-Win/QuickLook', external: true },
        { name: 'Report Issue', href: 'https://github.com/QL-Win/QuickLook/issues', external: true },
    ],
    Community: [
        { name: 'Discussions', href: 'https://github.com/QL-Win/QuickLook/discussions', external: true },
        { name: 'Contribute', href: 'https://github.com/QL-Win/QuickLook/blob/master', external: true },
        { name: 'License', href: 'https://opensource.org/license/GPL-3.0', external: true },
    ],
};

// ============================================
// INSTALLATION STEPS
// ============================================

export const steps = [
    {
        icon: Download,
        title: 'Download the Installer',
        description: 'Get the latest .msi installer from the download button above or from the GitHub releases page.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Play,
        title: 'Run the Installer',
        description: 'Double-click the downloaded .msi file and follow the installation wizard. Administrator privileges may be required.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Settings,
        title: 'Configure (Still in development)',
        description: 'Right-click the QuickLook icon in the system tray to customize keyboard shortcuts, appearance, and supported file types.',
        color: 'from-orange-500 to-red-500',
    },
    {
        icon: CheckCircle,
        title: 'Start Previewing',
        description: 'Select any file in File Explorer and press the spacebar. QuickLook will instantly show a preview window.',
        color: 'from-green-500 to-emerald-500',
    },
];

// ============================================
// SYSTEM REQUIREMENTS
// ============================================

export const requirements = [
    'Windows 10 version 1903 or later',
    'Windows 11 (all versions)',
    '.NET Framework 4.8 or later',
    '~50 MB of disk space',
];