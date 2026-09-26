const Product = require("../models/productModel");
const { ensureDatabace } = require('../config/db.mongo');

// Product controllers receive requests from the router and will contain the
// validation, database queries, and response formatting for each operation.
// GET /api/products
const getAllProducts = async (req, res, next) => { };

// POST /api/products
const createProduct = async (req, res, next) => { };

// GET /api/products/:id
const getProductById = async (req, res, next) => { };

// PUT /api/products/:id
const updateProductById = async (req, res, next) => { };

// DELETE /api/products/:id
const deleteProductById = async (req, res, next) => { };

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
}
