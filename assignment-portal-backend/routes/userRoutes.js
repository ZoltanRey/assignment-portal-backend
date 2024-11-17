const express = require('express');
const router = express.Router();
const User = require('../models/user');

// User Registration
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// User Login
router.post('/login', (req, res) => {
  res.send('User login route'); // Simplified for demonstration
});

module.exports = router;
