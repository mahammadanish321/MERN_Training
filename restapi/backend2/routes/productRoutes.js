const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Each route passes a matching request to the corresponding controller method.
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);

module.exports = router;