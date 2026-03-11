import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      trim: true,
      enum: ['Languages', 'Frameworks', 'Backend', 'Database', 'Technologies', 'Tools'],
    },
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 80,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Skill', skillSchema);
