const express = require('express');
const router = express.Router();
const { Recipe } = require('../../models');

// POST route to add a new recipe
router.post('/', async (req, res) => {
  try {
    const { title, description, ingredients, instructions, category } = req.body;
    const newRecipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
      category,
      UserId: req.cookies.userId // Assuming you are storing userId in a cookie
    });
    res.redirect('/recipes');
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).json({ error: 'Failed to add recipe' });
  }
});

// GET route to edit a recipe
router.get('/edit/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (recipe) {
      res.render('edit-recipe', { recipe });
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe for editing' });
  }
});

// POST route to update a recipe
router.post('/edit/:id', async (req, res) => {
  try {
    const { title, description, ingredients, instructions, category } = req.body;
    await Recipe.update(
      { title, description, ingredients, instructions, category },
      { where: { id: req.params.id } }
    );
    res.redirect('/recipes');
  } catch (error) {
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

// GET route to delete a recipe
router.get('/delete/:id', async (req, res) => {
  try {
    await Recipe.destroy({ where: { id: req.params.id } });
    res.redirect('/recipes');
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

module.exports = router;
