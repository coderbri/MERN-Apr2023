# D19: Intro to MERN Auth: Login and Registration, Part I

<div style="display: flex; justify-content: space-between;">
    <p>Week 7 Session ２</p>
    <p>２０２４年０１月１４日（日）</p>
</div>

### Overview

### Table of Contents
- [Authentication vs Authorization](#authentication-vs-authorization)
- [Server Setup](#server-setup)
    - [Project Initialization](#project-initialization)
    - [Packages Needed](#packages-needed)
    - [User Model Setup](#user-model-setup)
        - [Email Validation](#email-validation)
        - [Confirm Password](#confirm-password)
        - [Bcrypt](#bcrypt)
        - [User Controller Setup](#user-controller-setup)
    - [User Controller Setup](#user-controller-setup)
        - [Extra: Decoding JSON Web Tokens](#extra-decoding-json-web-tokens)
    - [`server.js` Setup](#serverjs-setup)
<!-- - [Client Setup](#client-setup) -->

## Authentication vs Authorization

### Authentication
**Authentication** is the process of ensuring that the **user logging in is who he or she claims to be**. This is done by comparing the submitted passwords to the one stored in the database for the given email address and/or username. In practice, a hashed version of both the submitted and stored password for additional security. If the two password hashes match, the user is **authentic**.

### Authorization
**Authorization** is the logic to determine whether he or she has permission to access the requested resource, in addition to authenticating users. It can be thought as checking whether a particular key fits a specific door.


# Server Setup

## Project Initialization
For the project initialization, refer to the [D13-Server_Setup_w_Mongoose README](https://github.com/coderbri/MERN-Apr2023/blob/c09996835266cb9b75a5ff14c097fe49472fdf13/Wk4-Backend_Development/Lecture-Code/D13-Server_Setup_w_Mongoose/README.md) and for CORS implementation, go to this [project's README.md](https://github.com/coderbri/MERN-Apr2023/blob/f6efeda0fac558bd4b411f3d18c5a3ced068b783/Wk5-FullStack_MERN/Lecture-Code/D16-Full_CRUD_ShowApp/README.md).

## Packages Needed
These commands will be run in the root directory (server) of the project where the `package.json` file is located. They will add the specified packages to the project's `node_modules` folder as well as update the `package.json` file with the dependencies. After running these commands, the require statements can be added to utilize them in their applicable files.

1. **Express:**
    ```bash
    npm install express
    ```
    **Purpose:** Express is a web application framework for Node.js. It simplifies the process of building robust web applications by providing a set of features for handling routes, middleware, and HTTP requests.

2. **Mongoose:**
    ```bash
    npm install mongoose
    ```
    **Purpose:** Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution for modeling and interacting with MongoDB databases, making it easier to work with MongoDB in a structured way.

3. Cors:
    ```bash
    npm install cors
    ```
    **Purpose:** CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the original web page. The cors package enables cross-origin resource sharing by configuring HTTP headers.

4. **Dotenv:**
    ```bash
    npm install dotenv
    ```
    **Purpose:** Dotenv is used to load environment variables from a file (commonly named `.env` and in the root **server** directory). It allows you to store configuration information, API keys, and other sensitive data outside of your codebase. This file will also be ignored in a `.gitignore` file.

5. **Validator:**
    ```bash
    npm install validator
    ```
    **Purpose:** Validator is a library for data validation. In the context of the provided code, it's specifically used for email validation with the isEmail function.

6. **Bcrypt:**
    ```bash
    npm install bcrypt
    ```
    **Purpose:** Bcrypt is a library for securely hashing passwords. In the provided code, it's used to hash user passwords before storing them in the database, enhancing security.

7. **JSON Web Token (jsonwebtoken):**
    ```bash
    npm install jsonwebtoken
    ```
    **Purpose:** JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It's commonly used for authentication and authorization. In the provided code, it's used to generate a token after a user registers, which is then sent back to the client for subsequent authenticated requests.

8. **Cookie Parser:**
    ```bash
    npm install cookieparser
    ```
    **Purpose:** cookieparser is used to parse cookies from the HTTP request headers. In the context of the provided code, it's likely used to handle and parse the userToken cookie sent from the client.




## `User` Model Setup
As with previous projects, the User model will be set up in a schema to store them in MongoDB the same way it always has. For this example, only the following attributes will be needed for User creation:
```js
const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // ! NEW
const { isEmail } = require('validator'); // ! NEW

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, "First Name is required"],
    },
    lastName: {
        type: String,
        required: [ true, "Last Name is required"],
    },
    email: {
        type: String,
        required: [ true, "Email is required"],
        validate: [ isEmail, "Invalid email" ] // ! NEW
    },
    password: {
        type: String,
        required: [ true, "Password is required"],
        minLength: [ 8, "Password must be at least 8 characters" ]
    }
}, {timestamps:true});
```

### Email Validation
The `validator` library is a popular library for data validation. In this case, only the isEmail function is imported from the library. The **`isEmail`** function from `validator` is utilized to validate whether a given string is a valid email address.

1. It can be imported to the `user.model.js` file:
    ```js
    const { isEmail } = require('validator');
    ```

2. In the `UserSchema`, the email field is defined with a `validate` property. The `validate` property allows you to specify custom validation functions. In this case, `isEmail` is used as the validation function for the email field.
    ```js
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [isEmail, "Invalid email"]
    },
    ```
    If the provided email fails the validation (i.e., it is not a valid email address), Mongoose will generate a validation error with the message "Invalid email."
    
    The `isEmail` function from the validator library checks whether the provided string adheres to the standard format of an email address.
    
    Example:
    ```js
    // Valid email
    const validUser = new User({
        email: "user@example.com",
        // other fields...
    });
    
    // Invalid email
    const invalidUser = new User({
        email: "invalidemail",
        // other fields...
    });
    ```
This ensures that only valid email addresses are accepted when creating or updating a user, helping to maintain data integrity.

### Confirm Password
As the `UserSchema` doesn't contain a field for `confirmPassword` (and it shouldn’t be saved to the database) a virtual field will be needed to compare the password within it. This is where mongoose virtuals can be used—basically fields won’t be saved in MongoDB—to accomplish this. Chain calls like `get` and `set` will be made to the returned virtual object, allowing us to establish both a getter and a setter for the virtual field.
```js
UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value);
```


Next, some Middleware is needed for additional validation. Specifically a **"pre hook"** to run before validations.
```js
UserSchema.pre('validate', function(next) {
    if ( this.password !== this.confirmPassword ) {
        this.invalidate('confirmPassword', 'Passwords don\\'t match')
    }
    next();
});
```
One common feature of Middleware is the "next" function. Essentially when our Middleware has finished whatever it needs to do, we need to call this to have the next Middleware or next function (in this case normal validations) run.

### Bcrypt
Passwords should never be saved as actual text. Bcrypt is a very popular library for hashing passwords and easy to install as well using the [terminal command here](#packages-needed).
This will be used as a middleware "pre hook", before the user is saved into the database.
```js
// near the top where the other imports are
const bcrypt = require('bcrypt');

// after the model build, but just before the export statement
UserSchema.pre('save', function(next) {
    bcrypt.hash( this.password, 10 )
        .then( hash => {
            this.password = hash;
            next();
        });
});
```

Since Bcrypt is used asynchronously, it will be used with Promises. The "10" inside the `bcrypt.hash()` function refers to the number of salt rounds that Bcrypt will use when generating a salt. Then the `next()` function is called to proceed with the next steps of validations.

## User Controller Setup
These users will need to be saved in a database, and will be created via a registration form. This registration form will make a call to the API in order to actually register the user in the database. The hashing of the password will be done at the Schema level, so there will be no need for that logic here, as well as all other validations.

1. The controller will take in the following imports:
    ```js
    const User = require('../models/user.model');
    const secret = process.env.SECRET_KEY;
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    ```

2. **Register User Method:** On registration, the `registerUser` method first check for existing email addresses and let know if there is already an existing user. If not, then the new user created with the valid data will be passed from the request via `request.body`, a JWT is generated and sent back as a cookie to the client, and finally returns the new user data. The method also includes error handling for a smooth user registration process.
    ```js
    registerUser: async (request, response) => {
        try {
            // Check if the inputted email already exists in the database
            const potentialUser = await User.findOne({ email: request.body.email });
            if (potentialUser) {
                return response.status(200).json({ msg: 'That email already exists. Please login' });
            } else {
                // If the email doesn't exist, create a new user
                const newUser = await User.create(request.body);
                
                // Generate a JSON Web Token (JWT) with user's id and email
                const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, { expiresIn: '2h' });
                
                // Send the userToken back to the client as a cookie
                response.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2*60*60*1000 }).json(newUser);
            }
        } catch (error) {
            // Handle errors and respond with a status of 400
            response.status(400).json(error);
        }
    }
    ```


_Coming Soon_
3. **Login User Method**
4. **Logout User Method**

### Extra: Decoding JSON Web Tokens
When decoding JSON Web Tokens (JWT), a helpful tool is [jwt.io](https://jwt.io/). Follow these steps:

1. **Visit jwt.io:** Open a web browser and navigate to [jwt.io](https://jwt.io/).

2. **Copy Cookie Value:** Copy the value of the JWT cookie that needs decoding. This could be the token received from a server response.

3. **Paste into "Encoded" Textbox:**
    1. On the [jwt.io](https://jwt.io/) website, find the "Encoded" textbox.
    2. Paste the copied JWT value into this textbox.

4. **Observe Decoded Information:** In the "Decoded" box on [jwt.io](https://jwt.io/), the decoded information contained within the JWT will be displayed. This decoded information may include sensitive details such as the user's ID, email, or any other claims embedded in the token.
    
    Example:
    ```json
    {
        "_id": "user123",
        "email": "user@example.com",
        "exp": 1679764571
        // ... other claims
    }
    ```
    The decoded information provides insights into the token's payload, facilitating verification of its content.

**Note:** While decoding a JWT on [jwt.io](https://jwt.io/) is beneficial for understanding its contents, it's crucial to handle tokens securely and avoid exposing sensitive information in client-side code. Always adhere to best practices for token handling and storage to ensure the security of your application.

Using [jwt.io](https://jwt.io/) simplifies the process of inspecting the contents of a JWT, aiding in verifying that the expected information is present within the token. It is essential to exercise caution when handling JWTs, particularly in production environments.

## `User` Routes Setup

1.  **Importing Controller:**
    ```javascript
    const UserController = require('../controllers/user.controller');
    ```
    This line imports the `UserController` from the `user.controller.js` file, which contains methods for handling user-related operations.

2. **Exporting Routes:**
    ```javascript
    module.exports = app => {
        app.post("/api/register/user", UserController.registerUser);
    }
    ```
    - This module exports a function that takes an Express `app` instance as a parameter. Inside the function, a POST route is defined for handling user registration. It specifies the endpoint `/api/register/user` and associates it with the `registerUser` method from the `UserController`.
    - **_Why Post?_** The `registerUser` method is implemented as a POST route, adhering to RESTful API design principles. This choice signifies its purpose of creating a new user resource on the server. With a POST request, user registration details are sent securely in the request body, allowing the handling of sensitive information such as passwords. The method ensures data integrity and follows conventions for creating resources in web development.

## `server.js` Setup

```javascript
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const port = 8000;

require('./config/mongoose.config');
require('dotenv').config(); // ! NEW
app.use(express.json(), express.urlencoded({ extended: true }));

const UserRoutes = require('./routes/user.routes');
UserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
```

`server.js` sets up an Express server, configures middleware, connects to the database, and defines routes for user registration. The actual user registration logic is handled in the `user.model.js`, `user.routes.js` and `user.controller.js` files.

Everything in the **server** folder relatively stays the same except that we now import `dotenv`.

- **Environment Variables:** Loads environment variables from a `.env` file into the `process.env` global object. For more information about how this is implemented in this project, go [here](#packages-needed).
    ```javascript
    require('dotenv').config();
    ```

