const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const User = require('./User')(sequelize, Sequelize);
const Recipe = require('./Recipe')(sequelize, Sequelize);

module.exports = {
  sequelize,
  User,
  Recipe,
};
