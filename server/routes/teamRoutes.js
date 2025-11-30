const express = require('express');
const router = express.Router();
const { 
  createTeamMember, 
  getAllTeamMembers, 
  getTeamMemberById, 
  updateTeamMember, 
  deleteTeamMember 
} = require('../controllers/teamController');

// POST route to create a new team member
router.post('/team', createTeamMember);

// GET route to fetch all team members
router.get('/team', getAllTeamMembers);

// GET route to fetch a single team member by ID
router.get('/team/:id', getTeamMemberById);

// PUT route to update a team member by ID
router.put('/team/:id', updateTeamMember);

// DELETE route to delete a team member by ID (soft delete)
router.delete('/team/:id', deleteTeamMember);

module.exports = router;