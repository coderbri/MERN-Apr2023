# Jokes API

This project sets up a backend server for managing a **Jokes API** using the following of the MERN stack: MongoDB, Express.js, and Node.js.

### Table of Contents
- [Initial Setup](#initial-setup)
- [Configuring MongoDB Connection](#configuring-mongodb-connection)
- [Creating Joke Model](#creating-joke-model)
- [Implementing Joke Controller](#implementing-joke-controller)
- [Defining API Routes](#defining-api-routes)
- [Setting Up the Server](#setting-up-the-server)
- [Using Nodemon to Start the Server](#using-nodemon-to-start-the-server)
- [Testing with Postman](#testing-with-postman)
- [Summary](#summary)

## Initial Setup

1. Created a project folder (this repository) named **Jokes_API**.
2. Created a **server** directory with the following structure:
   - **config**: Configuration settings
   - **models**: Database models
   - **controllers**: Logic and queries for data manipulation
   - **routes**: API routes
   - Added a **server.js** file.

3. Inside the **server** directory, run the following commands in the terminal:

   ```bash
   npm init -y
   npm install express dotenv mongoose
   ```
   
    The provided commands are run in the terminal inside the **server** directory, and they are related to setting up a Node.js project. Let's break down each command:
    
    1. `npm init -y`: This command initializes a new Node.js project by creating a `package.json` file with default values. The `-y` flag stands for "yes," which means it automatically accepts all the default configurations without prompting you for input. The `package.json` file is a manifest file that contains metadata about the project, including its dependencies, scripts, and other settings.
    
    2. `npm install express dotenv mongoose`: This command installs three Node.js packages as dependencies for the project:
    
    - `express`: A web framework for Node.js that simplifies the process of building robust and scalable web applications.
        - `dotenv`: A zero-dependency module that loads environment variables from a `.env` file into `process.env`. This is useful for keeping sensitive information, like API keys or database connection strings, separate from your code.
        - `mongoose`: An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to interact with MongoDB databases by defining schemas and models.
    
    So, running these commands sets up the initial project structure, initializes a `package.json` file, and installs the necessary dependencies for building a server using Express.js with MongoDB as the database.

## Configuring MongoDB Connection

In the **config** directory, the [**`mongoose.config.js`**](./server/config/mongoose.config.js) file establishes a connection to the MongoDB database:

```js
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/jokes_api`)
    .then(() => console.log("Established a connection to the database."))
    .catch((error) => console.log("Connection to the database failed.", error));
```

## Creating Joke Model

In the **models** directory, the [**`joke.model.js`**](./server/models/joke.model.js) file defines the schema for the Joke model:

```js
const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: { type: String },
    punchline: { type: String }
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
```

1. **Importing Mongoose**: The code starts by importing the Mongoose library, which provides a set of tools for interacting with MongoDB.

2. **Defining Joke Schema**: The `JokeSchema` variable is created using `mongoose.Schema`. It defines the structure of a Joke document in the MongoDB database. In this case, a Joke document has two fields: `setup` and `punchline`, both of type String.

3. **Adding Timestamps**: The schema includes an additional option `{ timestamps: true }`, which automatically adds `createdAt` and `updatedAt` fields to each document. These fields track the creation and last update times.

4. **Creating Joke Model**: The `Joke` variable is assigned the result of calling `mongoose.model("Joke", JokeSchema)`. This creates a Mongoose model named "Joke" based on the defined schema.

5. **Exporting the Model**: The `Joke` model is then exported, making it available for use in other parts of the application, such as controllers or routes.

In summary, this code establishes the structure (schema) for a Joke document in MongoDB, adds timestamps, creates a Mongoose model based on the schema, and exports the model for use in other parts of the application.


## Implementing Joke Controller

In the **controllers** directory, the [**`joke.controller.js`**](./server/controllers/joke.controller.js) file contains logic and queries for jokes in this collection:

1. **GET ALL Jokes (`findAllJokes`):**
   - It uses the `Joke` model to find all jokes in the MongoDB database.
   - Responds with a JSON object containing an array of all jokes.
   - Handles errors by responding with an error message and details if the retrieval fails.

2. **GET ONE Joke (`findOneJoke`):**
   - Retrieves a single joke based on the provided `_id` parameter in the request.
   - Logs the found joke to the console.
   - Responds with a JSON object containing the retrieved joke.
   - Handles errors by responding with an error message and details if the retrieval fails.

3. **GET ONE (Random) Joke (`findRandomJoke`):**
   - Counts the total number of documents in the `Joke` collection.
   - Generates a random index and retrieves a joke from that index in the collection.
   - Responds with a JSON object containing the randomly retrieved joke.
   - Handles errors by responding with an error message and details if the retrieval fails.

4. **CREATE a New Joke (`createNewJoke`):**
   - Uses the `Joke` model to create a new joke based on the request body.
   - Logs the newly created joke to the console.
   - Responds with a JSON object containing the newly created joke.
   - Handles errors by responding with an error message and details if the creation fails.

5. **UPDATE an Existing Joke (`updateExistingJoke`):**
   - Finds and updates an existing joke based on the provided `_id` parameter in the request.
   - Uses the request body for the update data.
   - Logs the updated joke to the console.
   - Responds with a JSON object containing the updated joke.
   - Handles errors by responding with an error message and details if the update fails.

5. **DELETE an Existing Joke (`deleteExistingJoke`):**
   - Deletes an existing joke based on the provided `_id` parameter in the request.
   - Logs the result of the deletion to the console.
   - Responds with a JSON object containing the result of the deletion.
   - Handles errors by responding with an error message and details if the deletion fails.

In summary, this controller file defines functions for handling various CRUD (Create, Read, Update, Delete) operations on jokes, interacting with the MongoDB database through the Mongoose model. Each function corresponds to a specific API endpoint for managing jokes.


## Defining API Routes

In the **routes** directory, the [**`joke.routes.js`**](./server/routes/joke.routes.js) file defines API routes:

```js
const JokesController = require("../controllers/joke.controller");

module.exports = app => {
   // GET ONE (random)
   app.get("/api/jokes/random", JokesController.findRandomJoke);
   // GET ALL
   app.get("/api/jokes", JokesController.findAllJokes); // Returns a list of all jokes
   // GET ONE
   app.get("/api/jokes/:id", JokesController.findOneJoke); // Returns one joke with a matching :id
   // CREATE
   app.post("/api/jokes", JokesController.createNewJoke); // Adds a new joke to the database
   // UPDATE
   app.patch("/api/jokes/:id", JokesController.updatedExistingJoke); // Partially updates an existing joke with a matching :id
   // DELETE
   app.delete("/api/jokes/:id", JokesController.deleteExistingJoke); // Removes a joke with a matching :id
}
```

## Setting Up the Server

The [**`server.js`**](./server/server.js) file sets up the Express server, connects to MongoDB, applies middleware, and imports routes:

```js
const express = require("express");
const app = express();
const port = 8000;

// Connect to MongoDB
require("./config/mongoose.config");

// Middleware for Data Processing
app.use(express.json(), express.urlencoded({ extended: true }));

// Import and apply routes
const allJokeRoutes = require("./routes/joke.routes");
allJokeRoutes(app);

app.listen(port, () => console.log( `Listening on port: ${port}.` ));
```

1. **Initialize Express:**
   - Imports the `express` library to create an Express.js application.
   - Creates an Express application instance called `app`.

2. **Set Port:**
   - Sets the `port` variable to 8000, specifying the port on which the server will listen.

3. **Connect to MongoDB:**
   - Requires the `mongoose.config.js` file located in the `config` directory to establish a connection to the MongoDB database.
   - This connection is crucial for interacting with the database throughout the application.

4. **Middleware for Data Processing:**
   - Uses Express middleware to handle data processing.
   - `express.json()`: Parses incoming JSON requests.
   - `express.urlencoded({ extended: true })`: Parses incoming URL-encoded requests, extended to support more complex data structures.

5. **Import and Apply Routes:**
   - Imports the routes defined in the `joke.routes.js` file located in the `routes` directory.
   - Applies these routes to the Express application by calling the imported function with `app` as an argument.
   - This step connects the defined API routes to the corresponding controller functions.

6. **Start the Server:**
   - Listens for incoming requests on the specified port (8000).
   - Outputs a message to the console indicating that the server is listening and on which port.

In summary, this `server.js` file initializes an Express application, sets up a connection to MongoDB, applies middleware for data processing, imports and applies API routes, and finally, starts the server to listen for incoming requests on port 8000.


Certainly! Here's an explanation of how you can use `nodemon` to start the server and test the routes using Postman:

## Using Nodemon to Start the Server

1. **Install Nodemon:**
   Before using `nodemon`, you need to ensure it is installed globally or as a development dependency in your project. You can install it globally by running the following command in your terminal:

   ```bash
   npm install -g nodemon
   ```

   Or, if you prefer to install it as a development dependency for your project:

   ```bash
   npm install --save-dev nodemon
   ```

    - **Update `package.json` Scripts:**
    In your `package.json` file, you can add a script to run the server using `nodemon`. Open your `package.json` file and add or update the "scripts" section:
    
        ```json
        "scripts": {
            "start": "nodemon server.js"
        }
        ```
        This script tells `nodemon` to monitor changes in your project files and restart the server automatically when changes are detected.

3. **Start the Server:**
   Now, you can start the server by running the following command in the terminal:

   ```bash
   npm start
   ```

   This will launch your server using `nodemon`, and you'll see output indicating that the server is listening on the specified port (in your case, port 8000).

### Testing with Postman

To test your API routes using Postman, ensure your server is running with `nodemon`. Use Postman to send requests for `GET`, `POST`, `PATCH`, and `DELETE` routes, providing the necessary URLs and data (ex: [localhost:8000/api/jokes](#)). Click "Send" for each request to receive and view the JSON responses, allowing you to validate the functionality of your Jokes API.


## Summary

By following these steps, you can use `nodemon` to automatically restart your server during development, and Postman to test the various HTTP routes (GET, POST, PATCH, DELETE) of your Jokes API.

---
<p align="right">Completed: ２０２３年１２月１８日（月）</p>