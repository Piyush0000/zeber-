const express = require('express');
const router = express.Router();
const ContactRequest = require('../models/ContactRequest');

// POST route for contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Create new contact request
    const contactRequest = new ContactRequest({
      name,
      email,
      subject,
      message
    });
    
    // Save to database
    await contactRequest.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Contact request submitted successfully',
      data: contactRequest 
    });
  } catch (error) {
    console.error('Error saving contact request:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting contact request',
      error: error.message 
    });
  }
});

// GET route to fetch all contact requests (for admin purposes)
router.get('/contact', async (req, res) => {
  try {
    const contactRequests = await ContactRequest.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contactRequests
    });
  } catch (error) {
    console.error('Error fetching contact requests:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact requests',
      error: error.message
    });
  }
});

module.exports = router;