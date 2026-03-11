import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '#hero', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#skills', label: 'Skills' },
  { to: '#experience', label: 'Experience' },
  { to: '#projects', label: 'Projects' },
  { to: '#education', label: 'Education' },
  { to: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-bold text-xl text-gray-900 dark:text-white"
          >
            EMES
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={handleNavClick}
                  className="block py-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
