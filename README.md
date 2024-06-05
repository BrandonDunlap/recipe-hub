# recipe-hub


A web application for managing and sharing recipes. Users can add, view, edit, and delete recipes. This project utilizes a RESTful API, Handlebars.js for templating, PostgreSQL with Sequelize for database management, user authentication, a library for rich text editing for recipe instructions, deployment on Render, and a responsive UI.

## Features

- **RESTful API**: Allows users to perform CRUD operations on recipes (POST, GET, PUT, DELETE).
- **Handlebars.js**: Used for displaying recipe lists and individual recipes.
- **PostgreSQL + Sequelize**: Stores recipes with fields such as name, ingredients, instructions, and author.
- **User Authentication**: Requires users to be logged in to add or edit recipes.
- **Rich Text Editing**: Integrates Quilljs for rich text editing for recipe instructions.
- **Deployment**: Deployed on Render for easy access.
- **Responsive UI**: Ensures recipes and forms are accessible and easy to read on mobile devices.

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- PostgreSQL
- Sequelize
- Passport.js (for user authentication)
- Quilljs (text editing library)
- Render (for deployment)

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your PostgreSQL database and update the configuration in `config/config.js`.
4. Run migrations with `sequelize db:migrate`.
5. Start the server with `npm start`.

## Usage

Once the server is running, you can access the application through your web browser. Users can sign up or log in to start managing recipes. Recipes can be added, edited, or deleted, and they can also be viewed by all users.

## Contributing

Brandon Dunlap, Chris Hammon, Ashley Morgan

## License

This project is licensed under the [MIT License](LICENSE).
