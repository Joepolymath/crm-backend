const express = require('express');
const categoriesControllers = require('../controllers/categories');

const router = express.Router();

router.post('/', categoriesControllers.create);
router.get('/', categoriesControllers.getAll);

module.exports = router;
