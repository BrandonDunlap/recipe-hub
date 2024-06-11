const pool = require('./index');

class Recipe {
  static async getAllRecipes() {
    try {
      const { rows } = await pool.query('SELECT * FROM recipes');
      return rows;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }

  static async getRecipeById(id) {
    try {
      const { rows } = await pool.query('SELECT * FROM recipes WHERE id = $1', [id]);
      return rows;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }

  static async createRecipe(title, ingredients, instructions, userId) {
    try {
      const { rows } = await pool.query(
        'INSERT INTO recipes (title, ingredients, instructions, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, ingredients, instructions, userId]
      );
      return rows[0];
    } catch (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }
  }

  static async updateRecipe(id, title, ingredients, instructions) {
    try {
      const { rows } = await pool.query(
        'UPDATE recipes SET title = $1, ingredients = $2, instructions = $3 WHERE id = $4 RETURNING *',
        [title, ingredients, instructions, id]
      );
      return rows[0];
    } catch (error) {
      console.error('Error updating recipe:', error);
      throw error;
    }
  }

  static async deleteRecipe(id) {
    try {
      const { rows } = await pool.query('DELETE FROM recipes WHERE id = $1 RETURNING *', [id]);
      return rows[0];
    } catch (error) {
      console.error('Error deleting recipe:', error);
      throw error;
    }
  }
}

module.exports = Recipe;
