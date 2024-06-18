require('dotenv').config();

console.log('DB_URL:', process.env.DB_URL);

const express = require('express');
const app = express();
const { sequelize } = require('./models');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public')); // Serve static files from the public directory

// Handlebars configuration
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars');

// Routes
const routes = require('./routes');
app.use('/', routes);

// Sync the database and start the server
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
