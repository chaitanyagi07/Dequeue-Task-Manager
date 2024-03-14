const express = require('express');
const router = express.Router();
const UserController=require('../Controller/User.controller')
// Define routes

router.post('/register',UserController.createUser);
router.post('/login',UserController.login);
// router.get('/:userId');
router.get('/',UserController.getall);
router.delete('/delete',UserController.deleteall);


module.exports = router;
