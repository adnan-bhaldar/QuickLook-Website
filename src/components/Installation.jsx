import { motion } from 'framer-motion';
import {  AlertCircle, CheckCircle } from 'lucide-react';
import { steps, requirements } from '../data';

/**
 * Installation guide section
 */
export default function Installation() {
    return (
        <section id="install" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-dark-900 via-dark-950 to-dark-900" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-position-[50px_50px]" />

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
                        Easy Installation
                    </h2>
                    <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                        Get started in minutes. QuickLook integrates seamlessly with Windows File Explorer.
                    </p>
                </motion.div>

                {/* Installation Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    ease: 'easeOut'
                                }}
                                whileHover={{ 
                                    y: -10,
                                    transition: { duration: 0.2, ease: "easeInOut" }
                                }}
                                className="relative group"
                                
                            >
                                {/* Step Number Connector */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-dark-700 to-transparent -ml-3" />
                                )}

                                {/* Card */}
                                <div className="relative backdrop-blur-xl bg-dark-900/50 rounded-2xl border border-dark-800 p-8 h-full transition-all duration-300 hover:border-dark-700 hover:transform  ">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-br from-dark-800 to-dark-900 border-2 border-dark-700 flex items-center justify-center text-white font-bold text-lg shadow-xl">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`inline-flex p-4 rounded-xl bg-linear-to-r ${step.color} mb-6 shadow-lg`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-dark-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* System Requirements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="backdrop-blur-xl bg-dark-900/50 rounded-2xl border border-dark-800 overflow-hidden">
                        <div className="bg-linear-to-r from-primary-500/10 to-primary-600/10 border-b border-dark-800 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-6 h-6 text-primary-400" />
                                <h3 className="text-2xl font-display font-semibold text-white">
                                    System Requirements
                                </h3>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                {requirements.map((requirement, index) => (
                                    <motion.div
                                        key={requirement}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                        </div>
                                        <span className="text-dark-200">{requirement}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-dark-800">
                                <p className="text-dark-400 text-sm">
                                    <strong className="text-dark-300">Note:</strong> Some plugins may have additional requirements.
                                    Check the plugin documentation for specific dependencies.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Troubleshooting Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="text-center mt-12"
                >
                    <p className="text-dark-400 mb-4">
                        Having trouble with installation?
                    </p>
                    <a
                        href="https://github.com/QL-Win/QuickLook/wiki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                    >
                        <span>Check the Documentation</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}