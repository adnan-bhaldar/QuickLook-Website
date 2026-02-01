import { motion } from 'framer-motion';
import { features } from '../data';

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