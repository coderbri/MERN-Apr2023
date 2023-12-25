# D14: Full CRUD & Validations Setup

<div style="display: flex; justify-content: space-between;">
    <p>Week 5 Session 2</p>
    <p>２０２３年１２月２５日（月）</p>
</div>

## Table of Contents
- [Project Initialization](#project-initialization)
- [Server Configuration](#server-configuration)
- [Controller - UPDATED!](#controller---updated)
- [Routes - UPDATED!](#routes---updated)
- [Validations](#validations-in-the-model)

## Project Initialization
For the project initialization, refer to the [D13-Server_Setup_w_Mongoose README](../D13-Server_Setup_w_Mongoose/README.md).

## Server Configuration
In the `server.js` file, the server is set up as follows:

```javascript
const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllShowRoutes = require("./routes/show.routes");
AllShowRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}.`));
```

Explanation:
- Imports necessary libraries and sets up Express.
- Connects to the MongoDB database using the configuration in "mongoose.config".
- Configures middleware to parse incoming JSON and URL-encoded form data.
- Imports and applies routes from "show.routes".
- Starts the server to listen on the specified port.


## Controller - UPDATED!
The `show.controller.js` file has been updated to include Full CRUD functionality:

```javascript
const Show = require("../models/show.model");

// GET ALL
module.exports.findAllShows = (request, response) => { /* ... */ }
// CREATE
module.exports.createShow = (request, response) => { /* ... */ }
// GET ONE
module.exports.findOneShow = (request, response) => { /* ... */ }
// UPDATE
module.exports.updateOneShow = (request, response) => { /* ... */ }
// DELETE
module.exports.deleteOneShow = (request, response) => { /* ... */ }
```

Let's dive deeper into the `show.controller.js` file, specifically focusing on the `findOneShow`, `updateOneShow`, and `deleteOneShow` functions:

### `findOneShow` Function

```javascript
// GET ONE
module.exports.findOneShow = (request, response) => {
    Show.findOne({ _id: request.params.id })
        .then((oneSingleShow) => {
            console.log("\n=== Show retrieved! ===\n" + oneSingleShow);
            response.json({ show: oneSingleShow });
        })
        .catch((error) => {
            response.json({ message: "Something went wrong", error: error });
        });
}
```

Explanation:

- **Purpose:** This function is designed to retrieve a single show based on the provided `id` parameter in the request.
  
- **How It Works:**
  - It uses `Show.findOne()` to find a single document in the `Show` collection that matches the provided `_id` value.
  - The `_id` value comes from the request parameters (`request.params.id`), which is typically included in the URL when making a request to retrieve a specific show.
  - If a match is found, the details of the show are returned in the `oneSingleShow` variable.
  - It logs a message to the console and responds with a JSON object containing the retrieved show or an error message if something went wrong.

### `updateOneShow` Function

```javascript
// UPDATE
module.exports.updateOneShow = (request, response) => {
    Show.findOneAndUpdate(
        { _id: request.params.id }, request.body, { new: true, runValidators: true }
    )
        .then((updatedShow) => {
            console.log("\n=== Show updated! ===\n" + updatedShow);
            response.json({ show: updatedShow });
        })
        .catch((error) => {
            response.json({ message: "Something went wrong", error: error });
        });
}
```

Explanation:

- **Purpose:** This function is responsible for updating a single show based on the provided `id` parameter in the request.

- **How It Works:**
  - It uses `Show.findOneAndUpdate()` to find a single document in the `Show` collection that matches the provided `_id` value and updates it with the data from `request.body`.
  - The `new: true` option ensures that the function returns the updated document rather than the original one.
  - The `runValidators: true` option enforces validation rules specified in the schema during the update operation.
  - If the update is successful, it logs a message to the console and responds with a JSON object containing the updated show. If an error occurs, it responds with an error message.

### `deleteOneShow` Function

```javascript
// DELETE
module.exports.deleteOneShow = (request, response) => {
    Show.deleteOne({ _id: request.params.id })
        .then((result) => {
            console.log("\n=== Show deleted! ===\n");
            response.json({ showStatus: result });
        })
        .catch((error) => {
            response.json({ message: "Something went wrong", error: error });
        });
}
```

Explanation:

- **Purpose:** This function is designed to delete a single show based on the provided `id` parameter in the request.

- **How It Works:**
  - It uses `Show.deleteOne()` to find and delete a single document in the `Show` collection that matches the provided `_id` value.
  - If the deletion is successful, it logs a message to the console and responds with a JSON object containing the status of the deletion operation. If an error occurs, it responds with an error message.

In summary, these controller functions work together to handle retrieving a single show, updating a show, and deleting a show in response to specific API requests. They interact with the MongoDB database using Mongoose methods to perform these operations.



## Routes - UPDATED!
The `show.routes.js` file has been updated to include the new controller functions:

```javascript
const ShowController = require("../controllers/show.controller");

module.exports = app => {
    // GET ALL
    app.get("/api/shows", ShowController.findAllShows);
    // CREATE
    app.post("/api/show/new", ShowController.createShow);
    // GET ONE
    app.get("/api/show/:id", ShowController.findOneShow);
    // UPDATE
    app.put("/api/show/update/:id", ShowController.updateOneShow);
    // DELETE
    app.delete("/api/show/delete/:id", ShowController.deleteOneShow);
}
```

Explanation:
- Imports the `ShowController` to handle the routes.
- Defines routes for getting all shows, creating a new show, finding a single show, updating a show, and deleting a show.


## Validations in the Model
In the context of the Mongoose schema provided in `show.model.js`, the fields `required`, `minLength`, `maxLength`, and `min` are validation options that define constraints on the data that can be stored in each field. Let's break down their meanings:

1. **`required`**:
   - **Usage:** `required: true`
   - **Meaning:** This option ensures that a value must be provided for the field. If a document is being created or updated, the specified field must have a value; otherwise, the validation will fail.

2. **`min`**:
   - **Usage:** `min: [1920, 'Error message']`
   - **Meaning:** This option is used for numeric fields and specifies the minimum value allowed. In the example, the `releaseYear` field must have a value greater than or equal to 1920. If the value is less than 1920, the validation will fail, and the provided error message will be displayed.

3. **`minLength`**:
   - **Usage:** `minLength: [3, 'Error message']`
   - **Meaning:** This option specifies the minimum length allowed for a string field. In the example, the field must have a length of at least 3 characters. If the length is less than 3, the validation will fail, and the provided error message will be displayed.

4.  **`maxLength`**:
   - **Usage:** `maxLength: [45, 'Error message']`
   - **Meaning:** This option specifies the maximum length allowed for a string field. In the example, the field must not exceed 45 characters in length. If the length is greater than 45, the validation will fail, and the provided error message will be displayed.

Here's a snippet of the code with comments explaining the validations:

```javascript
const ShowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [3, 'Title must be at least 3 characters'],
        maxLength: [45, 'Title is too long'],
    },
    
    releaseYear: {
        type: Number,
        required: [true, 'Release Year is required'],
        min: [1920, 'No shows before 1920 allowed']
    },
    network: {
        type: String,
        required: [true, 'Network is required'],
        minLength: [3, 'Network must be at least 3 characters'],
        maxLength: [10, 'Network is too long']
    },
    creator: {
        type: String,
        required: [true, 'Creator is required'],
        minLength: [3, 'Creator must be at least 3 characters'],
        maxLength: [45, 'Creator is too long']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: [5, 'Genre must be at least 5 characters'],
        maxLength: [10, 'Genre is too long']
    },
}, { timestamps : true });
```

These validation options help enforce specific criteria for the data stored in each field, ensuring data integrity and adherence to defined rules.