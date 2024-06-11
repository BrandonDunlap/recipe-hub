const express = require('express');
const app = express();
const PORT = process.env.PORT || 5432;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const routes = require('./routes');
app.use('/api', routes);

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
