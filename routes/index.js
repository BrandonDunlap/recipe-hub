const express = require('express');
const router = express.Router();
const { Recipe } = require('../models');
const authRoutes = require('./api/authRoutes');
const recipeRoutes = require('./api/recipeRoutes');

// Home route
router.get('/', (req, res) => {
  res.render('home');
});

// Register route
router.get('/register', (req, res) => {
  res.render('register');
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

// Recipes route
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.render('recipes', { recipes });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Use authentication and recipe routes
router.use('/auth', authRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
