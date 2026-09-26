// src/middleware/rateLimiter.js
const rateLimitStore = new Map();

const rateLimiter = (maxRequests = 100, windowMs = 15 * 60 * 1000) => {
  return (req, res, next) => {
    const clientIP = req.ip || req.connection.remoteAddress;
    const now = Date.now();

    if (!rateLimitStore.has(clientIP)) {
      rateLimitStore.set(clientIP, { count: 1, startTime: now });
      return next();
    }

    const clientData = rateLimitStore.get(clientIP);

    // Reset window if expired
    if (now - clientData.startTime > windowMs) {
      rateLimitStore.set(clientIP, { count: 1, startTime: now });
      return next();
    }

    clientData.count += 1;

    if (clientData.count > maxRequests) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests. Please try again later.',
        retryAfterMs: windowMs - (now - clientData.startTime),
      });
    }

    next();
  };
};

// Cleanup old entries every 30 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now - data.startTime > 30 * 60 * 1000) {
      rateLimitStore.delete(ip);
    }
  }
}, 30 * 60 * 1000);

module.exports = rateLimiter;