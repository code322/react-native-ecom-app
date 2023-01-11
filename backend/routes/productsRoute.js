const express = require('express');
const {
  getAllProducts,
  getProduct,
} = require('../controllers/productsController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);

module.exports = router;
