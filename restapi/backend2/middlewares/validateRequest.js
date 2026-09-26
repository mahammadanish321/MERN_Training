const validateRequest = (requiredFields) => {
    return (req, res, next) => {
        const missingFields = requiredFields.filter(
            (field) => !req.body[field] || String(req.body[field]).trim() === ''
        );

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields',
                missingFields,
            });
        }
        if (requiredFields.includes('email') && req.body.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(String(req.body.email))) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid email format',
                });
            }
        }
        next();
    };
};

module.exports = validateRequest;