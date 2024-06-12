const express = require('express');
const router = express.Router();
const recipeController = require('../../controllers/recipeController');

//Recipe-related Routes
router.post('/', recipeController.createRecipe);
router.get('/', recipeControllerController.getAllRecipes);
router.get('/:id', recipeControllerController.getRecipeById);
router.get('/:id', recipeControllerController.updateRecipe);
router.get('/:id', recipeControllerController.deleteRecipe);

module.exports = router;
