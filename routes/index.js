const express = require('express');
const router = express.Router();
const { Recipe, User } = require('../models');
const authRoutes = require('./api/authRoutes');
const recipeRoutes = require('./api/recipeRoutes');

// Home route
router.get('/', (req, res) => {
  const username = req.cookies.username || null;
  res.render('home', { username });
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

// Recipe details route
router.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (recipe) {
      res.render('recipe', { recipe });
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe details' });
  }
});

// Add recipe route
router.get('/add-recipe', (req, res) => {
  res.render('add-recipe');
});

// Use authentication and recipe routes
router.use('/auth', authRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
