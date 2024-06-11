const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const routes = require('./routes');
app.use('/api', routes);

app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
