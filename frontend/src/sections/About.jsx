import { motion } from 'framer-motion';
import Section from '../components/Section';
import { ABOUT } from '../utils/constants';

const About = () => (
  <Section id="about" title="About Me" subtitle="Get to know me better">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {ABOUT.split('\n\n').map((paragraph, i) => (
          <p
            key={i}
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  </Section>
);

export default About;
