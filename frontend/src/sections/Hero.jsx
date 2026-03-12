import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import Button from '../components/Button';
import { PORTFOLIO } from '../utils/constants';

const typingWords = ['Full Stack Developer', 'MERN Stack', 'Problem Solver', 'Tech Enthusiast'];

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 safe-area-inset-bottom"
  >
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary-500 font-mono text-sm md:text-base mb-4">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          {PORTFOLIO.name}
        </h1>
        <div className="h-12 md:h-14 flex items-center justify-center mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-mono"
          >
            {PORTFOLIO.title}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          {PORTFOLIO.location}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        <Button
          href={PORTFOLIO.github}
          variant="primary"
          external
          icon={FaGithub}
        >
          GitHub
        </Button>
        <Button
          href={PORTFOLIO.linkedin}
          variant="outline"
          external
          icon={FaLinkedin}
        >
          LinkedIn
        </Button>
        {PORTFOLIO.resumeUrl ? (
          <Button
            href={PORTFOLIO.resumeUrl}
            variant="outline"
            download={PORTFOLIO.resumeFilename}
            external={PORTFOLIO.resumeUrl.startsWith('http')}
            icon={FaDownload}
          >
            Resume
          </Button>
        ) : (
          <Button
            href="#contact"
            variant="outline"
            icon={FaDownload}
          >
            Resume on Request
          </Button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-20"
      >
        <a
          href="#about"
          className="inline-block text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="Scroll to about"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-current rounded-full mx-auto flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
