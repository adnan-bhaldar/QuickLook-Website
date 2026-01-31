import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';
import { useVersion } from '../context/VersionContext';

/**
 * Navigation bar component with glass-morphism effect
 */
export default function Navbar() {
  const { version, installer } = useVersion();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark-950/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
          >
            <img
              src="/logo.webp"
              alt="QuickLook Logo"
              className="w-10 h-10 rounded-xl object-cover shadow-lg"
            />
            <div>
              <h1 className="text-white font-display font-semibold text-xl">
                QuickLook
              </h1>
              <p className="text-dark-400 text-xs">for Windows</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a
              href="#install"
              className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Install
            </a>
            <a
              href="https://github.com/QL-Win/QuickLook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-300 hover:text-white transition-colors duration-200 font-medium flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Download Button */}
          {/* {installer && (
            <motion.a
              href={installer.url}
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download {version && `v${version}`}</span>
            </motion.a>
          )} */}
        </div>
      </div>
    </motion.nav>
  );
}