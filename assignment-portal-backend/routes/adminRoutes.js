const express = require('express');
const router = express.Router();
const Assignment = require('../models/assingment');

// View Assignments
router.get('/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Accept Assignment
router.post('/assignments/:id/accept', async (req, res) => {
  res.send('Accept Assignment route'); // Simplified for demonstration
});

// Reject Assignment
router.post('/assignments/:id/reject', async (req, res) => {
  res.send('Reject Assignment route'); // Simplified for demonstration
});

module.exports = router;
