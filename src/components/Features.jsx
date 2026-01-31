import { motion } from 'framer-motion';
import {
    Eye,
    FileImage,
    FileVideo,
    FileText,
    Puzzle,
    Monitor,
    Zap,
    Layers,
    FileCode
} from 'lucide-react';

const features = [
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

/**
 * Features grid section with animated cards
 */
export default function Features() {
    return (
        <section id="features" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-dark-950 via-dark-900 to-dark-950" />

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                        Everything you need to preview files efficiently on Windows.
                        Built with performance and user experience in mind.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: 'easeOut'
                                }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                {/* Card Glow Effect */}
                                <div className={`absolute -inset-0.5 bg-linear-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                {/* Card */}
                                <div className="relative h-full backdrop-blur-xl bg-dark-900/50 rounded-2xl border border-dark-800 group-hover:border-dark-700 p-8 transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${feature.gradient} mb-6 shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-dark-300 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border-2 border-dark-700 group-hover:border-primary-500 flex items-center justify-center transition-colors duration-300">
                                        <div className="w-2 h-2 bg-dark-700 group-hover:bg-primary-500 rounded-full transition-colors duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <p className="text-dark-400 mb-6">
                        Want to add support for more file types?
                    </p>
                    <a
                        href="https://github.com/QL-Win/QuickLook/wiki/Available-Plugins"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                    >
                        <span>Explore Available Plugins</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}