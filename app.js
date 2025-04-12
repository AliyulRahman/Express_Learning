const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(logger);
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Render homepage view
app.get('/', (req, res) => {
    res.render('index', { title: 'User Portal' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
