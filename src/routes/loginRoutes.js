const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Định nghĩa các routes
router.post('/', loginController.login);

module.exports = router;
