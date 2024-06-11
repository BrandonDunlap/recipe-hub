const express = require('express');
const router = express.Router();

const authRoutes = require('./api/authRoutes');
const recipeRoutes = require('./api/recipeRoutes');

router.use('/auth', authRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
