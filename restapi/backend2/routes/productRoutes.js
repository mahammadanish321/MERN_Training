const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Each route passes a matching request to the corresponding controller method.
router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;