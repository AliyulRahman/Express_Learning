// controllers/userController.js

// Fetch all users
const getAllUsers = (req, res) => {
    res.json({ message: 'Fetching all users' });
};

// Create a new user
const createUser = (req, res) => {
    const user = req.body;
    res.json({ message: 'User created', data: user });
};

module.exports = {
    getAllUsers,
    createUser,
};
