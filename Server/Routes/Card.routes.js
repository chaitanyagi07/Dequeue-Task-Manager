const express = require('express');
const router = express.Router();
const cardController = require('../Controller/Card.controller');

// Define routes

router.post('/task/create', cardController.createCard);
router.get('/:id', cardController.getCardById);
router.get('/',cardController.getall);
router.delete('/delete',cardController.deleteall);
router.post('/:id/subtask/create',cardController.createSubtask);
router.delete('/:id',cardController.deleteCardbyId);
// router.post('/task/:taskId/subtask/create',cardController.createSubtask)


module.exports = router;
