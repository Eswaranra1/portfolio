import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import Section from '../components/Section';
import { EDUCATION } from '../utils/constants';

const Education = () => (
  <Section id="education" title="Education" subtitle="My academic background">
    <div className="space-y-6 max-w-2xl">
      {EDUCATION.map((edu, index) => (
        <motion.div
          key={edu.institution + edu.period}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary-500/10 shrink-0">
                <HiAcademicCap className="w-8 h-8 text-primary-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.degree} {edu.field && ` in ${edu.field}`}
                </h3>
                <p className="text-primary-500 font-semibold mt-1">{edu.institution}</p>
                {edu.location && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{edu.location}</p>
                )}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {edu.cgpa ? `CGPA: ${edu.cgpa} • ` : ''}{edu.period}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Education;
