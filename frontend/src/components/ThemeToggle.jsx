import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5" />
      ) : (
        <HiMoon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
