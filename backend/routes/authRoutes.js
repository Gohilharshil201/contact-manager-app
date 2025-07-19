const express = require('express');
const router = express.Router();

// Import controller functions
const { register, login } = require('../controller/authController');

// Routes
router.post('/register', register);
router.post('/login', login);

module.exports = router;
