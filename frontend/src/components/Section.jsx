import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = '' }) => (
  <section
    id={id}
    className={`py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
  >
    <div className="max-w-6xl mx-auto">
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
