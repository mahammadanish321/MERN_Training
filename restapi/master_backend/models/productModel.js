const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a product name'],
            trim: true,
            maxlength: [100, 'Product name cannot exceed 100 characters'],
        },
        description: {
            type: String,
            default: '',
            trim: true,
            maxlength: [1000, 'Description cannot exceed 1000 characters'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide a price'],
            min: [0, 'Price cannot be negative'],
        },
        category: {
            type: String,
            enum: {
                values: ['electronics', 'clothing', 'food', 'books', 'other'],
                message: '{VALUE} is not a valid product category',
            },
            default: 'other',
        },
        inStock: {
            type: Boolean,
            default: true,
        },
        quantity: {
            type: Number,
            default: 0,
            min: [0, 'Quantity cannot be negative'],
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform(document, ret) {
                delete ret.__v;
                return ret;
            },
        },
    }
);

module.exports = mongoose.model('Product', productSchema);
