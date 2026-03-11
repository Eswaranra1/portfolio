import Skill from '../models/Skill.js';

/**
 * @route   GET /api/skills
 * @desc    Get all skills grouped by category
 * @access  Public
 */
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
    res.json({
      success: true,
      data: grouped,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch skills',
      error: error.message,
    });
  }
};
