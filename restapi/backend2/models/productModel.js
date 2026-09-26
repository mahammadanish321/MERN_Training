const mongoose = require('mongoose');

// The schema is the product document blueprint. Each field describes the
// expected type and any validation or default value applied by Mongoose.
const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    category: {
        type: String,
        enum: ['electronics', 'clothing', 'food', 'books', 'other'],
        default: 'other',
    },
    inStock: { type: Boolean, default: true },
    quantity: { type: Number, default: 0, min: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

// Update the timestamp automatically before every document save.
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Turn the schema blueprint into a Product model for database operations.
const Product = mongoose.model('Product', productSchema);

// Export the model for use in controllers and other modules.
module.exports = Product;