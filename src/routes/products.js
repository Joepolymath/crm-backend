const express = require('express');
const productsControllers = require('../controllers/products');

const router = express.Router();

router.post('/', productsControllers.create);
router.get('/', productsControllers.getAll);

module.exports = router;
