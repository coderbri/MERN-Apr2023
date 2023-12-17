# D13: Express Server Setup with Mongoose (Create & Read)

<div style="display: flex; justify-content: space-between;">
    <p>Week 5 Session 1</p>
    <p>２０２３年１２月１４日（木）</p>
</div>


## Table of Contents

- [Initialize Project](#initialize-project)
- [MongoDB Connection Setup](#mongodb-connection-setup)
  - [Configuring MongoDB with Mongoose](#configuring-mongodb-with-mongoose)
- [Models](#models)
  - [Creating Mongoose Schema and Model](#creating-mongoose-schema-and-model)
- [Controllers](#controllers)
  - [Using Mongoose Models for CRUD Operations](#using-mongoose-models-for-crud-operations)
- [Routes](#routes)
  - [Routing Configuration](#routing-configuration)
- [Server Setup](#server-setup)



## Initialize Project

Create a `package.json` using the following commands:

```bash
npm init -y
```

Install Express and Mongoose:

```bash
npm install express mongoose
```

Create a `.gitignore` to exclude `node_modules` from GitHub.

## MongoDB Connection Setup

### Configuring MongoDB with Mongoose

In the `server/config/`**`mongoose.config.js`** file, add the following code:

```js
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/name_of_db`, {
    // ! The following will be deprecated as of ver. 4.0.0 - Dec 2023
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database."))
    .catch((error) => console.log("Connection to the database failed", error));
```

## Models

### Creating Mongoose Schema and Model

In the `server/models/`**`show.model.js`** file:

```js
const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema({
    title: { type: String },
    releaseYear: { type: Number },
    network: { type: String },
    creator: { type: String },
    genre: { type: String }
}, { timestamps: true });

const Show = mongoose.model("Show", ShowSchema);
module.exports = Show;
```

## Controllers

### Using Mongoose Models for CRUD Operations

In the `server/controllers/`**`show.controller.js`** file:

```js
const Show = require("../models/show.model");

// GET ALL
module.exports.findAllShows = (request, response) => {
    Show.find()
        .then((allDocumentsData) => {
            response.json({ documents: allDocumentsData });
        })
        .catch((error) => {
            response.json({ message: "Error retrieving documents", error: error });
        });
}

// CREATE, UPDATE, GET ONE, DELETE
// Implement these functions as needed
```

## Routes

### Routing Configuration

In the `server/routes/`**`show.routes.js`** file:

```js
const ShowController = require("../controllers/show.controller");

module.exports = app => {
    // GET ALL
    app.get("/api/documents", ShowController.findAllDocuments);
    // GET ONE, CREATE, UPDATE, DELETE
    // Implement these routes as needed
}
```

### Route Setup Significance

When setting up routes for a server in a web application, the order in which you define the HTTP methods (GET, POST, PUT, DELETE, etc.) can have implications for how the server handles incoming requests. Here's an elaboration on why the order matters:

1. **Priority and Matching:**
   - The server processes routes in the order they are defined. When a request comes in, it tries to match the request to the first route that matches the specified path and HTTP method.
   - Placing more specific routes or routes with higher priority first ensures that they are matched before more general routes.

2. **Specificity Matters:**
   - Routes with more specific criteria (e.g., including route parameters or a specific path) should be defined before more general routes. This helps prevent less specific routes from unintentionally matching requests that were meant for more specific routes.
   - For example, a route for `/users/:id` should be defined before a route for `/users` to ensure that specific user routes are matched first.

3. **Middleware Execution:**
   - Middleware functions are often used in the context of web frameworks to perform tasks like authentication, logging, or modifying the request/response objects.
   - Placing middleware functions in the correct order ensures that they are executed in the desired sequence. Middleware defined earlier in the route handling process is executed before middleware defined later.

4. **Fallback Routes:**
   - Fallback or error-handling routes (e.g., a wildcard route or a generic error handler) should typically be defined at the end. This ensures that if none of the specific routes match, the fallback route can handle the request or generate an appropriate error response.

Here's an example illustrating the importance of route order:

```javascript
// Incorrect Order
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);

// Correct Order
app.get('/users/:id', getUserById);
app.get('/users', getAllUsers);
```

In the incorrect order, a request for `/users` would match the first route, and a request for `/users/123` would never reach the second route because it would be matched by the first route. In the correct order, the more specific route (`/users/:id`) is defined first, ensuring that it takes precedence over the more general route (`/users`).

In summary, organizing routes in a thoughtful order helps improve the predictability and maintainability of your server code. It ensures that requests are handled by the intended routes and that middleware functions are executed in a logical sequence.

## Server Setup

In the `server/server.js` file:

```js
const express = require("express");
const app = express();
const port = 8000;

// Connect to MongoDB
require("./config/mongoose.config");

// Middleware for data parsing
app.use(express.json(), express.urlencoded({ extended: true }));

// Import and apply routes
const AllDocumentRoutes = require("./routes/show.routes");
AllDocumentRoutes(app);

// Start the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
```

This README provides a structured guide on setting up the server-side backend for your MERN application using Express and Mongoose.
