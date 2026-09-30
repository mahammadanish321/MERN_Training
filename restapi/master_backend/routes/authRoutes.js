const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');

router.post('/register', validateRequest(['name', 'email', 'password']), authController.register);
router.post('/login', validateRequest(['email', 'password']), authController.login);
router.get('/me', protect, authController.getMe);
router.put('/updatedetails', protect, authController.updateDetails);
router.put('/updatepassword', protect, validateRequest(['currentPassword', 'newPassword']), authController.updatePassword);

module.exports = router;
