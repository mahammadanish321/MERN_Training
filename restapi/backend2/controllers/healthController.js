const mongoose = require('mongoose');
const { APP_VERSION, DEPLOYED_AT } = require('../utils/AppVersion');

// Controllers contain request-handling logic. A health handler reports whether
// the API process is alive and what state Mongoose reports for the database.
// GET /api/health
const getHealth = (req, res) => {
  const dbState = mongoose.connection.readyState;

  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  res.json({
    status: 'OK',
    message: 'backend API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: dbStatusMap[dbState] || 'unknown',
    uptime: process.uptime(),
    memoryUsage: {
      rss: `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`,
      heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
      heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
    },
  });
};

// This handler exposes build/runtime information separately from health data.
const getVersion = (req, res) => {
  res.json({
    success: true,
    version: APP_VERSION,
    deployedAt: DEPLOYED_AT,
    nodeVersion: process.version,
    platform: process.platform,
    message: 'If this version matches your latest commit, CI/CD is working correctly.',
  });
};

// Named controller functions are exported as object properties so route files
// can reference them as healthController.getHealth and getVersion.
module.exports = {
  getHealth,
  getVersion,
};