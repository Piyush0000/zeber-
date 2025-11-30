const mongoose = require('mongoose');

const contactRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false // Not required if phone is provided
  },
  phone: {
    type: String,
    required: false // Not required if email is provided
  },
  contactMethod: {
    type: String,
    required: true,
    enum: ['email', 'phone']
  },
  contactValue: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: false
  },
  teamMembers: {
    type: Number,
    required: false
  },
  budget: {
    type: String,
    required: true
  },
  expectedTraffic: {
    type: String,
    required: true
  },
  projectTypes: [{
    type: String,
    required: true
  }],
  message: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ContactRequest', contactRequestSchema);