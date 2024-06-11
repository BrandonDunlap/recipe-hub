const pool = require('./index');

class User {
  static async createUser(username, password) {
    try {
      const { rows } = await pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
        [username, password]
      );
      return rows[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  static async getUserbyUsername(username) {
    try {
      const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      return rows[0];
    } catch (error) {
      console.error('Error fetching user by username:', error);
      throw error;
    }
  }
}

module.exports = User;
