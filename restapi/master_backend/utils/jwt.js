const jwt = require('jsonwebtoken');

const generateToken = (id, role) => {
    return jwt.sign(
        { id, role },
        process.env.JWT_SECRET || 'fallback_secret_key_change_in_production',
        { expiresIn: process.env.JWT_EXPIRE || '30d' }
    );
};

module.exports = { generateToken };
