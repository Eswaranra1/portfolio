import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PORTFOLIO } from '../utils/constants';

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} {PORTFOLIO.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a
          href={PORTFOLIO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href={PORTFOLIO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href={`mailto:${PORTFOLIO.email}`}
          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
