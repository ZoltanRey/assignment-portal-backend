const Assignment = require('../models/assignment');

// Get assignments for an admin
exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user.username });
    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Accept an assignment
exports.acceptAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, { status: 'accepted' });
    res.status(200).json({ message: 'Assignment accepted', assignment });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
