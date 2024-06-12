// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();
const { sequelize } = require('./models');
const PORT = process.env.PORT || 5432;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
