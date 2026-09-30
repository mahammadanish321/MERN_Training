const validateRequest = (requiredFields = []) => {
    return (req, res, next) => {
        if (!req.body || typeof req.body !== 'object') {
            return res.status(400).json({ success: false, error: 'Invalid request body' });
        }

        const missingFields = requiredFields.filter((field) => {
            const value = req.body[field];
            return value === undefined || value === null || String(value).trim() === '';
        });

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                error: `Missing required fields: ${missingFields.join(', ')}`,
                missingFields,
            });
        }

        if (requiredFields.includes('email') && req.body.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(String(req.body.email).trim())) {
                return res.status(400).json({
                    success: false,
                    error: 'Please provide a valid email address format',
                });
            }
        }

        if (requiredFields.includes('password') && req.body.password) {
            if (String(req.body.password).length < 6) {
                return res.status(400).json({
                    success: false,
                    error: 'Password must be at least 6 characters long',
                });
            }
        }

        next();
    };
};

module.exports = validateRequest;
