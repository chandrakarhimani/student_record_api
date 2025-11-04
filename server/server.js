// Load environment variables from .env file
require('dotenv').config();

// Import required libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
// const authRoutes = require('./routes/auth');  // (example)
// const postRoutes = require('./routes/posts'); // (example)
const studentRoutes = require('./routes/students'); // ✅ NEW Student API

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware Setup ---
app.use(cors());
app.use(express.json());

// --- Database Connection Function ---
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Connect to database
connectDB();

// --- API Routes ---
// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
app.use('/api/students', studentRoutes); // ✅ NEW Student Route

// --- Test Route (API Entry Point) ---
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
