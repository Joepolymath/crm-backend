const express = require('express');
const ordersControllers = require('../controllers/orders');

const router = express.Router();

router.post('/', ordersControllers.create);
router.get('/', ordersControllers.getAll);

module.exports = router;
