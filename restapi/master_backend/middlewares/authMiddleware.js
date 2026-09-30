const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { ensureDatabase } = require('../config/db.mongo');

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            error: 'Not authorized to access this route. Token missing.',
        });
    }

    if (!ensureDatabase(res)) return;

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || 'fallback_secret_key_change_in_production'
        );
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'User belonging to this token no longer exists.',
            });
        }

        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                error: 'Your account has been deactivated. Please contact administrator.',
            });
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                error: 'Authentication token has expired. Please log in again.',
            });
        }

        return res.status(401).json({
            success: false,
            error: 'Invalid authentication token.',
        });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ success: false, error: 'Not authorized.' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                error: `User role '${req.user.role}' is unauthorized to access this resource.`,
            });
        }

        next();
    };
};

module.exports = { protect, authorize };
