const express = require('express');
const usersControllers = require('../controllers/users');

const router = express.Router();

router.post('/', usersControllers.register);
router.post('/login', usersControllers.login);

module.exports = router;
