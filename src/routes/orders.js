const express = require('express');
const ordersControllers = require('../controllers/orders');
const authenticate = require('../middlewares/index.middleware');

const router = express.Router();

router.post('/', ordersControllers.create);
router.get('/', authenticate, ordersControllers.getAll);

module.exports = router;
