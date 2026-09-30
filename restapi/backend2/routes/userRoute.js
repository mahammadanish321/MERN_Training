const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes translate HTTP methods and URL patterns into controller functions.
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;