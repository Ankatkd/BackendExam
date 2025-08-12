const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const userRoutes = require('../routes/userRoutes');
const testRoutes = require('../routes/testRoutes');
const submissionRoutes = require('../routes/submissionRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/submissions', submissionRoutes);

app.get('/', (req, res) => {
  res.send('API is running on Vercel...');
});

module.exports = serverless(app);
