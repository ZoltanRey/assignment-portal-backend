const express = require('express');
const { uploadAssignment } = require('../controllers/assingmentController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/upload', authMiddleware, uploadAssignment);

module.exports = router;
