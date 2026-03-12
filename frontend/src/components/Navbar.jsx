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

const scrollToSection = (hash) => {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(hash);
  };

  const navLinkClass = "text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium min-h-[44px] min-w-[44px] flex items-center justify-center md:min-h-0 md:min-w-0 md:inline-flex";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 safe-area-inset-top"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            to="/"
            className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white min-h-[44px] min-w-[44px] flex items-center md:min-h-0 md:min-w-0"
            aria-label="Home"
          >
            EMES
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={navLinkClass}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 -m-1 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="fixed top-14 sm:top-16 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="block py-4 px-4 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium text-base active:bg-gray-100 dark:active:bg-gray-700"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
