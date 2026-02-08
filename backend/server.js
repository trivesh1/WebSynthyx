const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = 8001;

const JWT_SECRET = process.env.JWT_SECRET; require('dotenv').config();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// MongoDB ConnectionA
// const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
// const DB_NAME = process.env.DB_NAME || 'test_database';

// mongoose.connect(`${MONGO_URL}/${DB_NAME}`)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ MongoDB connection error:', err));
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));


// Models
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

const ContactSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', ProjectSchema);
const Review = mongoose.model('Review', ReviewSchema);
const Contact = mongoose.model('Contact', ContactSchema);

// JWT Middleware
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. No token provided.' });
//   }

//   try {
//     const verified = jwt.verify(token, JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(403).json({ error: 'Invalid token' });
//   }
// };
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;


  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "No token" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
};

// Routes

// Auth Routes
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Hardcoded admin credentials
 if(email === process.env.USER_ID && password === process.env.PASSWORD){
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '24h' });
      return res.json({ success: true, token, message: 'Login successful' });
    }

    res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Project Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.post('/api/projects', authenticateToken, async (req, res) => {
  try {
    const { title, description, techStack, image } = req.body;
    const id = `proj_${Date.now()}`;
    
    const project = new Project({ id, title, description, techStack, image });
    await project.save();
    
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
});

app.put('/api/projects/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, techStack, image } = req.body;
    
    const project = await Project.findOneAndUpdate(
      { id },
      { title, description, techStack, image },
      { new: true }
    );
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
});

app.delete('/api/projects/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOneAndDelete({ id });
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

// Review Routes
// app.get('/api/reviews', async (req, res) => {
//   try {
//     const { approved } = req.query;
//     const filter = approved === 'true' ? { approved: true } : {};
//     const reviews = await Review.find(filter).sort({ createdAt: -1 });
//     res.json(reviews);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch reviews' });
//   }
// });
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    console.log("LOCAL REVIEW ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/reviews', async (req, res) => {
  try {
    const { name, rating, message } = req.body;
    const id = `rev_${Date.now()}`;
    
    const review = new Review({ id, name, rating, message, approved: false });
    await review.save();
    
    res.status(201).json({ success: true, message: 'Review submitted for approval' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

app.put('/api/reviews/:id/approve', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOneAndUpdate(
      { id },
      { approved: true },
      { new: true }
    );
    
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve review' });
  }
});

app.delete('/api/reviews/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOneAndDelete({ id });
    
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    res.json({ success: true, message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

// Contact Routes
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const id = `contact_${Date.now()}`;
    
    const contact = new Contact({ id, name, email, message });
    await contact.save();
    
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.get('/api/contacts', authenticateToken, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Health check
app.get('/api/', (req, res) => {
  res.json({ message: 'WebSynthix API running' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});