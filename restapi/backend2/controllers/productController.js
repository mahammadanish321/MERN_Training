// src/controllers/productController.js
const Product = require('../models/productModel');
const { ensureDatabase } = require('../config/db.mongo');

// GET /api/products
const getAllProducts = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const {
            page = 1,
            limit = 10,
            category,
            inStock,
            minPrice,
            maxPrice,
            sortBy = 'createdAt',
            sortOrder = 'desc',
        } = req.query;

        const filter = {};

        if (category) filter.category = category;
        if (inStock !== undefined) filter.inStock = inStock === 'true';
        if (minPrice) filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
        if (maxPrice) filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };

        const sort = {};
        sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

        const products = await Product.find(filter)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Product.countDocuments(filter);

        res.json({
            success: true,
            data: products,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(total / limit),
                totalRecords: total,
            },
        });
    } catch (error) {
        next(error);
    }
};

// POST /api/products
const createProduct = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { name, description, price, category, inStock, quantity } = req.body;
        const product = new Product({
            name,
            description,
            price,
            category,
            inStock,
            quantity,
        });
        await product.save();
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

// GET /api/products/:id
const getProductById = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

// PUT /api/products/:id
const updateProduct = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

const updateProductById = updateProduct;

// DELETE /api/products/:id
const deleteProduct = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        next(error);
    }
};

const deleteProductById = deleteProduct;

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    updateProductById,
    deleteProduct,
    deleteProductById,
};