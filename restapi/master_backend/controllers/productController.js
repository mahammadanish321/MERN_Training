const Product = require('../models/productModel');
const { ensureDatabase } = require('../config/db.mongo');

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
            search,
            sortBy = 'createdAt',
            sortOrder = 'desc',
        } = req.query;
        const filter = {};
        if (category) filter.category = category;
        if (inStock !== undefined) filter.inStock = inStock === 'true';
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = parseFloat(minPrice);
            if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }

        const pageNum = Math.max(1, parseInt(page, 10) || 1);
        const limitNum = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));
        const sort = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };
        const products = await Product.find(filter)
            .populate('createdBy', 'name email role')
            .sort(sort)
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum);
        const total = await Product.countDocuments(filter);

        res.json({
            success: true,
            data: products,
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

const createProduct = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const { name, description, price, category, inStock, quantity } = req.body;
        const product = new Product({
            name,
            description,
            price,
            category,
            inStock: inStock !== undefined ? inStock : true,
            quantity: quantity !== undefined ? quantity : 0,
            createdBy: req.user ? req.user._id : undefined,
        });
        await product.save();
        res.status(201).json({ success: true, message: 'Product created successfully', data: product });
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const product = await Product.findById(req.params.id).populate('createdBy', 'name email role');
        if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
        res.json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: 'after',
            runValidators: true,
        }).populate('createdBy', 'name email role');
        if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
        res.json({ success: true, message: 'Product updated successfully', data: product });
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    if (!ensureDatabase(res)) return;

    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct };
