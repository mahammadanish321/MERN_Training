const mongoose = require('mongoose');

// A schema describes the fields allowed in a user document, their types, and
// validation/default rules. It is a blueprint; the model below performs DB work.
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user',
    },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// This hook runs before a document is saved. `this` is the user being saved,
// and calling next() tells Mongoose that it may continue with the save.
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Compiling the schema creates the User model used by controllers for queries.
const User = mongoose.model('User', userSchema);

// Export the model so another CommonJS file can use it with require().
module.exports = User;