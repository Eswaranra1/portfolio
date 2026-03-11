import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Section from '../components/Section';
import { useProjects } from '../hooks/useProjects';
import { ProjectCardSkeleton } from '../components/Skeleton';

const FALLBACK_PROJECTS = [
  {
    _id: '1',
    title: 'ALFRED AI Voice Assistant',
    description: 'Developed a Python-based voice assistant capable of speech recognition and voice command processing.',
    technologies: ['Python', 'DNN', 'MFCC', 'Speech-to-Text', 'Text-to-Speech', 'Qt Designer'],
    githubUrl: '',
  },
  {
    _id: '2',
    title: 'Women Safety Android Application',
    description: 'Developed a personal safety Android app enabling one-click emergency alerts, GPS tracking, and SMS notifications to emergency contacts.',
    technologies: ['Java', 'Android Studio', 'XML', 'GPS Tracking', 'SMS Alerts'],
    githubUrl: '',
  },
  {
    _id: '3',
    title: 'Vehicle Helper',
    description: 'Vehicle emergency assistance platform with user service requests.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Eswaranra1/vehicle-helper',
  },
  {
    _id: '4',
    title: 'MindCare App',
    description: 'Mental health support application designed to improve emotional well-being.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Eswaranra1/MindCareApp',
  },
  {
    _id: '5',
    title: 'Lend Calc Powered by Agrizy',
    description: 'Loan calculation system with financial calculations and user interface.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Eswaranra1/lend_calc_powered_by_agrizy',
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all shadow-sm hover:shadow-lg"
  >
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
      {project.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies?.slice(0, 5).map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
        >
          <FaGithub className="w-5 h-5" />
          <span>Code</span>
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          <span>Live</span>
        </a>
      )}
    </div>
  </motion.article>
);

const Projects = () => {
  const { projects, loading } = useProjects();
  const displayProjects = projects.length > 0 ? projects : FALLBACK_PROJECTS;

  if (loading) {
    return (
      <Section id="projects" title="Projects" subtitle="Things I've built">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="projects" title="Projects" subtitle="Things I've built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <ProjectCard key={project._id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
