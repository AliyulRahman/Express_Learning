// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json({ message: 'Fetching all users' });
});

router.post('/users', (req, res) => {
    const user = req.body;
    res.json({ message: 'User created', data: user });
});

module.exports = router;
