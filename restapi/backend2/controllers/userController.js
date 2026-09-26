// src/controllers/userController.js
const User = require('../models/userModel');
const { ensureDatabase } = require('../config/db.mongo');

// GET /api/users
const getAllUsers = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const users = await User.find();
        res.json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
};

// POST /api/users
const createUser = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { name, email, role, isActive } = req.body;
        const user = new User({
            name,
            email,
            role,
            isActive,
        });

        await user.save();
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

// GET /api/users/:id
const getUserById = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        res.json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

// PUT /api/users/:id
const updateUserById = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        res.json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

const updateUser = updateUserById;

// DELETE /api/users/:id
const deleteUserById = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};

const deleteUser = deleteUserById;

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    updateUserById,
    deleteUser,
    deleteUserById,
};