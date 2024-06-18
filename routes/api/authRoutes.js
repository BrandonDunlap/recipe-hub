const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

//User-related Routes
router.use('/register', authController.register);
router.use('/login', authController.login);

module.exports = router;
