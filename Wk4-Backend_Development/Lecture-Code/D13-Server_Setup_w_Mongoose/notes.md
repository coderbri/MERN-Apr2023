
- create **project** folder
- within it create **server** folder
- create a `package.json` via the command:
```bash
npm init -y
```
and install express and mongoose with npm:
```bash
npm install express mongoose
```
Create a `.gitignore` to avoid pushing node_modules to GitHub
- the server folder will be modularized containing the following directories:
    - config
        ### Connecting MongoDB with Mongoose
        - The following will always be added in the `mongoose.config.js` file:
        ```js
        const mongoose = require("mongoose"); // access mongoose library
        
        // The `useNewUrlParser` and `useUnifiedTopology` are options passed rid the terminal of deprecation messages
        mongoose.connect(`mongodb://localhost:27017/name_of_db`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log( "Established a connection to the database." ))
            .catch((error) => console.log( "Something went wrong when connecting to the database", error ));
        ```
        If connecting to a database that does not exist yet, Mongoose will create the db as soon as the first document is created.
    - models
        ### Create Mongoose Schema and Model
        - mongoose provides structure to MongoDb by adding schemas that turn into models for the collections.
        - these models specify keys, datatypes, and even validations for documents in a specific collection.
        - mongoose also handles appropiate naming conventions when communicating with MongoDB.
        - the following file, `collectionName.model.js`, will create a collection of that entity using mongoose. mongoose will also need to required here:
        ```js
        const mongoose = require("mongoose");
        
        const DocumentSchema = new mongoose.Schema({
            name: { type: String },
            age: { type: Number },
            occupation: { type: String }
        });
        
        //                      cannot be the same name!
        const DocumentName = mongoose.model("DocumentName", DocumentSchema);
        module.exports = DocumentName;
        ```
    - controllers
        ### Use Mongoose Models to Create/ Read / Update / Delete
        - in this directory, the file `documentName.controller.js` will house all of the logic for CRUD (creating, retrieving, updating, and deleting). they will all be exported as different functions that will perform the basic CRUD operations using the document's model.
        ```js
        const Show = require("../models/shows.model");
        
        // * GET ALL
        module.exports.findAllShows = ( request, resposne ) => {
            Show.find()
                .then((allShowsData) => {
                    resposne.json({ shows: allShowsData });
                })
                .catch((error) => {
                    resposne.json({ message: "Something went wrong", error: error });
                })
        }
        // * CREATE
        // * UPDATE
        // * GET ONE
        module.exports.findOneShow = ( request, resposne ) => {
            Show.findOne({ _id: request.params.id })
                .then((oneSingleShow) => {
                    resposne.json({ show: oneSingleShow });
                })
                .catch((error) => {
                    resposne.json({ message: "Something went wrong", error: error });
                })
        }
        // * DELETE
        ```
        - a couple of key points — Show is a constructor function which can create new show objects and also has other methods taht will communicate with the database.
            - the `.then()` will only execute upon succesfully inserting data into the database
            - the `.catch()` will execute if there is an error
    
    - routes
        ### Routing
        - This file, `documentName.routes.js` will be responsible for dealing with the routes with the Document's model. This time, the required file to import will be the controller.
        ```js
        const ShowController = require("../controllers/show.controller");
        
        module.exports = app => {
            // * GET ALL
            app.get( "/api/shows", ShowController.findAllShows );
            // * GET ONE
            app.get( "/api/show/:id", ShowController.findOneShow );
            // * CREATE
            // * UPDATE
            // app.patch( "/api/show/:id", ShowController.findAllShows );
            // * DELETE
        }
        ```
        - **the order of the routes do matter! if route that uses a wildcard (like `/:id`) is before a path with a specific name, the wildcard route will always run. specific routes need to be moved to the top to ensure they are followed**

- Now the `server.js` will be set up like this:
### Server
- due to modularization of this directory, the server.js can just be allowed to have only a few lines of code taht is easily expandable in the app, making it easier to keep organized.
    
    ```js
    // Import the Express library
    const express = require("express");
    
    // Create an instance of the Express application
    const app = express();
    
    // Set the port number for the server
    const port = 8000;
    
    // Connect to the MongoDB database using the configuration in "mongoose.config"
    require("./config/mongoose.config");
    
    // Set up middleware to parse incoming JSON and URL-encoded form data
    app.use(express.json(), express.urlencoded({ extended: true }));
    
    // Import and apply routes from "show.routes"
    const AllShowRoutes = require("./routes/show.routes");
    AllShowRoutes(app);
    
    // Start the server and listen on the specified port
    app.listen(port, () => console.log(`Listening on port: ${port}.`));
    ```
    
    Explanation:

    1. **Import Express:**
    - `const express = require("express");`
    - Imports the Express library, making it available for use in the script.

    2. **Create Express App Instance:**
    - `const app = express();`
    - Creates an instance of the Express application, which will be used to configure routes and handle HTTP requests.

    3. **Set Port Number:**
    - `const port = 8000;`
    - Sets the port number on which the server will listen for incoming requests.

    4. **Connect to MongoDB:**
    - `require("./config/mongoose.config");`
    - Imports and runs the configuration for connecting to the MongoDB database from "mongoose.config".

    5. **Middleware for Data Parsing:**
    - `app.use(express.json(), express.urlencoded({ extended: true }));`
    - Configures middleware to parse incoming JSON data (`express.json()`) and URL-encoded form data (`express.urlencoded({ extended: true })`).

    6. **Import and Apply Routes:**
    - `const AllShowRoutes = require("./routes/show.routes");`
    - Imports the routes configuration from "show.routes".
    - `AllShowRoutes(app);`
    - Applies the imported routes to the Express app instance.

    7. **Start the Server:**
    - `app.listen(port, () => console.log(`Listening on port: ${port}.`));`
    - Initiates the server to listen on the specified port, and a callback function logs a message once the server is successfully listening.

    In summary, this script sets up an Express server, connects it to a MongoDB database, configures middleware for data parsing, imports and applies routes, and starts the server to listen for incoming requests on port 8000.

