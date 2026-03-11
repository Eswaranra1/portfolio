import 'dotenv/config';
import mongoose from 'mongoose';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import connectDB from '../config/db.js';

const projects = [
  {
    title: 'ALFRED AI Voice Assistant',
    description: 'Developed a Python-based voice assistant capable of speech recognition and voice command processing.',
    technologies: ['Python', 'DNN', 'MFCC', 'Speech-to-Text', 'Text-to-Speech', 'Qt Designer'],
    githubUrl: '',
    liveUrl: '',
    order: 1,
  },
  {
    title: 'Women Safety Android Application',
    description: 'Developed a personal safety Android app enabling one-click emergency alerts, GPS tracking, and SMS notifications to emergency contacts.',
    technologies: ['Java', 'Android Studio', 'XML', 'GPS Tracking', 'SMS Alerts'],
    githubUrl: '',
    liveUrl: '',
    order: 2,
  },
  {
    title: 'Vehicle Helper',
    description: 'Vehicle emergency assistance platform with user service requests.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Eswaranra1/vehicle-helper',
    liveUrl: '',
    order: 3,
  },
  {
    title: 'MindCare App',
    description: 'Mental health support application designed to improve emotional well-being.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Eswaranra1/MindCareApp',
    liveUrl: '',
    order: 4,
  },
  {
    title: 'Lend Calc Powered by Agrizy',
    description: 'Loan calculation system with financial calculations and user interface.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Eswaranra1/lend_calc_powered_by_agrizy',
    liveUrl: '',
    order: 5,
  },
];

const skills = [
  { category: 'Languages', name: 'JavaScript', proficiency: 85, order: 1 },
  { category: 'Languages', name: 'Java', proficiency: 80, order: 2 },
  { category: 'Languages', name: 'PHP', proficiency: 82, order: 3 },
  { category: 'Languages', name: 'HTML', proficiency: 90, order: 4 },
  { category: 'Languages', name: 'CSS', proficiency: 88, order: 5 },
  { category: 'Frameworks', name: 'React', proficiency: 85, order: 1 },
  { category: 'Frameworks', name: 'Bootstrap', proficiency: 88, order: 2 },
  { category: 'Backend', name: 'Node.js', proficiency: 82, order: 1 },
  { category: 'Backend', name: 'Express.js', proficiency: 80, order: 2 },
  { category: 'Database', name: 'MongoDB', proficiency: 78, order: 1 },
  { category: 'Technologies', name: 'REST APIs', proficiency: 85, order: 1 },
  { category: 'Technologies', name: 'AJAX', proficiency: 82, order: 2 },
  { category: 'Tools', name: 'VS Code', proficiency: 90, order: 1 },
  { category: 'Tools', name: 'Git', proficiency: 85, order: 2 },
  { category: 'Tools', name: 'GitHub', proficiency: 88, order: 3 },
  { category: 'Tools', name: 'PyCharm', proficiency: 75, order: 4 },
  { category: 'Tools', name: 'Android Studio', proficiency: 78, order: 5 },
];

const seed = async () => {
  try {
    await connectDB();
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
};

seed();
