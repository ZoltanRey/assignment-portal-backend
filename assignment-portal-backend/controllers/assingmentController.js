const Assignment = require('../models/assingment');

exports.uploadAssignment = async (req, res) => {
  const { task, admin } = req.body;
  try {
    const assignment = new Assignment({ userId: req.user.username, task, admin });
    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded', assignment });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
