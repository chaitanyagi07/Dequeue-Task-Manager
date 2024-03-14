const express = require('express');
const router = express.Router();
const ProjectController = require('../Controller/ManageProject.controller');

// Define routes

router.post('/create',ProjectController.createProject);
router.get('/getall',ProjectController.getall);


module.exports = router;