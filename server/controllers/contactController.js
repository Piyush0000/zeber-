const ContactRequest = require('../models/ContactRequest');

// Create a new contact request
exports.createContactRequest = async (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      contactMethod, 
      contactValue, 
      companyName, 
      teamMembers, 
      budget, 
      expectedTraffic, 
      projectTypes, 
      message 
    } = req.body;
    
    // Validate required fields
    if (!name || !contactMethod || !contactValue || !budget || !expectedTraffic || !projectTypes || projectTypes.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Required fields are missing'
      });
    }
    
    // Validate contact method
    if (contactMethod === 'email' && !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required when contact method is email'
      });
    }
    
    if (contactMethod === 'phone' && !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Phone is required when contact method is phone'
      });
    }
    
    // Create new contact request
    const contactRequest = new ContactRequest({
      name,
      email: email || undefined,
      phone: phone || undefined,
      contactMethod,
      contactValue,
      companyName: companyName || undefined,
      teamMembers: teamMembers || undefined,
      budget,
      expectedTraffic,
      projectTypes,
      message: message || undefined
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
};

// Get all contact requests
exports.getAllContactRequests = async (req, res) => {
  try {
    const contactRequests = await ContactRequest.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contactRequests.length,
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
};

// Get a single contact request by ID
exports.getContactRequestById = async (req, res) => {
  try {
    const contactRequest = await ContactRequest.findById(req.params.id);
    
    if (!contactRequest) {
      return res.status(404).json({
        success: false,
        message: 'Contact request not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: contactRequest
    });
  } catch (error) {
    console.error('Error fetching contact request:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact request',
      error: error.message
    });
  }
};

// Update a contact request by ID
exports.updateContactRequest = async (req, res) => {
  try {
    const contactRequest = await ContactRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!contactRequest) {
      return res.status(404).json({
        success: false,
        message: 'Contact request not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact request updated successfully',
      data: contactRequest
    });
  } catch (error) {
    console.error('Error updating contact request:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact request',
      error: error.message
    });
  }
};

// Delete a contact request by ID
exports.deleteContactRequest = async (req, res) => {
  try {
    const contactRequest = await ContactRequest.findByIdAndDelete(req.params.id);
    
    if (!contactRequest) {
      return res.status(404).json({
        success: false,
        message: 'Contact request not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact request deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact request:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting contact request',
      error: error.message
    });
  }
};