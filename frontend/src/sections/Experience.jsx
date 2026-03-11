import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';
import Section from '../components/Section';
import { EXPERIENCE } from '../utils/constants';

const Experience = () => (
  <Section id="experience" title="Experience" subtitle="My professional journey">
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />
      <div className="space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className={`relative flex gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="flex-1 md:max-w-[calc(50%-2rem)]" />
            <div className="flex-1 md:max-w-[calc(50%-2rem)]">
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="absolute -left-4 md:left-1/2 top-8 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center -translate-x-1/2">
                  <HiBriefcase className="w-4 h-4 text-white" />
                </div>
                <div className="pl-4 md:pl-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-primary-500 font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 flex gap-2"
                      >
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default Experience;
