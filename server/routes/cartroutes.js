const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const verifyToken = require("../utils/verifytoken");

// Routes for cart operations
router.post('/add', cartController.addItemToCart);
router.get('/view', verifyToken, cartController.viewCart);
router.put('/update', cartController.updateItemQuantity);
router.delete('/remove', cartController.removeItemFromCart);

module.exports = router;
