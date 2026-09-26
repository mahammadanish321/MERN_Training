const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes translate HTTP methods and URL patterns into controller functions.
// The handlers currently exist as placeholders while the CRUD logic is built.
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUserById);
router.delete('/users/:id', userController.detetUserById);

module.exports = router;