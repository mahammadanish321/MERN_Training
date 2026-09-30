const User = require('../models/userModel');
const { generateToken } = require('../utils/jwt');
const { ensureDatabase } = require('../config/db.mongo');

const register = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email: email ? email.toLowerCase().trim() : '' });
        if (existingUser) {
            return res.status(409).json({ success: false, error: 'An account with this email address already exists' });
        }

        const userRole = role && ['user', 'moderator', 'admin'].includes(role) ? role : 'user';
        const user = await User.create({ name, email, password, role: userRole });
        const token = generateToken(user._id, user.role);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, error: 'Please provide email and password' });
        }

        const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ success: false, error: 'Invalid email or password credentials' });
        }
        if (!user.isActive) {
            return res.status(403).json({ success: false, error: 'Account is deactivated. Please contact support.' });
        }

        const token = generateToken(user._id, user.role);
        res.json({
            success: true,
            message: 'Login successful',
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
};

const getMe = (req, res) => {
    res.json({ success: true, data: req.user });
};

const updateDetails = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const fieldsToUpdate = {};
        if (req.body.name) fieldsToUpdate.name = req.body.name;
        if (req.body.email) fieldsToUpdate.email = req.body.email;

        if (fieldsToUpdate.email && fieldsToUpdate.email.toLowerCase() !== req.user.email) {
            const emailExists = await User.findOne({ email: fieldsToUpdate.email.toLowerCase() });
            if (emailExists) {
                return res.status(409).json({ success: false, error: 'Email is already in use by another account' });
            }
        }

        const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
            returnDocument: 'after',
            runValidators: true,
        });
        res.json({ success: true, message: 'Profile updated successfully', data: user });
    } catch (error) {
        next(error);
    }
};

const updatePassword = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { currentPassword, newPassword } = req.body;
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ success: false, error: 'Please provide both current and new password' });
        }

        const user = await User.findById(req.user.id).select('+password');
        if (!(await user.matchPassword(currentPassword))) {
            return res.status(401).json({ success: false, error: 'Current password is incorrect' });
        }

        user.password = newPassword;
        await user.save();
        const token = generateToken(user._id, user.role);
        res.json({ success: true, message: 'Password updated successfully', token });
    } catch (error) {
        next(error);
    }
};

module.exports = { register, login, getMe, updateDetails, updatePassword };
