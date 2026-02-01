import { motion } from 'framer-motion';
import { Github, Heart, ExternalLink } from 'lucide-react';
import { footerLinks } from '../data';


/**
 * Footer component with links and credits
 */
export default function Footer() {
    return (
        <footer className="relative border-t border-dark-800 bg-dark-950">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <img
                                src="/logo.webp"
                                alt="QuickLook Logo"
                                className="w-10 h-10 rounded-xl object-cover shadow-lg"
                            />
                            <div>
                                <h3 className="text-white font-display font-semibold text-xl">
                                    QuickLook
                                </h3>
                                <p className="text-dark-400 text-sm">for Windows</p>
                            </div>
                        </motion.div>

                        <p className="text-dark-300 leading-relaxed mb-6">
                            Bring macOS Quick Look feature to Windows.
                            Press spacebar to preview any file instantly.
                        </p>

                        <motion.a
                            href="https://github.com/adnan-bhaldar/QuickLook-Website"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-xl border border-dark-700 hover:border-dark-600 transition-all duration-200"
                        >
                            <Github className="w-4 h-4" />
                            <span>Star on GitHub</span>
                        </motion.a>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h4 className="text-white font-display font-semibold mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target={link.external ? '_blank' : undefined}
                                            rel={link.external ? 'noopener noreferrer' : undefined}
                                            className="text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span>{link.name}</span>
                                            {/* {link.external && (
                                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )} */}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="pt-8 border-t border-dark-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-1 text-dark-400 text-sm">
                            <span>Made with</span>
                            {/* <Heart className="w-4 h-4 text-red-500 fill-current" /> */}
                            ❤️
                            <span>by <a href='https://github.com/adnan-bhaldar' target='_blank' className='text-primary-400 hover:text-primary-300 transition-colors'>Adnan Bhaldar</a> & QuickLook contributors.</span>
                        </div>

                        <div className="flex items-center gap-6 text-dark-400 text-sm">
                            <span>&copy; {new Date().getFullYear()} QuickLook</span>
                            <a
                                href="https://opensource.org/license/GPL-3.0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-400 transition-colors"
                            >
                                GPL-3.0 License
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}