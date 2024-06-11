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

//Import models
const User = require('./User')(sequelize, Sequelize);
const Recipe = require('./Recipe')(sequelize, Sequelize);

User.hasMany(Recipe);
Recipe.belongsTo(User);

//Export models and sequelize
module.exports = {
  sequelize,
  User,
  Recipe,
};
