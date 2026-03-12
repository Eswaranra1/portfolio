import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PORTFOLIO } from '../utils/constants';

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 sm:py-12 px-4 safe-area-inset-bottom">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} {PORTFOLIO.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href={PORTFOLIO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 -m-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href={PORTFOLIO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 -m-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href={`mailto:${PORTFOLIO.email}`}
          className="p-2 -m-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Email"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
