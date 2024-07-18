const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const logger = require('./middlewares/logger');
const notesRouter = require('./routes/notes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/notes', notesRouter);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`)))
  .catch(err => console.error('Could not connect to MongoDB:', err));
