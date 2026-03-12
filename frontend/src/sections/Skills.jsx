import { motion } from 'framer-motion';
import Section from '../components/Section';
import { useSkills } from '../hooks/useSkills';
import { SkillBarSkeleton } from '../components/Skeleton';

const FALLBACK_SKILLS = {
  Languages: ['JavaScript', 'Java', 'PHP', 'HTML', 'CSS'],
  Frameworks: ['React', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB'],
  Technologies: ['REST APIs', 'AJAX'],
  Tools: ['VS Code', 'Git', 'GitHub', 'PyCharm', 'Android Studio'],
};

const SkillBar = ({ name, proficiency, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="space-y-2"
  >
    <div className="flex justify-between">
      <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{proficiency}%</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.05 }}
        className="h-full bg-primary-500 rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const { skills, loading, error } = useSkills();
  const displaySkills = Object.keys(skills).length > 0 ? skills : FALLBACK_SKILLS;

  if (loading) {
    return (
      <Section id="skills" title="Skills" subtitle="Technologies I work with">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <SkillBarSkeleton />
              <SkillBarSkeleton />
              <SkillBarSkeleton />
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {Object.entries(displaySkills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-primary-500 pb-2 w-fit">
              {category}
            </h3>
            <div className="space-y-4">
              {items.map((item, i) => {
                const name = typeof item === 'string' ? item : item.name;
                const proficiency = typeof item === 'object' && item !== null ? (item.proficiency ?? 80) : 80;
                const key = typeof item === 'string' ? item : (item._id || item.name);
                return (
                  <SkillBar key={key} name={name} proficiency={proficiency} index={i} />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
