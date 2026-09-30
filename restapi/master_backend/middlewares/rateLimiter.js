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

module.exports = rateLimiter;
