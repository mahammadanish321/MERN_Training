const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

// A router groups related endpoints. The server mounts this router at /api.
router.get('/health', healthController.getHealth);
router.get('/version', healthController.getVersion);

// Export the router so server.js can mount it with app.use().
module.exports = router;
