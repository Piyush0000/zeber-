const express = require('express');
const router = express.Router();
const { 
  createService, 
  getAllServices, 
  getServiceById, 
  updateService, 
  deleteService 
} = require('../controllers/serviceController');

// POST route to create a new service
router.post('/services', createService);

// GET route to fetch all services
router.get('/services', getAllServices);

// GET route to fetch a single service by ID
router.get('/services/:id', getServiceById);

// PUT route to update a service by ID
router.put('/services/:id', updateService);

// DELETE route to delete a service by ID (soft delete)
router.delete('/services/:id', deleteService);

module.exports = router;