const User = require('../models/userModel');
const { ensureDatabase } = require('../config/db.mongo');

const getAllUsers = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { page = 1, limit = 10, role, isActive, search } = req.query;
        const filter = {};
        if (role) filter.role = role;
        if (isActive !== undefined) filter.isActive = isActive === 'true';
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }

        const pageNum = Math.max(1, parseInt(page, 10) || 1);
        const limitNum = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));
        const users = await User.find(filter)
            .sort({ createdAt: -1 })
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum);
        const total = await User.countDocuments(filter);

        res.json({
            success: true,
            data: users,
            pagination: {
                currentPage: pageNum,
                totalPages: Math.ceil(total / limitNum),
                totalRecords: total,
                limit: limitNum,
            },
        });
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { name, email, password, role, isActive } = req.body;
        const existingUser = await User.findOne({ email: email ? email.toLowerCase().trim() : '' });
        if (existingUser) {
            return res.status(409).json({ success: false, error: 'A user with this email address already exists' });
        }
        const user = new User({ name, email, password: password || 'DefaultPass123!', role: role || 'user', isActive: isActive !== undefined ? isActive : true });
        await user.save();
        res.status(201).json({ success: true, message: 'User created successfully', data: user });
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ success: false, error: 'User not found' });
        res.json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { name, email, role, isActive, password } = req.body;
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ success: false, error: 'User not found' });
        if (name) user.name = name;
        if (email) {
            const emailLower = email.toLowerCase().trim();
            if (emailLower !== user.email) {
                const emailExists = await User.findOne({ email: emailLower });
                if (emailExists) return res.status(409).json({ success: false, error: 'Email is already taken' });
                user.email = emailLower;
            }
        }
        if (role) user.role = role;
        if (isActive !== undefined) user.isActive = isActive;
        if (password) user.password = password;
        await user.save();
        res.json({ success: true, message: 'User updated successfully', data: user });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ success: false, error: 'User not found' });
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };