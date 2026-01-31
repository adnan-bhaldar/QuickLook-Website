import { motion } from 'framer-motion';
import { Download, Github, Star } from 'lucide-react';
import { useVersion } from '../context/VersionContext';
import { formatFileSize, formatRelativeTime } from '../services/githubService';

/**
 * Hero section with animated preview showcase
 */
export default function Hero() {
    const { version, installer, releaseData, isLoading } = useVersion();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-linear-to-br from-dark-950 via-dark-900 to-dark-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]" />
            </div>

            {/* Floating Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
                        >
                            <Star className="w-4 h-4 fill-current" />
                            <span>macOS Quick Look for Windows</span>
                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                            Preview files
                            <br />
                            <span className="bg-linear-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                                instantly
                            </span>
                        </h1>

                        <p className="text-xl text-dark-300 mb-10 leading-relaxed">
                            Press <kbd className="px-3 py-1.5 bg-dark-800 border border-dark-700 rounded-lg text-white font-mono text-sm shadow-lg">Space</kbd> to preview any file without opening it.
                            Just like macOS Quick Look, now on Windows.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {!isLoading && installer && (
                                <motion.a
                                    href={installer.url}
                                    // whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl shadow-2xl shadow-primary-500/50 transition-all duration-200 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <Download className="w-5 h-5 relative z-10" />
                                    <span className="relative z-10">Download v{version}</span>
                                </motion.a>
                            )}

                            {isLoading && (
                                <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark-800 text-dark-400 font-bold rounded-xl">
                                    <div className="w-5 h-5 border-2 border-dark-600 border-t-primary-500 rounded-full animate-spin" />
                                    <span>Loading...</span>
                                </div>
                            )}

                            <motion.a
                                href="https://github.com/QL-Win/QuickLook"
                                target="_blank"
                                rel="noopener noreferrer"
                                // whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-bold rounded-xl border border-dark-700 hover:border-dark-600 transition-all duration-200"
                            >
                                <Github className="w-5 h-5" />
                                <span>View on GitHub</span>
                            </motion.a>
                        </div>

                        {/* Release Info */}
                        {!isLoading && releaseData && installer && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap items-center gap-6 text-sm text-dark-400"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-glow" />
                                    <span>Latest release: {formatRelativeTime(releaseData.publishedAt)}</span>
                                </div>
                                <div>
                                    {formatFileSize(installer.size)}
                                </div>
                                <div>
                                    {installer.downloadCount?.toLocaleString()} downloads
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right Preview Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="relative"
                    >
                        {/* Preview Window */}
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-linear-to-r from-primary-500/30 to-primary-600/30 rounded-3xl blur-3xl animate-pulse" />

                            {/* Window Frame */}
                            <div className="relative backdrop-blur-xl bg-dark-900/90 rounded-2xl border border-dark-700 shadow-2xl overflow-hidden">
                                {/* Title Bar */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-dark-800/50 border-b border-dark-700">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="flex-1 text-center text-dark-400 text-sm font-medium">
                                        QuickLook Preview
                                    </div>
                                </div>

                                {/* Preview Content */}
                                <div className="p-8">
                                    <div className="space-y-4">
                                        {/* File Icons Grid */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {['Image', 'Video', 'PDF'].map((type, index) => (
                                                <motion.div
                                                    key={type}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    className="aspect-square rounded-xl bg-linear-to-br from-dark-800 to-dark-900 border border-dark-700 p-4 flex items-center justify-center group hover:border-primary-500/50 transition-all duration-300"
                                                >
                                                    <div className="text-center">
                                                        <div className="text-4xl mb-2">
                                                            {type === 'Image' && '🖼️'}
                                                            {type === 'Video' && '🎬'}
                                                            {type === 'PDF' && '📄'}
                                                        </div>
                                                        <div className="text-xs text-dark-400 group-hover:text-primary-400 transition-colors">
                                                            {type}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Spacebar Hint */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="flex items-center justify-center gap-2 py-4"
                                        >
                                            <kbd className="px-6 py-3 bg-dark-800 border-2 border-dark-700 rounded-xl text-white font-mono text-lg shadow-lg animate-pulse">
                                                Space
                                            </kbd>
                                            <span className="text-dark-400">Press to preview</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}