import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import Section from '../components/Section';
import { EDUCATION } from '../utils/constants';

const Education = () => (
  <Section id="education" title="Education" subtitle="My academic background">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary-500/10">
            <HiAcademicCap className="w-8 h-8 text-primary-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {EDUCATION.degree} - {EDUCATION.field}
            </h3>
            <p className="text-primary-500 font-semibold mt-1">{EDUCATION.institution}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              CGPA: {EDUCATION.cgpa} • {EDUCATION.period}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </Section>
);

export default Education;
