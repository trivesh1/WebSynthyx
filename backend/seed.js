const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'test_database';

const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ReviewSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: true },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', ProjectSchema);
const Review = mongoose.model('Review', ReviewSchema);

const seedData = async () => {
  try {
    await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Review.deleteMany({});

    // Seed projects
    const projects = [
      {
        id: 'proj_1',
        title: 'E-Commerce Platform',
        description: 'Modern e-commerce solution with real-time inventory and payment integration',
        techStack: 'React, Node.js, MongoDB, Stripe',
        image: 'https://images.unsplash.com/photo-1690383921891-3f0a7567d815?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'proj_2',
        title: 'AI Chatbot Assistant',
        description: 'Intelligent customer service chatbot powered by machine learning',
        techStack: 'Python, TensorFlow, React, FastAPI',
        image: 'https://images.unsplash.com/photo-1677078610152-8a627d8ced8d?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'proj_3',
        title: 'Healthcare Portal',
        description: 'Secure patient management system with telemedicine capabilities',
        techStack: 'Vue.js, Django, PostgreSQL',
        image: 'https://images.unsplash.com/photo-1610702876884-0f8473590287?q=80&w=800&auto=format&fit=crop'
      }
    ];

    await Project.insertMany(projects);
    console.log('✅ Seeded 3 projects');

    // Seed reviews
    const reviews = [
      {
        id: 'rev_1',
        name: 'Sarah Johnson',
        rating: 5,
        message: 'WebSynthix transformed our business with an amazing platform. Professional, responsive, and delivered beyond expectations!',
        approved: true
      },
      {
        id: 'rev_2',
        name: 'Michael Chen',
        rating: 5,
        message: 'Outstanding work! The team understood our vision perfectly and created a solution that exceeded all requirements.',
        approved: true
      },
      {
        id: 'rev_3',
        name: 'Emily Rodriguez',
        rating: 4,
        message: 'Great experience working with WebSynthix. They delivered a high-quality product on time and within budget.',
        approved: true
      }
    ];

    await Review.insertMany(reviews);
    console.log('✅ Seeded 3 reviews');

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedData();
