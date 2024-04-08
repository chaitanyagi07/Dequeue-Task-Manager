const express = require('express');
const router = express.Router();
const ProjectController = require('../Controller/ManageProject.controller');

// Define routes

router.get('/:id', ProjectController.getProjectById);
router.get('/name/:name', ProjectController.projectbyname); 
router.post('/create', ProjectController.createProject);
router.patch('/:id', ProjectController.updateProjectById);
router.delete('/delete', ProjectController.deleteall);
router.delete('/:id', ProjectController.deleteProjectById);
router.get('/', ProjectController.getall); 


module.exports = router;