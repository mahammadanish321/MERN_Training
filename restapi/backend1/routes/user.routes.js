const router = require('express').Router();
const userConstoller = require('../controllers/user.controller.js')

router.get('/users',userConstoller.getAllUsers);
router.post('/users',userConstoller.createUser);
router.get('/users/:id',userConstoller.getAllUsers);
router.put('/users/:id',userConstoller.updateUserById);
router.delete('/users/:id',userConstoller.deleteUserById);

module.exports = router;
