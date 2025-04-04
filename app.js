// server.js
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(logger);
app.use(bodyParser.json());  // Parses JSON bodies

// Routes
app.use('/api', userRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to Express');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
