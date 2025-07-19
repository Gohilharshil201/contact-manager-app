const express = require('express');
const router = express.Router();

// Middleware to protect routes
const auth = require('../middleware/authMiddleware');

// Controllers
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} = require('../controller/contactController');

// Protect all routes below
router.use(auth);

// Contact CRUD routes
router.get('/', getContacts);
router.post('/', addContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
