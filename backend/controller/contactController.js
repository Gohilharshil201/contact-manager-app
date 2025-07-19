const Contact = require('../models/Contact');

// Get all contacts for logged-in user
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.user });
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err.message);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
};

// Add a new contact
const addContact = async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    const newContact = await Contact.create({
      userId: req.user,
      name,
      phone,
      email,
    });
    res.status(201).json(newContact);
  } catch (err) {
    console.error('Error adding contact:', err.message);
    res.status(500).json({ message: 'Failed to add contact' });
  }
};

// Update an existing contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Contact.findOneAndUpdate(
      { _id: id, userId: req.user },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating contact:', err.message);
    res.status(500).json({ message: 'Failed to update contact' });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Contact.findOneAndDelete({ _id: id, userId: req.user });

    if (!deleted) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact:', err.message);
    res.status(500).json({ message: 'Failed to delete contact' });
  }
};

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};
