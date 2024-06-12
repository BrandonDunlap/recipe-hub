const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const User = require('./User')(sequelize);
const Recipe = require('./Recipe')(sequelize);

User.hasMany(Recipe);
Recipe.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Recipe,
};
