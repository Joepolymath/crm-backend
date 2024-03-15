const express = require('express');
const reviewsControllers = require('../controllers/reviews');

const router = express.Router();

router.post('/', reviewsControllers.create);
router.get('/', reviewsControllers.getAll);

module.exports = router;
